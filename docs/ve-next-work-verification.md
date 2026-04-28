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