# VE2 Component Family Migration Playbook

Quick-reference for converting a Bootstrap component family from the original SolidJS source (`src/`) to `ve-project2`.

For the full architecture rationale see [`docs/ve-architecture.md`](./ve-architecture.md).

---

## Approach: literal CSS → VE conversion

VE2 mirrors Bootstrap's own CSS structure as closely as possible.  Bootstrap declares CSS custom properties on each element class and then references those properties for actual values:

```css
/* Bootstrap source */
.badge {
  --bs-badge-padding-x: 0.65em;
  --bs-badge-border-radius: var(--bs-border-radius);
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  border-radius: var(--bs-badge-border-radius);
}
```

VE2 mirrors this using `createVar()` for each custom property, `vars:` inside `globalStyle` to assign values, and the same variable references for property values:

```ts
// theme-contract/ui/badge/_vars.css.ts
export const varBsBadgePaddingX = createVar()       // → --bs-badge-padding-x
export const varBsBadgeBorderRadius = createVar()   // → --bs-badge-border-radius

// themes/bootstrap/ui/badge/styles.css.ts
globalStyle(`${bootstrapScope}${badge}`, {
  vars: {
    [varBsBadgePaddingX]: '0.65em',
    [varBsBadgeBorderRadius]: varBsBorderRadius,  // references global --bs-border-radius
  },
  padding: `${varBsBadgePaddingY} ${varBsBadgePaddingX}`,
  borderRadius: varBsBadgeBorderRadius,
})
```

Global `--bs-*` variables (border-radius, colours, etc.) are declared in `theme-contract/_vars.css.ts` and assigned via `globalStyle(`${scope}${vars}`, { vars: ... })` in each theme's `scope.css.ts`. Because CSS custom properties inherit, every component inside a wrapper stamped with scope + `vars` automatically has access to them.

---

## Step 0 — Discover what still needs converting

```bash
node scripts/capture-leaf-screenshots.mjs --ve-missing-only
```

Output:

```
VE migration status: converted=N, missing=M.

Components still missing VE migration in ve-project2 (M):
  /ui/alerts/danger-alert -> src/components/ui/alerts/DangerAlert.tsx
  /ui/alerts/dark-alert   -> src/components/ui/alerts/DarkAlert.tsx
  …
```

Pick a family — all routes under the same path prefix (e.g. `/ui/alerts/`).
After converting, re-run the command; the `converted=` count increases by the number of routes you added.

---

## Step 0.5 — Font imports (one-time, scope creation only)

> **Do this once per theme when first creating `scope.css.ts`. Skip entirely when converting additional component families inside an already-established theme.**

Bootswatch themes load custom fonts via `@import` at the top of their compiled CSS. Vanilla Extract cannot emit bare `@import` at-rules, so font loading is handled through a generated CSS file.

### How to generate the font file

1. Open `screenshots/{theme}/bootstrap.css` and collect every top-level `@import` line (they appear before any rule blocks, typically line 14).
2. Create `ve-project2/src/themes/{theme}/fonts.generated.css` containing those `@import` lines verbatim:

```css
/* AUTO-GENERATED — do not edit by hand.
   Source: screenshots/sketchy/bootstrap.css
   Re-generate if the theme's font imports change. */
@import url("https://fonts.googleapis.com/css?family=Neucha|Cabin+Sketch&display=swap");
```

3. Add a `<link>` tag (or equivalent Vite `@import`) in `ve-project2/index.html` so the generated file is loaded at app startup:

```html
<!-- Theme font imports (generated) -->
<link rel="stylesheet" href="/src/themes/sketchy/fonts.generated.css" />
```

> **Note:** If the source `bootstrap.css` has no `@import` lines (e.g. Bootstrap itself), skip this step — no font file is needed.

### Source authority

| Data | Source file |
|------|------------|
| Font `@import` URLs | `screenshots/{theme}/bootstrap.css` — top-level `@import` lines |
| Global `--bs-*` var values | `screenshots/{theme}/theme.css` `:root` block (unchanged rule) |

