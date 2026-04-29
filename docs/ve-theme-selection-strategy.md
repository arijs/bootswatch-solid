# VE Theme Selection Strategy (ve-project v1 — Historical)

> **Historical Context — ve-project (v1)**
>
> This document describes the theme selection strategy for the **first** Vanilla Extract sub-project (`ve-project`).
> It is preserved here for historical context.
>
> The current preferred approach is described in [`docs/ve-architecture.md`](./ve-architecture.md)
> and is implemented in [`ve-project2/`](../ve-project2).
> See [`docs/ve-project1-docs-index.md`](./ve-project1-docs-index.md) for an index of all v1 historical docs.

---

Status: Approved for implementation planning (ve-project v1)
Date: 2026-04-26
Owner: VE migration track

Agent start here:

1. `docs/ve-next-work-verification.md`

Reason: this playbook provides the shortest repeatable steps to pick the next highest-priority theme/family slice using runtime coverage output, so agents avoid re-researching priority order each run.

## Implementation Status (2026-04-28)

This section records what has already been implemented in `ve-project` and what is still pending.

### Implemented

1. Theme slug source-of-truth and normalization utility exist.
2. Typed runtime contract definitions exist for:
- global contract
- contents family contract
- dropdown family contract
- buttons family contract
- button-group family contract
- navbar family contract
- nav family contract
- modal family contract
- card family contract
- badge family contract
- popovers family contract
- tooltips family contract
- accordion family contract
- scrollspy family contract
- pagination family contract
- forms family contract
- alerts family contract
- breadcrumb family contract
- progress family contract
- spinners family contract
- toasts family contract
- list-group family contract
3. Central runtime resolver exists and returns structured support state with reasons:
- `unknown-theme`
- `missing-family-contract`
4. Bootstrap theme is registered as the only broadly implemented VE theme.
5. Explicit route-to-family mapping exists for dropdown routes (`global` + `dropdowns`).
6. Dropdown component routes now consume typed runtime contract APIs instead of direct Bootstrap theme imports.
7. Button component routes now consume typed runtime contract APIs instead of direct Bootstrap theme imports.
8. Navbar example route now consumes typed runtime contract APIs instead of direct Bootstrap theme imports.
9. Nav showcase routes (`/ui/navs`, `/ui/navs/basic-nav`, `/ui/navs/pill-nav`, `/ui/navs/tabbed-nav`) now consume typed runtime contract APIs instead of direct Bootstrap theme imports.
10. Mixed consumers now use runtime hooks where families are migrated:
- `CardTabsExample` consumes nav + button runtime hooks
- `ScrollspyExample` consumes navbar + nav + dropdown runtime hooks
11. Modal routes now consume runtime contracts (`/ui/modal/*`).
12. Card routes now consume runtime contracts (`/ui/card/*`) and card-tabs now consume card runtime classes.
13. Badge routes now consume runtime contracts (`/ui/badge/*`).
14. Popover routes now consume runtime contracts (`/ui/popovers/*`).
15. Tooltip routes now consume runtime contracts (`/ui/tooltips/*`).
16. Accordion routes now consume runtime contracts (`/ui/accordion/*`).
17. Scrollspy routes now consume runtime contracts (`/ui/scrollspy/*`).
18. Pagination routes now consume runtime contracts (`/ui/pagination/*`).
19. Forms routes now consume runtime contracts (`/forms/*`).
20. Carousel routes now consume runtime contracts (`/ui/carousel/*`).
21. Alerts routes now consume runtime contracts (`/ui/alerts/*`).
22. Breadcrumb routes now consume runtime contracts (`/ui/breadcrumb/*`).
23. Progress routes now consume runtime contracts (`/ui/progress/*`).
24. Spinners routes now consume runtime contracts (`/ui/spinners/*`).
25. Button-group routes now consume runtime contracts (`/ui/button-group/*`).
26. Toast routes now consume runtime contracts (`/ui/toasts/*`).
27. List-group routes now consume runtime contracts (`/ui/list-group/*`).
28. VE Bootstrap JS subclass modules isolated under `ve-project/src/components/ui/**/ve-*.ts` now use factory APIs that accept runtime family classes and return configured subclasses.
29. Subclass consumers now configure dropdown, modal, and carousel behavior from runtime family hooks (no side-effect bootstrap-theme subclass module usage).
30. Direct imports from `ve-project/src/themes/bootstrap/**` have been removed from `ve-project/src/components/ui/**`.
31. Runtime behavior is strict skip-with-warning for unsupported theme coverage through the app-root theme gate (no fallback rendering).
32. Structured warning emission is implemented for theme skips with route/family metadata.
33. App root is wired with `VeThemeRuntimeProvider` and `ThemeSupportGate` in `ve-project/src/index.tsx`.

