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
