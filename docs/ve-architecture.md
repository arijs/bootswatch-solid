# Vanilla Extract Migration Goals and Architecture

This document defines the current Vanilla Extract migration direction for this repository.

## Goals

- Convert Bootstrap and Bootswatch styling into Vanilla Extract styles in small, verifiable steps.
- Keep screenshot validation as the source of truth for visual parity.
- Reuse the existing route/state/theme screenshot workflow while introducing Vanilla Extract rendering checks.
- Preserve maintainability by grouping styles into logical files rather than one generated mega-file.

## Current Rendering Modes in Main Project

The main app currently supports two CSS modes:

- `css=cdn`: renders with full upstream Bootstrap/Bootswatch CSS.
- `css=local`: renders with extracted CSS artifacts generated under the screenshot tree:
  - `screenshots/{theme}/theme.css`
  - `screenshots/{theme}/{route}/{state}/style.css`

The screenshot capture script already uses this model for extraction and local rendering verification.

## Vanilla Extract Sub-Project

The Vanilla Extract implementation lives in `ve-project`.

- `ve-project/src/components`: mirrors route component structure from the main app in small increments.
- `ve-project/src/theme-contract`: shared `createVar()` contracts used by all themes.
- `ve-project/src/themes/{themeName}`: theme-specific style implementation, split by logical groupings.

## Critical Blocker: Contract-Only CSS Variables

This is a hard migration rule and a release blocker.

- Do not add or keep raw Bootstrap CSS variable strings in VE theme files (for example `var(--bs-...)` literals in values or keys).
- Every Bootstrap variable used by VE styles must be declared via Vanilla Extract `createVar()` in `ve-project/src/theme-contract` first.
- Then import those contract vars into theme files and compose styles with the imported identifiers.
- If a required var is missing from contract files, add it there before continuing component migration.

No exceptions for temporary parity fixes: contract vars must be created first, then used in theme files.

## Styling Constraint: Class-Only Application

A strict constraint for this migration is to avoid implicit global element styling.

Do not rely on selectors that style elements globally without explicit opt-in, including examples like:

- `:root`
- `body`
- `button`
- any other bare element selector used as global styling policy

All required styling must be applied through explicit classes added to the rendered component tree.

### Proof of Concept

The current proof of concept is:

- route: `/ui/buttons/solid/primary-button`
- component: `ve-project/src/components/ui/solid/SolidPrimaryButton.tsx`

It renders using explicit class composition:

- `bsTheme`
- `body`
- `containerFluid`
- `btn`
- `btnPrimary`

## Verification Strategy

Migration work should proceed component-by-component with screenshot-based checks.

A dedicated capture mode (`--verify-ve-rendering`) is introduced in the capture script to:

- render selected routes from `ve-project`
- keep screenshot dimensions sourced from the original component `@screenshot` directives
- compare against existing baseline captures
- write VE artifacts alongside existing screenshots using VE-prefixed filenames

## Incremental Delivery Rules

- Keep changes small and route-scoped.
- Prefer route/theme filters when verifying work-in-progress.
- Skip unimplemented VE routes with warnings rather than failing full runs.
- Avoid broad refactors while parity work is ongoing.

## UI Family Migration Playbook

Use this workflow for every new VE UI family (for example, button-group, pagination, modal).

1. Mirror source structure exactly under `ve-project/src/components`.
2. Mirror explicit route wiring in `ve-project/src/index.tsx` for family route and leaf routes.
3. Extract route CSS from screenshot artifacts at:
  - `screenshots/{themeName}/{component/route}/{state}/style.css`
4. Convert extracted selectors into Vanilla Extract classes under:
  - `ve-project/src/themes/{themeName}/ui/{family}/...`
5. Map Bootstrap CSS variables used by that route into theme-contract vars when needed:
  - `ve-project/src/theme-contract/ui/{family}/_vars.css.ts`
  - If a route reuses existing contract vars (for example, button-group reusing button vars), do not duplicate them.
