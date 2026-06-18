# VE2 Literal Conversion — Implementation Plan (v2)

**Status:** Proposed. To be implemented by Sonnet.
**Audience:** The engineer/agent implementing the new converter end‑to‑end.
**Supersedes:** the heuristic literal pipeline in [`scripts/generate-ve-theme-literal/`](../scripts/generate-ve-theme-literal) (kept until v2 reaches parity, then deleted).

Companion docs:
- [`docs/ve-architecture.md`](./ve-architecture.md) — element‑owned scope model (the contract/compound‑selector rules).
- [`docs/ve2-literal-converter.md`](./ve2-literal-converter.md) — the current (v1) literal converter.
- [`docs/ve2-migration-playbook.md`](./ve2-migration-playbook.md) — hand‑conversion gotchas (the field notes this plan is hardened against).
- [`docs/ve2-debugging-mismatch-walkthrough.md`](./ve2-debugging-mismatch-walkthrough.md) — computed‑style diff technique for residual mismatches.

---

## 1. Why this rewrite exists

We must convert **Bootstrap + 26 Bootswatch themes** (27 total `screenshots/{theme}/bootstrap.css`, ~12k lines each) into Vanilla Extract, **as literally as possible**, with the explicit goal of **driving CSS↔VE pixel mismatches to zero**.

The current literal converter produces too many mismatches and sometimes emits code that violates the architecture rules. Root cause analysis:

- The architecture forbids raw class/element selectors and descendant matching, so the converter must **remap every selector segment to a hashed "contract" class** and **stamp the exact contracts on every element**. This is a *double remapping* (selectors→contracts **and** markup→contracts); a mismatch appears if *either* side is wrong on *any* element.
- The remapping is **heuristic and incomplete**: large ad‑hoc tables in [`css-utils.mjs`](../scripts/generate-ve-theme/css-utils.mjs), per‑family special cases in `finalizeVeSelector`, color‑mirrors (`spinner`/`progress`/`badge`), btn‑variant paint injection, and `*`→cell guessing. Every wrong/ambiguous guess → a mismatch or a rule‑violating fallback to raw selectors.
- It is **bootstrap‑centric** and does not scale to 27 themes.

The model is fine; the **mapping is the problem.** v2 replaces all heuristics with **one complete, deterministic, 1:1 token→contract registry** applied by a **single uniform translation rule**, plus a tiny **declarative divergence manifest** for the few intentional deviations.

---

## 2. Goals, non‑goals, success criteria

### Goals
1. **Literal fidelity:** the generated VE mirrors `screenshots/{theme}/bootstrap.css` rule‑for‑rule, in source order, with `@media`/keyframes preserved.
2. **Zero mismatch:** every leaf scenario verifies at the harness default ratio (`0.001`) for `--style-loader=literal`, for **all 27 themes**.
3. **Idiomatic VE, element‑owned:** keep hashed contract classes (`${scope}${contract}`), no raw class strings in selectors. (User decision — this is non‑negotiable.)
4. **Deterministic 1:1 mapping:** every Bootstrap class and element tag maps to exactly one contract; `*`, pseudo‑classes, pseudo‑elements, and attribute selectors pass through verbatim.
5. **One shared registry, 27 value sets:** Bootswatch only changes *values*, not class *names*; the contract registry is the **union of tokens across all 27 themes**; per‑theme bundles differ only in values + scope class.
6. **Intentional divergences are explicit:** any deliberate deviation from source CSS lives in a single, documented manifest (seed: the `body`→`bodyFrame`/`bodyText` split).
7. **Interactive components keep working:** Bootstrap JS (modal/dropdown/carousel/collapse/toast/tooltip/popover/tab/scrollspy) drives the hashed contract classes through the `bootstrap-fork` config‑override mechanism.

### Non‑goals
- Changing baseline screenshots or baseline (stock‑Bootstrap) markup. Baselines stay on original Bootstrap CSS + original markup (see [`docs/ve2-literal-converter.md`](./ve2-literal-converter.md) baseline policy).
- Auto‑generating leaf components. Components stay **bespoke** (user decision); v2 adds a *safety net* (markup‑parity check), not a code generator.
- Re‑architecting the runtime shell or the capture harness beyond the font‑isolation fix.

### Success criteria (Definition of Done)
- `pnpm generate:ve-literal -- --all-themes --strict` exits 0 with **0 skipped / 0 unmapped** for every theme.
- `node scripts/verify-ve-family.mjs --theme=<t> --all-families --style-loader=literal` reports **0 families needing work** at `0.001` for all 27 themes.
- The retired v1 heuristic modules are deleted; `ve-architecture.md` + `ve2-literal-converter.md` updated.

---

## 3. The locked model (decisions already made)

| # | Decision | Consequence for the converter |
|---|----------|-------------------------------|
| M1 | **Keep VE contract classes** (idiomatic VE). | Selectors are `${scope}${contractA}${contractB}…`, never raw `.class`. |
| M2 | **Strict 1:1 token→contract.** `.btn`→`btn`, `.btn-primary`→`btnPrimary`, element `h1`→`h1`, `p`→`paragraph`, `button`→`elButton`. | One source class = one contract class. **Never synthesize compounds** (`.btn-primary` → `${scope}${btnPrimary}`, *not* `${scope}${btn}${btnPrimary}`). This preserves source specificity. |
| M3 | **Combinators preserved**, scope+contract on each *named* segment. | `.card > .card-header` → `` `${scope}${card} > ${scope}${cardHeader}` ``. |
| M4 | **`*`, pseudos, attributes pass through verbatim.** | `.table > :not(caption) > * > *` → `` `${scope}${table} > :not(caption) > * > *` `` (no `*`→contract mapping). |
| M5 | **Multi‑theme nesting via compound combinators** (no `:where()`). | `.scope.contractA > .scope.contractB` is the canonical nested form. Every named segment re‑asserts `${scope}`. |
| M6 | **Bespoke leaf components**, stamping contracts. | Add a markup‑parity check rather than a generator. |
| M7 | **New, smaller converter**; retire the heuristic layer. | Delete `finalizeVeSelector` special cases, color‑mirrors, supplements, paint injection, `*`‑cell guessing, the big mapping tables. |

---

## 4. Pipeline overview

```
screenshots/{theme}/bootstrap.css   (27 files, compiled — includes Bootswatch _bootswatch.scss output)
        │
        ├─(Phase 1) token census ──────────────► theme-contract/literal/contract.css.ts   (shared, union of all themes)
        │                                        global-elements/contract.css.ts          (element tags: el*, h1.., paragraph,…)
        │                                        theme-contract/**/_vars.css.ts            (createVar registry, unioned)
        │
        └─(Phase 2) per-theme emit ────────────► themes/{theme}/literal/styles.css.ts      (globalStyle monolith, source order)
                     ▲                                                  + theme.ts (barrel) + literal-report.json
                     │
            divergence-manifest.mjs   (intentional source→VE deviations; seed: body → bodyFrame/bodyText)

(Phase 3) markup-parity check ─► per scenario: baseline classes+tags → required contracts → assert leaf stamps them
(Phase 4) verify-ve-family --style-loader=literal @0.001 (font-isolated) ─► drive residual diffs to zero, all 27 themes
```

Reused as‑is: [`parse-css-tree.mjs`](../scripts/generate-ve-theme-literal/parse-css-tree.mjs) (clean AST walk preserving source order, `@media` nesting, keyframes). Everything downstream of parsing is rewritten.

---

## 5. Phase 1 — the deterministic contract registry (shared)

A new script, `scripts/generate-ve-literal/registry.mjs`, scans **all 27** `bootstrap.css` files and builds the complete token set.

### 5.1 Token classes
For every rule selector, collect:
- **Class tokens** `.foo-bar` → contract symbol `fooBar`.
- **Element tags** `h1`,`p`,`button`,… → element contract (fixed table, §5.3).
- **Pass‑through** (NOT contracts): `*`, `:pseudo`, `::pseudo`, `[attr]`, combinators. Recorded only for coverage stats.