### Partially Implemented / In Progress

1. Theme implementation breadth is still partial by slug: Bootstrap contract coverage is now broad across current VE UI families, while non-Bootstrap theme contract implementations are still pending.
2. Sketchy now has first-family runtime coverage (`buttons`) registered through VE runtime contracts; additional required families remain pending.

### Pending

1. Add non-Bootstrap theme implementations per family (cerulean, sketchy, quartz, others).
2. Mark family availability per theme explicitly as each family is added.
3. Harden verification matrix by theme/family and track skip-count reduction milestones.
4. Continue broadening runtime-contract adoption outside the current UI migration surface where direct Bootstrap imports may still exist.

### Notes

1. Current behavior intentionally supports incremental rollout: routing is globally gated by theme support, while contract migration still progresses family-by-family.
2. Bootstrap remains the only fully implemented VE contract source at this stage.

## 1. Purpose

Define a single implementation strategy for applying Vanilla Extract (VE) theme classes from URL search parameters in `ve-project`, without duplicating HTML components per theme.

This document is the implementation specification for:

- URL-driven theme selection in VE routes
- Typed theme class resolution
- Partial migration behavior when a requested theme is not implemented for a route family
- Rollout and verification standards

## 2. Background

Today, VE components import classes directly from Bootstrap-only modules under `ve-project/src/themes/bootstrap/**`.

Examples of current pattern:

- global classes (`bsTheme`, `body`, `containerFluid`) imported from Bootstrap theme files
- family classes (buttons, dropdowns, modals, etc.) imported from Bootstrap theme files

This creates two blockers:

1. Components are not theme-agnostic.
2. Supporting additional themes would require broad repetitive import rewrites or duplicate components.

## 3. Goals

1. Keep one VE component implementation per route/component case.
2. Read active theme from URL query parameter (`theme`) and react to query changes.
3. Resolve theme classes through typed registry modules instead of hardcoded Bootstrap imports.
4. Allow incremental per-family migration across themes.
5. Preserve existing VE migration guardrails (contract-first vars, class-only styling, explicit route mapping).

## 4. Non-Goals

1. No per-theme component duplication.
2. No fallback-to-bootstrap rendering when selected theme coverage is missing.
3. No global untyped string map as the primary class API.
4. No automatic conversion of all themes in this phase.

## 5. Constraints and Existing Rules

This strategy must remain consistent with existing VE migration architecture:

1. Theme CSS variables must be contract-driven (`createVar`) and imported via theme-contract modules.
2. Component styling must remain class-based, not implicit global element styling.
3. VE component file structure must mirror main app component structure 1:1.
4. Route wiring remains explicit in `ve-project/src/index.tsx`.
5. Static class names remain limited to migration-approved exceptions (`bd-example`, `pwhook-*`, and documented runtime exceptions).

## 6. Selected Strategy

Use typed, per-family theme registry modules with a central runtime resolver.

### 6.1 High-level architecture

1. URL query parameter `theme` is the source of active theme slug.
2. A VE theme provider resolves and exposes active theme contracts.
3. Each family contract is typed and implemented per theme (for implemented themes only).
4. Components consume contracts from provider/resolver APIs, not from `themes/bootstrap/**` paths.

### 6.2 Why this strategy

1. Keeps components single-source and theme-agnostic.
2. Prevents import explosion and per-component custom logic.
3. Supports incremental rollout by theme and family.
4. Keeps TypeScript enforcement strong for missing class tokens.

## 7. URL Theme Behavior

### 7.1 Query parameter

- Parameter: `theme`
- Expected value: normalized slug (for example `bootstrap`, `cerulean`, `sketchy`, `quartz`)

### 7.2 Reactive behavior

Theme resolution is reactive to URL query updates.

- Initial load: read `theme` from URL.
- Query change during app lifetime: re-resolve and update active theme contract.
- Missing `theme`: use documented default slug.
- Unknown `theme`: treat as unsupported (see section 10).

### 7.3 Slug normalization

Theme selection logic must normalize in the same way as main-project behavior:

1. trim
2. lowercase
3. kebab-like slug matching policy consistent with main list

A shared slug source-of-truth is recommended to avoid drift.

## 8. Contract Model

### 8.1 Contract layering

Define typed contracts in layers:

1. global contract
- wrapper/theme scope classes (for example `bsTheme`, `body`, `containerFluid`, shared content classes)

2. family contracts
- classes needed by each family module (buttons, dropdowns, modal, list-group, forms, etc.)

3. optional route subset contracts
- narrow aliases for specific route components when family surface is large

### 8.2 Contract requirements

