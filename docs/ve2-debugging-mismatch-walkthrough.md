# VE2 Debugging Walkthrough: Computed-Style Comparison

When a screenshot mismatch is hard to diagnose from the diff image alone, use a
Playwright script to compare computed CSS properties between the baseline
(original app at `localhost:4173`) and the VE2 build (`127.0.0.1:4175`) for the
same route. This walkthrough documents that technique through a real case: the
`/ui/alerts/heading-alert` mismatch in the Vapor theme.

---

## When to use this technique

- The diff image shows a subtle colour or size difference but it's unclear which
  CSS property is wrong.
- You suspect a theme-scope variable resolves to an unexpected value but you
  cannot see it from the source.
- You've already checked the obvious rules and the mismatch persists.

---

## Prerequisites

Both preview servers must be running at the same time:

```bash
# terminal 1 — baseline
pnpm preview           # → http://localhost:4173

# terminal 2 — VE2
pnpm ve2:preview       # → http://127.0.0.1:4175
```

---

## Walkthrough: heading-alert HR invisible in Vapor

### 1. Observe the mismatch

Running the screenshot harness reported:

```
MISMATCH vapor ui/alerts/heading-alert  ratio 0.031201
```

The diff image showed a faint horizontal band mid-way through the alert where
the `<hr>` should appear. In the baseline the HR was visible; in VE2 it was
invisible.

### 2. Write a Playwright comparison script

Create `scripts/debug-heading-alert.mjs` (already in the repo). The script
opens both URLs in a headless browser, queries the relevant DOM nodes, and reads
`getComputedStyle()` on each one.

```js
// scripts/debug-heading-alert.mjs
import { chromium } from 'playwright'

const BASELINE_URL =
  'http://localhost:4173/ui/alerts/heading-alert?theme=vapor&css=local&state=static'
const VE2_URL =
  'http://127.0.0.1:4175/ui/alerts/heading-alert?theme=vapor'

const PROPS = [
  'color', 'backgroundColor', 'opacity',
  'borderTopWidth', 'borderTopStyle', 'borderTopColor',
  'textShadow', 'boxShadow',
]

async function getHeadingAlertNodeStyles(page) {
  return page.evaluate((props) => {
    const heading = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
      .find(el => el.textContent?.trim() === 'Well done!')
    if (!heading) return { error: 'heading not found' }

    const alert = heading.closest('div')
    const hr = alert?.querySelector('hr')

    const read = (el) => {
      if (!el) return { error: 'node not found' }
      const cs = getComputedStyle(el)
      const out = {}
      for (const p of props) out[p] = cs[p]
      return out
    }

    return {
      headingStyles: read(heading),
      alertStyles: read(alert),
      hrStyles: read(hr),
    }
  }, PROPS)
}

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } })

const bPage = await ctx.newPage()
await bPage.goto(BASELINE_URL, { waitUntil: 'networkidle' })
console.log('\n=== BASELINE ===')
console.log(await getHeadingAlertNodeStyles(bPage))

const vPage = await ctx.newPage()
await vPage.goto(VE2_URL, { waitUntil: 'networkidle' })
console.log('\n=== VE2 ===')
console.log(await getHeadingAlertNodeStyles(vPage))

await browser.close()
```

Run it while both servers are up:

```bash
node scripts/debug-heading-alert.mjs
```

### 3. Read the output

```
=== BASELINE ===
{
  hrStyles: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'rgb(111, 66, 193)',
    opacity: '1',
    …
  }
}

=== VE2 ===
{
  hrStyles: {
    borderTopWidth: '0px',   // ← the culprit
    borderTopStyle: 'solid',
    borderTopColor: 'rgb(111, 66, 193)',
    opacity: '1',
    …
  }
}
```

`borderTopWidth: 0px` in VE2 explained why the HR was invisible. The CSS value
was correct for `borderTopStyle` and `borderTopColor`, so the property that was
wrong was the width — not colour or opacity.