### 5.2 Class → symbol naming (deterministic)
- kebab → lowerCamelCase: `.list-group-item-action` → `listGroupItemAction`; `.display-1` → `display1`; `.col-md-6` → `colMd6`.
- **Collision rule:** if a class symbol would collide with an element contract name (e.g. utility `.h1` vs element `h1`), suffix the *class* contract: `.h1` → `clsH1`. Record the mapping in the overrides file so it is explicit.
- Each generated export carries a **provenance comment** so the registry round‑trips by reading the file back (the existing registry reader keys off `// .selector` comments — see [`contract-registry.mjs`](../scripts/generate-ve-theme/contract-registry.mjs)):
  ```ts
  // .list-group-item-action
  export const listGroupItemAction = style({})
  ```
- Output file: `ve-project2/src/theme-contract/literal/contract.css.ts`, grouped by the Bootstrap source section comment (`// Buttons`, `// Card`, …) for readability. **Generated — never hand‑edited.**

### 5.3 Element tag → contract (the only curated table)
Reuse existing semantic contracts where present; add `el*` for the rest. This table is the *single* curated input for elements:

| Tag | Contract | Notes |
|-----|----------|-------|
| `h1`–`h6` | `h1`–`h6` | existing (`contents/heading`) |
| `p` | `paragraph` | existing |
| `hr` | `horizontalRule` | existing |
| `small` | `small` | existing |
| `button` | `elButton` | reboot/reset rules |
| `input`,`select`,`textarea`,`label`,`fieldset`,`legend` | `elInput`,`elSelect`,… | forms reboot |
| `ol`,`ul`,`li`,`dl`,`dt`,`dd` | `elOl`,`elUl`,`elLi`,… | list reboot (`ol ol`, etc.) |
| `table`,`caption`,`thead`,`tbody`,`tr`,`th`,`td` | element contracts | table reboot |
| `a`,`b`,`strong`,`code`,`pre`,`mark`,`sub`,`sup`,`abbr`,`address`,`img`,`svg`,`figure`… | `el*` | reboot |

> **Pitfall (element rules are a top mismatch source).** Bootstrap has many bare‑element/reboot rules (`ol ol`, `button{…}`, `input{…}`). Under element‑owned these become `${scope}${elOl} ${scope}${elOl}` etc. and **only fire if the component stamps the element contract on that tag.** Phase 3 enforces tag stamping.

### 5.4 CSS variables (`--bs-*`)
Keep the existing `createVar()` approach (already 0‑unmapped for bootstrap). Extend the var registry to the **union across 27 themes**. Vars live in `theme-contract/_vars.css.ts` (globals) and `theme-contract/**/_vars.css.ts` (component vars), each with a `// --bs-name` provenance comment.

### 5.5 Strictness
`registry.mjs --census --all-themes` prints: total unique classes, total tags, any tag missing from §5.3, any collision. After Phase 1, the emitter can run with `--strict` and **every token resolves** — no fallbacks, so generated code cannot violate the rules.

**Acceptance:** dry‑run census lists every token; `contract.css.ts` + element/vars files generated; 0 unresolved tokens across all 27 themes.

---

## 6. Phase 2 — the uniform emitter

New: `scripts/generate-ve-literal/emit.mjs` + CLI `scripts/generate-ve-literal.mjs`.

### 6.1 Selector translation algorithm (the whole thing)
```
translateSelector(cssSelector, scope, registry, manifest):
  for each comma-separated selector in cssSelector:
    tokens = tokenize(selector)          # segments + combinators (>, +, ~, descendant space)
    for each compound segment:
      parts = split into { classes[], tag?, pseudos[], attrs[], star? }
      pieces = []
      if tag:        pieces.push(elementContract(tag))      # via §5.3 table
      for cls:       pieces.push(classContract(cls))        # via registry (1:1)
      out = pieces.map(p => `${'${'}${p}}`).join('')        # contract refs, no separators
      out += star ? '*' : ''                                # passthrough
      out += pseudos.join('') + attrs.join('')              # passthrough verbatim
      if pieces.length > 0: out = `${'${'}scope}` + out     # scope prefix on NAMED segments
    join compound outputs with their combinators (' ', ' > ', ' + ', ' ~ ')
  apply manifest overrides (see §7)
  return veSelector
```
No per‑family branches. No state‑class special cases. No selector synthesis.

