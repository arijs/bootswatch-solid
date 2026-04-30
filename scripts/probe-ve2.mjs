import { chromium } from 'playwright'

const url = 'http://localhost:4175/ui/carousel/carousel-example?theme=sketchy'
const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message.substring(0, 200) + '\n' + (e.stack || '').substring(0, 2000)))
page.on('console', m => {
	if (m.type() === 'error') errors.push('CONSOLE: ' + m.text().substring(0, 300))
})
try {
	await page.goto(url, { waitUntil: 'load', timeout: 20000 })
	await new Promise(r => setTimeout(r, 1500))
	const html = await page.evaluate(() => document.getElementById('root')?.innerHTML?.substring(0, 2000))
	const layoutInfo = await page.evaluate(() => {
		const carousel = document.querySelector('[id="carouselExampleCaptionsVe2"]')
		const controlPrev = document.querySelector('.pwhook-carousel-control-prev')
		const captionEl = document.querySelector('.pwhook-carousel-item.pwhook-carousel-active h5')?.parentElement
		const inner = carousel?.querySelector('[class*="pwhook"]')?.closest('[class]')

		const rect = (el) => el ? JSON.stringify(el.getBoundingClientRect()) : 'NOT FOUND'
		const cs = (el) => el ? window.getComputedStyle(el).position + '/' + window.getComputedStyle(el).display : 'NOT FOUND'
		
		return {
			carousel: rect(carousel) + ' pos=' + cs(carousel),
			controlPrev: rect(controlPrev) + ' pos=' + cs(controlPrev),
			caption: rect(captionEl) + ' pos=' + cs(captionEl) + ' classes=' + (captionEl?.className || 'none'),
			carouselInnerHeight: carousel?.querySelector('[class]')?.getBoundingClientRect().height,
		}
	})
	console.log('Layout:', JSON.stringify(layoutInfo, null, 2))
	console.log('Root HTML (partial):', JSON.stringify(html?.substring(0, 500)))
} catch (e) {
	console.log('GOTO ERR:', e.message.substring(0, 300))
}
errors.forEach(e => console.log(e))
await browser.close()
