# VE Next Work Verification (Theme + Family Priority)

Purpose: quickly decide the next migration slice without re-researching theme/family status.

## Scope

Use this playbook when choosing the next VE runtime-contract task for non-Bootstrap themes (sketchy, cerulean, quartz, others).

## Source of Truth

1. `ve-project/src/themes/runtime/registry.ts`
- Declares implemented theme runtime contracts and `availableFamilies` per theme.

2. `ve-project/src/themes/runtime/route-families.ts`
- Declares required family sets per route.

3. Runtime coverage command (no browser, no screenshots):
- `node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=<theme-list>`

Policy: use only `--ve-runtime-missing-only` for planning updates. Do not use `--ve-runtime-missing-leafs` unless route-level detail is needed for a specific family.

## Fast Priority Workflow

1. Run runtime coverage for unfinished themes.

```powershell
node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=sketchy,cerulean,quartz
```

2. Pick the unfinished theme with the highest progress.
- Highest progress = smallest `missing N family/families` value.
- Tie-breaker = smallest impacted-route span (`across X/Y selected routes`).

3. Inside that theme, pick the next family by impact.
- Choose the missing family with the largest route count in the report:
- `- <family> (<n> route(s))`

4. If route detail is needed for implementation scoping, run:

```powershell
node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-leafs --theme=<chosen-theme>
```

5. After implementing that family, verify progress reduction:

```powershell
pnpm ve:build
node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=<chosen-theme>
```

Expected result: missing family count decreases (or impacted route count decreases for the selected family).

6. Record the decision and result in:
- `docs/ve-theme-selection-changelog.md`

## Family Conversion Workflow (Bootstrap CSS -> VE + Runtime)

Use this section after you choose `<chosen-theme>` and `<chosen-family>` from the runtime report.

### Hard Rule: No Cross-Theme Bootstrap Re-Exports

For any non-Bootstrap theme (`sketchy`, `cerulean`, `quartz`, etc.), do not satisfy family conversion by re-exporting Bootstrap runtime classes or Bootstrap theme style modules.

Allowed sharing:
- Shared contract variable names and types from `ve-project/src/theme-contract/**`.

Not allowed:
- `export const <themeX>... = bootstrap...` runtime re-exports.
- Importing Bootstrap theme family runtime objects as the non-Bootstrap family implementation.

Required approach:
- Implement theme-local VE classes under `ve-project/src/themes/<chosen-theme>/**` using extracted CSS from `screenshots/<chosen-theme>/**/style.css`.
- Export runtime classes from those theme-local files.

### What "family converted" means

A family is considered converted for a theme only when all of the following are true:

1. VE classes exist for that family under the theme with visual-parity intent.
2. A runtime contract file exports the family runtime classes for that theme.
3. `ve-project/src/themes/runtime/registry.ts` includes the family in both:
- `contracts` for the theme definition
- `availableFamilies` for the theme definition
4. Runtime coverage (`--ve-runtime-missing-only`) no longer reports that family as missing for the theme.

### Inputs to gather before editing

1. Baseline family implementation in Bootstrap VE theme:
- `ve-project/src/themes/bootstrap/**`
2. Route-level extracted CSS from screenshots for target theme/family:
- `screenshots/<chosen-theme>/<route>/<state>/style.css`
3. Runtime requirements:
- `ve-project/src/themes/runtime/route-families.ts`

### Minimal implementation checklist

1. Visual parity strategy (required): complete theme-specific VE classes for the full family behavior and expose them via runtime.

Important: implementation must target visual parity using theme-local files. Bootstrap family runtime/style re-exports are not permitted.

2. Create or update family VE class files for `<chosen-theme>`.
- Typical location pattern:
- `ve-project/src/themes/<chosen-theme>/ui/<family>/*.css.ts`
- For non-`ui` families:
- `ve-project/src/themes/<chosen-theme>/<family>/*.css.ts`
- Translate needed selectors and declarations from extracted CSS into VE class exports used by runtime.

3. Create family runtime file for `<chosen-theme>`.
- Typical location pattern:
- `ve-project/src/themes/<chosen-theme>/ui/<family>/runtime.ts`
- Or:
- `ve-project/src/themes/<chosen-theme>/<family>/runtime.ts`
- Export a `<theme><Family>RuntimeClasses` object matching the family contract shape.

4. Register the family in runtime registry.
- Update `ve-project/src/themes/runtime/registry.ts`:
- Import `<theme><Family>RuntimeClasses`.
- Add family under `<theme>ThemeDefinition.contracts`.
- Add family string to `<theme>ThemeDefinition.availableFamilies`.

5. Keep VE architecture constraints intact.
- In `*.css.ts`, do not use quoted raw custom-property keys like `'--bs-*'`.
- Use `createVar()` contract vars from `ve-project/src/theme-contract/**` and reference imported vars.
- In route TSX, keep static classes limited to `bd-example` and `pwhook-*`; move other styling into VE classes.

6. Validate compile and runtime coverage.

```powershell
pnpm ve:build
node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=<chosen-theme>
```

7. Confirm expected delta.
- Family count should decrease by at least 1, or impacted routes for the targeted family should decrease.

8. Record result in changelog.
- `docs/ve-theme-selection-changelog.md`

### Optional scoping command (when family spans many routes)

Use this only when you need leaf-route detail to stage implementation order:

```powershell
node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-leafs --theme=<chosen-theme>
```

### Definition of done per family

1. Build passes.
2. Runtime report no longer lists `<chosen-family>` as missing for `<chosen-theme>`.
3. Changelog entry includes:
- chosen theme/family
- visual parity implementation summary
- verification command output summary
- remaining risk/pending work

## Next Themes After Initial Trio

After `sketchy`, `cerulean`, and `quartz` are fully converted (no missing families for selected routes), continue verification with the remaining known theme slugs:

1. `brite`
2. `cosmo`
3. `cyborg`
4. `darkly`
5. `flatly`
6. `journal`
7. `litera`
8. `lumen`
9. `lux`
10. `materia`
11. `minty`
12. `morph`
13. `pulse`
14. `sandstone`
15. `simplex`
16. `slate`
17. `solar`
18. `spacelab`
19. `superhero`
20. `united`
21. `vapor`
22. `yeti`
23. `zephyr`

Run them as the next verification batch:

```powershell
node scripts/capture-leaf-screenshots.mjs --ve-runtime-missing-only --theme=brite,cosmo,cyborg,darkly,flatly,journal,litera,lumen,lux,materia,minty,morph,pulse,sandstone,simplex,slate,solar,spacelab,superhero,united,vapor,yeti,zephyr
```

Apply the same decision rule: pick the most-progressed unfinished theme first, then its highest-impact missing family.

## One-Pass Decision Rule

At each planning checkpoint:

1. Run one runtime coverage command for all unfinished themes.
2. Choose the theme with the smallest missing-family count.
3. Choose that theme's largest-route missing family.
4. Implement, verify count reduction, update changelog.

This keeps work focused on the smallest remaining gap while maximizing route-impact reduction per family migration.