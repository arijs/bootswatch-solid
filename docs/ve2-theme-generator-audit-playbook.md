# VE2 Theme Generator — Audit & Improvement Playbook

**Use this document** at the start of a new session when continuing automated theme conversion, family-scoped verification, and generator improvements.

Companion references (read as needed):

| Document | Purpose |
|----------|---------|
| [`docs/ve2-theme-generator.md`](./ve2-theme-generator.md) | Generator CLI, pipeline modules, two-pass hydrate internals |
| [`docs/ve-architecture.md`](./ve-architecture.md) | VE2 architecture rules (scope, contracts, families) |
| [`docs/ve2-migration-playbook.md`](./ve2-migration-playbook.md) | Manual conversion patterns and component conventions |
| [`docs/ve2-debugging-mismatch-walkthrough.md`](./ve2-debugging-mismatch-walkthrough.md) | Deep mismatch diagnosis via computed-style comparison |

Implementation entry point: [`scripts/generate-ve-theme.mjs`](../scripts/generate-ve-theme.mjs)

---

## Goals and targets

### Primary goal

Convert Bootswatch themes from screenshot-derived CSS into correct Vanilla Extract theme sources under `ve-project2/src/themes/{theme}/`, using the shared `theme-contract` layer, with **visual parity** to baseline screenshots.

### Success criterion (family audit)

Each **style family** must pass family-scoped verification at:

```
diffRatio ≤ 0.1   (10% pixel mismatch vs baseline static PNG)
```

Verification compares **baseline** captures (`screenshots/{theme}/…/{width}x{height}.png`) against **VE** captures (`ve-{width}x{height}.png`) for the same route/state, using the full theme stylesheet load path (`style-loader=theme` via `Ve2Shell`).

### Work strategy

1. **Bootstrap first** — `bootstrap` is the structural reference theme (`STRUCTURE_REFERENCE_THEME`). Fix generator/transpiler bugs here before relying on two-pass hydrate for other themes.
2. **Family-by-family** — one family at a time; avoid `--all-families` until generator fixes are stable.
3. **Brite second** — `brite` is the primary non-bootstrap regression theme (heavy Bootswatch deltas: borders, button transforms, shadows). Regenerate affected families after bootstrap fixes.
4. **Preserve Bootstrap JS bridges** — components that use Bootstrap runtime (modal, dropdown, toast, etc.) must keep contract hook classes (`modalShowHook`, `btnShowHook`, …), not raw `.show`.

### Out of scope for the generator

- Creating components, routes, or new contract definitions (unless a missing contract blocks a family).
- Committing or pushing unless explicitly requested.

---

## Current status (last updated: 2026-05-24)

**Active branch:** `theme-generator` — theme generator audit and family fixes.

### Bootstrap `@ threshold 0.1` — families verified passing

| Family | Notes |
|--------|-------|
| `ui/modal` | Pass (8/8); backdrop `:not(modalShowHook)`, modal title compound |
| `ui/dropdowns` | Pass (45 scenarios, worst ≈ 0.099); split-button compound selector |
| `ui/toasts` | Pass (1/1); re-verify after long `--all-families` runs if flaky |
| `contents/tables` | Pass (worst ≈ 0.082); `expandTableCellSelectors`, tbody/tr hover mapping |
| `ui/navbar` | Pass (worst ≈ 0.028); collapse hook, compound `navbarBgLight` / `navbarDarkBgPrimary`, `containerFluid` child selector |
| `ui/badge` | Pass (worst ≈ 0.006); `.rounded-pill` → `badgeRoundedPill`, `.bg-*` → `badge*` variants |

### Bootstrap `@ threshold 0.1` — families still needing work

| Family | Worst ratio | Notes |
|--------|-------------|-------|
| `ui/tooltips` | 0.163 | 9 scenarios above threshold |
| `ui/popovers` | 0.143 | 9 scenarios above threshold |
| `ui/card` | 0.132 | `cards-grid` scenario |
| `ui/navs` | 0.123 | `tabbed-nav` scenario |
| `ui/progress` | 0.120 | `progress-100` scenario |

Run `--all-families` after fixes to refresh this list.

### Brite `@ threshold 0.1` — families verified passing

| Family | Notes |
|--------|-------|
| `ui/modal` | Pass (8/8) after hydrate fixes + `contents/basic` paragraph + `contents/heading` |
| `ui/dropdowns` | Pass (45 scenarios) |