### 4. Trace to the root cause

The Vapor `scope.css.ts` intentionally sets `varBsBorderWidth` to `'0'`:

```ts
// ve-project2/src/themes/vapor/scope.css.ts  (line ~150)
vars: {
  [varBsBorderWidth]: '0',   // Vapor uses no visible border width globally
  …
}
```

The HR rule in `themes/vapor/contents/styles.css.ts` used that variable:

```ts
globalStyle(`${vaporScope}${horizontalRule}`, {
  border: 0,
  borderTop: `${varBsBorderWidth} solid`,  // resolves to '0 solid' → 0px
  …
})
```

Because `varBsBorderWidth` resolves to `'0'` everywhere inside the Vapor scope,
the border-top width was always zero.

### 5. Apply the fix

Replace the CSS variable reference with a hard-coded pixel value for cases where
the element *should* have a visible border despite the global override:

```ts
globalStyle(`${vaporScope}${horizontalRule}`, {
  border: 0,
  borderTop: '1px solid',   // hard-coded; varBsBorderWidth = '0' in Vapor
  borderTopColor: '#6f42c1',
  opacity: 1,
  …
})
```

### 6. Verify

Re-run the screenshot harness for that route:

```bash
node scripts/capture-leaf-screenshots.mjs \
  --theme=vapor --verify-ve-rendering --no-writeback \
  "--route=/ui/alerts/heading-alert"
```

Expected output:

```
verification OK  0.000000 - 0/96120
```

---

## Key lesson: `varBsBorderWidth = '0'` in Vapor

Vapor deliberately zeros out `--bs-border-width` globally (to produce a
borderless look for most elements). Any individual element that **should** have a
visible border (HR, card dividers, etc.) must use a hard-coded pixel value in
its VE2 rule instead of `${varBsBorderWidth}`.

This is a specific instance of the general rule: **CSS var references must stay
as var references** — *unless* the theme scope overrides that var to a value
that breaks the specific element, in which case you must hard-code the element's
own value and add a comment explaining why.

---

## Walkthrough: figure-example figcaption gap in Bootstrap literal mode

### 1. Observe the mismatch

The screenshot harness (with `--style-loader=literal`) reported:

```
MISMATCH bootstrap contents/figures/figure-example  622px  ratio=0.005817
```

The diff image showed red/yellow pixels concentrated along the figcaption text
at the bottom of the figure. The gray SVG placeholder above it looked identical.
This pattern — differing pixels along a text block, not a colour band — signals a
**vertical shift**: the content is the same but positioned a few pixels lower
in one of the two screenshots.

### 2. Identify the shift pattern quickly

When the diff shows shifted text rather than changed colour, the culprit is
almost always one of:

- `vertical-align` on an inline replaced element (img, svg, iframe) sitting
  above the shifted content — the **baseline gap**
- `margin-bottom` / `margin-top` on a container element
- `display` changing from `inline` to `block` or vice versa

**Do not** start by investigating colour, font, or timing. Start with the element
directly above the shifted content and check those three properties first.

### 3. Write a targeted Playwright comparison script

```js
// scripts/debug-figure-example.mjs
import { chromium } from 'playwright'

const BASELINE_URL =
  'http://localhost:4173/contents/figures/figure-example?theme=bootstrap&css=local&state=static'
const VE_URL =
  'http://127.0.0.1:4175/contents/figures/figure-example?theme=bootstrap&style-loader=literal'

async function getStyles(page) {
  return page.evaluate(() => {
    const figure = document.querySelector('figure')
    const svg = figure?.querySelector('svg')
    const figcaption = figure?.querySelector('figcaption')
    const read = (el, props) => {
      if (!el) return { error: 'not found' }
      const cs = getComputedStyle(el)
      const out = {}
      for (const p of props) out[p] = cs[p]
      out._rect = JSON.stringify(el.getBoundingClientRect())
      return out
    }
    return {
      figure:     read(figure,     ['display', 'marginBottom']),
      svg:        read(svg,        ['verticalAlign', 'height', 'maxWidth', 'marginBottom']),
      figcaption: read(figcaption, ['fontSize', 'color', 'lineHeight']),
    }
  })
}

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } })

const bPage = await ctx.newPage()
await bPage.goto(BASELINE_URL, { waitUntil: 'networkidle' })
console.log('\n=== BASELINE ===')
console.log(await getStyles(bPage))

const vPage = await ctx.newPage()
await vPage.goto(VE_URL, { waitUntil: 'networkidle' })
console.log('\n=== VE (literal) ===')
console.log(await getStyles(vPage))

await browser.close()
```