These are separate concerns: `bootstrap.css` is authoritative for font imports; `theme.css` remains authoritative for CSS custom-property values.

---

## Step 1 — Define contract classes and component vars

### 1a — Contract classes

Create `ve-project2/src/theme-contract/ui/{family}/contract.css.ts`:

```ts
import { style } from '@vanilla-extract/css'

export const myComponent = style({})
export const myComponentVariant = style({})
// …
```

All exports must be `style({})` with **no CSS properties** — purely stable hashed identifiers.

### 1b — Component-level CSS vars

Create `ve-project2/src/theme-contract/ui/{family}/_vars.css.ts` with a `createVar()` for each Bootstrap CSS custom property used by this family.  Use the Bootstrap CSS property name as a guide for the JS identifier:

```ts
import { createVar } from '@vanilla-extract/css'

// SOURCE CSS:  .my-component { --bs-my-component-padding-x: 1rem; … }
export const varBsMyComponentPaddingX = createVar()   // --bs-my-component-padding-x
export const varBsMyComponentPaddingY = createVar()   // --bs-my-component-padding-y
export const varBsMyComponentBorderRadius = createVar() // --bs-my-component-border-radius
// …
```

Naming convention: `varBs` + PascalCase version of the Bootstrap CSS variable name.

> **Global vars**: Common `--bs-*` variables (colours, border radii, border width) are already declared in `ve-project2/src/theme-contract/_vars.css.ts`. Import from there — do **not** duplicate them per-family. Theme values for these vars are assigned on `${scope}${vars}` in each theme `scope.css.ts`, so ensure the outer themed wrapper includes the `vars` contract class.

---

## Step 2 — Implement theme styles

For each supported theme (currently `bootstrap` and `sketchy`), create:

```
ve-project2/src/themes/{theme}/ui/{family}/styles.css.ts
```

Mirror Bootstrap's CSS literally: first assign the CSS custom properties via `vars:`, then reference them in the property values — exactly as Bootstrap's source CSS does.

```ts
import { globalStyle } from '@vanilla-extract/css'
import { myComponent, myComponentVariant } from '../../../../theme-contract/ui/{family}/contract.css'
import {
  varBsMyComponentPaddingX,
  varBsMyComponentBorderRadius,
} from '../../../../theme-contract/ui/{family}/_vars.css'
import { varBsBorderRadius } from '../../../../theme-contract/_vars.css'
import { bootstrapScope } from '../../scope.css'

// SOURCE CSS:
// .my-component {
//   --bs-my-component-padding-x: 1rem;
//   --bs-my-component-border-radius: var(--bs-border-radius);
//   padding: var(--bs-my-component-padding-y) var(--bs-my-component-padding-x);
//   border-radius: var(--bs-my-component-border-radius);
// }
globalStyle(`${bootstrapScope}${myComponent}`, {
  vars: {
    [varBsMyComponentPaddingX]: '1rem',
    [varBsMyComponentBorderRadius]: varBsBorderRadius,  // refs inherited global var
  },
  padding: `${varBsMyComponentPaddingY} ${varBsMyComponentPaddingX}`,
  borderRadius: varBsMyComponentBorderRadius,
})
```

For the sketchy theme, only override the vars and properties that differ — everything else follows automatically from the global vars already set on the `${scope}${vars}` element:

```ts
// themes/sketchy/ui/{family}/styles.css.ts
import { sketchyScope } from '../../scope.css'

// Sketchy border-radius is 25px (set globally via scope body vars).
// varBsMyComponentBorderRadius resolves to varBsBorderRadius which the body
// already set to '25px' — no override needed unless the component value differs.
globalStyle(`${sketchyScope}${myComponent}`, {
  vars: {
    [varBsMyComponentPaddingX]: '1rem',
    [varBsMyComponentBorderRadius]: varBsBorderRadius,  // inherits sketchy's 25px
  },
  padding: `${varBsMyComponentPaddingY} ${varBsMyComponentPaddingX}`,
  borderRadius: varBsMyComponentBorderRadius,
})
```

### Sourcing CSS values

