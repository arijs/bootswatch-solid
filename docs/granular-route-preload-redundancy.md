# Granular loading: the route-driven preload is now redundant

**Status:** ✅ implemented — route preload + `route-style-families.ts` removed;
closure check proves component declarations are self-sufficient (0 gaps).
**Scope:** granular style-loader mode only (`?style-loader=granular`)

## Question

Do we still need the route-driven preload in
[`Ve2GranularShell.tsx`](../ve-project2/src/components/shell/Ve2GranularShell.tsx#L139-L150)
and the [`route-style-families.ts`](../ve-project2/src/theme-runtime/route-style-families.ts)
map, now that each route component is self-contained and declares its own
required style families (like
[`DefaultOffcanvas.tsx`](../ve-project2/src/components/ui/offcanvas/DefaultOffcanvas.tsx#L26-L33))?

## Short answer

**Yes — both are legacy migration scaffolding and can be removed**, gated on one
build-time verification (the closure check) staying clean.

The route preload predates the self-contained component pattern. Now that every
route declares its families, the route map is a **second, drifting source of
truth**.

## How granular loading works today

`Ve2ShellRuntime` picks a shell by the `style-loader` query param
([`Ve2ShellRuntime.tsx`](../ve-project2/src/components/shell/Ve2ShellRuntime.tsx)):
`theme` / `literal` → `Ve2Shell`, `granular` → `Ve2GranularShell`. Only the
granular shell touches the route map.

Inside `Ve2GranularShell` there are **two** demand paths that both funnel into
`requestThemeFamilies(theme, families)`:

1. **Component-driven (the real one).** Each route component calls
   `useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)`
   ([`style-loader-context.tsx`](../ve-project2/src/theme-runtime/style-loader-context.tsx#L14-L24)),
   which calls `styleLoaderApi.requestFamilies(...)` on mount.
2. **Route-driven preload (the legacy one).** A `createRenderEffect` on
   `location.pathname` looks the path up in `getVe2RouteStyleLoadPlan()` and
   loads that family set — or the **entire theme** when
   `fullThemeFallback: true`.

`requestThemeFamilies` runs every family list through
`normalizeVe2StyleFamilies(families, true)`, which always prepends the `global`
baseline ([`style-families.ts`](../ve-project2/src/theme-runtime/style-families.ts#L47-L70)).
So `global` is covered by **both** paths automatically; the shell's separate
"always mark global" effect (lines 131–137) is technically redundant too, but
harmless.

## Why the route preload is redundant

### 1. Routing is flat — one self-contained component per route

[`index.tsx`](../ve-project2/src/index.tsx) maps every path to exactly one
lazy-loaded leaf component. There is **no gallery/index page** and **no
catch-all route**.

- **350 of 351** shell-mounted route components declare their own
  `ve2RequiredStyleFamilies` and call `useVe2RequiredStyleFamilies`.
- The **only** component without a declaration is `PocThemeScopeDemo` at `/`,
  and it is mounted **outside** `Ve2ShellRuntime` (it loads its button styles
  manually). It never enters the granular shell at all.

### 2. `fullThemeFallback` is unreachable

`getVe2RouteStyleLoadPlan()` returns `fullThemeFallback: true` only for paths
that match none of the `/ui/*`, `/forms/*`, `/contents/*` prefixes — i.e. `/`
and unknown paths. But `/` renders outside the shell, and unknown paths have no
route (404). **No real navigation ever hits the full-theme fallback.**

### 3. Composed routes are already covered by children

A few routes render sibling example components (e.g. `CardsGrid` →
`FeaturedCard`, …). Those children mount directly and fire their **own** demand
signal, so their families load without help from the route map.

### 4. The map has already drifted from reality

The route map and the component declarations disagree — the component is the
accurate one:

| Source | Families for the offcanvas route |
| --- | --- |
| Route map ([`route-style-families.ts:26`](../ve-project2/src/theme-runtime/route-style-families.ts#L26)) | `ui/offcanvas, ui/buttons, ui/dropdowns` + `contents/basic, utilities/used` |
| Component ([`DefaultOffcanvas.tsx:26-33`](../ve-project2/src/components/ui/offcanvas/DefaultOffcanvas.tsx#L26-L33)) | `ui/offcanvas, ui/buttons, ui/alerts, contents/basic, contents/heading, utilities/used` |

The map carries a stray `ui/dropdowns` and is missing `ui/alerts` +
`contents/heading` that the offcanvas demo actually stamps. Keeping it means
maintaining a stale duplicate.

## The one gate before deleting

`route-style-families.ts` is also consumed at **build time** by the granular
closure check
([`family-closure-check.mjs:167`](../scripts/generate-ve-literal/family-closure-check.mjs#L167)),
which asserts:

```
loaded(route) = {global}
              ∪ getVe2RouteStyleLoadPlan(route)      ← route preload
              ∪ component ve2RequiredStyleFamilies    ← incl. composed siblings
```

covers every stamped contract symbol in the rendered DOM. If the route-plan term
is currently **masking** an incomplete component declaration somewhere, dropping
it would turn a passing check into a real under-load bug.

**Decisive test:** remove the route-plan term from the closure check and re-run
it — **clean** means components are self-sufficient; **gaps** name the component
declarations to fix first.

> Note: [`scripts/generate-ve-theme/route-families.mjs`](../scripts/generate-ve-theme/route-families.mjs)
> is a **separate copy** of the route→family logic used for CSS→family
> *bucketing* at theme-generation time. It is unrelated to runtime loading and
> **stays** regardless. Only the runtime `route-style-families.ts` and the
> closure-check import go away.

## What the verification uncovered

Running the gate surfaced a **latent bug in the closure check itself**. Its
`buildRouteComponentMap` only parsed static `import X from '...'` statements, but
`index.tsx` had since been converted to lazy `const X = lazy(() => import(...))`.
After that migration the check matched **zero** component declarations and had
been silently leaning entirely on the route-plan term. Evidence:

| Config | Gap captures |
| --- | --- |
| Route-plan **on**, lazy imports **not** parsed (as-found) | 70 |
| Route-plan **off**, lazy imports **not** parsed | 432 (≈ every capture) |
| Route-plan **off**, lazy imports **parsed** (the real test) | **0 — clean** |

Two conclusions from the bottom row:

1. Component `ve2RequiredStyleFamilies` declarations cover **every** stamped
   symbol on their own — the route-plan is fully redundant.
2. The components are actually **more complete** than the route-plan: the 70
   "baseline" gaps were cross-family cases (e.g. alert close-buttons needing
   `ui/buttons`, modals needing `ui/alerts`) that the route-plan **never
   covered** but the component declarations do.

## Change applied

1. **`Ve2GranularShell.tsx`** — removed the route-driven `createRenderEffect`
   and the `getVe2RouteStyleLoadPlan` import; dropped the stray `console.log`;
   removed the now-dead full-theme-load machinery (`ensureThemeLoaded`,
   `fullyLoadedThemes`, `inFlightThemeLoads`, `ve2ThemeLoaders` import) that only
   the `fullThemeFallback` branch used; removed an unused `themeScopeClass` memo.
   The `global` baseline effect stays; `useVe2RequiredStyleFamilies` is now the
   single demand path.
2. **`family-closure-check.mjs`** — dropped the `getVe2RouteStyleLoadPlan` term
   and its import (so `loaded(route) = {global} ∪ component declarations`), and
   **fixed the import parser** to also read lazy `const X = lazy(() => import())`
   route components.
3. **Deleted `route-style-families.ts`** (runtime copy only;
   `generate-ve-theme/route-families.mjs` untouched).

**Verification:** `node scripts/generate-ve-literal/family-closure-check.mjs` →
`Captures checked: 433, Captures with gaps: 0` (closure clean). `tsc --noEmit`
and `biome check` pass on the edited files.

## Net effect

- One demand path instead of two; no duplicated, drift-prone route→family map to
  maintain.
- Each route component stays the single source of truth for its own styles.
- Behavior is identical for `theme` and `literal` modes (they never used the
  route map).