Regenerate brite whenever bootstrap reference or shared generator logic changes for:  
`ui/modal`, `ui/dropdowns`, `ui/navs`, `ui/tooltips`, `ui/popovers`, `ui/alerts`, `ui/buttons`, `ui/button-group`, `ui/navbar`, `ui/badge`, `contents/basic`, `contents/heading`.

### Generator fixes already landed (do not revert casually)

| Area | File(s) | What it fixes |
|------|---------|---------------|
| Shared selector finalization | `rule-transpiler.mjs` → `finalizeVeSelector()` | Modal backdrop `:not(modalShowHook)`, btn variant compounds, dropdown split, `h5+modalTitle` |
| Hydrate re-transpile | `two-pass-hydrate.mjs` Pass A.5 | Applies `finalizeVeSelector` when cloning bootstrap → brite (was overwriting fixed selectors) |
| Overlay merge | `two-pass-hydrate.mjs` Pass B | Theme deltas merged into existing blocks; skip `_media`/null in overlay compute |
| Btn border cascade | `rule-transpiler.mjs` → `upgradeBtnBorderOverride()` | Brite `.btn { border-color: #000 }` wins over variant CSS vars |
| Variant paint props | `rule-transpiler.mjs` | Removed explicit `borderColor` from variant blocks (use vars + `.btn` shorthand) |
| Element routing | `route-families.mjs` → `resolveFamilyForSelector()` | `p`, `h1–h6`, `hr`, `small` bucketed into `contents/basic` or `contents/heading` |
| Contract utilities | `contract.css.ts` | `visuallyHidden` baked for split-button carets |
| Family class mappings | `css-utils.mjs` → `FAMILY_CLASS_TO_CONTRACT` | `ui/navbar`: `.bg-light`/`.navbar-dark`/`.collapse`; `ui/badge`: `.bg-*` → `badge*` |
| Global class overrides | `css-utils.mjs` → `CLASS_TO_CONTRACT_OVERRIDES` | `.rounded-pill`, `.mt-5`, `.mb-2`, `.mb-lg-0`, `.me-2`, `.btn-close` |
| Bg utility rgba | `css-utils.mjs` → `formatVeValue()` | `rgba(var(--bs-*-rgb), var(--bs-bg-opacity))` → `rgba(${varBs*Rgb}, 1)` |
| Navbar collapse show | `css-utils.mjs` + `navbar/contract.css.ts` | `.collapse:not(.show)` → `:not(${collapseShow})`; component stamps `${collapse}` on collapse div |

Audit logs: [`docs/ve-theme-generator-validation/family-audit/`](../docs/ve-theme-generator-validation/family-audit/)

---

## The audit loop (repeat per family)

```
┌─────────────────┐
│ 1. Verify family │  node scripts/verify-ve-family.mjs …
└────────┬────────┘
         │ diffRatio > 0.1 ?
         ▼
┌─────────────────┐
│ 2. Diagnose      │  markup.html vs markup-ve.html, *.verify.png, log
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌──────────────────┐
│ 3. Fix           │────►│ Generator        │ rule-transpiler, css-utils, two-pass-hydrate
│                  │     │ Component/contract│ ve2RequiredStyleFamilies, `${theme}` on contracts
└────────┬────────┘     └──────────────────┘
         │
         ▼
┌─────────────────┐
│ 4. Regenerate    │  bootstrap family first, then brite (if affected)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 5. Build + re-verify │
└────────┬────────┘
         │
         └──► bootstrap regression on previously passing families
```

### Step 1 — Verify one family

```bash
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/modal --threshold=0.1
node scripts/verify-ve-family.mjs --theme=brite --family=ui/modal --threshold=0.1
```

Find next bootstrap failure:

```bash
node scripts/verify-ve-family.mjs --theme=bootstrap --all-families --threshold=0.1
```

Exit code `0` = all families pass; `2` = at least one family has scenarios above threshold.

**Important:** `verify-ve-family.mjs` uses `--skip-existing` for baseline PNGs but still runs VE rendering with a forced rebuild. After generator or component changes, force fresh VE captures when investigating:

```bash
node scripts/capture-leaf-screenshots.mjs --theme=brite --verify-ve-rendering --route="/ui/modal/**"
```

(Omit `--skip-existing` behavior is default when PNGs are missing; delete `ve-*.png` in a scenario folder to force recapture.)

Logs append to:

```
docs/ve-theme-generator-validation/family-audit/verify-{theme}-families.log
```

### Step 2 — Diagnose failures

For each failing scenario (console lists `ratio` and path):