6. Checklist before TSX wiring: if the component class/element rule in `style.css` defines component-scoped `--bs-*` vars, initialize those defaults in the VE class/element rule `vars: {}` block (do not rely only on global `bsTheme` defaults).
7. Apply VE classes in TSX and remove static Bootstrap class names.
8. Keep screenshot hooks unchanged for verification.
9. Run focused VE verification on the route, then broad verification if needed.

## Class Usage Rule (VE TSX)

Only these static classes are allowed in VE component markup:

- `bd-example`
- `pwhook-*` classes used for screenshot state hooks

Exception for Bootstrap runtime wiring:

- When a Bootstrap JS plugin requires specific runtime state/selectors (for example `collapse`, `show`, `collapsed`), those exact static classes are allowed until the component is migrated to a custom `extendDefaultConfig()` selector/class mapping.
- Keep this exception minimal and documented in the component migration notes.

All other styling classes must come from Vanilla Extract imports.

Examples:

- Do: `class={`${btn} ${btnPrimary} ${myLocalVeClass} pwhook-btn`}`
- Do not: `class="btn btn-primary"`
- Do not: `class="container-fluid btn-group me-2"`

## How to Read and Convert `style.css`

For each leaf route/state style artifact:

1. Identify reusable base styles already migrated (for example `btn`, `btnSecondary`, body/container/theme wrappers).
2. Identify route-specific selectors that still require VE classes.
3. Convert selector groups into VE-safe classes and selectors:
  - Prefer generated class references over raw global class selectors.
  - For sibling and cross-class patterns, use VE selectors with class references, or `globalStyle` when required by VE constraints.
4. Preserve Bootstrap variable math and precedence semantics (`calc(...)`, disabled/active states, focus rings).
5. Keep element-reset behavior class-scoped (for example, fieldset reset on a dedicated VE class) instead of global element selectors.

## Button Family Pattern (Reference)

Buttons are the canonical pattern for VE migration:

- Base interaction model and shared vars: `ve-project/src/themes/bootstrap/ui/buttons/base.css.ts`
- Variant variable assignments: `ve-project/src/themes/bootstrap/ui/buttons/generated.css.ts`
- Theme contract vars: `ve-project/src/theme-contract/ui/buttons/_vars.css.ts`
- Leaf TSX usage: `ve-project/src/components/ui/buttons/solid/SolidPrimaryButton.tsx`

Button-group migration should reuse button base/variant classes and only add route-specific layout/joining styles in a dedicated family theme file.

## Component Mapping Rule (Static 1:1)

VE component implementation must mirror the main app component structure exactly for each migrated family.

- Do not programmatically generate VE components from route maps or config objects.
- Do not collapse multiple Bootstrap component examples into a single route-switch component.
- Create the same component files in `ve-project/src/components` that exist in `src/components` for the migrated area.
- Keep a direct route-to-component mapping in `ve-project/src/index.tsx` for those files.

This rule is intentional: migration examples should stay explicit and easy to inspect per component case/state.

## Component CSS Variable Conversion Pattern

When converting a Bootstrap component's `style.css` into a VE theme file, the `style()` block for the component root must be a **full, literal conversion** of the original CSS rule — not a simplified version with hardcoded values.

### Rule: Declare All Component-Scoped Vars in theme-contract

Every CSS custom property introduced by the component itself (for example `--bs-alert-bg`, `--bs-alert-color`, `--bs-alert-border`) must be declared via `createVar()` in:

```
ve-project/src/theme-contract/ui/{family}/_vars.css.ts
```

Do **not** declare these vars locally in the theme file. They must be exported from the contract file and imported into the theme.

### Rule: Initialize Vars in the Root Style Block

The root component class (for example `alert`, `btn`) must include a `vars: {}` block that sets the default values for all component-scoped vars, exactly as Bootstrap does in its CSS rule. Subsequent variant classes then override only the vars they change.

**Wrong** (simplified, no var initialization):
```ts
export const alert = style({
  position: 'relative',
  padding: '1rem',
  color: `var(${varAlertColor})`,
  border: `1px solid var(${varAlertBorderColor})`,
})
```

