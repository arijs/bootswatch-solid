# VE2 Theme Source Generator

Automated pipeline that converts screenshot-derived Bootstrap CSS into Vanilla Extract theme source files under `ve-project2/src/themes/{theme}/`.

> **⚠️ Superseded (T10).** The **heuristic family-emit generator** described here (`--mode=families|scaffold|report|all`, `finalizeVeSelector`, the per‑family contract tables, two‑pass hydration) was **removed in T10** — it was the root cause of the CSS↔VE mismatches the literal rewrite eliminated. `scripts/generate-ve-theme.mjs` is now **scope‑only** (`--mode=scope`, generating `scope.css.ts` + `fonts.generated.css`, the shared infra). For per‑theme styles use the deterministic literal converter [`scripts/generate-ve-literal.mjs`](../scripts/generate-ve-literal.mjs) (see [`docs/ve2-literal-conversion-plan.md`](./ve2-literal-conversion-plan.md)). The granular re‑enablement will add a **literal‑based** per‑family split — not a revival of this pipeline. Sections below are retained as historical reference.

Implementation: [`scripts/generate-ve-theme.mjs`](../scripts/generate-ve-theme.mjs) (scope‑only as of T10)

Companion documents:

- [`docs/ve2-theme-generator-audit-playbook.md`](./ve2-theme-generator-audit-playbook.md) — **start here** for family audit loop, current status, and session handoff
- [`docs/ve-architecture.md`](./ve-architecture.md) — VE2 architecture rules the generator must follow
- [`docs/ve2-migration-playbook.md`](./ve2-migration-playbook.md) — manual conversion workflow and gotchas
- [`docs/ve2-debugging-mismatch-walkthrough.md`](./ve2-debugging-mismatch-walkthrough.md) — diagnosing screenshot mismatches after generation

---

## What it does

The generator **does not** create components, routes, or theme-contract definitions. It only produces theme-local source files:

```
ve-project2/src/themes/{theme}/
  scope.css.ts              ← global --bs-* vars + body/bodyText rules
  fonts.generated.css       ← @import lines (when the theme uses custom fonts)
  theme.ts                  ← side-effect import barrel
  contents/styles.css.ts    ← re-exports contents sub-families
  contents/{sub}/styles.css.ts
  forms/styles.css.ts
  utilities/styles.css.ts
  ui/{family}/styles.css.ts
```

It reads **approved CSS sources** from `screenshots/{theme}/`, maps selectors and custom properties through the shared [`theme-contract/`](../ve-project2/src/theme-contract/) layer, and emits `globalStyle(scope + contract, …)` blocks that match the hand-written style used in completed themes like `bootstrap` and `sketchy`.

---

## Prerequisites

### 1. Screenshot CSS artifacts

The generator requires CSS extracted by the screenshot harness. For a theme `{theme}`:

| File | Purpose |
|------|---------|
| `screenshots/{theme}/theme.css` | Global `:root` vars, `@import`, `body`, keyframes |
| `screenshots/{theme}/**/style.css` | Per-route component CSS (433 scenarios when fully captured) |
| `screenshots/{theme}/bootstrap.css` | **Fallback** full compiled CSS when per-scenario files are absent |

Capture baselines first:

```bash
pnpm screenshots:capture --theme=darkly
```

For themes that only have a single compiled file (e.g. early Materia captures):

```
screenshots/materia/bootstrap.css   ← used as fallback when theme.css is missing
```

### 2. Theme contract layer (already in repo)

The generator scans `ve-project2/src/theme-contract/**` at runtime to build a registry mapping:

- Bootstrap class selectors → contract exports (`btnPrimary`, `alertDanger`, …)
- `--bs-*` CSS custom properties → `createVar()` symbols (`varBsPrimary`, `varBsBtnPaddingX`, …)

You do **not** need to configure this mapping manually for standard Bootstrap classes.

### 3. Structural reference theme

Family `styles.css.ts` files are generated using a **two-pass strategy** (see below). By default the structural reference is `bootstrap` — the most complete baseline theme in the repo.

---

## Quick start