Key points about this script vs the capture harness:

- Use `waitUntil: 'networkidle'` (not `'load'`). The literal theme CSS is
  a 413 KB chunk loaded via a dynamic `import()` after the page `load` event.
  The capture harness uses `'load'` + a short delay which may fire before the
  CSS chunk arrives, causing the harness screenshot to miss the literal styles.
  `networkidle` waits until the browser has no pending requests, ensuring the
  CSS is fully applied before you read computed styles.
- Target the element **above** the shifted content first (the SVG), not the
  shifted element itself (the figcaption).

### 4. Read the output

```
=== BASELINE ===
{ svg: { verticalAlign: 'middle', height: '252px', … } }

=== VE (literal) ===
{ svg: { verticalAlign: 'baseline', … } }   // ← the culprit
```

`verticalAlign: baseline` explains the gap. Inline replaced elements (img, svg)
with `vertical-align: baseline` leave a descender gap below them — the space
reserved for text descenders. Bootstrap eliminates this with its global rule:

```css
img, svg { vertical-align: middle; }
```

In VE this is expressed as a `globalStyle` in `literal/styles.css.ts`:

```ts
globalStyle(`${bootstrapScope} .${elSvg}`, { verticalAlign: 'middle' })
```

### 5. Verify that the rule exists in the compiled CSS

Before concluding anything, check whether the rule is actually present in the
production bundle. Find the class hash from the markup or DevTools, then:

```bash
# replace <hash> with the actual elSvg hash you see in the element's class list
grep -o "[^}]*<hash>[^}]*}" ve-project2/dist/assets/theme-bootstrap-lists-*.css
```

In this case the rule **was** present in the dist bundle:

```css
.scope_bootstrapScope__qve0r20.contract_elSvg__6tr2961b { vertical-align: middle }
```

But **inspecting the running Vite dev server in DevTools** told a different story:
the element had both `scope_bootstrapScope__qve0r20` and `contract_elSvg__6tr2961b`
in its class list, yet the rule targeting those classes was completely absent from
the Styles panel — even after the page had been fully idle for minutes. This is
**not** a timing issue.

### 6. Root cause: vanilla-extract silently drops rules from very large files in dev mode

`literal/styles.css.ts` is 24 000+ lines. In dev mode the vanilla-extract Vite
plugin processes each `.css.ts` file through its Node evaluator to collect all
`style()` and `globalStyle()` calls. At this scale the evaluator appears to stop
collecting rules before reaching the end of the file, silently dropping any
`globalStyle()` calls that come after some internal limit. Rules for `elSvg`,
`elImg`, and other global-element classes that happen to live in the latter half
of the file are therefore absent from the dev-mode virtual CSS sheet, even though
the exact same file compiles correctly in the production build (where the Rollup
bundler processes the whole file without that limit).

**How to confirm**: open the element in DevTools Styles panel (not Computed).
The Styles panel lists every matched rule including overridden ones. If the rule
is not listed at all, the CSS was never injected — not overridden, not deferred,
simply absent.

**Consequence for the capture harness**: the harness runs against the **preview**
server (the dist build), where the rule IS present. Any remaining screenshot
mismatch on the preview server needs a separate explanation — see the quick
diagnostic workflow below.