### 6.2 Value translation
- Preserve `var(--bs-*)` as **contract var references** (architecture rule #15): `var(--bs-border-radius)` → `varBsBorderRadius`.
- **Parse `var()` properly** (not regex). Must handle nesting + fallbacks:
  - `rgba(var(--bs-primary-rgb), 0.5)` → `` `rgba(${'${'}varBsPrimaryRgb}, 0.5)` ``
  - `rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))` → `` `rgba(${'${'}varBsLinkColorRgb}, ${'${'}varBsLinkOpacity})` `` (the v1 regex broke here).
- `cssPropToVeKey` for property names; declare component `vars:` first, then reference them (mirror Bootstrap, per playbook §"Approach").

### 6.3 Special source constructs
- `:root` / `[data-bs-theme=…]` var blocks → assign on `${scope}${vars}` (and `${scope}${vars}[data-bs-theme=dark]` for dark blocks). Values come from `screenshots/{theme}/theme.css` (rule #14).
- `body { … }` → routed by the **divergence manifest** (§7), not emitted as a raw `body` contract.
- `@media`/`@supports`/`@container` nesting and `@keyframes` (→ `globalKeyframes`) preserved by reusing `parse-css-tree.mjs`.
- `@import` (fonts) handled once at scope/theme setup via `fonts.generated.css` (playbook Step 0.5) — **not** the emitter.

### 6.4 Output
Per theme: `themes/{theme}/literal/{styles.css.ts, theme.ts, literal-report.json}`. Same selectors across themes; values + scope differ. Source order preserved so cascade matches.

### 6.5 CLI
| Flag | Meaning |
|------|---------|
| `--theme=<slug>` | one theme |
| `--all-themes` | all 27 |
| `--filter=<substr>` | emit only matching selectors (fast iteration) |
| `--strict` | exit 1 on any unmapped token (should never trigger after Phase 1) |
| `--dry-run` | stats only |
| `--census` | (registry) token census across themes |

**Acceptance:** bootstrap emits with 0 skipped; spot‑check `.card > .card-header`, `ol ol`, `.table > :not(caption) > * > *`, `rgba(var(--bs-*-rgb), …)` produce the forms above.

---

## 7. The divergence manifest (intentional, documented deviations)

File: `scripts/generate-ve-literal/divergence-manifest.mjs`. This **replaces** the dozens of implicit per‑family special cases with one auditable list. Each entry: a matcher (source selector and/or property), an action, and a **reason**.

### 7.1 Seed entry — `body` split (the `bodyFrame` case)
Source CSS:
```css
body { margin: 0; background-color: var(--bs-body-bg); color: var(--bs-body-color);
       font-family: …; font-size: …; line-height: …; }
```
Divergence (from playbook gotcha *"`bodyFrame` vs `body` vs `bodyText`"*): **split by property** —
- **typography** props (`font-*`, `line-height`, `color`, `letter-spacing`) → `${scope}${bodyText}`
- **canvas** props (`background-color`, `margin`) → `${scope}${bodyFrame}` (**no padding**)
- the full `body` contract is **reserved** for rare explicit overlay subtrees and is *not* stamped on the shell/modal roots.

**Reason:** `Ve2Shell` stamps `${scope} ${vars} ${bodyFrame} ${bodyText}`. Stamping full `body` (with background) on the shell/modal roots bleeds background behind modal backdrops → mismatch. This is a deliberate behavioral divergence to reach correct overlay rendering.

```js
// divergence-manifest.mjs
export const divergences = [
  {
    id: 'body-split',
    match: { selector: 'body' },
    action: 'splitProps',
    routes: [
      { props: ['font-family','font-size','font-weight','line-height','color','letter-spacing','text-align'], contract: 'bodyText' },
      { props: ['background-color','margin'], contract: 'bodyFrame' },
    ],
    reason: 'Splitting body avoids background bleed behind modal backdrops; shell stamps bodyFrame+bodyText, never full body.',
  },
  // future intentional divergences go here, each with a reason.
]
```

### 7.2 Element‑group typography (Materia `body, input, button { letter-spacing }`)
**No divergence needed** under v2: it maps mechanically to `${scope}${bodyText}, ${scope}${elInput}, ${scope}${elButton}` and works *because the parity check (Phase 3) guarantees `<input>`/`<button>` stamp their element contracts.* (In v1 this required a hack.)

> **Rule for adding entries:** a divergence is justified only when faithful translation produces a *wrong rendering we intend to differ from* (overlay bleed) or a *runtime constraint* (font isolation, §10.3). Selector‑shape quirks are **not** divergences — they are handled mechanically.

---

## 8. State classes & the JavaScript integration (modals, dropdowns, carousels, etc.)

This is the part most likely to be mishandled. Read it fully before touching interactive families.

### 8.1 The problem
Bootstrap's JS toggles literal class strings (`show`, `fade`, `collapsing`, `active`, …), queries literal selectors (`.modal-dialog`), and *creates* elements (modal backdrop, tooltip/popover templates) with literal classes. But in the element‑owned model the **real DOM classes are hashed contract names**. So stock Bootstrap JS would toggle/query classes that **no VE rule matches** → broken interactions and mismatches.

### 8.2 The solution already in this repo: `bootstrap-fork` + `ve-*.ts` adapters
`package.json` depends on `"bootstrap": "file:bootstrap-fork"` — a **patched Bootstrap** that:
1. Refactors hardcoded class/selector/css‑var literals into **static config constants** per component (`CLASS_NAME_SHOW`, `SELECTOR_DIALOG`, `CSS_VARIABLE_POSITION`, …).
2. Adds `static extendDefaultConfig(overrides)` (on `BaseComponent` and `Backdrop`) returning a subclass whose constants are overridden — see `bootstrap-fork/js/dist/base-component.js`.
3. Adds `static destroy()` / `static init()` to re‑register the global **data‑API** delegated handlers so they bind to the overridden selectors.

Each family has a thin adapter in `ve-project2/src/components/ui/{family}/ve-*.ts` that calls `extendDefaultConfig` with the **hashed VE contract strings** (a `style({})` export *is* its hashed class name at runtime). Result: Bootstrap JS toggles/queries the **same hashed classes the VE `globalStyle` rules target.**

> **Why it is theme‑independent (and therefore safe across 27 themes):** contracts are theme‑agnostic — the `modalShowHook` hash is identical regardless of the active theme. The per‑theme scope is applied via the element's own `${theme}` class in markup, *not* via JS. So the JS config carries only theme‑agnostic hashes and works for every theme unchanged.

### 8.3 Per‑component constant maps (current, authoritative)
These are the constants each adapter overrides. The converter must ensure a contract exists for every class/selector referenced here, and components must stamp them.

**Modal** (`ve-modal.ts`, uses `destroy()/init()`):
```
NAME, CLASS_NAME_BACKDROP=modalBackdrop, CLASS_NAME_FADE=fade,
CLASS_NAME_OPEN=modalOpenHook, CLASS_NAME_SHOW=modalShowHook,
OPEN_SELECTOR='.pwhook-modal.${modalShowHook}', SELECTOR_DATA_TOGGLE='[data-bs-toggle="${name}"]',
SELECTOR_DIALOG='.${modalDialog}', SELECTOR_MODAL_BODY='.${modalBody}',
Backdrop: { CLASS_NAME_FADE=fade, CLASS_NAME_SHOW=modalShowHook, className=modalBackdrop }
```
**Dropdown** (`ve-dropdown.ts`, `destroy()/init()`):
```
CLASS_NAME_SHOW_TRIGGER=btnShowHook, CLASS_NAME_SHOW_MENU=dropdownMenuShow,
CLASS_NAME_DROPUP=dropup, CLASS_NAME_DROPEND=dropend, CLASS_NAME_DROPSTART=dropstart,
CSS_VARIABLE_POSITION=getVarName(varBsPosition),  // from utilities/generated/_vars.css — NOT varBsDropdownPosition (never set in CSS)
SELECTOR_MENU='.${dropdownMenu}', SELECTOR_VISIBLE_ITEMS='.${dropdownMenu} .${dropdownItem}:not(:disabled)'
```
**Carousel** (`ve-carousel.ts`, `destroy()/init()`):
```
CLASS_NAME_CAROUSEL=carousel, CLASS_NAME_ACTIVE='${carouselActive} pwhook-carousel-active',
CLASS_NAME_SLIDE=carouselSlide, CLASS_NAME_END=carouselItemEnd, CLASS_NAME_START=carouselItemStart,
CLASS_NAME_NEXT=carouselItemNext, CLASS_NAME_PREV=carouselItemPrev,
SELECTOR_ITEM='.${carouselItem}', SELECTOR_ACTIVE='.pwhook-carousel-active',
SELECTOR_ACTIVE_ITEM='.pwhook-carousel-active.${carouselItem}', SELECTOR_ITEM_IMG='.${carouselItem} img',
SELECTOR_INDICATORS='.${carouselIndicators}'
```
**Collapse/Accordion** (`ve-collapse.ts`, `destroy()/init()`):
```
CLASS_NAME_COLLAPSE=accordionCollapse, CLASS_NAME_COLLAPSED=accordionButtonCollapsed,
CLASS_NAME_COLLAPSING=accordionCollapsing, CLASS_NAME_SHOW=accordionCollapseShow,
SELECTOR_DATA_TOGGLE='[data-ve-toggle="collapse"]'    # custom attr to avoid stock data-API
```
**Toast** (`ve-toast.ts`): `CLASS_NAME_FADE=toastFade, CLASS_NAME_HIDE=toastHide, CLASS_NAME_SHOW=toastShow, CLASS_NAME_SHOWING=toastShowing`
**Tooltip** (`ve-tooltip.ts`, instantiated directly via `new`): `SELECTOR_ARROW=.${tooltipArrow}, SELECTOR_TOOLTIP_INNER=.${tooltipInner}, CLASS_NAME_SHOW=tooltipShow`
**Popover** (`ve-popover.ts`): `SELECTOR_ARROW=.${popoverArrow}, SELECTOR_TITLE=.${popoverHeader}, SELECTOR_CONTENT=.${popoverBody}, CLASS_NAME_SHOW=popoverShow`

**Tab & Scrollspy — no JS adapter (static markup).** Confirmed in the current codebase: `navs/*`, `card-tabs/*`, and `scrollspy/*` import **no** Bootstrap JS and have **no** `data-bs-*` toggles or `configureVe*` calls. The captured state is hard‑stamped in the JSX:
- Tabs: the active tab/pane carry the state contracts directly — `${theme} ${navLink} ${navLinkActive}` on the link and `${theme} ${tabPane} ${fade} ${show} ${tabPaneActive}` on the active pane.
- Scrollspy: the active nav link carries `${theme} ${navLink} ${navLinkActive}`.

Screenshots capture a single static state, so **no adapter is required** for parity. This is a *bonus* for the converter: tabs/scrollspy need only the registry + the §8.6 shared `active`/`show`/`fade` contracts (which static markup stamps directly) — no `extendDefaultConfig` work.

> If live tab switching is ever needed (not today), an adapter is possible but expensive: the fork's `Tab` keeps `CLASS_NAME_ACTIVE='active'`, `CLASS_NAME_FADE='fade'`, `CLASS_NAME_SHOW='show'`, plus a **large literal `SELECTOR_*` set** (`SELECTOR_TAB_PANEL='.list-group, .nav, [role="tablist"]'`, `SELECTOR_INNER` over `.nav-link`/`.list-group-item`/`[role="tab"]`, `SELECTOR_DATA_TOGGLE` over `[data-bs-toggle="tab|pill|list"]`, etc.). Overriding all of those to hashed contracts is only worth it if interaction parity becomes a requirement.

### 8.4 Component wiring pattern (copy this)
```tsx
// import contracts (hashed strings at runtime)
import { modal, modalDialog, modalBody, modalBackdrop, modalOpenHook, modalShowHook, fade } from '…/ui/modal/contract.css'
import { configureVeModal } from './ve-modal'

const C: Component = () => {
  const theme = useContext(ThemeContext)
  const modalName = modal                              // hashed name used as the data-bs-toggle value
  configureVeModal({ name: modalName, fade, modalBackdrop: `${theme} ${modalBackdrop}`, modalBody, modalDialog, modalOpenHook, modalShowHook })
  return (
    <button data-bs-toggle={modalName} data-bs-target="#m" class={`${theme} ${btn} ${btnPrimary} pwhook-modal-trigger`}>Open</button>
    /* …modal markup stamping ${theme} on every element… */
  )
}
```

### 8.5 Critical pitfalls for floating / JS‑driven components
1. **Detached elements lose the scope cascade.** Modal backdrop, tooltips, popovers are appended to `<body>`, *outside* the `${scope}${vars}${bodyFrame}` wrapper. They must **carry `${theme} ${vars} ${bodyText}` explicitly** in their template/className, or `--bs-*` vars won't resolve. Example (tooltip template):
   ```tsx
   template: `<div class="${tooltipVe} ${fade} ${theme} ${vars} ${bodyText} pwhook-tooltip" role="tooltip">
                <div class="${tooltipArrow} ${theme}"></div><div class="${tooltipInner} ${theme}"></div></div>`
   ```
   For the modal backdrop, pass `modalBackdrop: `${theme} ${modalBackdrop}`` so the created backdrop carries the scope.
2. **Pass hashed CSS‑var names to JS**, never literal `--bs-*`. Use `getVarName(varBsPosition)` or `getVarName(<contract-var>)` (see `ve-project2/src/logic/veGetVarName`). Any JS that sets/reads a CSS variable needs this. Critically: the variable passed to `getVarName` must be the exact same `createVar()` export that `styles.css.ts` *sets on the element* — verify with browser devtools if in doubt (see §8.3 for the authoritative dropdown constant map).
3. **`destroy()` then `init()`** after `extendDefaultConfig` for data‑API components (modal/dropdown/carousel/collapse) so the global click handlers rebind to VE selectors. Tooltip/popover are `new`‑instantiated and skip this.
4. **`pwhook-*` are stable hooks**, allowed by architecture rule #7, used for (a) Playwright screenshot actions and (b) a few JS selectors (e.g. carousel `SELECTOR_ACTIVE='.pwhook-carousel-active'`, modal `OPEN_SELECTOR`). Keep them; do not route them through contracts.

### 8.6 Converter recommendation: **unify shared state contracts** (removes the last special cases)
v1's worst per‑family hacks are the `.fade:not(.show)` rewrites in `finalizeVeSelector` (one each for modal/nav/tooltip/popover) and the per‑component show hooks. These exist only because the adapters use **distinct** hashes for the same source class (`modalShowHook`, `tooltipShow`, `popoverShow`, …).

**Recommended:** map shared state classes 1:1 to **single global contracts** — `show`, `fade`, `active`, `collapsing`, `collapsed`, `disabled`, carousel transition classes — exactly like any other class. Then:
- Bootstrap's generic `.fade` / `.fade:not(.show)` rules emit **once**, generically: `` `${scope}${fade}` `` and `` `${scope}${fade}:not(${show})` ``, and apply to *every* floating component — **no per‑family rewrite.**
- Compound selectors keep components isolated (`${scope}${modal}${show}` only matches a modal; `${scope}${dropdownMenu}${show}` only a menu), so a shared `show` hash is safe even when components nest.
- **Adapter change:** each `ve-*.ts` passes the shared hashes (`CLASS_NAME_SHOW=show`, `CLASS_NAME_FADE=fade`, carousel `CLASS_NAME_ACTIVE=active`, etc.). Keep component‑specific hooks that are genuinely component‑specific (`modalOpenHook`/`modal-open`, `modalBackdrop`, `btnShowHook`).

This is the single biggest cleanup enabling "no per‑family special cases." If a concrete interference case appears (it shouldn't, given compound selectors), fall back to a *named, documented* divergence entry for that one class — never a per‑family code branch.

**Acceptance:** modal/dropdown/carousel/collapse/toast/tooltip/popover/tab/scrollspy scenarios pass at `0.001` for `--style-loader=literal`; `finalizeVeSelector` `.fade:not(.show)` branches are gone.

---

## 9. Phase 3 — markup parity (components stay bespoke, but verified)

Because markup is hand‑written, the residual mismatch source is *"a baseline element carries a class/tag whose VE rule the component didn't stamp."* Build a check on top of the existing markup‑diff core (`scripts/capture-leaf-screenshots/markup-diff-core.mjs`, driver `scripts/diff-scenario-markup.mjs`).

For each scenario:
1. Extract the **classes and element tags** present in the baseline (stock‑Bootstrap) markup.
2. Map each through the registry → the set of **required contracts** (class contracts + element contracts from §5.3).
3. Assert the VE leaf component stamps **exactly** that set on the corresponding element.
4. Emit a **gap report** (missing / extra contracts per element). Fix components against it.

Also verify, per component:
- **`@screenshot` annotations** copied verbatim from the original `src/` component, including per‑theme height overrides (`// @screenshot sketchy: 360x303 303`) — missing ones make the harness use the `*` crop and cut off content → false mismatches.
- **`bd-example-ve2`** wrapper (not `bd-example`).

**Acceptance:** gap report is empty for a family before that family is declared parity‑complete.

---

## 10. Phase 4 — verification to zero

### 10.1 Loop
1. Generate literal for **bootstrap** (`--auto`/strict).
2. `node scripts/verify-ve-family.mjs --theme=bootstrap --family=<f> --style-loader=literal` per family @ `0.001`. Avoid `--all-families` during fix loops (slow); batch small.
3. For residual diffs, use the computed‑style technique in [`docs/ve2-debugging-mismatch-walkthrough.md`](./ve2-debugging-mismatch-walkthrough.md).
4. Fix **in the emitter generally** (or a manifest entry), never per‑family.
5. Once bootstrap is green family‑by‑family, run all families, then fan out to the other 26 themes (`--all-themes`).

### 10.2 Specificity (the one real residual risk)
Element‑owned flattens specificity: everything becomes `scope + classes`, so correctness leans on **preserved source order**. True ~95% of the time. Two checks before assuming a converter bug:
- Confirm the source‑order of the two competing rules is preserved in the output (it must be).
- The mostly‑safe cases verified: `:first-child`/`:last-child` (e.g. pagination corner radii) add equal specificity to both sides, so relative order is preserved. Mixed element‑vs‑class source selectors are the only genuine risk; if one appears, add a **documented general normalization**, not a family hack.

### 10.3 Font isolation (the Sandstone lesson) — verification correctness
Loading all 27 themes' `@import` fonts into one document causes **cross‑theme contamination**: Sandstone's `.lead{font-weight:300}` renders via fallback in its own baseline, but if another loaded theme imported Roboto 300, VE2 renders the *real* 300 → a phantom mismatch that is **not** a selector bug. Fix: during capture/verify, load **only the active theme's** `fonts.generated.css`. Without this, the loop will chase non‑existent bugs. (Implement in the capture harness / `index.html` loading path; verify by re‑running Sandstone `.lead`.)

**Acceptance:** all 27 themes, all families, 0 over `0.001`.

---

## 11. Consolidated pitfalls catalog

| Pitfall | Handling in v2 |
|---|---|
| Double remapping → fragile mismatches | One deterministic 1:1 registry; uniform translation; strict no‑fallback. |
| Unstamped element/reboot rules (`ol ol`, `button{}`) | Element‑tag stamping enforced by Phase 3 parity check + §5.3 table. |
| Utility classes "have no effect" (`bg-primary`,`text-bg-*`) | Full utility coverage in the registry; emitted + stamped directly. **Color‑mirrors deleted.** |
| `.fade:not(.show)` per‑family rewrites; per‑component show hooks | Shared global state contracts (§8.6) + unified adapter config. |
| Detached backdrop/tooltip/popover unstyled | Template/className must carry `${theme} ${vars} ${bodyText}` (§8.5.1). |
| JS toggles classes no rule matches | `bootstrap-fork` + `ve-*.ts` `extendDefaultConfig` with hashed contracts (§8). |
| JS sets literal `--bs-*` var | `getVarName(varBs…)` (§8.5.2). |
| `body` background bleed behind backdrops | Divergence manifest `body`→`bodyFrame`/`bodyText`; never stamp full `body` (§7.1). |
| `rgba(var(--bs-*-rgb), var(--bs-*-opacity,1))` | Real `var()` parser (§6.2). |
| CSS var resolved to static value | Always emit the `createVar` reference (rule #15). |
| Cross‑theme font contamination | Per‑theme font isolation at verify time (§10.3). |
| Wrong `@screenshot` crop | Copy original per‑theme annotations verbatim (§9). |
| Specificity flattening | Preserve source order; documented general normalization only if needed (§10.2). |
| Bootswatch adds extra classes (`.badge-pill`,`.card-outline-*`) | Registry is the **union of all 27 themes** (§5.1). |
| Sketchy `::before` close button, hand‑drawn radius, gradient overlay | Read **compiled** `bootstrap.css` → captured automatically; no special handling. |
| Cross‑family contract ownership disputes | Flat global registry keyed by class name; no per‑family duplication. |

---

## 12. Step‑by‑step task list for Sonnet

Work top‑to‑bottom. Each task lists files and an acceptance gate; do not advance until the gate passes.

---

**✅ T1 — Registry census.** Add `scripts/generate-ve-literal/registry.mjs` with `--census --all-themes`. Output unique classes/tags, collisions, tags missing from §5.3.
*Gate:* census runs; produce the list; confirm the 1:1 assumption (no class name needs two contracts except documented collisions).

**Done.** `scripts/generate-ve-literal/registry.mjs` created. Census ran across all 27 themes: 8 collisions found and resolved (`.h1`→`clsH1`, `.small`→`clsSmall`, etc.), 0 unresolved tokens, full TAG_TO_CONTRACT table populated for all element tags.

---

**✅ T2 — Generate contracts.** From the census, generate `theme-contract/literal/contract.css.ts` (provenance comments, grouped), extend `global-elements/contract.css.ts` (§5.3), union the `_vars.css.ts` files. Add the collision overrides file.
*Gate:* registry reader resolves every token across 27 themes; 0 unresolved.

**Done.** `ve-project2/src/theme-contract/literal/contract.css.ts` generated with ~4100 exports, each with `// .class-name` provenance comment. `global-elements/contract.css.ts` extended with full element tag table. `_vars.css.ts` files unioned across 27 themes. 0 unresolved tokens.

---

**✅ T3 — Divergence manifest.** Add `scripts/generate-ve-literal/divergence-manifest.mjs` with the `body-split` seed (§7.1).
*Gate:* manifest loads; `body` rule routes props to `bodyFrame`/`bodyText`.

**Done.** `scripts/generate-ve-literal/divergence-manifest.mjs` created with `body-split` entry: typography props (`font-*`, `line-height`, `color`) → `bodyText`; canvas props (`background-color`, `margin`) → `bodyFrame`. Standalone `body {}` filtered by `isScopeOwnedSelector` in parse step; descendant `body` in selectors like `[data-bs-theme=dark] body` routed via `isDivergenceTag` check.

---

**✅ T4 — Emitter + CLI.** Add `scripts/generate-ve-literal/emit.mjs` and `scripts/generate-ve-literal.mjs` (reuse `parse-css-tree.mjs`). Implement §6 algorithm, the `var()` parser, `:root`/`@media`/keyframes handling, manifest application. Wire `pnpm generate:ve-literal`.
*Gate:* `--theme=bootstrap --strict` → 0 skipped; spot‑checks in §6.5 pass.

**Done.** `emit.mjs` implements full selector translation (`translateSelector` → `splitByCombinators` → `translateCompoundSegment` → `translateClasses` for pseudo-function args), real `var()` parser for nested/fallback cases, `@media`/`@keyframes` handling, CSS custom property values routed to `vars: {}` blocks. CLI has `--theme`, `--all-themes`, `--strict`, `--dry-run`, `--filter`, `--show-skipped`. `pnpm generate:ve-literal` wired in `package.json`. Bootstrap: **2949 rules + 5 keyframes, 0 skipped**. All 27 themes: **82,118 total rules, 0 skipped**. TypeScript check on `ve-project2` exits 0.

---

**✅ T5 — Runtime loader.** Point `Ve2Shell` literal loader at the new output for all themes (today only bootstrap is mapped — see `literalThemeLoaders` in `Ve2Shell.tsx`). Add per‑theme font isolation (§10.3).
*Gate:* `?style-loader=literal&theme=<t>` loads each theme's literal bundle; only that theme's fonts load.

**Done.** `Ve2Shell.tsx` `literalThemeLoaders` expanded to all 27 themes. Per-theme font isolation: 20 of 27 themes have `fonts.generated.css`; their `literal/theme.ts` barrels import it before `scope.css`/`styles.css`, so each dynamic import chunk carries only that theme's fonts. The 7 themes without fonts (`brite`, `cerulean`, `litera`, `pulse`, `quartz`, `slate`, `solar`) import only `scope.css` + `styles.css`.

---

**✅ T6 — Shared state contracts + adapter unification (§8.6).** Map `show`/`fade`/`active`/`collapsing`/… to single contracts; update every `ve-*.ts` (modal/dropdown/carousel/collapse/toast/tooltip/popover) to pass the shared hashes. **No tab/scrollspy adapter** — those are static markup that stamp `active`/`show`/`fade` directly (§8.3).
*Gate:* JS‑driven families render and animate; tabs/scrollspy render the correct static state; no `.fade:not(.show)` family branches remain.

**Done.** All 5 adapters updated to import shared contracts from `literal/contract.css.ts`:
- `ve-toast.ts`: originally set to `CLASS_NAME_FADE=fade`, `CLASS_NAME_SHOW=show` from literal (reverted in T8 — see below).
- `ve-tooltip.ts`: `CLASS_NAME_SHOW=show` (from literal); `SELECTOR_ARROW`/`SELECTOR_TOOLTIP_INNER` remain runtime params.
- `ve-popover.ts`: `CLASS_NAME_SHOW=show` (from literal); selector params unchanged.
- `ve-modal.ts`: originally set to `CLASS_NAME_SHOW=show` from literal (reverted in T8 — see below).
- `ve-collapse.ts`: `CLASS_NAME_COLLAPSED=collapsed`, `CLASS_NAME_COLLAPSING=collapsing`, `CLASS_NAME_SHOW=show` (all from literal); `CLASS_NAME_COLLAPSE=accordionCollapse` remains runtime param.

Component markup updated for initial-state correctness under the literal loader:
- **Toast** (`ToastExample.tsx`): stamps `toastFade`+`toastShow` from toast contract (corrected in T8).
- **Accordion** (`AccordionExample.tsx`): open panel stamps `show`, collapsed buttons stamp `accordionButtonCollapsed` from accordion contract (corrected in T8).
- **Modals** (4 files): `fade` from literal; `modalShowHook` from modal contract passed to `configureVeModal` (corrected in T8).
- **Tooltips** (5 files): `fade` import changed to literal; `tooltipShow` removed from `createVeTooltip` call and template.
- **Popovers** (5 files): `fade` import changed to literal; `popoverShow` removed from `createVePopover` call and template.

TypeScript check exits 0.

> **T6 gap (discovered in T8):** The CSS styles for modal, accordion, and toast use *component-specific* contract symbols for their "show" state (`modalShowHook`, `accordionButtonCollapsed`, `toastFade`/`toastShow`) — NOT the shared literal `show`/`fade` — so the adapter/component changes in T6 caused those CSS rules to never fire. T8 reverted the three affected adapters to match their respective `styles.css.ts`.

---

**✅ T7 — Markup‑parity check (Phase 3).** Extend `diff-scenario-markup.mjs`/`markup-diff-core.mjs` to assert class+tag contract stamping and `@screenshot` annotations; emit gap reports.
*Gate:* gap report empty for the bootstrap families being verified.

**Done (code fixes applied; markup-ve.html re-capture pending in T8).** `scripts/capture-leaf-screenshots/markup-class-parity.mjs` implements the parity check: parses `literal/contract.css.ts` provenance comments to build a Bootstrap class → VE contract symbol map, aligns baseline and VE DOM by XPath, maps each baseline class through the registry, and reports missing contracts per element. Full audit ran across 433 bootstrap scenarios. All identified code-level gaps fixed:

- **Carousel adapter** (`ve-carousel.ts`): `CLASS_NAME_ACTIVE` now includes `active` from literal so dynamic slide stamps the literal `active` contract.
- **Dropdown adapter** (`ve-dropdown.ts`): `CLASS_NAME_SHOW_TRIGGER` and `CLASS_NAME_SHOW_MENU` now include `show` from literal alongside component-specific hooks. Fixed import ordering for Biome.
- **Tooltip templates (5 files)**: `TopTooltip`, `BottomTooltip`, `EndTooltip`, `StartTooltip`, `HtmlTooltip` — added `tooltip` and `bsTooltipAuto` from literal to the Bootstrap-created tooltip element's template class string. Fixed ref-param shadowing bug: renamed `ref={(tooltip) =>` → `ref={(el) =>` so `${tooltip}` in the template resolves to the CSS contract string, not the DOM element.
- **Popover templates (5 files)**: `BasicPopover`, `TopPopover`, `EndPopover`, `BottomPopover`, `StartPopover` — added `popover` and `bsPopoverAuto` from literal to the template class string. Same ref-param shadowing fix: renamed `ref={(popover) =>` → `ref={(el) =>`.
- **`Heading.tsx`**: replaced `h1`–`h6` (contents contract, for `<h1>`–`<h6>` elements) with `clsH1`–`clsH6` (literal, for `.h1`–`.h6` CSS classes) since baseline uses `<p class="h1">` etc.
- **`Blockquote.tsx`**: added `clsBlockquote` from literal alongside `blockquote` from contents so the `<blockquote class="blockquote">` element stamps the literal class contract.
- **Progress bars (4 files)**: `Progress25`, `Progress50`, `Progress75`, `Progress100` — added `w25`/`w50`/`w75`/`w100` from literal to progressBar div class; removed `style={{ width: '...' }}` inline style.

Biome `--write` applied across all modified dirs (11 files fixed, import sorting). TypeScript check exits 0.

**Additional parity fixes applied after first capture run** (parity check revealed residual gaps):

- **`FullscreenModal.tsx`**: `h4` (contents/heading element contract) → `clsH4` (literal `.h4` CSS class contract). Baseline uses `<h5 class="modal-title h4">` — the `.h4` class is the sizing class, not the heading element.
- **Card components (4 files)** — `FeaturedCard`, `HorizontalCard`, `ImageTopCard`, `ListCard`: removed the extra `<div class="bd-example-ve2 ${theme}">` wrapper. The baseline HTML has the card div directly inside the scope wrapper; the extra wrapper added one XPath level, causing the parity check to see the card contract on the wrong element. Removed `props.embedded` distinction (both embedded and standalone now return `cardMarkup` directly; `CardsGrid` updated to drop the `embedded` prop). TypeScript exits 0.
- **Badge parity report is stale**: `HeadingBadges` and `PillBadges` already use correct literal contracts (`clsH1`–`clsH6`, `bgPrimary`–`bgDark`, `roundedPill`, `textDark`) — the captured `markup.class-parity.json` was from a pre-T7 build. The `literal/styles.css.ts` already has all the required CSS rules for these symbols. Parity will clear after re-capture.
- **Dropdown `show` (2 per opened-dropdown scenario)**: accepted as by-design. The `show` class is added dynamically by Bootstrap JS and covered by `dropdownMenuShow`/`btnShowHook` for styling. Not a contract gap.

---

**✅ T8 — Verify bootstrap to zero (Phase 4), family by family.** Fix in the emitter/manifest only.
*Gate:* `--theme=bootstrap --all-families --style-loader=literal` → 0 families needing work @ `0.001`.

**Done.** 433/433 routes verified at ratio=0.000000. Root causes found and fixed across two sessions:

**Root cause 1 (all T7 components):** Verification was running with default `--style-loader=theme`. T7 components import from `literal/contract.css` — in theme mode, literal CSS never loads, so all literal-contract-hash rules have zero effect. Fix: always run verification with `--style-loader=literal`.

**Root cause 2 — modal backdrop opacity 0 (68% pixel diff):** `ve-modal.ts` used literal `show` for `CLASS_NAME_SHOW` (T6 change), but `styles.css.ts` rule `fade:not(modalShowHook) { opacity: 0 }` checks `modalShowHook` from modal contract. Since `modalShowHook` class was never stamped on the backdrop, the `fade:not(modalShowHook)` rule always fired → opacity stayed 0. Fixed: `ve-modal.ts` `CLASS_NAME_SHOW` and Backdrop `CLASS_NAME_SHOW` reverted to `runtime.modalShowHook`; all 4 modal components pass `modalShowHook` to `configureVeModal`.

**Root cause 3 — accordion collapsed buttons showing active color (11% pixel diff):** `AccordionExample.tsx` stamped `collapsed` from literal for collapsed buttons, but `styles.css.ts` rule `accordionButton:not(accordionButtonCollapsed) { color: activeColor }` checks `accordionButtonCollapsed` from accordion contract. Since `accordionButtonCollapsed` was never present, ALL buttons matched "not collapsed" → all showed active blue. Fixed: `AccordionExample.tsx` changed from `collapsed` (literal) to `accordionButtonCollapsed` (accordion contract).

**Root cause 4 — toast 62.8% pixel diff:** Same pattern as modal. `ve-toast.ts` used `fade`/`show` from literal for `CLASS_NAME_FADE`/`CLASS_NAME_SHOW`, but `styles.css.ts` uses `toastFade`/`toastShow` from toast contract. Fixed: `ve-toast.ts` reverted to `toastFade`/`toastShow`/`toastShowing`; `ToastExample.tsx` changed from `fade`/`show` (literal) to `toastFade`/`toastShow` (toast contract).

**Root cause 5 — dropdown menu stays hidden when opened (ratio=0.028519):** `literal/styles.css.ts` had `${dropdownMenu}${show} { display: block }` using the literal `show` class. VE Bootstrap JS stamps `dropdownMenuShow` (from contract), not `show`. So the display:block rule never fired and the menu remained `display: none`. Fix: changed rule to `${dropdownMenu}${dropdownMenuShow}` and added `dropdownMenuShow` to the dropdowns import.

**Root cause 6 — end-aligned dropdown menu appearing on wrong side (Popper bottom-start instead of bottom-end):** `ve-dropdown.ts` had `CSS_VARIABLE_POSITION: getVarName(varBsDropdownPosition)`. The variable `varBsDropdownPosition` is never set anywhere in `styles.css.ts` — the actual variable set on `dropdownMenuEnd` elements is `varBsPosition` from `utilities/generated/_vars.css`. Since the variable read returned empty, Popper always defaulted to `bottom-start`. Fix: changed import and usage to `varBsPosition`. Confirmed via debug: the element had `--varBsPosition__<hash>: "end"` in computed style; `varBsDropdownPosition` was absent entirely.

**Root cause 7 — dropdown divider 1px too tall (`<hr>` default border):** Chromium UA stylesheet applies `border-style: inset; border-width: 1px` to all `<hr>` elements, which produces a bottom border. Bootstrap's global CSS resets this with `hr { border: 0 }` before `.dropdown-divider` adds back only the top border. VE's `dropdownDivider` rule set `borderTop` but never reset the UA border, so the divider was 1px taller than the baseline (ratio=0.010349, 760 pixels different). Fix: added `border: '0'` before `borderTop` in the `dropdownDivider` globalStyle rule.

**Root cause 8 — trigger button border mismatch when dropdown is open (ratio=0.004984):** `literal/styles.css.ts` had a `${btn}${show}` rule for open-button active styling, but VE Bootstrap JS stamps `btnShowHook` (from contract) on the trigger, not `show`. The `${btn}${btnShowHook}` rule was completely absent. Fix: added `btnShowHook` to dropdowns import; added `${btn}${btnShowHook}` (color/bg/border) and `${btn}${btnShowHook}:focus-visible` (box-shadow) rules, mirroring the existing `${btn}${show}` rules.

**Lessons learned:**
- Use `--route=/ui/dropdowns/**` (micromatch glob) to filter verification to specific routes, avoiding full 433-route runs during the fix loop.
- When a VE JS module uses a CSS variable (e.g., `CSS_VARIABLE_POSITION`), trace exactly which variable the *literal CSS* sets on the element — `varBsDropdownPosition` and `varBsPosition` look similar but are different exports from different files.
- Browser UA stylesheets can introduce defaults (like `<hr>` border) that Bootstrap's global resets neutralize. Any VE component rule that doesn't include those resets will diverge. Check UA defaults whenever a small pixel difference (< 2px) appears on a simple element.
- Every `${show}` usage in `literal/styles.css.ts` is suspect: identify which contract class VE JS actually stamps and replace accordingly. The pattern is: literal `show` → contract hook class (`btnShowHook`, `dropdownMenuShow`, `modalShowHook`, etc.).

---

**⏳ T9 — Fan out to 26 Bootswatch themes.** `generate:ve-literal --all-themes`; verify per theme; fix value‑sourcing (`theme.css`/`style.css`) issues only.
*Gate:* all 27 themes → 0 over `0.001`.

**Next task.** Prerequisite: backport all `literal/styles.css.ts` fixes from T8 (dropdown display rule, hr border reset, btnShowHook rules) into the generator (`scripts/generate-ve-theme/emit-literal.mjs` or equivalent emitter) before generating theme variants.

**Working method (MANDATORY — do not deviate):**
1. Run `generate:ve-literal --theme=<slug>` for the next theme.
2. Run verification with `--verify-ve-rendering --theme=<slug> --bail --style-loader=literal`.
3. On the first mismatch: **stop, diagnose, and fix the root cause in the emitter/generator** (never skip the route, never work around it in the component).
4. Regenerate the theme after each emitter fix, rerun verification from scratch (no `--skip-to-route`).
5. Only when verification exits 0 for that theme, advance to the next theme.

**Rationale:** `--bail` stops at the first mismatch intentionally. Skipping past a mismatch with `--skip-to-route` hides bugs that may affect multiple themes. Every fix must go into the generator so it fans out to all remaining themes automatically.

### T9 progress tracker (27 themes)

`✅` = verified to zero @ `0.001` (`--style-loader=literal`). Order is the fan-out order; remaining themes are alphabetical (no fixed order required — pick the next `⏳`).

| # | Theme | Status | Notes / commit |
|---|-------|--------|----------------|
| 1 | bootstrap | ✅ | T8 baseline — 433/433 @ 0.000000 |
| 2 | brite | ✅ | `2ebfac03` — emitter/harness fixes; `<a>` link-contract gap; opened-dropdown flaky fix |
| 3 | cerulean | ✅ | `c54d3b26` — fan-out fixes via regen |
| 4 | quartz | ✅ | `a84141ca` — gradient body + `flow-root`; migrated remaining themes to new scope format |
| 5 | sketchy | ✅ | `63205a18` — Popper font-race harness fix |
| 6 | cosmo | ⏳ | next |
| 7 | cyborg | ✅ | 433/433 @ 0.000000. No emitter fix — baselines regenerated (stale), VE already rendered correctly. (Capture initially failed on the preview-server 45s cold-start readiness timeout — slow `externalize-deps` plugin; warming Vite's preview cache once fixed it.) |
| 8 | darkly | ✅ | 433/433 @ 0.000000. No emitter fix — baselines regenerated (stale), VE already rendered correctly. |
| 9 | flatly | ⏳ | |
| 10 | journal | ✅ | 433/433 @ 0.000000. No emitter fix — baselines regenerated (stale), VE already rendered correctly. |
| 11 | litera | ⏳ | no `fonts.generated.css` |
| 12 | lumen | ✅ | 433/433 @ 0.000000. Baselines regenerated. Four fixes: (a) **carousel autoplay race** — even with the superhero pause-order fix, lumen's slow hydration let the `data-bs-ride` carousel auto-advance before `stabilizeForScreenshot` ran; harness now force-resets uncontrolled (static-state) carousels to slide 0 via class manipulation (interactive scenarios mark `data-pw-carousel-controlled` to opt out). (b) **pagination `<li>` elLi gap** — legacy lumen `.pagination > li > a { text-transform:uppercase; … }` targets `<li>` by tag, but the 3 pagination components stamped only `pageItem`, not `elLi` (breadcrumb already stamped elLi); added elLi. (c) **§10.2 specificity flatten** — that legacy rule's element tags became contract classes + per-segment scope → `${pagination}>${elLi}>${link}` = 0,6,0, outranking `.disabled>.page-link {color:#999}` (0,4,0) so the disabled Previous link rendered #555. Added a manifest `LOWER_ELEMENT_SPECIFICITY_SELECTORS` list that `:where()`-wraps pure-element segments for listed selectors (lumen `.pagination > li` only; sketchy `.table-dark th` deliberately excluded — it relies on the inflated specificity). (d) **modal-open race** — no warmup before the opened-modal click meant lumen's slow hydration hadn't bound the modal JS; added a 600ms `opened-modal` warmup. |
| 13 | lux | ✅ | 433/433 @ 0.000000. Baselines regenerated first. Two general emitter fixes: (a) **thead contract split** — `thead`/`tbody`/`tfoot` all mapped to one `tableSection`, collapsing `.table > thead { vertical-align:bottom }` and `.table > tbody { vertical-align:inherit }` onto one selector (thead's `bottom` won for tbody too); only lux exposed it because its `th { font-size:.875rem }` makes the misaligned tbody digits visible. Added a `tableHead` contract (`thead`→`tableHead`); 13 table components stamp it. (b) **substring class-attribute expansion** — `[class*=btn-outline-] { border-width:2px }` can't pass through in the element-owned model (classes are hashed), so the emitter now expands `[class*=…]`/`[class^=…]` etc. to the matching contract refs (here all 8 `btnOutline*`). Both fixes regenerated all themes; tbody `bottom`→`inherit` is the correct baseline behavior (materia tables re-verified clean). |
| 14 | materia | ✅ | 433/433 @ 0.000000. Two general generator fixes: (a) scope-emitter now captures grouped `body, input, button { letter-spacing }` onto bodyText; (b) manifest EXTRA_RULES gives `formSwitch` `isolation:isolate` so the Material switch `z-index:-1` focus-glow composites over the bodyFrame bg (isolating bodyFrame itself traps modal dialogs — don't). |
| 15 | minty | ✅ | 433/433 @ 0.000000. No emitter fix — baselines were stale/missing (VE already rendered correctly). Regenerated only the failing families: `ui/buttons/**` (whole tree absent), `ui/button-group` (stale active-state), `ui/dropdowns/**` (stale color + missing hover/opened states), `ui/carousel` (missing interactive states), `ui/list-group` (stale text subpixel), `ui/navbar` (lazy-logo race), `ui/popovers` (Popper-settle subpixel). Also added the `style.css`/`theme.css` metadata minty was missing. |
| 16 | morph | ✅ | 433/433 @ 0.000000. No emitter fix — the only mismatch was a stale `navbar-example` baseline (captured with the lazy-loaded brand logo broken/unloaded; all other themes show the clean "B"). Rebuilt the morph navbar baseline; VE already rendered correctly. |
| 17 | pulse | ⏳ | no `fonts.generated.css` |
| 18 | sandstone | ✅ | 433/433 @ 0.000000; font-isolation (§10.3) already handled by T5 — no emitter fix needed |
| 19 | simplex | ✅ | 433/433 @ 0.000000. No emitter fix — baselines regenerated (stale), VE already rendered correctly. |
| 20 | slate | ✅ | 433/433 @ 0.000000. General fix: `legend-element-mirror` divergence mirrors bare `legend {…}` element rules (which map to `elLegend`) onto the `legend` class contract the component actually stamps — so slate's `legend { color:#fff }` override (and any theme's) reaches `<legend>`. Replaced the static `legend-class` EXTRA_RULE (it copied only reboot props, missing theme color). |
| 21 | solar | ✅ | 433/433 @ 0.000000. No emitter fix — the only mismatch was a stale `html-tooltip/opened-tooltip` baseline (Popper-settled at a slightly different position than the fresh VE capture; computed-style/rect comparison confirmed baseline and VE render the tooltip pixel-identically — same rect, same em/u/b metrics). Re-captured that one baseline. |
| 22 | spacelab | ✅ | 433/433 @ 0.000000. No emitter fix — baselines regenerated (stale), VE already rendered correctly. |
| 23 | superhero | ✅ | 433/433 @ 0.000000. Baselines were broadly stale/incomplete (all `ui/buttons/**` baselines missing; carousel interactive baselines missing; stale breadcrumb hover + broken-logo navbar) — regenerated all superhero baselines. Two **general harness fixes** (fan out to all themes): (a) **carousel pause-order** — `prepareForCapture` now pauses auto-cycling carousels BEFORE the multi-second font wait, not after, so a slow-font theme's `data-bs-ride` carousel can't auto-advance a slide mid-wait (was: VE on slide 2, baseline on slide 1). (b) **image-decode wait** — `prepareForCapture` forces `loading="lazy"` images eager and awaits decode, so the navbar brand logo never captures as a broken-image placeholder on either side (this race hit morph too, fixed there by luck on re-capture). One flaky modal-open timeout (centered-scrollable-modal) passed on isolated re-run. |
| 24 | united | ✅ | 433/433 @ 0.000000. Full baseline regen first, then verified clean on the first pass — no emitter fix (VE already rendered correctly). |
| 25 | vapor | ✅ | 433/433 @ 0.000000. Four general fixes: (a) scope-emitter captures body `text-shadow` (vapor's neon glow) onto bodyText; (b) **font isolation** — vite.config `transformIndexHtml` (order:'pre') strips non-active themes' font links so only the active theme's fonts load (else another theme's `Lato:ital` made vapor's synthesized-oblique `<cite>` render real-italic → reflow); (c) **scoped `modalOpenHook`** — fork `modal.js` splits a multi-class `CLASS_NAME_OPEN`, modal components stamp `${theme} ${modalOpenHook}` on `<body>`, scope-emitter scopes the rule `${scope}${modalOpenHook}` (else all 29 statically-imported scope.css collide on the global rule, leaking letter-spacing into modal text). Required regenerating ALL themes' scope.css. |
| 26 | yeti | ⏳ | |
| 27 | zephyr | ⏳ | |

**Done: 21/27. Next: cosmo.** Follow the mandatory working method above for each.

> **Cross-theme contamination (learned on vapor):** the VE app loads ALL themes' assets together (index.html links every theme's `fonts.generated.css`; `Ve2Shell` statically imports every theme's `scope.css`). Two contamination classes bit vapor: (1) **fonts** — a foreign `Lato:ital` face changed vapor's italic metrics; fixed by stripping non-active font links at build (`transformIndexHtml`, order:'pre'). (2) **the global `${modalOpenHook}` rule** — emitted unscoped by every theme's scope.css, so the body's modal-open typography was a last-wins cross-theme mix, leaking `letter-spacing` into modal text via inheritance; fixed by scoping it `${scope}${modalOpenHook}` and stamping `${theme} ${modalOpenHook}` on `<body>` (fork `modal.js` now splits a space-separated `CLASS_NAME_OPEN`). Both fixes are general; scoping required regenerating every theme's scope.css, so already-verified themes must be re-checked (modal routes at minimum). The fork is edited in `bootstrap-fork/js/src/` then rebuilt with `npm run js-compile` inside the fork.

> **bodyFrame + `z-index:-1` (learned on materia):** the page background lives on the `bodyFrame` DIV, not the `<body>` canvas (body-split §7.1). Any Bootstrap element using `z-index:-1` to sit behind its parent but over the page bg (Materia's `.form-switch .form-check-input::after` focus-glow) paints behind the opaque bodyFrame div and vanishes. Fix by isolating the element's nearest transparent component ancestor (`formSwitch`), NOT `bodyFrame` — isolating bodyFrame makes it a stacking context that traps body-portaled modal dialogs below their backdrop (84% diff). The two generator fixes above fan out to every theme on regen and are benign where the construct is absent.

> **Harness gotcha (learned on sandstone):** never start a second capture/verify run while another is still alive — both build and both bind the preview server to port 4175, and the browser attaches to a half-dead server → an indefinite hang with no per-scenario log. Stop the old run first (`TaskStop`), confirm port 4175 is free, then launch. A "hang right after the preview-server URL prints, before `[1/N]`" is this collision, not a theme bug.

---

**⏳ T10 — Delete v1 + update docs.** Remove `css-utils` mapping tables, color‑mirrors, supplements, `finalizeVeSelector` special cases, `*`‑cell guessing, old `generate-ve-theme-literal.mjs`. Update `ve-architecture.md` (combinators allowed when each named segment is scope+contract; `*`/pseudo passthrough; 1:1 registry; strict no‑fallback) and `ve2-literal-converter.md`.
*Gate:* repo builds; no references to deleted modules; docs match behavior.

---

## 13. File inventory

**Create**
- `scripts/generate-ve-literal.mjs` (CLI)
- `scripts/generate-ve-literal/registry.mjs`
- `scripts/generate-ve-literal/emit.mjs`
- `scripts/generate-ve-literal/divergence-manifest.mjs`
- `scripts/generate-ve-literal/value-format.mjs` (the `var()` parser)
- `ve-project2/src/theme-contract/literal/contract.css.ts` (generated)

> No `ve-tab.ts` / scrollspy adapter — tabs and scrollspy are static markup (§8.3).

**Modify**
- `scripts/generate-ve-theme-literal/parse-css-tree.mjs` (reuse; minor exports if needed)
- `ve-project2/src/theme-contract/global-elements/contract.css.ts` (element table)
- `ve-project2/src/theme-contract/**/_vars.css.ts` (union vars)
- `ve-project2/src/components/shell/Ve2Shell.tsx` (`literalThemeLoaders` for all themes; font isolation)
- `ve-project2/src/components/ui/*/ve-*.ts` (shared state hashes, §8.6)
- `scripts/diff-scenario-markup.mjs`, `scripts/capture-leaf-screenshots/markup-diff-core.mjs` (parity check)
- bespoke leaf components (fix stamping gaps from the parity report)
- `docs/ve-architecture.md`, `docs/ve2-literal-converter.md`

**Delete (T10, after parity)**
- `scripts/generate-ve-theme-literal.mjs` and the heuristic modules: `badge-color-mirror.mjs`, `progress-color-mirror.mjs`, `spinner-color-mirror.mjs`, `emit-*-supplement.mjs`, `auto-contract.mjs`/`auto-vars.mjs` (if subsumed), and the `finalizeVeSelector` special‑case block + per‑family tables in `rule-transpiler.mjs`/`css-utils.mjs`.

---

## 14. Open risks

1. **Specificity flattening** — the one genuine residual; mitigated by source order + the §10.2 checks. Surface any case explicitly rather than pre‑hacking.
2. **Adapter unification (§8.6)** — recommended but touches the fork adapters; if an interference case appears, fall back to a *named manifest entry* for that one class.
3. **Bespoke‑component drift** — Phase 3 parity check is the guard; if manual upkeep proves heavy, a follow‑up could generate component class lists from baseline markup (out of scope here).