```bash
# Preview unmapped selectors before writing anything
pnpm generate:ve-theme -- --theme=darkly --mode=report

# Scaffold folder tree + scope + all 24 families
pnpm generate:ve-theme -- --theme=darkly --mode=all

# Regenerate one family (overwrite existing file)
pnpm generate:ve-theme -- --theme=materia --mode=families --families=ui/alerts --force

# Generate + build + screenshot verification
pnpm generate:ve-theme -- --theme=darkly --mode=families --families=ui/badge --force --verify
```

Equivalent direct invocation:

```bash
node scripts/generate-ve-theme.mjs --theme=darkly --mode=all
```

---

## CLI reference

### Required

| Flag | Description |
|------|-------------|
| `--theme=<slug>` | Theme slug matching `screenshots/{slug}/` (e.g. `darkly`, `materia`, `sketchy`) |

### Modes (`--mode=`)

| Mode | Writes files? | Description |
|------|---------------|-------------|
| `scaffold` | Yes | Create theme folder tree, empty family stubs, `theme.ts`; patch shell |
| `scope` | Yes | Generate `scope.css.ts` + `fonts.generated.css`; patch `index.html` |
| `families` | Yes | Generate selected `styles.css.ts` family files |
| `all` | Yes | `scaffold` + `scope` + `families` (default) |
| `report` | **No** | Print unmapped selector report per family |

### Options

| Flag | Default | Description |
|------|---------|-------------|
| `--families=a,b,…` | all 24 families | Comma-separated family ids to generate or report |
| `--reference-theme=<slug>` | `bootstrap` | Structural reference for two-pass family generation |
| `--dry-run` | off | Show what would happen; no file writes, no shell patches |
| `--force` | off | Overwrite existing output files |
| `--no-patch-shell` | off | Skip `Ve2Shell.tsx` and `index.html` patches |
| `--verify` | off | After generation: `pnpm ve2:build` + `--verify-ve-rendering` |
| `--verify-theme=<slug>` | same as `--theme` | Theme slug used by verification step |
| `--help` | — | Print usage |

### npm script

```json
"generate:ve-theme": "node scripts/generate-ve-theme.mjs"
```

Note the `--` separator when passing flags through pnpm:

```bash
pnpm generate:ve-theme -- --theme=darkly --mode=scope
```

---

## Component families (24 emit targets)

These map to `styles.css.ts` files under `ve-project2/src/themes/{theme}/`:

```
contents/basic
contents/heading
contents/display
contents/lists
contents/tables
contents/images
forms
utilities
ui/accordion
ui/alerts
ui/badge
ui/breadcrumb
ui/button-group
ui/buttons
ui/card
ui/card-tabs
ui/carousel
ui/dropdowns
ui/list-group
ui/modal
ui/navbar
ui/navs
ui/pagination
ui/popovers
ui/progress
ui/scrollspy
ui/spinners
ui/toasts
ui/tooltips
```

The `contents/styles.css.ts` barrel (re-exporting the six contents sub-families) is created by scaffold mode and is identical across all themes.

---

## Pipeline architecture

```
screenshots/{theme}/theme.css ──────────────┐
screenshots/{theme}/**/style.css ─────────┤
screenshots/{theme}/bootstrap.css (fallback)┤
                                            ▼
                              scripts/generate-ve-theme.mjs
                                            │
              ┌─────────────────────────────┼─────────────────────────────┐
              ▼                             ▼                             ▼
     contract-registry.mjs           scope-emitter.mjs              css-source.mjs
     (scan theme-contract)          (scope + fonts)           (aggregate per family)
              │                             │                             │
              └─────────────────────────────┼─────────────────────────────┘
                                            ▼
                                   two-pass-hydrate.mjs
                            (structure clone + value hydration)
                                            │
                                            ▼
                         ve-project2/src/themes/{theme}/**
                                            │
                                            ▼
              capture-leaf-screenshots.mjs --verify-ve-rendering
```

### Module responsibilities

