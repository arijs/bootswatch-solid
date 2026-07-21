import { chromium } from 'playwright'

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' })
const page = await browser.newPage({ viewport: { width: 460, height: 220 } })
page.on('console', (m) => console.log('[console]', m.type(), m.text()))
page.on('pageerror', (e) => console.log('[pageerror]', e.message))
await page.goto('http://127.0.0.1:8099/', { waitUntil: 'load' })
await page.waitForTimeout(800)
const root = await page.evaluate(() => document.getElementById('root')?.innerHTML ?? '(sem #root)')
console.log('root innerHTML:', root.slice(0, 300))
const info = await page.evaluate(() => {
	const b = document.querySelector('button')
	const cs = b && getComputedStyle(b)
	return b ? { classes: b.className, bg: cs.backgroundColor, mb: cs.marginBottom, mr: cs.marginRight, color: cs.color } : null
})
console.log('button:', JSON.stringify(info))
if (info) await page.screenshot({ path: 'demo.png' })
await browser.close()
