import { chromium } from 'playwright'

const route = process.argv[2] ?? '/ui/buttons/solid/primary-button'
const BASELINE_URL = `http://localhost:4173${route}?theme=slate&css=local&state=static`
const VE2_URL = `http://127.0.0.1:4175${route}?theme=slate&state=static`

const PROPS = [
  'color',
  'backgroundColor',
  'backgroundImage',
  'backgroundPosition',
  'backgroundSize',
  'backgroundRepeat',
  'borderTopColor',
  'borderTopStyle',
  'borderTopWidth',
  'borderRightColor',
  'borderRightStyle',
  'borderRightWidth',
  'borderBottomColor',
  'borderBottomStyle',
  'borderBottomWidth',
  'borderLeftColor',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRadius',
  'boxShadow',
  'textShadow',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'height',
  'width',
  'display',
  'opacity',
  'filter',
  'cursor',
  'outlineColor',
  'outlineStyle',
  'outlineWidth',
]

async function readStyles(page, state) {
  return page.evaluate(
    ({ props, state }) => {
      const btn =
        document.querySelector('.pwhook-btn') ??
        document.querySelector('button, a.btn, [class*="btn-"]')
      if (!btn) return { error: 'button not found' }

      const cs = getComputedStyle(btn)
      const out = {
        state,
        className: btn.className,
        parentClass: btn.parentElement?.className ?? '',
      }

      for (const prop of props) {
        out[prop] = cs[prop]
      }

      const custom = {}
      for (let i = 0; i < cs.length; i += 1) {
        const name = cs[i]
        if (!name.startsWith('--')) continue
        const value = cs.getPropertyValue(name).trim()
        if (value === '') continue
        if (
          name.startsWith('--bs-btn-') ||
          name.startsWith('--_9li9sw') ||
          name.startsWith('--_1gtdker')
        ) {
          custom[name] = value
        }
      }

      out.customVars = Object.fromEntries(
        Object.entries(custom).sort(([a], [b]) => a.localeCompare(b)),
      )
      return out
    },
    { props: PROPS, state },
  )
}

function printDiff(label, baseline, ve2) {
  console.log(`\n=== ${label} ===`)

  if (baseline.error || ve2.error) {
    console.log('baseline:', baseline)
    console.log('ve2:', ve2)
    return
  }

  const allKeys = Array.from(new Set([...Object.keys(baseline), ...Object.keys(ve2)])).filter(
    (k) => k !== 'state',
  )

  let diffCount = 0
  for (const key of allKeys) {
    const b = key === 'customVars' ? JSON.stringify(baseline[key]) : baseline[key]
    const v = key === 'customVars' ? JSON.stringify(ve2[key]) : ve2[key]
    if (b !== v) {
      diffCount += 1
      console.log(`DIFF ${key}`)
      console.log(`  baseline: ${b}`)
      console.log(`  ve2:      ${v}`)
    }
  }

  if (diffCount === 0) {
    console.log('No computed-style diffs found.')
  } else {
    console.log(`Total diffs: ${diffCount}`)
  }
}

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 360, height: 120 } })

const bPage = await context.newPage()
await bPage.goto(BASELINE_URL, { waitUntil: 'networkidle' })
const bStatic = await readStyles(bPage, 'static')
let bHover = { skipped: 'hover not collected' }
try {
  await bPage.locator('.pwhook-btn, button, a.btn, [class*="btn-"]').first().hover({ timeout: 1000 })
  bHover = await readStyles(bPage, 'hover')
} catch {
  // Disabled routes may not expose a hoverable button state.
}

const vPage = await context.newPage()
await vPage.goto(VE2_URL, { waitUntil: 'networkidle' })
const vStatic = await readStyles(vPage, 'static')
let vHover = { skipped: 'hover not collected' }
try {
  await vPage.locator('.pwhook-btn, button, a.btn, [class*="btn-"]').first().hover({ timeout: 1000 })
  vHover = await readStyles(vPage, 'hover')
} catch {
  // Disabled routes may not expose a hoverable button state.
}

console.log(`ROUTE ${route}`)
printDiff('static', bStatic, vStatic)
printDiff('hover', bHover, vHover)

await browser.close()