**Correct** (full literal conversion with vars block):
```ts
export const alert = style({
  vars: {
    [varAlertBg]: 'transparent',
    [varAlertPaddingX]: '1rem',
    [varAlertPaddingY]: '1rem',
    [varAlertMarginBottom]: '1rem',
    [varAlertColor]: 'inherit',
    [varAlertBorderColor]: 'transparent',
    [varAlertBorder]: `${varBsBorderWidth} solid ${varAlertBorderColor}`,
    [varAlertBorderRadius]: varBsBorderRadius,
    [varAlertLinkColor]: 'inherit',
  },
  position: 'relative',
  padding: `${varAlertPaddingY} ${varAlertPaddingX}`,
  marginBottom: varAlertMarginBottom,
  color: varAlertColor,
  backgroundColor: varAlertBg,
  border: varAlertBorder,
  borderRadius: varAlertBorderRadius,
})
```

Compound vars (like `--bs-alert-border` which combines border-width and border-color) must also be constructed from contract var references — never from string literals.

### Reference Files

- Contract: `ve-project/src/theme-contract/ui/alerts/_vars.css.ts`
- Theme: `ve-project/src/themes/bootstrap/ui/alerts/base.css.ts`
- Canonical button pattern: `ve-project/src/theme-contract/ui/buttons/_vars.css.ts` + `ve-project/src/themes/bootstrap/ui/buttons/base.css.ts`

## Recent Findings (April 2026)

### Cross-Class Selector Rule in Vanilla Extract

When migrating Bootstrap patterns that depend on sibling selectors, avoid raw framework selectors and avoid cross-class selectors inside a `style({ selectors: ... })` block.

- Do not use raw selectors like `.btn` in VE theme code.
- In `selectors`, Vanilla Extract requires selectors to target the current class (`&`) shape only.
- Patterns like `&[disabled] + ${otherClass}` fail VE compilation when `otherClass` is a different generated class.

For cross-class relationships (for example, disabled `.btn-check` affecting adjacent button label styling), use `globalStyle` with generated class references.

Example pattern:

- define class: `export const btnCheck = style({ ... })`
- define adjacent rule with generated classes:
  - `globalStyle(`${btnCheck}[disabled] + ${btn}, ${btnCheck}:disabled + ${btn}`, { ... })`

This preserves the class-only architecture while keeping the behavior aligned with Bootstrap.

### Verified Bootstrap Mismatch Fix

The first Bootstrap VE mismatch in this area was:

- route: `/ui/buttons/outline/toggle-active/disabled/danger-button`

After applying the VE-safe selector strategy above, focused verification passed:

- command: `node scripts/capture-leaf-screenshots.mjs --theme=bootstrap --verify-ve-rendering "--route=/ui/buttons/outline/toggle-active/disabled/danger-button"`
- result: `verification OK 0.000000 - 0/43200`

### No Static CSS Variable Name Strings in VE Theme Files

When writing `style()` or `globalStyle()` blocks, **never use raw `'var(--bs-*)'` strings** as property values or as keys in the `vars: {}` map.

Every Bootstrap CSS variable that is referenced in a theme file must:

1. Have a corresponding `createVar()` export in the appropriate `theme-contract` file:
   - Component-scoped vars → `ve-project/src/theme-contract/ui/{family}/_vars.css.ts`
   - Root/global Bootstrap vars (body, border, shadow, typography, …) → `ve-project/src/theme-contract/_vars.css`
2. Be imported into the theme file and used directly as the TypeScript identifier.

**Wrong:**
```ts
fontFamily: 'var(--bs-font-sans-serif)',
border: 'var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)',
```

