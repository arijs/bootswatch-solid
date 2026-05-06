/**
 * Debug script: compare badge and card-tabs computed styles between baseline (4173) and VE2 (4175)
 */
import { chromium } from 'playwright'

const BASE = 'http://localhost:4173/sandstone'
const VE2  = 'http://localhost:4175/sandstone'

const PAGES = [
  { path: '/ui/badge/heading-badges', selector: '.badge', label: 'heading-badge (first)' },
  { path: '/ui/badge/pill-badges',    selector: '.badge', label: 'pill-badge (first)' },
  { path: '/ui/card-tabs/card-tabs-example', selector: '.card', label: 'card' },
  { path: '/ui/card-tabs/card-tabs-example', selector: '.nav-tabs .nav-link', label: 'nav-tabs nav-link (first)' },
]

const PROPS = [
  'color', 'backgroundColor', 'borderColor', 'borderTopColor', 'borderBottomColor',
  'fontSize', 'fontWeight', 'fontFamily', 'lineHeight',
  'borderRadius', 'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
  '--bs-badge-color', '--bs-badge-font-weight', '--bs-badge-font-size',
  '--bs-card-border-color', '--bs-card-cap-bg', '--bs-card-bg',
  '--bs-nav-tabs-border-color', '--bs-nav-tabs-link-active-bg',
]

async function getStyles(page, selector, props) {
  return page.evaluate(
    ({ selector, props }) => {
      const el = document.querySelector(selector)
      if (!el) return null
      const cs = getComputedStyle(el)
      const result = {}
      for (const p of props) {
        result[p] = p.startsWith('--') ? cs.getPropertyValue(p).trim() : cs[p]
      }
      return result
    },
    { selector, props }
  )
}

const browser = await chromium.launch()

for (const { path, selector, label } of PAGES) {
  const [baseCtx, ve2Ctx] = await Promise.all([
    browser.newContext(), browser.newContext()
  ])
  const [basePage, ve2Page] = await Promise.all([
    baseCtx.newPage(), ve2Ctx.newPage()
  ])
  await Promise.all([
    basePage.goto(BASE + path, { waitUntil: 'networkidle' }),
    ve2Page.goto(VE2  + path, { waitUntil: 'networkidle' }),
  ])

  const [baseStyles, ve2Styles] = await Promise.all([
    getStyles(basePage, selector, PROPS),
    getStyles(ve2Page, selector, PROPS),
  ])

  console.log(`\n=== ${label} (${path}) ===`)
  if (!baseStyles) { console.log('  [baseline] selector not found'); continue }
  if (!ve2Styles)  { console.log('  [ve2]      selector not found'); continue }

  let hasDiff = false
  for (const p of PROPS) {
    const b = baseStyles[p], v = ve2Styles[p]
    if (b !== v) {
      console.log(`  DIFF ${p}`)
      console.log(`    baseline: ${b}`)
      console.log(`    ve2:      ${v}`)
      hasDiff = true
    }
  }
  if (!hasDiff) console.log('  [no diff in checked props]')

  await Promise.all([baseCtx.close(), ve2Ctx.close()])
}

await browser.close()
