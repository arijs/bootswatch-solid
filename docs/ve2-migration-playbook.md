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