**Correct:**
```ts
import { varBsFontSansSerif, varBsBorderWidth, varBsBorderStyle, varBsBorderColor } from '../../../../theme-contract/_vars.css'

fontFamily: varBsFontSansSerif,
border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor}`,
```

This applies equally to `vars: {}` initialisation keys and to string-interpolated values inside template literals.

### Overlay Elements Created Outside Theme Scope

Some Bootstrap components render their visible UI outside the VE component subtree where `bsTheme` is applied.

Examples include popovers/tooltips/modals and related overlay/backdrop elements when Bootstrap appends nodes to `document.body` or another external container.

Because VE variables are scoped by class, those out-of-tree nodes will not inherit required CSS custom properties unless the theme scope is re-applied.

Rule for VE integration:

1. Identify whether the Bootstrap component renders or appends overlay DOM outside the local wrapper.
2. Ensure the created element receives the theme scope class (for example `bsTheme`) via template/custom class mechanisms.
3. Verify both static and interactive screenshot states after wiring this.

Popover-specific example from this migration:

- Working VE example: `ve-project/src/components/ui/popovers/BasicPopover.tsx`
- In that file, both `bsTheme` and `body` are added directly on the generated popover root inside the `template` option passed to `new VePopover(...)`:

```ts
template: `<div class="${popoverClass} ${bsTheme} ${body} pwhook-popover" role="tooltip"> ... </div>`
```

- The critical placement is on the root `.popover` element that Bootstrap creates and appends outside the local `.bd-example` subtree.
- `bsTheme` covers theme-scoped variables; `body` covers Bootstrap body-level typography/reset styles used by popover content.

### Element-Level Bootstrap Defaults Must Be Re-Expressed as Explicit VE Classes

Bootstrap CSS includes global element styling (for example heading defaults on `h1`-`h6`). In VE, those styles are not applied unless the corresponding VE class is explicitly attached.

Popover-specific lesson from `BasicPopover`:

- To match Bootstrap parity for the popover title element, the template `h3` needed the VE heading class from `ve-project/src/themes/bootstrap/contents/generated.css.ts`.
- The working markup pattern is:

```ts
<h3 class="${popoverHeader} ${h3}"></h3>
```

- If a component uses semantic elements that rely on Bootstrap global defaults (especially headings, paragraphs, list elements), verify that VE equivalents are explicitly composed in markup.
- Future screenshot mismatches can come from this same gap: missing VE classes that represent Bootstrap's global element rules.

### Bootstrap Fork Source vs Loaded Asset

When changing Bootstrap fork source code (for example `bootstrap-fork/js/src/*.js`), the app still runs the compiled dist asset from the linked package (`bootstrap-fork/dist/js/bootstrap.esm.js`).

Rule:

1. After JS source edits in `bootstrap-fork/js/src`, rebuild the dist artifact that the app imports.
2. Re-run focused screenshot verification after rebuild.

If this step is skipped, runtime behavior can still reflect stale logic even when source files look correct.

### Component Root Must Initialize Its Own Bootstrap-Scoped Vars

Breadcrumb parity exposed a recurring migration pitfall: the component style consumed `varBsBreadcrumb*` tokens but did not initialize the corresponding defaults in the component root class.

Bootstrap defines these values on `.breadcrumb` itself (component scope), not only as global theme defaults. In VE, if the root class does not initialize component-scoped vars, rendering can drift even when global defaults exist.

Rule for component conversion:

1. When a Bootstrap component root rule defines `--bs-*` properties, mirror those defaults in the VE root class `vars: {}` block.
2. Keep those vars declared in theme-contract (`createVar()`), then assign defaults in the component root style.
3. Do not rely on `bsTheme` global defaults alone for component-local variables.

Breadcrumb-specific reference:

- Theme contract: `ve-project/src/theme-contract/ui/breadcrumb/_vars.css.ts`
- Root var initialization: `ve-project/src/themes/bootstrap/ui/breadcrumb/base.css.ts` (`breadcrumb` class `vars` block)

Concrete source-to-VE example:

```css
/* screenshots/.../style.css */
.breadcrumb {
  --bs-breadcrumb-padding-x: 0;
  --bs-breadcrumb-padding-y: 0;
  --bs-breadcrumb-margin-bottom: 1rem;
  --bs-breadcrumb-bg: ;
  --bs-breadcrumb-border-radius: ;
  --bs-breadcrumb-divider-color: var(--bs-secondary-color);
  --bs-breadcrumb-item-padding-x: 0.5rem;
  --bs-breadcrumb-item-active-color: var(--bs-secondary-color);
}
```

```ts
// ve-project/src/themes/bootstrap/ui/breadcrumb/base.css.ts
export const breadcrumb = style({
  vars: {
    [varBsBreadcrumbPaddingX]: '0',
    [varBsBreadcrumbPaddingY]: '0',
    [varBsBreadcrumbMarginBottom]: '1rem',
    [varBsBreadcrumbBg]: '',
    [varBsBreadcrumbBorderRadius]: '',
    [varBsBreadcrumbDividerColor]: varBsSecondaryColor,
    [varBsBreadcrumbItemPaddingX]: '0.5rem',
    [varBsBreadcrumbItemActivColor]: varBsSecondaryColor,
  },
  // ...component declarations that consume those vars
})
```

Verification reminder:

- Re-run focused VE parity after root-var initialization changes:
  - `node scripts/capture-leaf-screenshots.mjs --theme=bootstrap --verify-ve-rendering "--route=/ui/breadcrumb/breadcrumb-example"`

## Bootstrap JS Custom-Class Override Layer (April 2026)

In parallel with VE migration, the local Bootstrap JS fork was modified to support class and selector overrides without patching component internals.

### What Was Added

- `BaseComponent` now exposes:
  - `static getConfigConstants(overrides = {})`
  - `static get ConfigConstants()`
  - `static extendDefaultConfig(overrides = {})`
- `extendDefaultConfig()` returns a subclass that cleanly separates overrides into:
  - instance options (`Default` / `DefaultType`)
  - structural constants (`ConfigConstants`, for class names, selectors, event constants)
- Parent classes are not mutated; overrides are additive and chainable.
- Data-API-heavy components were updated with explicit lifecycle methods:
  - `static init()`
  - `static destroy()`
  - browser-only auto-init guards (`if (typeof document !== 'undefined') { ... }`) where applicable

### Components With Full `ConfigConstants` Override Support

- Alert
- Button
- Carousel
- Collapse
- Dropdown
- Modal
- Offcanvas
- ScrollSpy
- Tab
- Tooltip
- Popover
- Toast

### Important Usage Rule for Data API Components

When you override selectors (for example `SELECTOR_DATA_TOGGLE` or `SELECTOR_DATA_SPY`), tear down listeners on the base class first, then initialize the subclass:

```js
SomeComponent.destroy()