**Long-term fix**: split `literal/styles.css.ts` into smaller per-family files
so each file stays well within vanilla-extract's dev-mode processing capacity.
Until that refactor lands, always verify bugs against the preview build
(`pnpm ve2:preview`), not the dev server, because the dev server may be missing
rules that the production build correctly generates.

### 7. Resolution: what was actually changed

Three independent fixes were needed to close this mismatch:

**Fix 1 — CLI parsing bug** (`scripts/capture-leaf-screenshots/cli.mjs`):

`parseArgValue` was called with `'--style-loader'` (no `=`) as prefix. For arg
`--style-loader=literal` it returned `'=literal'` instead of `'literal'`, so
`ve2StyleLoader === 'literal'` was always false and every run silently used
theme mode instead of literal mode. All previous verification runs were testing
the wrong loader.

```diff
- ve2StyleLoader: parseArgValue(argv, '--style-loader', 'theme'),
+ ve2StyleLoader: parseArgValue(argv, '--style-loader=', 'theme'),
```

**Fix 2 — missing `elFigure` class** (`ve-project2/src/components/contents/figures/FigureExample.tsx`):

The `<figure>` element was missing the `elFigure` contract class. Bootstrap's
global rule `figure { margin: 0 0 1rem }` is expressed in VE as a `globalStyle`
targeting `elFigure`. Without that class on the element the margin rule never
matched.

```diff
- <figure class={`${theme} ${figure}`}>
+ <figure class={`${theme} ${elFigure} ${figure}`}>
```

**Fix 3 — hash mismatch in `literal/styles.css.ts`**:

Several figure-related and image-related names (`figure`, `figureCaption`,
`figureImg`, `imgFluid`, `imgThumbnail`, `rounded`, `containerFluid`) were
imported from `literal/contract.css.ts`, which generates its own `style({})`
entries with different hashes than the canonical contract files. Because
components import those same names from the canonical files, the CSS rules
targeted the wrong hash selectors.

Fixed by moving each name to its canonical import:

```ts
// added canonical import
import { figure, figureCaption, figureImg, imgFluid, imgThumbnail, rounded }
  from '../../../theme-contract/contents/images/contract.css'

// updated existing import to add containerFluid
import { containerFluid, varBsGutterX, varBsGutterY }
  from '../../../theme-contract/layout/container.css'

// removed those names from the literal/contract.css import block
```

### 8. Pitfalls uncovered by this investigation

**Pitfall 1: `--style-loader=literal` silently does nothing if the CLI arg is wrong.**
Always confirm literal mode is active by checking that the VE preview URL
contains `style-loader=literal`. If the URL shows `style-loader=theme`, the
arg is not being parsed. Reproduce: add a `console.log(ve2StyleLoader)` just
before the URL is built in `ve2-verification.mjs`.

**Pitfall 2: VE dev server drops rules from `literal/styles.css.ts`.**
The file is 24 000+ lines. The vanilla-extract dev-mode evaluator silently stops
collecting `globalStyle` calls before reaching the end of the file. Rules for
`elSvg`, `elImg`, and other global-element classes are absent in dev mode but
present in the production build. **Always test mismatches against
`pnpm ve2:preview` (the dist build), not `pnpm ve2:dev`.**

**Pitfall 3: importing contract classes from `literal/contract.css.ts` causes hash mismatches.**
`literal/contract.css.ts` is a generated file that re-declares every Bootstrap
class with its own `style({})` entries. Those entries produce different hashes
from the canonical contract files that components import. Any `globalStyle` in
`literal/styles.css.ts` that references a class from `literal/contract.css.ts`
will generate a CSS rule targeting the wrong selector and will never match.
Always import contract classes from their canonical source file.

**Pitfall 4: missing `el*` classes on component elements.**
See the checklist below.

---

## `el*` class checklist: prevent this class of bug

