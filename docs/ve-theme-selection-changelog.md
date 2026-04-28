# VE Theme Selection Changelog

This changelog was extracted from `docs/ve-theme-selection-strategy.md`.

## Change Log

### Entry Template

Use this structure for each future changelog entry:

```markdown
### YYYY-MM-DD

Scope:
1. ...

Behavior Changes:
1. ...

Validation:
1. ...

Risks / Pending:
1. ...
```

### 2026-04-28 (Runtime Registry Family-Derivation + Coverage Parser Compatibility)

Scope:
1. Reduced duplication in runtime theme metadata by deriving `availableFamilies` from theme `contracts`.
2. Updated runtime coverage parsing to remain accurate after refactoring theme definitions to use a helper builder.
3. Added a planning playbook reference path for future theme/family selection runs.

Behavior Changes:
1. Updated `ve-project/src/themes/runtime/contracts.ts` so `VeThemeDefinition.contracts` supports partial contract sets (`Partial<VeThemeContracts>`), matching partially implemented themes.
2. Refactored `ve-project/src/themes/runtime/registry.ts` to use `buildThemeDefinition(...)`, deriving families from contract keys and allowing explicit synthetic extras (for example `ui`).
3. Added `ve-project/src/themes/sketchy/global/runtime.ts` and registered Sketchy `global` runtime classes.
4. Updated `scripts/capture-leaf-screenshots/ve-runtime-coverage.mjs` to parse both:
- legacy inline `availableFamilies` theme definitions
- helper-based `buildThemeDefinition(...)` theme definitions
5. Updated `scripts/capture-leaf-screenshots/cli.mjs` to fail fast if `--ve-runtime-missing-leafs` is used, directing usage to the concise `--ve-runtime-missing-only` flow.
6. Added `docs/ve-next-work-verification.md` and linked it from `docs/ve-theme-selection-strategy.md` for faster agent/operator startup.

Validation:
1. `node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=bootstrap,sketchy` now reports Bootstrap as fully covered for selected routes after the registry refactor.
2. The same command continues to report expected remaining gaps for Sketchy (`missing 21 family/families` across 142 selected routes).

Risks / Pending:
1. Runtime coverage parsing still relies on source-shape pattern matching; further refactors to registry declaration style may require parser updates.
2. Sketchy `global` remains a temporary adapter reusing Bootstrap global classes until Sketchy-specific global tokens are implemented.

### 2026-04-28 (Sketchy Next Highest-Impact Family: Global)

Scope:
1. Used runtime coverage reporting to identify `global` as the highest-impact missing family for Sketchy (338 impacted routes).
2. Created `ve-project/src/themes/sketchy/global/runtime.ts` re-exporting Bootstrap global classes as a temporary adapter.
3. Registered Sketchy `global` family in the central runtime registry.

Behavior Changes:
1. Added `ve-project/src/themes/sketchy/global/runtime.ts` with a Sketchy global runtime contract surface.
2. Updated `ve-project/src/themes/runtime/registry.ts` to add `global` to Sketchy's `availableFamilies` and `contracts`.
3. Runtime coverage report no longer flags `global` as missing for Sketchy.

Validation:
1. `pnpm ve:build` passes after Sketchy global runtime registration.
2. `node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=sketchy` now reports `missing 21 family/families` across 142 routes (previously 22 families across 342 routes), with `global` removed from the missing-family list.

Risks / Pending:
1. Current Sketchy global registration is a contract-coverage step; Sketchy-specific global token overrides remain pending.

### 2026-04-28 (Sketchy Highest-Impact Family: Buttons)

Scope:
1. Used runtime coverage reporting to identify highest-impact missing Sketchy family by selected leaf-route count.
2. Added a Sketchy runtime family registration for `buttons` using VE runtime contracts.
3. Registered Sketchy in the central runtime resolver with explicit family availability metadata.

Behavior Changes:
1. Added `ve-project/src/themes/sketchy/ui/buttons/runtime.ts` with a Sketchy buttons runtime contract surface.
2. Updated `ve-project/src/themes/runtime/registry.ts` to register `sketchy` with `buttons` in `availableFamilies` and theme contracts.
3. Runtime coverage report no longer flags `buttons` as missing for Sketchy.

Validation:
1. `pnpm ve:build` passes after Sketchy buttons runtime registration.
2. `node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=sketchy` now reports `missing 22 family/families` (previously 23), with `buttons` removed from the missing-family list.

Risks / Pending:
1. Sketchy is still globally unsupported for route rendering until foundational families (notably `global`) are implemented.
2. Current Sketchy buttons runtime registration is a contract-coverage step; full Sketchy-specific VE visual token parity remains pending.

### 2026-04-28 (Runtime Coverage Reporting)