const CustomX = SomeComponent.extendDefaultConfig({
  SELECTOR_DATA_TOGGLE: '[data-app-toggle="x"]'
})

CustomX.init()
```

This is especially important for components that are commonly used without manually creating instances.

### Per-Component Custom-Class Examples

#### 1) Alert

Common keys to override:

- `CLASS_NAME_SHOW`
- `CLASS_NAME_FADE`
- `EVENT_CLOSE`
- `EVENT_CLOSED`

```js
import { Alert } from 'bootstrap'

const AppAlert = Alert.extendDefaultConfig({
  CLASS_NAME_SHOW: 'is-open',
  CLASS_NAME_FADE: 'is-fading'
})

const el = document.querySelector('[data-app-alert]')
const instance = AppAlert.getOrCreateInstance(el)
instance.close()
```

#### 2) Button (no manual instance required)

Common keys to override:

- `CLASS_NAME_ACTIVE`
- `DATA_API_KEY`
- `SELECTOR_DATA_TOGGLE`

```js
import { Button } from 'bootstrap'

// Rebind delegated Data API to the custom selector
Button.destroy()

const AppButton = Button.extendDefaultConfig({
  CLASS_NAME_ACTIVE: 'is-active',
  SELECTOR_DATA_TOGGLE: '[data-app-toggle="button"]'
})

AppButton.init()

// Markup example:
// <button data-app-toggle="button" aria-pressed="false" class="btn">Toggle</button>
```

#### 3) Carousel

Common keys to override:

- `CLASS_NAME_ACTIVE`
- `CLASS_NAME_SLIDE`
- `SELECTOR_DATA_RIDE`
- `SELECTOR_DATA_SLIDE`

```js
import { Carousel } from 'bootstrap'

Carousel.destroy()