Bootstrap applies many properties via **tag-based selectors** (`img`, `svg`,
`a`, `figure`, `abbr`, etc.). In VE these rules live in `literal/styles.css.ts`
as `globalStyle` calls targeting the corresponding `el*` contract class. If a
component element is missing its `el*` class, those tag-based rules will not
apply and the element will differ visually from baseline.

**Rule: every component element that Bootstrap styles via a tag selector must
carry the matching `el*` contract class.**

Tag → contract class mapping:

| HTML tag    | Contract class  | Source file                                          |
|-------------|-----------------|------------------------------------------------------|
| `<img>`     | `elImg`         | `theme-contract/global-elements/contract.css.ts`     |
| `<svg>`     | `elSvg`         | `theme-contract/global-elements/contract.css.ts`     |
| `<figure>`  | `elFigure`      | `theme-contract/global-elements/contract.css.ts`     |
| `<a>`       | `elA`           | `theme-contract/global-elements/contract.css.ts`     |
| `<abbr>`    | `elAbbr`        | `theme-contract/global-elements/contract.css.ts`     |
| `<address>` | `elAddress`     | `theme-contract/global-elements/contract.css.ts`     |
| `<b>`,`<strong>` | `elB`      | `theme-contract/global-elements/contract.css.ts`     |

When writing or reviewing a VE component, run through each rendered HTML element
and ask: _does Bootstrap's CSS target this tag directly?_ If yes, the `el*`
class must be present.

---

## Quick diagnostic workflow for any new mismatch

```
1. Look at the diff image (.verify.png)
   ├── Pixels differ along a text block / content is shifted vertically
   │   → check vertical-align, margin-top/bottom, display on the element ABOVE the shift
   ├── A colour band or tinted area
   │   → check background-color, color, opacity, CSS variables
   └── An element is missing entirely (blank area in diff)
       → check display: none, visibility, opacity: 0, z-index

2. Write a minimal Playwright script (networkidle wait)
   → compare getComputedStyle() for the 3–5 most likely properties
   → run against BOTH baseline and VE literal URLs side-by-side

3. Find the differing property (e.g. verticalAlign: baseline vs middle)

4. Grep the compiled dist CSS for the relevant rule:
   grep "<hash>" ve-project2/dist/assets/theme-bootstrap-lists-*.css
   ├── Rule present in dist → the production build is correct
   │   ├── Also present in DevTools Styles panel → specificity conflict
   │   │   → look for a higher-specificity rule overriding the property
   │   └── Absent from DevTools Styles panel (dev server) → VE large-file limit
   │       → always verify on preview server, not dev server; long-term fix is
   │         to split literal/styles.css.ts into smaller per-family files
   └── Rule absent from dist → VE compilation issue or wrong import source
       → check literal/styles.css.ts for the globalStyle targeting that class
       → check that literal/styles.css.ts imports contract classes from their
         CANONICAL files, not from literal/contract.css.ts (which has different
         hashes and causes rules to target the wrong selector)

5. Apply fix → rebuild → re-run harness for that route only
```

---

## Adapting the script for other routes / properties

1. Change `BASELINE_URL` and `VE2_URL` to the route you are investigating.
2. Adjust the DOM query inside `page.evaluate` to target the element you
   suspect (use `querySelector`, class name, text content, etc.).
3. Add or remove entries in `PROPS` to focus on the property family you care
   about (`padding*`, `font*`, `background*`, etc.).
4. Run and compare the two printed objects side-by-side to spot the divergence.

The script is intentionally small and self-contained so it can be adapted
quickly for any new mismatch.

---

## Related documents

- [`docs/ve-architecture.md`](./ve-architecture.md) — full architecture reference
- [`docs/ve2-migration-playbook.md`](./ve2-migration-playbook.md) — step-by-step
  migration guide and common gotchas table
- [`scripts/debug-heading-alert.mjs`](../scripts/debug-heading-alert.mjs) — the
  Playwright script created during this investigation
- [`scripts/debug-figure-example.mjs`](../scripts/debug-figure-example.mjs) — the
  Playwright script created during this investigation