Scope:
1. Added a fast runtime-coverage reporting mode to screenshot tooling for VE migration planning.
2. Added optional leaf-route detail output control for runtime-coverage reporting.
3. Updated tooling documentation to describe runtime-coverage usage and filtering behavior.

Behavior Changes:
1. Added `--ve-runtime-missing-only` to `scripts/capture-leaf-screenshots.mjs` for fast reporting without build, preview-server startup, or Playwright execution.
2. Added runtime-family gap output at theme/family granularity using runtime metadata from:
- `ve-project/src/themes/runtime/registry.ts` (implemented families)
- `ve-project/src/themes/runtime/route-families.ts` (required families per route)
3. Changed default runtime report output to hide leaf routes.
4. Added `--ve-runtime-missing-leafs` to print affected leaf routes under each missing family.
5. `--ve-runtime-missing-leafs` now implicitly enables `--ve-runtime-missing-only`.

Validation:
1. `node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=bootstrap --route=/ui/buttons/solid/primary-button` reports no missing families for selected Bootstrap route.
2. `node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=sketchy --route=/ui/buttons/solid/primary-button` reports expected missing families for selected Sketchy route.
3. `node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-leafs --theme=sketchy --route=/ui/buttons/solid/primary-button` prints affected leaf routes and confirms implicit enablement.
4. `node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-leafs --verify-ve-rendering` fails fast with expected mutual-exclusion error.

Risks / Pending:
1. Runtime report currently parses runtime metadata from source files; consider exporting a small script-safe metadata surface to reduce parsing-coupling risk.
2. Non-Bootstrap family implementations remain the primary migration gap; report output should be used to prioritize per-theme family rollout.

### 2026-04-28

Scope:
1. Runtime contract migration completion for additional UI families (`toasts`, `list-group`).
2. VE Bootstrap JS subclass refactor (`dropdown`, `modal`, `carousel`) to runtime-class factory pattern.
3. Cleanup of remaining direct Bootstrap imports in `ve-project/src/components/ui/**` wrappers/components.

Behavior Changes:
1. Added `toasts` and `listGroup` runtime contracts, registry availability metadata, route-family mappings, and runtime hooks.
2. Migrated `/ui/toasts/*` and `/ui/list-group/*` components from direct Bootstrap imports to runtime hook consumption.
3. Replaced isolated subclass modules with factories that accept runtime family classes and return configured subclasses:
- `createVeDropdown` / `configureVeDropdown`
- `createVeModal` / `configureVeModal`
- `createVeCarousel` / `configureVeCarousel`
4. Updated dropdown, modal, and carousel consumers to configure subclass behavior from runtime family hook values.
5. Removed remaining direct `themes/bootstrap/**` imports in UI wrappers/components (`AccordionPage`, `BadgePage`, `TabbedNav` updates included).

Validation:
1. `pnpm ve:build` passes after `toasts` runtime migration.
2. `pnpm ve:build` passes after `list-group` runtime migration.
3. `pnpm ve:build` passes after subclass-factory refactor and remaining UI import cleanup.
4. Workspace diagnostics report no errors in touched runtime contracts, subclass modules, and updated consumers.

Risks / Pending:
1. Bootstrap remains the only fully implemented VE contract source; non-Bootstrap family implementations are still pending.
2. Verification hardening by theme/family (including skip-count tracking) remains in progress.

### 2026-04-27

Scope:
1. Theme-selection implementation status and progress documentation.
2. Runtime theme foundation and first-family migration (dropdowns).

Behavior Changes:
1. Added implementation status snapshot section (implemented, partial, pending).
2. Added typed runtime theme foundation in `ve-project`:
- theme slug normalization/source-of-truth
- typed contracts (global + dropdown family)
- central resolver with support reasons (`unknown-theme`, `missing-family-contract`)
3. Added explicit dropdown route-family mapping (`global` + `dropdowns`).
4. Migrated dropdown route components from direct Bootstrap theme imports to runtime contract hooks.
5. Added strict skip-with-warning behavior for dropdown routes when selected theme coverage is missing.
6. Wired a single app-root `VeThemeRuntimeProvider` + `ThemeSupportGate` path and removed temporary per-route dropdown gate wrappers.
7. Made theme gate rendering reactive and Solid 2.0 compatible; warning payload now includes required family metadata.
8. Added `buttons` family contract, registry slice, and runtime hook.
9. Migrated `/ui/buttons/**` components and `ButtonsPage` wrapper from direct Bootstrap theme imports to runtime hook consumption.
10. Added `navbar` and `nav` family contracts, registry slices, hooks, and explicit route-family mappings.
11. Migrated navbar and nav showcase routes to runtime hook consumption.
12. Migrated mixed consumers (`CardTabsExample`, `ScrollspyExample`) to runtime hooks for already-migrated families and added explicit mixed-family route requirements.
13. Expanded the `contents` runtime contract with heading/spacing utility tokens used by carousel section wrappers.
14. Migrated `Carousel` route wrapper from direct Bootstrap imports to runtime hook consumption.
15. Marked carousel route family migration complete in the implementation status section.
16. Added `alerts` family contract, bootstrap alerts runtime slice, registry wiring, runtime hook, and explicit alerts route-family mappings.
17. Migrated `AlertsPage` and `/ui/alerts/*` leaf components from direct Bootstrap imports to runtime hook consumption.
18. Added `breadcrumb` family contract, bootstrap breadcrumb runtime slice, registry wiring, runtime hook, and explicit breadcrumb route-family mappings.
19. Migrated `/ui/breadcrumb/breadcrumb-example` from direct Bootstrap imports to runtime hook consumption.
20. Added `progress` family contract, bootstrap progress runtime slice, registry wiring, runtime hook, and explicit progress route-family mappings.
21. Migrated `/ui/progress/*` leaf components from direct Bootstrap imports to runtime hook consumption.
22. Added `spinners` family contract, bootstrap spinners runtime slice, registry wiring, runtime hook, and explicit spinners route-family mappings.
23. Migrated `/ui/spinners/*` leaf components from direct Bootstrap imports to runtime hook consumption.
24. Added `buttonGroup` family contract, bootstrap button-group runtime slice, registry wiring, runtime hook, and explicit button-group route-family mappings.
25. Migrated `ButtonGroupPage` and `/ui/button-group/button-group-example` from direct Bootstrap imports to runtime hook consumption.