const AppCarousel = Carousel.extendDefaultConfig({
  CLASS_NAME_ACTIVE: 'is-active',
  SELECTOR_DATA_RIDE: '[data-app-ride="carousel"]'
})

AppCarousel.init()

const el = document.querySelector('#heroCarousel')
AppCarousel.getOrCreateInstance(el, { interval: 3000 })
```

#### 4) Collapse

Common keys to override:

- `CLASS_NAME_SHOW`
- `CLASS_NAME_COLLAPSE`
- `CLASS_NAME_COLLAPSED`
- `SELECTOR_DATA_TOGGLE`

```js
import { Collapse } from 'bootstrap'

Collapse.destroy()

const AppCollapse = Collapse.extendDefaultConfig({
  CLASS_NAME_SHOW: 'is-open',
  CLASS_NAME_COLLAPSE: 'collapse-panel',
  SELECTOR_DATA_TOGGLE: '[data-app-toggle="collapse"]'
})

AppCollapse.init()
```

#### 5) Dropdown

Common keys to override:

- `CLASS_NAME_SHOW`
- `SELECTOR_MENU`
- `SELECTOR_DATA_TOGGLE`
- `SELECTOR_VISIBLE_ITEMS`

```js
import { Dropdown } from 'bootstrap'

Dropdown.destroy()

const AppDropdown = Dropdown.extendDefaultConfig({
  CLASS_NAME_SHOW: 'is-open',
  SELECTOR_DATA_TOGGLE: '[data-app-toggle="dropdown"]',
  SELECTOR_MENU: '.app-dropdown-menu'
})

AppDropdown.init()
```

#### 6) Modal

Common keys to override:

- `CLASS_NAME_OPEN`
- `CLASS_NAME_SHOW`
- `OPEN_SELECTOR`
- `SELECTOR_DATA_TOGGLE`

```js
import { Modal } from 'bootstrap'

Modal.destroy()

const AppModal = Modal.extendDefaultConfig({
  CLASS_NAME_SHOW: 'is-visible',
  CLASS_NAME_OPEN: 'app-modal-open',
  SELECTOR_DATA_TOGGLE: '[data-app-toggle="modal"]'
})

AppModal.init()

const modal = AppModal.getOrCreateInstance(document.querySelector('#settingsModal'))
modal.show()
```

#### 7) Offcanvas

Common keys to override:

- `CLASS_NAME_BACKDROP`
- `CLASS_NAME_SHOW`
- `OPEN_SELECTOR`
- `SELECTOR_DATA_TOGGLE`

```js
import { Offcanvas } from 'bootstrap'

Offcanvas.destroy()

const AppOffcanvas = Offcanvas.extendDefaultConfig({
  CLASS_NAME_SHOW: 'is-visible',
  CLASS_NAME_BACKDROP: 'app-offcanvas-backdrop',
  SELECTOR_DATA_TOGGLE: '[data-app-toggle="offcanvas"]'
})

AppOffcanvas.init()
```

#### 8) ScrollSpy

Common keys to override:

- `CLASS_NAME_ACTIVE`
- `SELECTOR_LINK_ITEMS`
- `SELECTOR_DATA_SPY`
- `SELECTOR_TARGET_LINKS`

```js
import { ScrollSpy } from 'bootstrap'

ScrollSpy.destroy()

const AppScrollSpy = ScrollSpy.extendDefaultConfig({
  CLASS_NAME_ACTIVE: 'is-current',
  SELECTOR_DATA_SPY: '[data-app-spy="scroll"]'
})

AppScrollSpy.init()
```

#### 9) Tab

Common keys to override:

- `CLASS_NAME_ACTIVE`
- `CLASS_NAME_SHOW`
- `SELECTOR_DATA_TOGGLE_ACTIVE`
- `SELECTOR_DATA_TOGGLE`

```js
import { Tab } from 'bootstrap'

Tab.destroy()

const AppTab = Tab.extendDefaultConfig({
  CLASS_NAME_ACTIVE: 'is-active',
  CLASS_NAME_SHOW: 'is-visible',
  SELECTOR_DATA_TOGGLE: '[data-app-toggle="tab"], [data-app-toggle="pill"]'
})