| Module | Path | Role |
|--------|------|------|
| Entry CLI | `scripts/generate-ve-theme.mjs` | Argument parsing, orchestration, verification hook |
| Constants | `scripts/generate-ve-theme/constants.mjs` | Paths, family list, scope naming |
| Contract registry | `scripts/generate-ve-theme/contract-registry.mjs` | Scan `theme-contract/**` → selector/var maps |
| CSS utils | `scripts/generate-ve-theme/css-utils.mjs` | Parse CSS, convert names, format VE values |
| CSS source | `scripts/generate-ve-theme/css-source.mjs` | Load and bucket CSS per family |
| Route families | `scripts/generate-ve-theme/route-families.mjs` | Route → family mapping (ported from `route-style-families.ts`) |
| Scope emitter | `scripts/generate-ve-theme/scope-emitter.mjs` | Emit `scope.css.ts` and `fonts.generated.css` |
| Rule transpiler | `scripts/generate-ve-theme/rule-transpiler.mjs` | CSS rule → `globalStyle` block (fallback path) |
| Two-pass hydrate | `scripts/generate-ve-theme/two-pass-hydrate.mjs` | Clone bootstrap structure, hydrate values, delta comments |
| Scaffold emitter | `scripts/generate-ve-theme/scaffold-emitter.mjs` | Folder tree, shell/index.html patches |
| Families emitter | `scripts/generate-ve-theme/families-emitter.mjs` | Top-level generate/report orchestration |

---

## Input sources (with examples)

### Global theme CSS — `scope` mode input

**Primary source:** `screenshots/{theme}/theme.css`  
**Fallback:** `screenshots/{theme}/bootstrap.css`

Example input (`screenshots/darkly/bootstrap.css`, excerpt):

```css
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap");
:root,
[data-bs-theme=light] {
  --bs-primary: #375a7f;
  --bs-secondary: #444;
  --bs-body-bg: #222;
  --bs-body-color: #fff;
  --bs-border-radius: 0.375rem;
  /* … */
}
body {
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}
```

The scope emitter:

1. Parses `:root` / `[data-bs-theme]` blocks for `--bs-*` declarations
2. Maps each to a `varBs*` symbol from `theme-contract/_vars.css.ts`
3. Preserves `var(--bs-other-var)` references as symbol identifiers (not resolved literals)
4. Extracts top-level `@import` lines into `fonts.generated.css`
5. Maps `body` typography → `${scope}${bodyText}`, canvas (background/margin) → `${scope}${bodyFrame}` (no padding)

### Per-family CSS — `families` mode input

**Primary source:** aggregated `screenshots/{theme}/**/style.css`  
**Secondary:** rules from full `bootstrap.css` bucketed by selector prefix

Example input (`screenshots/bootstrap/ui/badge/primary-badge/static/style.css`, excerpt):

```css
.badge {
  --bs-badge-padding-x: 0.65em;
  --bs-badge-padding-y: 0.35em;
  --bs-badge-border-radius: var(--bs-border-radius);
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  border-radius: var(--bs-badge-border-radius);
}
.badge-primary {
  --bs-badge-color: #fff;
  background-color: var(--bs-primary);
}
```

CSS is bucketed into families using the same route-prefix logic as [`ve-project2/src/theme-runtime/route-style-families.ts`](../ve-project2/src/theme-runtime/route-style-families.ts). For example, all CSS captured under `/ui/buttons/**` routes contributes to the `ui/buttons` family bucket (and may also appear in cross-family buckets like `ui/dropdowns` when routes require button styles).

---

## Output examples

### `fonts.generated.css`

**Input** (top of `screenshots/darkly/bootstrap.css`):

```css
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap");
```

**Output** (`ve-project2/src/themes/darkly/fonts.generated.css`):

```css
/* AUTO-GENERATED — do not edit by hand.
   Source: screenshots/darkly/theme.css
   Re-generate if the theme's font imports change. */
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap");
```

When scaffold/scope mode writes this file, it also inserts a `<link>` in [`ve-project2/index.html`](../ve-project2/index.html):

```html
<link rel="stylesheet" href="/src/themes/darkly/fonts.generated.css" />
```

Themes without custom fonts (e.g. `bootstrap`, `quartz`) produce no font file and no link tag.

### `scope.css.ts`

**Input** (`--bs-primary: #375a7f` in `:root`)

**Output** (excerpt from `ve-project2/src/themes/darkly/scope.css.ts`):

