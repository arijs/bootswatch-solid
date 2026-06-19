# VE2 Theme Generator — Audit & Improvement Playbook

> **⚠️ Superseded (T10).** This playbook targets the **heuristic family-emit generator**, removed in T10. The `--mode=families|report|scaffold` workflows below no longer exist; only `--mode=scope` survives (`scripts/generate-ve-theme.mjs`). Current theme conversion runs through the literal converter — see [`docs/ve2-literal-conversion-plan.md`](./ve2-literal-conversion-plan.md) (verification method, fix‑in‑emitter loop) and [`docs/ve2-literal-converter.md`](./ve2-literal-converter.md). Kept as historical reference for the element‑owned debugging techniques.

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
2. **One family at a time** — audit and fix a single family before moving to the next. **Do not run `--all-families` during active brite (or bootstrap) fix loops** — full-theme audits take too long and block iteration when the app or session times out.
3. **Fix immediately on failure** — if a family is above threshold, diagnose and fix the generator (or component/contract) **before** auditing the next family. Regenerate affected theme families, rebuild, and re-verify that same family until it passes.
4. **Brite second** — `brite` is the primary non-bootstrap regression theme (heavy Bootswatch deltas: borders, button transforms, shadows). Regenerate affected families after bootstrap fixes.
5. **Full audit last** — only run `--all-families` once individual families pass, or for a final regression snapshot before updating the status table.
6. **Preserve Bootstrap JS bridges** — components that use Bootstrap runtime (modal, dropdown, toast, etc.) must keep contract hook classes (`modalShowHook`, `btnShowHook`, …), not raw `.show`.

### Out of scope for the generator

- Creating components, routes, or new contract definitions (unless a missing contract blocks a family).
- Committing or pushing unless explicitly requested.

---

## Current status (last updated: 2026-05-28)

**Active branch:** `theme-generator` — theme generator audit and family fixes.

### Bootstrap `@ threshold 0.1` — **all families pass** (exit code 0)

Full audit: `node scripts/verify-ve-family.mjs --theme=bootstrap --all-families --threshold=0.1`

| Family | Notes |
|--------|-------|
| `ui/modal` | Pass (8/8); backdrop `:not(modalShowHook)`, modal title compound |
| `ui/dropdowns` | Pass (45 scenarios, worst ≈ 0.099); split-button compound selector |
| `ui/toasts` | Pass (1/1) |
| `contents/tables` | Pass (22 scenarios, worst ≈ 0.078); direct cell contracts + `tableSm`/`tableBordered` descendants |
| `forms` | Pass (32 scenarios, worst ≈ 0.099); `fontFamily: inherit` on controls, `formLabel` display |
| `ui/navbar` | Pass (worst ≈ 0.028); collapse hook, compound navbar variants |
| `ui/badge` | Pass (worst ≈ 0.006) |
| `ui/tooltips` / `ui/popovers` | Pass; `tooltipShow`/`popoverShow` hooks + `createVeTooltip`/`createVePopover` |
| `ui/card` / `ui/navs` / `ui/pagination` / `ui/list-group` / `ui/alerts` / `ui/buttons` / … | All pass @ 0.1 |

Recent fixes (2026-05-24): `containerFluid` import path (`layout/container.css`), table cell paint via direct `${tableCell}`/`${tableHeaderCell}` rules (compound `table>section>row>cell` selectors unreliable in VE `globalStyle`), forms control typography.

### Bootstrap `@ threshold 0.1` — families still needing work

None — last `--all-families` run: **0 failures above 0.1**.

### Brite `@ threshold 0.1` — **complete** (2026-05-28)