AppTab.init()
```

#### 10) Tooltip

Common keys to override:

- `CLASS_NAME_SHOW`
- `CLASS_NAME_FADE`
- `SELECTOR_TOOLTIP_INNER`
- `EVENT_SHOW`
- `EVENT_HIDE`

```js
import { Tooltip } from 'bootstrap'

const AppTooltip = Tooltip.extendDefaultConfig({
  CLASS_NAME_SHOW: 'is-open',
  CLASS_NAME_FADE: 'is-fading',
  SELECTOR_TOOLTIP_INNER: '.app-tooltip-inner'
})

const tooltip = new AppTooltip(document.querySelector('[data-app-tooltip]'), {
  title: 'Custom tooltip'
})

tooltip.show()
```

Instance options (also supported):

- `customClass`
- `placement`
- `template`
- `trigger`
- `title`

```js
import { Tooltip } from 'bootstrap'

new Tooltip(document.querySelector('[data-app-tooltip]'), {
  customClass: 'app-tooltip',
  placement: 'bottom',
  trigger: 'hover focus',
  title: 'Custom tooltip title',
  template: '<div class="tooltip app-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
})
```

#### 11) Popover

Common keys to override:

- `CLASS_NAME_SHOW`
- `CLASS_NAME_FADE`
- `SELECTOR_TITLE`
- `SELECTOR_CONTENT`

```js
import { Popover } from 'bootstrap'

const AppPopover = Popover.extendDefaultConfig({
  CLASS_NAME_SHOW: 'is-open',
  SELECTOR_TITLE: '.app-popover-header',
  SELECTOR_CONTENT: '.app-popover-content'
})

const popover = new AppPopover(document.querySelector('[data-app-popover]'), {
  title: 'Header',
  content: 'Body'
})

popover.show()
```

Instance options (also supported):

- `customClass`
- `placement`
- `template`
- `trigger`
- `title`
- `content`

```js
import { Popover } from 'bootstrap'

new Popover(document.querySelector('[data-app-popover]'), {
  customClass: 'app-popover',
  placement: 'right',
  trigger: 'click',
  title: 'Popover heading',
  content: 'Popover body',
  template: '<div class="popover app-popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
})
```

`Popover` extends `Tooltip` and must merge `...super.getConfigConstants()` when defining defaults, so inherited tooltip constants (for example placement and attachment mappings) are preserved.

#### 12) Toast

Common keys to override:

- `CLASS_NAME_SHOW`
- `CLASS_NAME_SHOWING`
- `CLASS_NAME_FADE`
- `EVENT_SHOW`
- `EVENT_HIDE`

```js
import { Toast } from 'bootstrap'

const AppToast = Toast.extendDefaultConfig({
  CLASS_NAME_SHOW: 'is-open',
  CLASS_NAME_SHOWING: 'is-transitioning',
  EVENT_SHOW: 'show.bs.app-toast'
})

const toast = new AppToast(document.querySelector('[data-app-toast]'), {
  autohide: false,
  delay: 8000
})

toast.show()
```

Instance options (also supported):

- `animation`
- `autohide`
- `delay`
- wrapper class on the toast element (for example `app-toast`)

```js
import { Toast } from 'bootstrap'

const toastEl = document.querySelector('[data-app-toast]')
toastEl.classList.add('app-toast')

const toast = Toast.getOrCreateInstance(toastEl, {
  animation: true,
  autohide: false,
  delay: 8000
})

toast.show()
```

### Summary

- Use `extendDefaultConfig()` for structural class/selector overrides on all 12 upgraded components.
- For Data API components, use `Base.destroy()` -> `Sub = Base.extendDefaultConfig(...)` -> `Sub.init()`.
- For Tooltip, Popover, and Toast, create instances from the returned subclass directly (no Data API lifecycle rebinding is needed).
- For Tooltip, Popover, and Toast, instance options (`customClass`, `placement`, `template`, `trigger`, `title`, `content`, `animation`, `autohide`, `delay`) remain fully supported and can be mixed with subclass-based structural overrides.