1. Open `screenshots/{theme}/…/{scenario}/ve-{w}x{h}.verify.png` (diff overlay).
2. Compare `markup.html` (baseline) vs `markup-ve.html` (VE) in the same folder — inline `style-modified` attributes show computed deltas.
3. Read the family section in the verify log for capture/build output.
4. For subtle issues, use [`docs/ve2-debugging-mismatch-walkthrough.md`](./ve2-debugging-mismatch-walkthrough.md).

Common failure classes:

| Symptom | Likely cause |
|---------|----------------|
| Backdrop invisible / modal washed out | `.fade:not(.show)` or `.modal-backdrop.fade` missing `:not(modalShowHook)` |
| Split dropdown padding wrong | `${scope}${btn}${dropdownToggleSplit}` compound selector missing |
| Brite buttons wrong border/shadow | `.btn` delta not merged; variant `borderColor` overriding; missing `${theme}` on btn |
| Title line-height / margin wrong | Missing `${scope}${h5}${modalTitle}`; missing `contents/heading` in `ve2RequiredStyleFamilies` |
| Paragraph spacing wrong | Missing `contents/basic`; `<p>` missing `${theme} ${paragraph}` |
| Styles present in bootstrap but not brite | Hydrate Pass A.5 overwrote selector without `finalizeVeSelector` |
| Navbar shows full nav at mobile width | Missing `${collapse}` on collapse div; `.collapse:not(.show)` not mapped to contract |
| Navbar missing bg / dark vars | `.bg-light`/`.bg-primary`/`.navbar-dark` not mapped to compound contracts |
| Pill badges square / no fill color | `.rounded-pill` and `.bg-*` not mapped to `badgeRoundedPill` / `badge*` |
| Bg utility transparent/wrong | `rgba(var(--bs-*-rgb), var(--bs-bg-opacity))` emitted with unmapped `--bs-bg-opacity` |

### Step 3 — Apply fixes

**Prefer generator fixes** when the issue affects many themes or many selectors. **Prefer component fixes** when markup/classes are wrong.

#### Generator fix checklist

- [ ] Fix in `finalizeVeSelector()` or `emitGlobalStyleBlock()` if it applies to scratch *and* hydrate paths.
- [ ] If hydrate-only: ensure Pass A.5 calls `finalizeVeSelector` with declarations from `lookupDeclarations`.
- [ ] If brite delta duplicates a covered selector: fix overlay merge in Pass B (do not emit second `globalStyle` for same selector).
- [ ] Regenerate **bootstrap** family with `--force`.
- [ ] Regenerate **brite** (and other themes) that hydrate from bootstrap.

#### Component fix checklist

Every VE2 leaf component exports:

```ts
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [ … ]
```

Rules:

- Any **contract import** from a family → that family id must appear in the array.
- Contract classes on DOM nodes need **`${theme}` scope** prefix: `` class={`${theme} ${btn} ${btnPrimary}`} ``
- Same for `paragraph`, `h5`, `containerFluid`, etc.
- Bootstrap JS widgets: keep `configureVeModal` / `configureVeDropdown` patterns; hooks map to contract classes, not `.show`.

Example — modal title needs both families:

```ts
import { h5 } from '…/contents/heading/contract.css'
// …
export const ve2RequiredStyleFamilies = [
  'ui/modal',
  'ui/buttons',
  'ui/alerts',
  'contents/basic',
  'contents/heading',  // required when using h5 contract
  'utilities',
] as const
// …
<h5 class={`${theme} ${h5} ${modalTitle}`}>
```

### Step 4 — Regenerate

```bash
# Bootstrap reference (scratch generation)
pnpm generate:ve-theme -- --theme=bootstrap --mode=families --force --families=ui/modal

# Brite (two-pass hydrate from bootstrap)
pnpm generate:ve-theme -- --theme=brite --mode=families --force --families=ui/modal,ui/buttons,ui/dropdowns

# Multiple affected families (example after shared generator change)
pnpm generate:ve-theme -- --theme=brite --mode=families --force \
  --families=ui/modal,ui/dropdowns,ui/buttons,ui/button-group,ui/navs,ui/tooltips,ui/popovers,ui/alerts,contents/basic,contents/heading
```

Always build before verify:

```bash
pnpm ve2:build
```

### Step 5 — Regression

After any shared generator change, re-verify **previously passing** bootstrap and brite families:

```bash
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/modal --threshold=0.1
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/dropdowns --threshold=0.1
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/toasts --threshold=0.1
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/navbar --threshold=0.1
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/badge --threshold=0.1
node scripts/verify-ve-family.mjs --theme=bootstrap --family=contents/tables --threshold=0.1
node scripts/verify-ve-family.mjs --theme=brite --family=ui/modal --threshold=0.1
node scripts/verify-ve-family.mjs --theme=brite --family=ui/dropdowns --threshold=0.1
```

---

## Commands cheat sheet

| Task | Command |
|------|---------|
| Report unmapped selectors | `pnpm generate:ve-theme -- --theme=darkly --mode=report` |
| Regenerate one family | `pnpm generate:ve-theme -- --theme=bootstrap --mode=families --force --families=ui/card` |
| Verify one family | `node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/card --threshold=0.1` |
| Audit all bootstrap families | `node scripts/verify-ve-family.mjs --theme=bootstrap --all-families --threshold=0.1` |
| Force recapture + verify route glob | `node scripts/capture-leaf-screenshots.mjs --theme=brite --verify-ve-rendering --route="/ui/modal/**"` |
| Build VE2 | `pnpm ve2:build` |

Family → route glob mapping lives in [`scripts/verify-ve-family.mjs`](../scripts/verify-ve-family.mjs) (`FAMILY_ROUTE_GLOB`).

All **24 emit families** are listed in [`scripts/generate-ve-theme/constants.mjs`](../scripts/generate-ve-theme/constants.mjs) (`EMIT_FAMILIES`).

---

## Two-pass hydrate (non-bootstrap themes)

Non-bootstrap themes (e.g. `brite`) **clone structure** from `ve-project2/src/themes/bootstrap/{family}/styles.css.ts` and:

1. **Pass A** — replace `bootstrapScope` → `{theme}Scope`
2. **Pass A.5** — re-transpile selectors from SOURCE CSS comments via `finalizeVeSelector()`
3. **Pass B** — hydrate literal values from theme CSS; merge overlay props into existing blocks
4. **Pass C** — append delta rules for selectors not in bootstrap structure

Implication: **bootstrap must be correct first**. A brite-only manual edit to `styles.css.ts` will be lost on regen unless the fix is moved into the generator or bootstrap reference.

---

## Bootstrap JS integration (contract hooks)

Components bridge Bootstrap 5 runtime to VE contract classes. **Generated CSS must target hooks, not literal `.show`.**

| Widget | Bridge module | Key hooks |
|--------|---------------|-----------|
| Modal | `ve-project2/src/components/ui/modal/ve-modal.ts` | `modalShowHook`, `modalOpenHook`; backdrop uses `modalShowHook` |
| Dropdown | `ve-project2/src/components/ui/dropdowns/ve-dropdown.ts` | `btnShowHook`, `dropdownMenuShow` |

Generator rules that depend on this:

- `.fade:not(.show)` with `opacity: 0` → `:not(${modalShowHook})`
- `.modal-backdrop.fade` with `opacity: 0` → append `:not(${modalShowHook})`
- Do not emit cross-family `.fade:not(.show)` into `ui/alerts` (see `SKIP_SELECTORS_BY_FAMILY`)

---

## Suggested next steps (when resuming)

1. Work on branch `theme-generator`.
2. Pick the **worst failing bootstrap family** from the table above (`ui/tooltips` or `ui/popovers` first).
3. Fix generator/component issues using the audit loop above.
4. Regenerate bootstrap + brite affected families; run regression set (modal, dropdowns, toasts, tables, navbar, badge).
5. When bootstrap is clean at 0.1, expand brite `--all-families` audit.
6. Optionally extend element routing (`resolveFamilyForSelector`) for other bare elements (`address`, `ol`, …) as families fail.
7. Media-query rules (`@media …|||selector`) are still skipped during generation — address when navbar-expand or responsive utilities fail at lg+ breakpoints.

---

## Prompt stub for a new agent session

Copy and adapt:

> Continue the VE2 theme generator audit on branch **`theme-generator`** per [`docs/ve2-theme-generator-audit-playbook.md`](./ve2-theme-generator-audit-playbook.md).  
> Target: family-scoped verification at **threshold 0.1**.  
> Next targets: bootstrap `ui/tooltips`, `ui/popovers`, `ui/card`, `ui/navs`, `ui/progress`.  
> Regression-test modal, dropdowns, toasts, tables, navbar, badge after shared generator changes.  
> Preserve Bootstrap JS contract hooks in modal/dropdown components.