```ts
import { globalStyle, style } from '@vanilla-extract/css'
import {
  varBsPrimary,
  varBsBodyBg,
  varBsBodyColor,
  /* … only vars present in source … */
} from '../../theme-contract/_vars.css'
import { body, bodyText, vars } from '../../theme-contract/theme-contract.css'

export const darklyScope = style({})

globalStyle(`${darklyScope}${vars}`, {
  vars: {
    [varBsPrimary]: '#375a7f',
    [varBsBodyBg]: '#222',
    [varBsBodyColor]: '#fff',
    /* … */
  },
})

globalStyle(`${darklyScope}${bodyText}`, {
  fontFamily: varBsBodyFontFamily,
  fontSize: varBsBodyFontSize,
  fontWeight: varBsBodyFontWeight,
  lineHeight: varBsBodyLineHeight,
  color: varBsBodyColor,
})

globalStyle(`${darklyScope}${body}`, {
  backgroundColor: varBsBodyBg,
  padding: '1rem',
  display: 'block',
})
```

Note: `var(--bs-body-font-family)` in source CSS becomes the identifier `varBsBodyFontFamily` in output — **not** the resolved font stack string. This preserves per-theme inheritance per [VE2 rule 15](./ve-architecture.md).

### Family `styles.css.ts` — two-pass generation

Family files use three passes:

#### Pass A — Structure clone (from reference theme)

The generator reads `ve-project2/src/themes/bootstrap/{family}/styles.css.ts` and copies:

- Import blocks
- `globalStyle` call structure and combinator patterns
- `SOURCE CSS:` comment blocks
- Which properties live in `vars:` vs direct properties

Only the **shape** is cloned — never resolved values from bootstrap.

#### Pass B — Value hydration (from target theme CSS)

For each `globalStyle` block, the generator finds the matching selector in the target theme's aggregated CSS and replaces **literal values only**.

**Reference structure** (bootstrap):

```ts
globalStyle(`${bootstrapScope}${badgePrimary}`, {
  backgroundColor: varBsPrimary,
})
```

Bootstrap's `varBsPrimary` resolves to `#0d6efd`. Darkly's `:root` sets `--bs-primary: #375a7f`. After hydration the **structure is identical**; the global var assignment in `scope.css.ts` carries the theme-specific value:

```ts
globalStyle(`${darklyScope}${badgePrimary}`, {
  backgroundColor: varBsPrimary,   // inherits #375a7f from darkly scope vars
})
```

For properties with **literal** values in source CSS, hydration replaces the quoted string:

**Input CSS:**

```css
.badge {
  --bs-badge-padding-x: 0.65em;
  --bs-badge-color: #fff;
}
```

**Output TS** (excerpt):

```ts
// SOURCE CSS:
// .badge {
//   --bs-badge-padding-x: 0.65em; …
//   --bs-badge-color: #fff; …
// }
globalStyle(`${darklyScope}${badge}`, {
  vars: {
    [varBsBadgePaddingX]: '0.65em',
    [varBsBadgeColor]: '#fff',
    [varBsBadgeBorderRadius]: varBsBorderRadius,  // var ref preserved
  },
  padding: `${varBsBadgePaddingY} ${varBsBadgePaddingX}`,
  borderRadius: varBsBadgeBorderRadius,
})
```

Special case — `rgba(var(--bs-primary-rgb), 0.5)` in source becomes:

```ts
opacity: `rgba(${varBsPrimaryRgb}, 0.5)`,
```

#### Pass C — Delta comments

Selectors found in the target theme's CSS but **not** covered by the reference theme's structure are listed as comments at the bottom of the file:

```ts
// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .btn:focus-visible
// [DELTA] unmapped selector: .some-sketchy-specific-class
```

These require manual conversion following the playbook.

### Empty scaffold stub

Scaffold mode creates placeholder family files:

```ts
// Intentionally empty on first creation.
// Add globalStyle rules only from screenshots/{theme} approved sources.
export {}
```

---

## Shell integration (scaffold mode)

When `--mode=scaffold` or `--mode=all` runs (without `--no-patch-shell`), the generator patches:

### `ve-project2/src/components/shell/Ve2Shell.tsx`

Adds:

1. Scope import: `import { darklyScope } from '../../themes/darkly/scope.css'`
2. Theme loader: `darkly: () => import('../../themes/darkly/theme.js')`
3. `resolveThemeKey` case: `case 'darkly': return rawTheme`
4. `resolveThemeClass` case: `case 'darkly': return darklyScope`

