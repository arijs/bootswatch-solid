/**
 * Diagnostic script: compare computed styles of opened dropdown menu elements
 * between the baseline (port 4173) and VE2 (port 4175).
 *
 * Usage: node scripts/debug-dropdowns.mjs
 */
import { chromium } from 'playwright'

const THEME = 'sandstone'
const ROUTE = 'normal-dropdown'

const BASELINE_URL = `http://localhost:4173/ui/dropdowns/${ROUTE}?theme=${THEME}&css=local&state=opened-dropdown`
const VE2_URL = `http://127.0.0.1:4175/ui/dropdowns/${ROUTE}?theme=${THEME}&state=opened-dropdown`

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } })

async function getDropdownStyles(page, isVe2) {
	// Wait for theme CSS
	if (!isVe2) {
		try {
			await page.waitForSelector('link[data-theme-css="global"]', { state: 'attached', timeout: 5000 })
			await page.waitForTimeout(500)
		} catch { /* proceed */ }
	} else {
		await page.waitForTimeout(500)
	}

	return page.evaluate(() => {
		const props = [
			'color', 'backgroundColor', 'fontSize', 'fontWeight',
			'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
			'marginTop', 'marginBottom',
			'borderTopWidth', 'borderTopStyle', 'borderTopColor',
			'borderBottomWidth', 'borderBottomStyle', 'borderBottomColor',
			'borderRadius', 'boxShadow',
		]

		const read = (el) => {
			if (!el) return { error: 'not found' }
			const cs = getComputedStyle(el)
			const out = {}
			for (const p of props) out[p] = cs[p]
			return out
		}

		const menu = document.querySelector('.dropdown-menu') ??
			document.querySelector('[class*="dropdownMenu__"]')
		if (!menu) return { error: 'dropdown-menu not found', html: document.body?.innerHTML?.substring(0, 800) }

		const header = menu.querySelector('.dropdown-header') ??
			menu.querySelector('[class*="dropdownHeader__"]')
		const divider = menu.querySelector('.dropdown-divider') ??
			menu.querySelector('[class*="dropdownDivider__"]')
		const items = Array.from(
			menu.querySelectorAll('.dropdown-item').length
				? menu.querySelectorAll('.dropdown-item')
				: menu.querySelectorAll('[class*="dropdownItem__"]')
		)

		return {
			menuStyles: read(menu),
			headerStyles: read(header),
			dividerStyles: read(divider),
			items: items.map((el, i) => ({
				index: i,
				text: el.textContent?.trim(),
				classes: el.className,
				styles: read(el),
			})),
		}
	})
}

const bPage = await ctx.newPage()
await bPage.goto(BASELINE_URL, { waitUntil: 'networkidle' })
const baseline = await getDropdownStyles(bPage, false)
await bPage.close()

const vPage = await ctx.newPage()
await vPage.goto(VE2_URL, { waitUntil: 'networkidle' })
const ve2 = await getDropdownStyles(vPage, true)
await vPage.close()

await browser.close()

if (baseline.error || ve2.error) {
	console.log('BASELINE:', baseline)
	console.log('VE2:', ve2)
	process.exit(1)
}

const PROPS = [
	'color', 'backgroundColor', 'fontSize', 'fontWeight',
	'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
	'marginTop', 'marginBottom',
	'borderTopWidth', 'borderTopStyle', 'borderTopColor',
	'borderBottomWidth', 'borderBottomStyle', 'borderBottomColor',
	'borderRadius', 'boxShadow',
]

function diff(label, b, v) {
	const diffs = []
	for (const p of PROPS) {
		if (b[p] !== v[p]) diffs.push(`  ${p}: baseline=${b[p]}  ve2=${v[p]}`)
	}
	if (diffs.length) {
		console.log(`\n=== DIFF ${label} ===`)
		for (const d of diffs) console.log(d)
	} else {
		console.log(`\n=== OK ${label} ===`)
	}
}

diff('menu', baseline.menuStyles, ve2.menuStyles)
diff('header', baseline.headerStyles, ve2.headerStyles)
diff('divider', baseline.dividerStyles, ve2.dividerStyles)

const maxItems = Math.max(baseline.items.length, ve2.items.length)
for (let i = 0; i < maxItems; i++) {
	const bi = baseline.items[i]
	const vi = ve2.items[i]
	if (!bi || !vi) { console.log(`\nitem[${i}]: missing in ${!bi ? 'baseline' : 've2'}`); continue }
	diff(`item[${i}] "${bi.text}"`, bi.styles, vi.styles)
}
