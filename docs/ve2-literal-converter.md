# VE2 Literal CSS Converter

Parallel pipeline that translates full `screenshots/{theme}/bootstrap.css` into a single Vanilla Extract monolith per theme, preserving source rule order and `@media` nesting.

> **⚠️ Superseded (T10).** This page documents the **v1 heuristic** literal converter (`scripts/generate-ve-theme-literal.mjs` + its `auto-contract`/`supplement`/`color-mirror` modules), which was **deleted in T10**. The shipping converter is the deterministic **v2** at [`scripts/generate-ve-literal.mjs`](../scripts/generate-ve-literal.mjs) — see [`docs/ve2-literal-conversion-plan.md`](./ve2-literal-conversion-plan.md) for the authoritative design (1:1 registry, uniform translation, divergence manifest). The v1‑specific flags below (`--no-scope`, `--auto-contracts`, color‑mirror/supplement behavior) no longer exist; the sections after Quick start are kept as historical background on the element‑owned selector model only.

Companion: [`docs/ve-architecture.md`](./ve-architecture.md) (scope + contract compound selectors)

---

## Quick start

```bash
# Emit one theme's literal monolith (v2)
pnpm generate:ve-literal -- --theme=bootstrap

# Fast iteration: only selectors matching a substring
pnpm generate:ve-literal -- --theme=bootstrap --filter=.btn

# All 27 themes
pnpm generate:ve-literal -- --all-themes

# scope.css.ts + fonts.generated.css (shared infra, separate scope-only CLI)
pnpm generate:ve-theme -- --theme=bootstrap --mode=scope --force

# Preview in ve-project2
pnpm ve2:dev
# Open any route with ?style-loader=literal&theme=bootstrap

# Family audit @ 0.001 (same as capture --verify-max-diff-ratio default)
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/spinners --style-loader=literal
```

---

## Output layout

```
ve-project2/src/themes/{theme}/
  scope.css.ts              ← still from generate:ve-theme (or literal CLI default)
  literal/
    styles.css.ts           ← monolithic globalStyle output
    theme.ts                ← side-effect barrel
    literal-report.json     ← emitted / skipped stats
ve-project2/src/theme-contract/
  global-elements/contract.css.ts   ← bare HTML tag contracts (el*)
  utilities/generated/contract.css.ts  ← auto-created .class hooks (--auto-contracts)
```

---

## CLI

| Flag | Description |
|------|-------------|
| `--theme=<slug>` | Required. Reads `screenshots/{slug}/bootstrap.css` |
| `--filter=<text>` | Only emit selectors containing substring (e.g. `.btn`) |
| `--auto-contracts` | Create missing `.class` → `style({})` in `utilities/generated/` |
| `--strict` | Exit 1 if any selectors skipped |
| `--dry-run` | Stats only, no writes |
| `--no-scope` | Skip `scope.css.ts` regeneration |

---

## Runtime loading

`Ve2ShellRuntime` supports `?style-loader=literal` (bootstrap literal bundle today). Other themes fall back to bootstrap literal until generated.

---

## Element registry

[`scripts/generate-ve-theme-literal/element-registry.mjs`](../scripts/generate-ve-theme-literal/element-registry.mjs) maps bare tags (`p`, `label`, `table`, …) to contract symbols. Reuses existing contracts (`paragraph`, `h1`, …) where possible; adds `el*` in `global-elements/` otherwise.

---

## Visual parity verification (baseline policy)

**Baseline screenshots and markup must stay on original Bootstrap CSS only.** Do not change baseline HTML, routes, or capture harness output to add VE contract classes or scope stamps.

To validate literal VE output:

1. **Reuse existing `ve-project2` leaf components** — ensure each component stamps the same contract classes the literal CSS expects (same as the family-based theme path).
2. **Or add new VE-only routes/components** — dedicated parity pages under `ve-project2/` that mirror baseline scenarios without touching the baseline app.

Compare using the existing verifier (`scripts/verify-ve-family.mjs`) with `--style-loader=literal` (appends `?style-loader=literal` on the VE2 preview URL only). Baseline URLs remain `localhost:4173` with stock Bootstrap — never modified.

---

## Skipped-selector handling

The generator resolves skips in this order:

1. **`// --bs-*` comments** on `createVar()` exports (fixes symbol/name mismatches like `--bs-btn-focus-shadow-rgb` → `varBsBtnFocusBoxShadowRgb`).
2. **`--auto-contracts`** — missing `.class` hooks in `utilities/generated/contract.css.ts`.
3. **`--auto-contracts`** — missing `--bs-*` vars in `utilities/generated/_vars.css.ts`.
4. **Element registry** — bare tags, `[type=button]`, `textarea.form-control`, pseudo-elements (`::-moz-focus-inner`), `[data-bs-theme=dark]`, compound classes without scope prefix.

Bootstrap full run: **2949+ rules emitted, 0 skipped**, plus 5 `globalKeyframes()` blocks (`progress-bar-stripes`, `spinner-border`, `spinner-grow`, `placeholder-glow`, `placeholder-wave`).

## Family theme: spinner color mirrors

`ui/spinners` components stamp `spinnerPrimary` / `spinnerDanger` / … (not `text-*`). Hand-maintained mirrors in `themes/bootstrap/ui/spinners/styles.css.ts` must use:

- `varBsTextOpacity` from `theme-contract/utilities/generated/_vars.css` (not `_vars.css`)
- `varBsPrimaryRgb`, `varBsDangerRgb`, … from `theme-contract/_vars.css` in `rgba(${varBsPrimaryRgb}, …)` (not literal `--bs-primary-rgb` strings)

`ui/spinners` @ **0.001** passes for both `--style-loader=theme` and `--style-loader=literal`.

### Literal audit fixes (bootstrap @ 0.001)

| Family | Status | Notes |
|--------|--------|--------|
| `ui/spinners` | Pass | `varBs*Rgb` + `varBsTextOpacity` imports on color mirrors |
| `ui/progress` | Pass | `progressBarTextDark` on Progress50; literal mirrors `.bg-*` → `progressBar*` |
| `ui/badge` | Pass | `badgeTextDark` contract; literal mirrors `.text-dark` → `badgeTextDark` |
| `ui/buttons` | Pass | (prior audit) |
| `ui/toasts` | ~0.0027 | Dark demo wrapper + toast contract supplement; `literal/theme.ts` imports `scope.css` |
| `ui/carousel` | ~0.003–0.004 | Interactive states; carousel stabilize already in harness |
| `contents/tables`, `forms`, `ui/dropdowns`, `ui/modal`, … | Pending | See full audit log |

Regenerate literal after mirror or transpiler changes:

```bash
pnpm generate:ve-theme-literal -- --theme=bootstrap --auto-contracts
```

**Transpiler fix:** `formatVeValue` now resolves `rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))` to `rgba(${varBsLinkColorRgb}, ${varBsLinkOpacity})` (nested `var()` alpha broke the old regex).

**Component stamping:** routes using `<ol>` / `<ul>` / `<li>` must also stamp `elOl` / `elUl` / `elLi` from `theme-contract/global-elements/contract.css` so literal reboot rules apply.

## Next steps
- Continue family-by-family @ 0.001 (`--style-loader=literal`); avoid `--all-families` during fix loops
- Split monolith into family files after broader visual parity
- Stamp missing contracts on VE leaf components (baseline HTML unchanged)
