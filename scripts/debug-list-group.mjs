/**
 * Diagnostic script: compare computed styles of list-group items
 * between the baseline (port 4173) and VE2 (port 4175).
 *
 * Usage: node scripts/debug-list-group.mjs
 */
import { chromium } from 'playwright'

const THEME = 'sandstone'

const ROUTES = [
	'default-list-group',
	'contextual-default-list-group',
	'contextual-primary-list-group',
	'contextual-secondary-list-group',
	'contextual-success-list-group',
	'contextual-danger-list-group',
	'contextual-warning-list-group',
	'contextual-info-list-group',
	'contextual-light-list-group',
	'contextual-dark-list-group',
]

const ITEM_PROPS = [
	'color',
	'backgroundColor',
	'borderTopColor',
	'borderRightColor',
	'borderBottomColor',
	'borderLeftColor',
	'borderTopWidth',
]

async function waitForReady(page, isVe2 = false) {
	if (!isVe2) {
		try {
			await page.waitForSelector('link[data-theme-css="global"]', { state: 'attached', timeout: 5000 })
			await page.waitForTimeout(500)
		} catch {
			// theme link not found, proceed anyway
		}
	} else {
		await page.waitForTimeout(500)
	}
}

async function getListGroupStyles(page, isVe2 = false) {
	return page.evaluate(([props, isVe2]) => {
		let listGroup
		if (isVe2) {
			// VE2 uses contract class names; find the list container by contract class pattern
			listGroup = document.querySelector('[class*="listGroup__"]') ??
				document.querySelector('.bd-example-ve2 ul, .bd-example-ve2 ol, .bd-example-ve2 div[class*="listGroup"]')
		} else {
			listGroup = document.querySelector('.list-group')
		}
		if (!listGroup) return { error: 'list-group not found', html: document.body?.innerHTML?.substring(0, 300) }

		const items = isVe2
			? Array.from(listGroup.children)
			: Array.from(listGroup.querySelectorAll('.list-group-item'))
		const read = (el) => {
			if (!el) return null
			const cs = getComputedStyle(el)
			const out = {}
			for (const p of props) out[p] = cs[p]
			return out
		}

		return {
			listGroupClass: listGroup.className,
			items: items.map((el, i) => ({
				index: i,
				classes: el.className,
				styles: read(el),
			})),
		}
	}, [ITEM_PROPS, isVe2])
}

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } })

for (const route of ROUTES) {
	const baselineUrl = `http://localhost:4173/ui/list-group/${route}?theme=${THEME}&css=local&state=static`
	const ve2Url = `http://127.0.0.1:4175/ui/list-group/${route}?theme=${THEME}`

	const bPage = await ctx.newPage()
	await bPage.goto(baselineUrl, { waitUntil: 'networkidle' })
	await waitForReady(bPage, false)
	const baselineData = await getListGroupStyles(bPage, false)
	await bPage.close()

	const vPage = await ctx.newPage()
	await vPage.goto(ve2Url, { waitUntil: 'networkidle' })
	await waitForReady(vPage, true)
	const ve2Data = await getListGroupStyles(vPage, true)
	await vPage.close()

	if (baselineData.error || ve2Data.error) {
		console.log(`\n=== ${route} ===`)
		console.log('BASELINE:', baselineData)
		console.log('VE2:', ve2Data)
		continue
	}

	// Find differences
	const diffs = []
	const maxItems = Math.max(baselineData.items.length, ve2Data.items.length)
	for (let i = 0; i < maxItems; i++) {
		const bi = baselineData.items[i]
		const vi = ve2Data.items[i]
		if (!bi || !vi) {
			diffs.push(`item[${i}]: missing in ${!bi ? 'baseline' : 've2'}`)
			continue
		}
		for (const prop of ITEM_PROPS) {
			if (bi.styles[prop] !== vi.styles[prop]) {
				diffs.push(`item[${i}] (${bi.classes}) ${prop}: baseline=${bi.styles[prop]} ve2=${vi.styles[prop]}`)
			}
		}
	}

	if (diffs.length > 0) {
		console.log(`\n=== DIFF: ${route} ===`)
		for (const d of diffs) console.log(' ', d)
	} else {
		console.log(`\n=== OK: ${route} ===`)
	}
}

await browser.close()