| Source | Path |
|--------|------|
| Bootstrap 5.3 component CSS (var names + default values) | `screenshots/bootstrap/bootstrap.css` — search for `.my-component {` to find `--bs-my-component-*` var declarations and the properties that reference them |
| Sketchy overrides (SCSS source) | `node_modules/bootswatch/dist/sketchy/_bootswatch.scss` |
| Sketchy compiled CSS | `screenshots/sketchy/bootstrap.css` — grep for the component class to see final resolved values |
| Global `--bs-*` resolved values for a theme | **`screenshots/{theme}/theme.css`** `:root` block — this is the **authoritative source** for each theme's CSS custom-property values (`--bs-primary`, `--bs-border-radius`, `--bs-link-color`, etc.). Always read values from this file when setting vars in `scope.css.ts`. Cross-reference with `theme-contract/_vars.css.ts` to find the matching `createVar()` identifier. |
| Font `@import` URLs for a theme | **`screenshots/{theme}/bootstrap.css`** top-level `@import` lines — extract these **once** during theme scope creation and write to `ve-project2/src/themes/{theme}/fonts.generated.css`. Do not use `theme.css` for this — it may omit `@import` lines that `bootstrap.css` retains. |

---

## Step 3 — Create components

Create `ve-project2/src/components/ui/{family}/{ComponentName}.tsx` for each route:

```tsx
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { myComponent, myComponentVariant } from '../../../theme-contract/ui/{family}/contract.css'

const MyComponent: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${myComponent} ${myComponentVariant}`}>…</div>
		</div>
	)
}

export default MyComponent

// @screenshot *: 360x120 120
```

### Import depth — components

Components live at `ve-project2/src/components/ui/{family}/`, so relative imports go **up 3 levels**:

```ts
import { ThemeContext } from '../../../context/ThemeContext'
import { myContract } from '../../../theme-contract/ui/{family}/contract.css'
```

### Import depth — theme style files

Theme style files live at `ve-project2/src/themes/{theme}/ui/{family}/`, so relative imports go **up 4 levels** for theme-contract and **up 2 levels** for the scope:

```ts
import { myContract } from '../../../../theme-contract/ui/{family}/contract.css'
import { myVars }     from '../../../../theme-contract/ui/{family}/_vars.css'
import { varBsBorderRadius } from '../../../../theme-contract/_vars.css'
import { bootstrapScope } from '../../scope.css'
```

---

## Step 4 — Wire routes

Add imports and `<Route>` entries to `ve-project2/src/index.tsx`:

```tsx
// imports block (top of file)
import MyComponent from './components/ui/{family}/MyComponent'