Validation:
1. Bootstrap dropdown route renders normally.
2. Sketchy dropdown route renders skip-safe output.
3. `pnpm ve:build` passes.
4. Bootstrap navbar route renders normally in VE preview.
5. Sketchy navbar route renders global skip-safe output in VE preview with `[ve-theme-skip]` warning.
6. Bootstrap button route (`/ui/buttons/solid/primary-button`) renders normally in VE preview.
7. Sketchy button route (`/ui/buttons/solid/primary-button`) renders global skip-safe output with `[ve-theme-skip]` warning.
8. Bootstrap nav route (`/ui/navs/tabbed-nav`) renders normally in VE preview.
9. Sketchy nav route (`/ui/navs/tabbed-nav`) renders global skip-safe output with `[ve-theme-skip]` warning.
10. Bootstrap scrollspy/card-tabs routes render normally in VE preview after mixed-hook migration.
11. Sketchy scrollspy/card-tabs routes render global skip-safe output with `[ve-theme-skip]` warnings and explicit multi-family metadata.
12. `pnpm ve:build` passes after carousel wrapper runtime migration.
13. Bootstrap carousel route (`/ui/carousel/carousel-example`) capture run completes with all expected states saved and zero failures.
14. Sketchy carousel route (`/ui/carousel/carousel-example`) capture run completes with all expected states saved and zero failures.
15. `pnpm ve:build` passes after alerts family runtime migration.
16. Bootstrap alerts routes (`/ui/alerts/primary-alert`, `/ui/alerts/heading-alert`) capture run completes with zero failures.
17. Sketchy alerts routes (`/ui/alerts/primary-alert`, `/ui/alerts/heading-alert`) capture run completes with zero failures.
18. `pnpm ve:build` passes after breadcrumb family runtime migration.
19. Bootstrap breadcrumb route (`/ui/breadcrumb/breadcrumb-example`) capture run completes with zero failures.
20. Sketchy breadcrumb route (`/ui/breadcrumb/breadcrumb-example`) capture run completes with zero failures.
21. `pnpm ve:build` passes after progress family runtime migration.
22. Bootstrap progress routes (`/ui/progress/progress-50`, `/ui/progress/striped-progress`) capture runs complete with zero failures.
23. Sketchy progress routes (`/ui/progress/progress-50`, `/ui/progress/striped-progress`) capture runs complete with zero failures.
24. `pnpm ve:build` passes after spinners family runtime migration.
25. Bootstrap spinner routes (`/ui/spinners/border-primary-spinner`, `/ui/spinners/grow-dark-spinner`) capture runs complete with zero failures.
26. Sketchy spinner routes (`/ui/spinners/border-primary-spinner`, `/ui/spinners/grow-dark-spinner`) capture runs complete with zero failures.
27. `pnpm ve:build` passes after button-group family runtime migration.
28. Bootstrap button-group route (`/ui/button-group/button-group-example`) capture run completes with zero failures.
29. Sketchy button-group route (`/ui/button-group/button-group-example`) capture run completes with zero failures.

Risks / Pending:
1. Global gate is now stable, and core migrated families include dropdowns, buttons, button-group, alerts, breadcrumb, navbar/nav, modal, card, badge, popovers, tooltips, accordion, scrollspy, pagination, forms, carousel, progress, and spinners; remaining `ui` families are still pending contract migration.
2. Non-Bootstrap contract implementations are still pending.