### `ve-project2/index.html`

Adds a font stylesheet link when `fonts.generated.css` is generated.

Use `--no-patch-shell` if you want to review generated files before registering the theme in the runtime shell.

---

## Report mode

Report mode performs **no writes**. It aggregates CSS per family and lists selectors that cannot be automatically mapped to a contract class.

```bash
pnpm generate:ve-theme -- --theme=materia --mode=report --families=ui/buttons,ui/alerts
```

**Example output:**

```
=== VE Theme Report: materia ===

ui/buttons: 208 selectors
  [UNMAPPED] :not(.btn-check) + .btn:active — element selector needs contract routing
  [UNMAPPED] .btn.disabled — no contract mapping
  [UNMAPPED] fieldset:disabled .btn — element selector needs contract routing
  [UNMAPPED] .btn-group-vertical — no contract mapping
  ... and 55 more
ui/alerts: 74 selectors
  [UNMAPPED] button — element selector needs contract routing
  ... and 25 more
```

Use report mode to estimate manual cleanup before running `--mode=families`.

---

## Recommended workflows

### New Bootswatch theme (e.g. `darkly`)

```bash
# 1. Ensure screenshot CSS exists
pnpm screenshots:capture --theme=darkly

# 2. Preview mapping gaps
pnpm generate:ve-theme -- --theme=darkly --mode=report

# 3. Generate scaffold + scope + all families
pnpm generate:ve-theme -- --theme=darkly --mode=all

# 4. Build and verify (slow — 433 scenarios)
pnpm ve2:build
node scripts/capture-leaf-screenshots.mjs --theme=darkly --verify-ve-rendering
```

Or combine generation + verification:

```bash
pnpm generate:ve-theme -- --theme=darkly --mode=all --force --verify
```

### Finish remaining families for an in-progress theme (e.g. `materia`)

```bash
# One family at a time, matching the manual playbook rhythm
pnpm generate:ve-theme -- --theme=materia --mode=families --families=ui/alerts --force
pnpm generate:ve-theme -- --theme=materia --mode=families --families=ui/modal --force

# Verify a single family batch before continuing
pnpm ve2:build
node scripts/capture-leaf-screenshots.mjs --theme=materia --verify-ve-rendering
```

### Scope-only refresh (after re-capturing theme.css)

```bash
pnpm generate:ve-theme -- --theme=sketchy --mode=scope --force
```

### Dry run (inspect without writes)

```bash
pnpm generate:ve-theme -- --theme=darkly --mode=all --dry-run
```

---

## File overwrite and manual edits

| Situation | Behaviour |
|-----------|-----------|
| Output file does not exist | Written |
| Output file exists, no `--force` | **Skipped** (`file exists (use --force to overwrite)`) |
| Output file contains `// @keep-manual` | **Skipped** even with `--force` unless you remove the marker |
| `--dry-run` | Never writes; reports `dry-run` status per step |

To protect a hand-fixed section permanently, add anywhere in the file:

```ts
// @keep-manual — do not overwrite this file with the generator
```

---

## Verification

The generator integrates with the existing screenshot harness:

```bash
# Built into the generator
pnpm generate:ve-theme -- --theme=darkly --force --verify

# Or run manually
pnpm ve2:build
node scripts/capture-leaf-screenshots.mjs --theme=darkly --verify-ve-rendering
```

Expect **433 scenarios** for a fully covered theme. Target: `failed=0`.

When mismatches occur, use [`docs/ve2-debugging-mismatch-walkthrough.md`](./ve2-debugging-mismatch-walkthrough.md) to compare computed styles, fix the theme file manually, then re-run verification for that family.

---

## Mapping rules (what the generator enforces)

These mirror [`docs/ve-architecture.md`](./ve-architecture.md) core rules:

| Bootstrap CSS | Generated VE |
|---------------|--------------|
| `.btn-primary` | `` globalStyle(`${scope}${btnPrimary}`, …) `` |
| `--bs-btn-padding-x: 0.75rem` | `[varBsBtnPaddingX]: '0.75rem'` inside `vars:` |
| `var(--bs-border-radius)` | `varBsBorderRadius` (identifier, not literal) |
| `rgba(var(--bs-primary-rgb), 0.5)` | `` `rgba(${varBsPrimaryRgb}, 0.5)` `` |
| `.btn-check:checked + .btn` | `` `${scope}${btnCheck}:checked + ${scope}${btn}` `` |