1. Contracts are explicit TypeScript interfaces/types.
2. No `any` and no untyped `Record<string, string>` as public API.
3. Every family contract includes only class tokens consumed by VE components.
4. Contract fields map to VE class exports generated by each theme implementation.

### 8.3 Theme implementation responsibilities

For each supported theme slug:

1. provide implementation for global contract
2. provide implementations for family contracts it supports
3. expose availability metadata for unsupported families

## 9. Resolver and Provider Model

### 9.1 Central theme resolver

A central resolver is responsible for:

1. reading normalized active slug
2. locating theme implementations
3. returning typed contracts for requested family/global slices
4. reporting unsupported/missing coverage

### 9.2 Provider responsibilities

A provider/context layer in VE runtime is responsible for:

1. subscribing to URL query changes
2. computing active theme state
3. exposing resolver outputs to components
4. emitting standardized warnings when contracts are missing

### 9.3 Component usage rule

Components must consume classes through provider/resolver contracts.

Components must not:

1. import from a concrete theme path (for example Bootstrap-only)
2. parse URL query directly
3. contain theme-specific branching logic

## 10. Missing Coverage Policy

Chosen policy: skip route/component with warning.

### 10.1 Trigger conditions

Skip when either condition is true:

1. requested theme slug is unsupported
2. requested theme exists but contract implementation for required family is missing

### 10.2 Runtime behavior

1. Do not silently fall back to Bootstrap.
2. Render skip-safe output for affected route/component.
3. Emit warning with standardized metadata:
- selected theme slug
- route path
- required family/families
- reason (`unknown-theme` or `missing-family-contract`)

### 10.3 Verification behavior

VE verification flows should treat skipped routes/components as explicit skips with warnings, not hard failures, during incremental migration.

## 11. Module Topology (Planned)

Recommended module split for future implementation:

1. theme slug definitions and parsing
- single source-of-truth for allowed theme slugs and normalization

2. theme contracts
- global and per-family contract type definitions

3. theme registries
- per-theme implementation wiring
- family availability metadata

4. runtime resolver/provider
- URL query subscription + active contract resolution

5. compatibility adapters (temporary)
- migration utilities to bridge existing components while imports are being converted

## 12. Incremental Rollout Plan

### Phase 1: Foundation

1. Define slug source-of-truth and normalization utility.
2. Define global/family typed contracts.
3. Implement provider + resolver skeleton.
4. Wire resolver at app root (without full family conversion yet).

### Phase 2: Component migration to contracts

1. Replace hardcoded Bootstrap imports in components with contract consumption.
2. Start with one or two high-coverage families (recommended: buttons, dropdowns).
3. Keep route structure unchanged.

### Phase 3: Theme expansion

1. Add non-Bootstrap theme implementations per family.
2. Mark unsupported families explicitly until implemented.
3. Keep warning/skip behavior active during rollout.

### Phase 4: Verification hardening

1. Expand VE verification coverage by theme/family.
2. Reduce skip counts over time.
3. Set milestone criteria for promotion of a theme from partial to supported.

## 13. Verification Standards

Implementation is complete for this feature when all checks below pass:

1. URL reactive selection updates active contracts without page reload.
2. Components no longer directly import Bootstrap theme modules.
3. Missing theme/family behavior is skip-with-warning only.
4. Type contracts prevent unresolved class tokens at compile time.
5. Existing VE architecture constraints remain intact.
6. Route mapping and component structure remain 1:1.

Runtime coverage report mode policy:

1. Use only the short runtime coverage report mode: `--ve1-runtime-missing-only`.
2. Do not use verbose leaf-path reporting mode (`--ve1-runtime-missing-leafs`) for standard migration planning updates.

## 14. Risks and Mitigations

1. Risk: Contract drift between themes and components.
- Mitigation: Type-first contracts and compile-time checks.

2. Risk: Slug mismatch between main app and VE.
- Mitigation: Shared slug definitions and normalization logic.

3. Risk: Silent regressions from fallback behavior.
- Mitigation: Explicit no-fallback policy and structured warnings.

4. Risk: Slow migration due to large family surface.
- Mitigation: Family-by-family rollout with measurable skip reduction.

## 15. Decision Summary

1. Theme switch model: reactive to URL changes.
2. Missing coverage policy: skip route/component with warning.
3. Class resolution architecture: typed theme registry modules.
4. Documentation location: this file.

## 16. Scope Boundary

Included:

1. Strategy and design specification for VE URL theme selection.
2. Contract and runtime behavior definition.
3. Rollout and verification guidance.

Excluded:

1. Direct implementation changes in this document phase.
2. Automatic conversion tooling commitments.
3. Per-theme/per-route migration scheduling beyond architecture guidance.

## Change Log Location

The VE theme selection changelog has been moved to:

1. `docs/ve-theme-selection-changelog.md`
