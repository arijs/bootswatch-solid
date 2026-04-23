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
6. Apply VE classes in TSX and remove static Bootstrap class names.
7. Keep screenshot hooks unchanged for verification.
8. Run focused VE verification on the route, then broad verification if needed.

## Class Usage Rule (VE TSX)

Only these static classes are allowed in VE component markup:

- `bd-example`
- `pwhook-*` classes used for screenshot state hooks

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