### Contract overrides (non-obvious mappings)

Some contract exports do not follow simple camelCase → kebab-class conversion:

| Contract export | CSS selector |
|-----------------|--------------|
| `btnActiveHook` | `.btn.active` (stamped alongside `btn` in JSX) |
| `btnShowHook` | `.btn.show` |
| `inputFontFamily` | `input, button, select, optgroup, textarea` |
| `body` / `bodyText` / `bodyFrame` | `body` (root contracts, not class selectors). Typography from source `body { … }` → `${scope}${bodyText}`. Canvas (background, margin) → `${scope}${bodyFrame}`. Ve2Shell uses `bodyFrame` + `bodyText`, not `body`. |

These are defined in `scripts/generate-ve-theme/css-utils.mjs` (`CONTRACT_SELECTOR_OVERRIDES`).

---

## Known limitations (expect manual fixes)

The generator targets **~90–95% accuracy** on first run. The following still require human review per the [migration playbook gotchas](./ve2-migration-playbook.md):

| Gap | Generator behaviour |
|-----|---------------------|
| Global element selectors (`button`, `input`) | `[UNMAPPED]` warning — route to `inputFontFamily` or a new contract |
| Layout classes (`.container`, `.container-fluid`) | Should live in `contents/basic`, not ui family files |
| Bootstrap utility classes (`.rounded-pill`, `.bg-primary`) | Must be absorbed into variant contract classes |
| Cross-family selectors | Warning only — ownership must follow playbook rules |
| Theme-specific hacks (Sketchy hand-drawn borders, Vapor glow) | Appear as `[DELTA]` comments |
| `@media` / `@keyframes` | Partial support; may need manual extraction |
| Missing font weights vs `@import` | Documented parity issue — do not borrow from other themes |

The generator **never** copies resolved values from another theme's VE files. Structure comes from the reference theme; values come only from `screenshots/{theme}/**`.

---

## What is out of scope

Per project rules, the generator does **not** create:

- `ve-project2/src/components/**` (SolidJS route components)
- `ve-project2/src/index.tsx` route wiring
- `ve-project2/src/theme-contract/**` (shared contracts and vars)
- Screenshot baselines themselves

Those remain manual steps documented in [`docs/ve2-migration-playbook.md`](./ve2-migration-playbook.md).

---

## Troubleshooting

### `No theme.css or bootstrap.css found for theme "…"`

Capture or place CSS artifacts under `screenshots/{theme}/`. At minimum, one of:

- `screenshots/{theme}/theme.css`
- `screenshots/{theme}/bootstrap.css`

### `scope.css.ts` vars block is empty

Ensure the source file contains a parseable `:root` or `[data-bs-theme]` block with `--bs-*` declarations. Re-run with `--force` after fixing the source CSS.

### Family file skipped: `file exists (use --force to overwrite)`

Pass `--force` to regenerate, or delete the target file first.

### Generated file fails `ve2:build`

Common causes:

- Missing import for a cross-family contract (e.g. `btnShowHook` from `ui/dropdowns/contract.css`)
- `[DELTA]` selectors that need manual `globalStyle` blocks
- Typo in hydrated literal (check `[UNMAPPED_VAR]` comments in fallback-generated files)

### Verification failures after generation

1. Inspect `screenshots/{theme}/**/ve-*.verify.png` diff images
2. Fix the specific family `styles.css.ts` manually
3. Add `// @keep-manual` if needed
4. Re-run verification for that theme

---

## Related commands

| Command | Purpose |
|---------|---------|
| `pnpm generate:ve-theme -- --help` | Generator usage |
| `pnpm screenshots:capture --theme=X` | Capture baseline CSS + PNG |
| `node scripts/capture-leaf-screenshots.mjs --ve-missing-only` | List routes not yet migrated |
| `node scripts/capture-leaf-screenshots.mjs --theme=X --verify-ve-rendering` | Pixel parity check |
| `pnpm ve2:build` | Build ve-project2 |
| `pnpm ve2:dev` | Dev server for manual inspection |