**Workflow:** one family at a time → fix generator → regen → re-verify same family. No `--all-families` during fix loops (see [The audit loop](#the-audit-loop-repeat-per-family)).

Final regression: `node scripts/verify-ve-family.mjs --theme=brite --all-families --threshold=0.1` → **exit 0**, **0 families above 0.1** (29 families audited).

### Cosmo `@ threshold 0.1` — **complete** (2026-05-28)

Third theme after bootstrap (reference) and brite. Final regression: `node scripts/verify-ve-family.mjs --theme=cosmo --all-families --threshold=0.1` → **exit 0**, **0 families above 0.1**.

**Key fixes this session:**

| Issue | Fix |
|-------|-----|
| Stale scope used dark-mode tokens | `pnpm generate:ve-theme -- --theme=cosmo --mode=scope --force` |
| Duplicate `.btn-*` in popovers/tooltips overrode `ui/buttons` | Hydrate cosmo btn-secondary / btn-danger in those families |
| `marginEnd2` unstyled | Wire on bootstrap + cosmo `ui/button-group` |
| Accordion `:first-of-type` rules copied item border/bg onto buttons | Strip polluted props; keep border-radius only (match bootstrap) |

Log: `docs/ve-theme-generator-validation/family-audit/verify-cosmo-families.log`

### Cerulean `@ threshold 0.1` — **complete** (2026-05-28)

Fourth theme after bootstrap, brite, and cosmo. Setup: scope + families regen, then proactive overlay-family fixes (same pattern as cosmo).

Final regression: `node scripts/verify-ve-family.mjs --theme=cerulean --all-families --threshold=0.1` → **exit 0**, **0 families above 0.1** (worst family ≈ 0.097 `ui/card` horizontal-card).

**Key fixes this session:**

| Issue | Fix |
|-------|-----|
| Scope regen (light `:root` tokens) | `pnpm generate:ve-theme -- --theme=cerulean --mode=scope --force` |
| `ui/button-group` empty after families regen | Manual `marginEnd2` rule (hydrate fallback produced `export {}`) |
| Duplicate `.btn-secondary` / `.btn-danger` in popovers/tooltips | Sync cerulean btn paint from `ui/buttons` (gradients + theme colors) |

Log: `docs/ve-theme-generator-validation/family-audit/verify-cerulean-families.log`

**Next theme:** `darkly` (or next Bootswatch theme in queue).

### Cyborg `@ threshold 0.1` — **complete** (2026-05-29)

Dark Bootswatch theme. Full `--all-families` run → **0** failing families (exit 0).

**Session fixes (2026-05-29, continued):**

| Area | Fix |
|------|-----|
| `ui/navs` | `navButtonReset` styles; `${navTabs}${cardHeaderTabs}` active tab `borderBottomColor: varBsCardBg` (Bootswatch blue bg + card-bg seam) |
| `ui/card-tabs` `CardTabsExample.tsx` | Match baseline: `navButtonReset`, drop `navItem`, `bd-example` + `bodyText` wrapper |
| `forms` | `formSelect:disabled { opacity: 1 }` — browser dimming was ~19% pixel diff on disabled-fieldset; simplified disabled rule (bg only, inherit chevron) |
| `scope.css.ts` + `theme.ts` | Import `./scope.css`; `html, body, #root { background: #060606; minHeight: 100% }` — fixes white viewport band below short demos on dark canvas (card-tabs was 0.103 → 0.005) |

**Re-apply after `--mode=families --force` regen:** breadcrumb padding + divider; toasts demo helpers + `toastShowing`; navs card-header-tabs blue delta; forms disabled-select `opacity: 1`.

Log: `docs/ve-theme-generator-validation/family-audit/verify-cyborg-families.log`

### Cyborg `@ threshold 0.1` — historical notes (2026-05-29 earlier)

| Area | Fix |
|------|-----|
| `css-utils.mjs` | `isBareHeadingOwnedSelector` — strip bare `h1`–`h6` from overlay families (badge was overriding heading sizes) |
| `two-pass-hydrate.mjs` | Pass B hydrates by SOURCE selector (not index) after cross-family strip; fixes `badgeWarning { display: none }` corruption |
| `route-families.mjs` + `route-style-families.ts` | `heading-badges` route loads `contents/heading` |
| `route-families.mjs` | `pagination-` / `page-` prefix routing → `ui/pagination` |
| `rule-transpiler.mjs` | Modal `.fade:not(.show)` scoped to `${modal}${fade}` — was zeroing popover/tooltip opacity |
| `scope-emitter.mjs` | Forms validation CSS vars on scope host |
| `css-utils.mjs` | `isBareFormsOwnedSelector` + cross-family strip |
| `Ve2Shell.tsx` | Await theme chunk before render |

**Component fixes:** `HeadingBadges.tsx` — match baseline markup (`<p class={h1}>` + `${textDark}` on warning/info/light badges); `LargePagination.tsx` — `${flexWrap}` class.

Log: `docs/ve-theme-generator-validation/family-audit/verify-cyborg-families.log`

Generator fixes landed this session (hydrate overlay `propsOnly`, array `globalStyle` parsing, position-based splice, route CSS merge order, paint→var sync, border shorthand upgrade for list-group, table cell SOURCE comments). Regenerate brite after each generator change:

```bash
pnpm generate:ve-theme -- --theme=brite --mode=families --force --families=ui/list-group
pnpm ve2:build
node scripts/verify-ve-family.mjs --theme=brite --family=ui/list-group --threshold=0.1
```

**Priority order** (worst from last partial audit — re-verify individually):

| Order | Family | Last worst |
|-------|--------|------------|
| ~~1~~ | ~~`ui/card`~~ | **pass** (cards-grid: embedded cards + `${col}` grid selectors) |
| ~~2~~ | ~~`ui/list-group`~~ | **pass** (stale baseline PNGs recaptured for brite contextual colors) |
| ~~3~~ | ~~`ui/accordion`~~ | **pass** (compound `${accordionHeader}${h4}`, `${inlineCode}` in `contents/basic`) |
| ~~4~~ | ~~`forms`~~ | **pass** (compound `${formControl}${formControlSm}` beats base cascade) |
| ~~5~~ | ~~`ui/card-tabs`~~ | **pass** (compound `${nav}${cardHeaderTabs}`; fix `--bs-card-bg` → `varBsBodyBg`) |
| ~~6~~ | ~~`ui/buttons`~~ | **pass** (compound `${btn}${btnOutline*}` for brite filled-outline paint) |
| ~~7~~ | ~~`ui/button-group`~~ | **pass** (worst 0.086) |

**Likely passing after recent fixes** (confirm with single-family verify): `ui/alerts`, `contents/tables`, `ui/dropdowns`, `ui/popovers`, `ui/navbar`, `ui/badge`, `ui/modal`, …

Log (append-only): `docs/ve-theme-generator-validation/family-audit/verify-brite-families.log`

### Generator fixes already landed (do not revert casually)

| Area | File(s) | What it fixes |
|------|---------|---------------|
| Shared selector finalization | `rule-transpiler.mjs` → `finalizeVeSelector()` | Modal backdrop `:not(modalShowHook)`, btn variant compounds, btn size `${btn}${btnLg}`, dropdown split, `h5+modalTitle` |
| Hydrate re-transpile | `two-pass-hydrate.mjs` Pass A.5 | Applies `finalizeVeSelector` when cloning bootstrap → brite (was overwriting fixed selectors) |
| Overlay merge | `two-pass-hydrate.mjs` Pass B | Theme deltas merged into existing blocks; position-based body splice; skip `_media`/null in overlay compute |
| Overlay propsOnly bug | `rule-transpiler.mjs` → `declarationsToVeProps()` | `propsOnly: true` now emits paint props (was inverted — brite deltas never merged) |
| Array globalStyle parse | `two-pass-hydrate.mjs` → `parseGlobalStyleBlocks()` | Matches `globalStyle([...], {` without `.join()` |
| CSS source merge order | `css-source.mjs` → `aggregateFamilyCss()` | Route `style.css` overrides bundled theme CSS (matches screenshot capture) |
| Paint→var sync | `two-pass-hydrate.mjs` → `syncPaintPropsToVars()` | Brite literal `background-color` on `.list-group-item-*` / `.alert-*` updates `--bs-*-bg` vars |
| List-group border | `rule-transpiler.mjs` → `upgradeBorderColorOverlay()` | Theme `border-color` → full `border` shorthand (btn + list-group-item*) |
| Table cell hydrate | `bootstrap/contents/tables/styles.css.ts` + hydrate | SOURCE CSS comments on direct `${tableCell}` rules for brite padding/border overlays |
| Btn border cascade | `rule-transpiler.mjs` → `upgradeBtnBorderOverride()` | Brite `.btn { border-color: #000 }` wins over variant CSS vars |
| Variant paint props | `rule-transpiler.mjs` | Removed explicit `borderColor` from variant blocks (use vars + `.btn` shorthand) |
| Element routing | `route-families.mjs` → `resolveFamilyForSelector()` | `p`, `h1–h6`, `hr`, `small` bucketed into `contents/basic` or `contents/heading` |
| Contract utilities | `contract.css.ts` | `visuallyHidden` baked for split-button carets |
| Family class mappings | `css-utils.mjs` → `FAMILY_CLASS_TO_CONTRACT` | `ui/navbar`: `.bg-light`/`.navbar-dark`/`.collapse`; `ui/badge`: `.bg-*` → `badge*` |
| Global class overrides | `css-utils.mjs` → `CLASS_TO_CONTRACT_OVERRIDES` | `.rounded-pill`, `.mt-5`, `.mb-2`, `.mb-lg-0`, `.me-2`, `.btn-close` |
| Bg utility rgba | `css-utils.mjs` → `formatVeValue()` | `rgba(var(--bs-*-rgb), var(--bs-bg-opacity))` → `rgba(${varBs*Rgb}, 1)` |
| Navbar collapse show | `css-utils.mjs` + `navbar/contract.css.ts` | `.collapse:not(.show)` → `:not(${collapseShow})`; component stamps `${collapse}` on collapse div |
| Grid utility selectors | `css-utils.mjs` → `CONTRACT_SELECTOR_OVERRIDES` | `g0`/`g4`/`rowCols1`/`rowColsMd2`/`colMd*` — camelCase cannot infer digit/hyphen boundaries (`.g-4`, `.row-cols-1`, …) |
| Duplicate contract imports | `import-emitter.mjs` | When `row`/`colMd4`/… exist in both `forms` and `utilities`, prefer `utilities` unless generating `forms` family; prefer generating family when symbol exists there |
| Hydrate SOURCE lookup | `two-pass-hydrate.mjs` → `findSourceSelectorForBlock()` | Skip `[UNMAPPED_VAR]` / `[UNMAPPED_SELECTOR]` metadata lines so `.card`, `.row > *`, etc. hydrate instead of becoming orphan deltas |
| Compound size selectors | `bootstrap/forms/styles.css.ts` | `${formControl}${formControlSm}` / `${formControlLg}` so size rules beat base `.form-control` when CSS load order differs |
| Compound variant selectors | `bootstrap/ui/buttons/styles.css.ts` | `${btn}${btnOutline*}` so brite filled-outline paint beats base `.btn` cascade |
| Compound header selectors | `bootstrap/ui/accordion`, `bootstrap/ui/card` | `${accordionHeader}${h4}`, `${nav}${cardHeaderTabs}` beat heading/nav base margin rules |
| Inline code contract | `bootstrap/contents/basic/styles.css.ts` | `${inlineCode}` maps reboot `code { … }` (font-family, color, size) |
| Overlay merge | `two-pass-hydrate.mjs` Pass B | Replace existing property lines when overlay provides same key (e.g. `.btn` `border` shorthand with theme `#000`) |
| Btn paint footers | `two-pass-hydrate.mjs` | Append late `.btn` / `.btn:hover` paint blocks after variant rules so Bootswatch border overrides win |
| Nav tab panel contracts | `ui/navs/contract.css.ts` + `css-utils.mjs` | `tabContent`/`tabPane`/`fade`/`show`/`navButtonReset`; `.fade:not(.show)` uses navs `show` contract (not `modalShowHook`) |
| Progress bar color variants | `css-utils.mjs` → `FAMILY_CLASS_TO_CONTRACT['ui/progress']` | `.bg-success`/`.bg-info`/`.bg-warning`/`.bg-danger` → `progressBar*`; `.text-dark` → `progressBarTextDark` |
| No global element selectors in family CSS | `rule-transpiler.mjs` + `css-source.mjs` | `isScopedFamilySelector()` skips unmapped raw selectors; element bleed routed to owner family |
| No literal Bootstrap state classes in family CSS | `css-utils.mjs` + `rule-transpiler.mjs` | Never emit `.show`, `.disabled`, `.active`, `.collapsed` as string literals — map to contract hooks (`tooltipShow`, `btnShowHook`, `btnDisabledHook`, `navLinkDisabled`, `pageItemDisabled`, `dropdownItemDisabled`, `listGroupItemActive`, …). Pagination orphan parents (`.active > .page-link`) use `ORPHAN_STATE_SEGMENT_BY_FAMILY`. Wire Bootstrap JS via `CLASS_NAME_SHOW` bridges where applicable. |

Audit logs: [`docs/ve-theme-generator-validation/family-audit/`](../docs/ve-theme-generator-validation/family-audit/)

---

## The audit loop (repeat per family)

**Operational rule:** run Step 1 for **one** `--family=…` only. If it fails, complete Steps 2–5 for that family before starting Step 1 on another family. Skip `--all-families` unless doing a deliberate end-of-pass regression check.

```
┌─────────────────┐
│ 1. Verify family │  node scripts/verify-ve-family.mjs --theme=brite --family=ui/card --threshold=0.1
└────────┬────────┘
         │ diffRatio > 0.1 ?
         ├─ NO ──► next family (Step 1 again)
         │
         ▼ YES — stop auditing other families
┌─────────────────┐
│ 2. Diagnose      │  markup.html vs markup-ve.html, *.verify.png, log
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌──────────────────┐
│ 3. Fix           │────►│ Generator        │ rule-transpiler, css-utils, two-pass-hydrate, css-source
│                  │     │ Component/contract│ ve2RequiredStyleFamilies, `${theme}` on contracts
└────────┬────────┘     └──────────────────┘
         │
         ▼
┌─────────────────┐
│ 4. Regenerate    │  bootstrap family first (if generator changed), then brite for affected families
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 5. Build + re-verify │  same --family only; repeat until exit code 0
└────────┬────────┘
         │
         └──► optional: spot-check one previously passing brite family, then Step 1 on next failing family
```

### Step 1 — Verify one family (never batch during fix loops)

```bash
# Brite — one family at a time (preferred during fix loops)
node scripts/verify-ve-family.mjs --theme=brite --family=ui/card --threshold=0.1

# Bootstrap — same pattern while fixing reference theme
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/modal --threshold=0.1
```

**Do not** run this during active brite fixes (too slow; blocks iteration):

```bash
# Avoid until all targeted families pass individually
node scripts/verify-ve-family.mjs --theme=brite --all-families --threshold=0.1
```

Use `--all-families` only for a **final** regression pass after each batch of per-family fixes, or to refresh the status table in this doc.

Find next bootstrap failure (bootstrap reference theme only, when generator work is on bootstrap):

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
| Tooltip invisible / wrong placement | `.tooltip` unmapped → literal selector; missing `frame` height 16em; `justifyEnd`/`justifyStart` need contract styles; Popper needs 450ms settle |
| Tooltip fade stuck at opacity 0 | Bare `.fade:not(.show)` from another family poisons shared `fade` contract — scope to `${tooltipVe}${fade}:not(${tooltipShow})`; configure `createVeTooltip({ tooltipShow })` |
| Portal widget missing typography | Bootstrap JS injects tooltip/popover/modal nodes under `<body>` — stamp `${theme} ${vars} ${bodyText}` on the widget template root |
| Card grid layout collapsed / no gutters | `.g-4`, `.row-cols-1` emitted as literal Bootstrap classes while components use `utilities` contracts; `row` CSS wired to `forms/row` instead of `utilities/row` |
| Tab panel content invisible | `.fade:not(.show)` remapped to `modalShowHook` — navs family needs its own `fade`/`show` contracts on tab pane |
| Progress bar wrong color | `.bg-danger` etc. emitted as literal utilities while components use `progressBarDanger` contracts |

### Step 3 — Apply fixes

**Prefer generator fixes** when the issue affects many themes or many selectors. **Prefer component fixes** when markup/classes are wrong.

#### Generator fix checklist

- [ ] Fix in `finalizeVeSelector()` or `emitGlobalStyleBlock()` if it applies to scratch *and* hydrate paths.
- [ ] If hydrate-only: ensure Pass A.5 calls `finalizeVeSelector` with declarations from `lookupDeclarations`.
- [ ] If brite delta duplicates a covered selector: fix overlay merge in Pass B (do not emit second `globalStyle` for same selector).
- [ ] Regenerate **bootstrap** family with `--force`.
- [ ] Regenerate **brite** (and other themes) that hydrate from bootstrap.
- [ ] Grep generated `styles.css.ts` for literal state suffixes — **must be zero** in active selectors (comments OK): `` `.show` ``, `` `.disabled` ``, `` `.active` ``, `` `.collapsed` ``. Use contract hooks instead (`btnDisabledHook`, `tooltipShow`, …).

#### Component fix checklist

Every VE2 leaf component exports:

```ts
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [ … ]
```

Rules:

- Any **contract import** from a family → that family id must appear in the array.
- Contract classes on DOM nodes need **`${theme}` scope** prefix: `` class={`${theme} ${btn} ${btnPrimary}`} ``
- Same for `paragraph`, `h5`, `containerFluid`, etc.
- Bootstrap JS widgets: keep `configureVeModal` / `configureVeDropdown` patterns; hooks map to contract classes, not raw `.show`.
- **Portal widgets** (tooltip, popover, modal roots appended to `<body>`): the injected node is outside `Ve2Shell`, so it does not inherit theme typography. Stamp **`${theme} ${vars} ${bodyText}`** on the Bootstrap `template` root (tooltips/popovers) or modal root div. Use `bodyText` only — not full `body`/`bodyFrame` (avoids background bleed). See modal lesson in [`ve2-migration-playbook.md`](./ve2-migration-playbook.md) and [`ve-architecture-v1-history.md`](./ve-architecture-v1-history.md).

Example — tooltip Bootstrap bridge:

```ts
import { createVeTooltip } from './ve-tooltip'
import { tooltipArrow, tooltipInner, tooltipShow, tooltipVe } from '…/tooltips/contract.css'

const VeTooltip = createVeTooltip({ tooltipArrow, tooltipInner, tooltipShow })
// template root: `${tooltipVe} ${fade} ${theme} ${vars} ${bodyText} pwhook-tooltip`
```

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
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/tooltips --threshold=0.1
node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/popovers --threshold=0.1
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
| Tooltip | `ve-project2/src/components/ui/tooltips/ve-tooltip.ts` | `tooltipShow`; fade scoped as `${tooltipVe}${fade}:not(${tooltipShow})` |
| Popover | `ve-project2/src/components/ui/popovers/ve-popover.ts` | `popoverShow`; fade scoped as `${popoverVe}${fade}:not(${popoverShow})` |

Generator rules that depend on this:

- `.fade:not(.show)` with `opacity: 0` → `:not(${modalShowHook})` **only in `ui/modal`**
- `ui/tooltips` / `ui/popovers`: map `.tooltip.show` / `.popover.show` → `tooltipShow` / `popoverShow`; scope `.fade:not(.show)` to widget root + show hook; bridge via `createVeTooltip` / `createVePopover`
- `.modal-backdrop.fade` with `opacity: 0` → append `:not(${modalShowHook})`
- Do not emit cross-family `.fade:not(.show)` into `ui/alerts` (see `SKIP_SELECTORS_BY_FAMILY`)

---

## Suggested next steps (when resuming)

1. Work on branch `theme-generator`.
2. ~~Bootstrap, brite, cosmo, cerulean @ 0.1~~ — **complete** (2026-05-28).
3. ~~Bootstrap, brite, cosmo, cerulean, **cyborg** @ 0.1~~ — **complete** (2026-05-29).
   ```bash
   pnpm generate:ve-theme -- --theme=cyborg --mode=families --force
   pnpm ve2:build
   node scripts/verify-ve-family.mjs --theme=cyborg --all-families --threshold=0.1
   ```
   **Cyborg fixes (2026-05-29):** `stripCrossFamilyOwnedBlocks` match by SOURCE selector; navs card-header-tabs Bootswatch delta + `navButtonReset`; forms `formSelect:disabled { opacity: 1 }`; dark canvas on `html/body/#root`; toasts/breadcrumb manual deltas after regen (see Cyborg section).
4. **Next:** pick next Bootswatch theme (e.g. `darkly`) @ threshold 0.1.
5. Media-query rules (`@media …|||selector`) are still skipped during generation — address when navbar-expand or responsive utilities fail at lg+ breakpoints.

---

## Prompt stub for a new agent session

Copy and adapt:

> Continue the VE2 theme generator audit on branch **`theme-generator`** per [`docs/ve2-theme-generator-audit-playbook.md`](./ve2-theme-generator-audit-playbook.md).  
> Target: family-scoped verification at **threshold 0.1**.  
> Next theme: **darkly** (or next in queue) @ threshold 0.1.  
> Regression-test modal, dropdowns, toasts, tables, navbar, badge, tooltips, popovers after shared generator changes.  
> Preserve Bootstrap JS contract hooks in modal/dropdown components.
