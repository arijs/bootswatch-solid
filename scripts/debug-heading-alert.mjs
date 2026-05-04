/**
 * Diagnostic script: compare computed styles of heading-alert nodes
 * between the baseline (port 4173) and VE2 (port 4175).
 *
 * Usage: node scripts/debug-heading-alert.mjs
 */
import { chromium } from 'playwright'

const BASELINE_URL =
	'http://localhost:4173/ui/alerts/heading-alert?theme=vapor&css=local&state=static'
const VE2_URL = 'http://127.0.0.1:4175/ui/alerts/heading-alert?theme=vapor'

const PROPS = [
	'color',
	'backgroundColor',
	'opacity',
	'borderTopWidth',
	'borderTopStyle',
	'borderTopColor',
	'textShadow',
	'boxShadow',
]

async function waitForThemeLink(page) {
	try {
		await page.waitForSelector('link[data-theme-css="global"]', {
			state: 'attached',
			timeout: 5000,
		})
		await page.waitForTimeout(500)
	} catch {
		// VE2 does not use data-theme-css link tags; proceed without waiting.
	}
}

async function getHeadingAlertNodeStyles(page) {
	return page.evaluate((props) => {
		const heading = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).find((el) =>
			el.textContent?.trim() === 'Well done!',
		)
		if (!heading) return { error: 'heading not found' }

		const alert = heading.closest('div')
		if (!alert) return { error: 'alert container not found' }
		const hr = alert.querySelector('hr')

		const read = (el) => {
			if (!el) return { error: 'node not found' }
			const cs = getComputedStyle(el)
			const out = {}
			for (const p of props) out[p] = cs[p]
			return out
		}

		return {
			headingTag: heading.tagName,
			headingClass: heading.className,
			alertClass: alert.className,
			hrClass: hr?.className ?? null,
			headingStyles: read(heading),
			alertStyles: read(alert),
			hrStyles: read(hr),
		}
	}, PROPS)
}

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } })

// ── Baseline ──────────────────────────────────────────────────────────────────
const bPage = await ctx.newPage()
await bPage.goto(BASELINE_URL, { waitUntil: 'networkidle' })
await waitForThemeLink(bPage)

console.log('\n=== BASELINE ===')
console.log(await getHeadingAlertNodeStyles(bPage))

// ── VE2 ───────────────────────────────────────────────────────────────────────
const vPage = await ctx.newPage()
await vPage.goto(VE2_URL, { waitUntil: 'networkidle' })
await waitForThemeLink(vPage)

console.log('\n=== VE2 ===')
console.log(await getHeadingAlertNodeStyles(vPage))

await browser.close()