// inside <Route component={Ve2Shell}>
<Route path="/ui/{family}/my-component" component={MyComponent} />
```

The route paths must match those reported by `--ve-missing-only`.

---

## Step 5 — Register side-effect style imports

In `ve-project2/src/components/shell/Ve2Shell.tsx`, add the two theme imports:

```ts
// Side-effect imports: register globalStyle rules for {family}
import '../../themes/bootstrap/ui/{family}/styles.css'
import '../../themes/sketchy/ui/{family}/styles.css'
```

> **Important:** use the `.css` extension (not `.css.ts`). Both are the same file on disk; the `.css` alias is what Vite / Vanilla Extract expect for side-effect registration.

---

## Verification

```bash
node scripts/capture-leaf-screenshots.mjs --ve-missing-only
```

The `converted=` number should increase by exactly the count of routes you added. None of the new family's routes should appear in the missing list.

---

## Common gotchas

| Gotcha | Details |
|--------|---------|
| Wrong import depth in components | Components are 3 levels deep (`components/ui/{family}/`). Use `../../../` not `../../../../`. |
| Wrong import depth in theme files | Theme style files are 4 levels deep (`themes/{theme}/ui/{family}/`). Use `../../../../` for theme-contract and `../../` for scope. |
| `.css` vs `.css.ts` in side-effect imports | Always use `.css` extension in `import '…/styles.css'` statements. |
| `bd-example-ve2` vs `bd-example` | VE2 components use `bd-example-ve2` (defined in `ve-project2/src/styles/bd-example.css`). The original source uses `bd-example`. |
| Don't duplicate global `--bs-*` vars per-family | Global vars (`--bs-border-radius`, `--bs-primary`, etc.) are already in `theme-contract/_vars.css.ts` and assigned on `${scope}${vars}` in each `scope.css.ts`. Import them directly — don't re-declare in `_vars.css.ts` files. |
| `rgba()` with rgb-triple vars | Bootstrap writes `rgba(var(--bs-primary-rgb), 0.5)` — in VE2 write `rgba(${varBsPrimaryRgb}, 0.5)` as a template string. The `createVar()` reference resolves to the hashed property name, which carries the inherited `13, 110, 253` value from the body element. |
| `varBsBorderRadius` resolves differently per theme | `varBsBorderRadius` is `0.375rem` in bootstrap and `25px` in sketchy (set on the body element). Component vars that reference it (`[varBsBadgeBorderRadius]: varBsBorderRadius`) automatically pick up the per-theme value — no separate sketchy override needed for border-radius unless the component uses a *different* radius than the global default. |
| Sketchy close button | Sketchy replaces the SVG close-button background with a `::before { content: "X" }` pseudo-element. See `node_modules/bootswatch/dist/sketchy/_bootswatch.scss`. |
| Sketchy border-radius for special shapes | Some components (alerts, cards) use a distinctive hand-drawn shape: `$border-radius-sketchy: 255px 25px 225px 25px / 25px 225px 25px 255px` (defined in `_bootswatch.scss`). This overrides the global `varBsBorderRadius` at the component level. |
| Utility classes must be absorbed into contract classes | The original HTML uses Bootstrap utility classes directly (`bg-primary`, `text-dark`, `rounded-pill`, etc.). In VE2 these have no effect — absorb their values into the appropriate contract variant class (e.g. `badgePrimary` encodes both background-color and the default white text; `badgeWarning` overrides `color` to `#000`; `badgeRoundedPill` sets the pill `border-radius`). |
| Scope `vars:` values must come from `screenshots/{theme}/theme.css` | When populating `scope.css.ts` with global `--bs-*` values (colours, radii, link colours, etc.), always read the resolved values from the `:root` block in `screenshots/{theme}/theme.css`. Never copy Bootstrap's default values for a Bootswatch theme — the theme overrides many of them. E.g. Sketchy sets `--bs-primary: #333` (not `#0d6efd`) and `--bs-link-color: #333` (not `#0d6efd`). |
| CSS var references must stay as var references | If Bootstrap's source CSS writes `var(--bs-border-radius)`, the VE2 output must use `varBsBorderRadius` (the matching `createVar()` identifier), **not** the resolved static value (e.g. `'0.375rem'`). Resolving to a static value breaks per-theme inheritance — the whole point of the CSS custom-property cascade is that each theme sets the global var to its own value. |
| Font imports belong to scope creation, not component conversion | `fonts.generated.css` is created **once** when first setting up a theme's `scope.css.ts` (Step 0.5). Do not add or re-generate it when converting subsequent component families inside the same theme. |
| `@screenshot` annotations — use the original's full list | The original source file (`src/components/…`) contains per-theme height overrides (e.g. `// @screenshot sketchy: 360x303 303`). Copy those annotations verbatim into the VE2 component so the screenshot harness captures the correct crop size per theme. Omitting them causes the wildcard `*` fallback to be used for all themes, which may cut off content in themes with larger spacing. |
| `<p class="h1">` vs actual `<h1>` | The original uses Bootstrap typography utility classes (`.h1`–`.h6` on `<p>`) to mimic heading sizes. VE2 components should use real `<h1>`–`<h6>` elements instead — the browser's default UA stylesheet provides the same relative sizing without needing extra contract classes. |

---

## Keeping this playbook up to date

**Every time you convert a component family**, check whether you ran into any new edge cases, theme quirks, or patterns not listed in *Common gotchas* above.
If you did, append a new row to the table before committing your work.
Use the format:

```
| Short description | One or two sentences explaining the gotcha and how to handle it. |
```

This turns the playbook into a living document that improves with each conversion.
