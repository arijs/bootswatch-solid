# VE2 Component Family Migration Playbook

Quick-reference for converting a Bootstrap component family from the original SolidJS source (`src/`) to `ve-project2`.

For the full architecture rationale see [`docs/ve-architecture.md`](./ve-architecture.md).

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

## Step 1 — Define contract classes

Create `ve-project2/src/theme-contract/ui/{family}/contract.css.ts`:

```ts
import { style } from '@vanilla-extract/css'

export const myComponent = style({})
export const myComponentVariant = style({})
// …
```

All exports must be `style({})` with **no CSS properties** — purely stable hashed identifiers.

---

## Step 2 — Implement theme styles

For each supported theme (currently `bootstrap` and `sketchy`), create:

```
ve-project2/src/themes/{theme}/ui/{family}/styles.css.ts
```

```ts
import { globalStyle } from '@vanilla-extract/css'
import { myComponent, myComponentVariant } from '../../../../theme-contract/ui/{family}/contract.css'
import { bootstrapScope } from '../../scope.css'

globalStyle(`${bootstrapScope}${myComponent}`, { /* base styles */ })
globalStyle(`${bootstrapScope}${myComponentVariant}`, { /* variant styles */ })
```

### Sourcing CSS values

| Source | Path |
|--------|------|
| Bootstrap 5.3 defaults | `node_modules/bootswatch/dist/{any-theme}/bootstrap.css` — search for the relevant class |
| Sketchy overrides (SCSS) | `node_modules/bootswatch/dist/sketchy/_bootswatch.scss` |
| Sketchy compiled values | `node_modules/bootswatch/dist/sketchy/bootstrap.css` — e.g. grep `--bs-primary-bg-subtle` for the light-mode palette |
| Resolved CSS variable values | `screenshots/{theme}/bootstrap.css` `:root` block — e.g. `--bs-primary-rgb: 13, 110, 253`. Use this when Bootstrap CSS uses `rgba(var(--bs-primary-rgb), ...)` and you need the actual resolved value for a VE `globalStyle` call. |

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
| Sketchy close button | Sketchy replaces the SVG close-button background with a `::before { content: "X" }` pseudo-element. See `node_modules/bootswatch/dist/sketchy/_bootswatch.scss`. |
| Sketchy border-radius | Alerts, cards, and other shaped elements use `$border-radius-sketchy: 255px 25px 225px 25px / 25px 225px 25px 255px` (defined in `_bootswatch.scss`). |
| Utility classes must be absorbed into contract classes | The original HTML uses Bootstrap utility classes directly (`bg-primary`, `text-dark`, `rounded-pill`, etc.). In VE2 these have no effect — absorb their values into the appropriate contract variant class (e.g. `badgePrimary` encodes both background-color and the default white text; `badgeWarning` overrides `color` to `#000`; `badgeRoundedPill` sets the pill `border-radius`). |
| `@screenshot` annotations — use the original's full list | The original source file (`src/components/…`) contains per-theme height overrides (e.g. `// @screenshot sketchy: 360x303 303`). Copy those annotations verbatim into the VE2 component so the screenshot harness captures the correct crop size per theme. Omitting them causes the wildcard `*` fallback to be used for all themes, which may cut off content in themes with larger spacing. |
| `<p class="h1">` vs actual `<h1>` | The original uses Bootstrap typography utility classes (`.h1`–`.h6` on `<p>`) to mimic heading sizes. VE2 components should use real `<h1>`–`<h6>` elements instead — the browser's default UA stylesheet provides the same relative sizing without needing extra contract classes. |
| Resolving `rgba(var(--bs-…-rgb), …)` to hard-coded values | `globalStyle` values must be static strings, so CSS custom-property expressions cannot be used directly. Resolve `--bs-primary-rgb` etc. from `screenshots/{theme}/bootstrap.css` (`:root` block near the top) and write the final hex or `rgb()` value in the VE2 style file. |

---

## Keeping this playbook up to date

**Every time you convert a component family**, check whether you ran into any new edge cases, theme quirks, or patterns not listed in *Common gotchas* above.
If you did, append a new row to the table before committing your work.
Use the format:

```
| Short description | One or two sentences explaining the gotcha and how to handle it. |
```

This turns the playbook into a living document that improves with each conversion.
