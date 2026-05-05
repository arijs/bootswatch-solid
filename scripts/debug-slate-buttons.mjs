// scripts/debug-slate-buttons.mjs
// Compares computed CSS custom properties for button variants between
// the baseline (localhost:4173) and the VE2 build (127.0.0.1:4175).
import { chromium } from 'playwright'

const ROUTES = [
  { name: 'solid/primary', path: '/ui/buttons/solid/primary-button' },
]

const CSS_VARS = [
  '--bs-btn-color',
  '--bs-btn-bg',
  '--bs-btn-border-color',
  '--bs-btn-hover-color',
  '--bs-btn-hover-bg',
  '--bs-btn-hover-border-color',
  '--bs-btn-focus-shadow-rgb',
  '--bs-btn-active-color',
  '--bs-btn-active-bg',
  '--bs-btn-active-border-color',
  '--bs-btn-disabled-color',
  '--bs-btn-disabled-bg',
  '--bs-btn-disabled-border-color',
  'backgroundColor',
  'color',
  'borderColor',
]

async function readButtonVars(page) {
  return page.evaluate((cssVars) => {
    const btn = document.querySelector('button, a.btn, [class*="btn-"]')
    if (!btn) return { error: 'no button found' }
    const cs = getComputedStyle(btn)
    const out = {
      tagName: btn.tagName,
      className: btn.className,
      parentClass: btn.parentElement?.className ?? '',
      grandparentClass: btn.parentElement?.parentElement?.className ?? '',
      bodyClass: document.body.className,
      htmlClass: document.documentElement.className,
    }
    for (const v of cssVars) {
      out[v] = v.startsWith('--') ? cs.getPropertyValue(v).trim() : cs[v]
    }
    // Also dump backgroundImage
    out['backgroundImage'] = cs.backgroundImage
    return out
  }, CSS_VARS)
}

const BASELINE = 'http://localhost:4173'
const VE2      = 'http://127.0.0.1:4175'

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } })

for (const route of ROUTES) {
  const bPage = await ctx.newPage()
  await bPage.goto(`${BASELINE}${route.path}?theme=slate&css=local&state=static`, { waitUntil: 'networkidle' })
  const baseline = await readButtonVars(bPage)
  await bPage.close()

  const vPage = await ctx.newPage()
  await vPage.goto(`${VE2}${route.path}?theme=slate&state=static`, { waitUntil: 'networkidle' })
  const ve2 = await readButtonVars(vPage)
  await vPage.close()

  console.log(`\n=== ${route.name} ===`)
  console.log('BASELINE element:', { tagName: baseline.tagName, className: baseline.className, parentClass: baseline.parentClass, bodyClass: baseline.bodyClass?.slice(0, 80) })
  console.log('VE2     element:', { tagName: ve2.tagName, className: ve2.className, parentClass: ve2.parentClass, bodyClass: ve2.bodyClass?.slice(0, 80) })
  const keys = Object.keys(baseline).filter(k => !['tagName','className','parentClass','grandparentClass','bodyClass','htmlClass'].includes(k))
  let hasDiff = false
  for (const k of keys) {
    const b = baseline[k]
    const v = ve2[k]
    if (b !== v) {
      console.log(`  DIFF  ${k}`)
      console.log(`    baseline: ${b}`)
      console.log(`    ve2:      ${v}`)
      hasDiff = true
    }
  }
  if (!hasDiff) console.log('  ALL MATCH')
}

await browser.close()
