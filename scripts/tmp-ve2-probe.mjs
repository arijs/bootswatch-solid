import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()

page.on('console', (m) => console.log('console', m.type(), m.text()))
page.on('pageerror', (err) => {
	console.log('pageerror message:', err.message)
	console.log('pageerror stack:', err.stack)
})

await page.goto('http://127.0.0.1:4175/ui/button-group/button-group-example?theme=sketchy', {
	waitUntil: 'load',
})
await page.waitForTimeout(1000)

console.log('title', await page.title())
console.log('url', page.url())
const rootHtml = await page.$eval('#root', (el) => el.innerHTML.slice(0, 400))
console.log('rootHtml', rootHtml)

await browser.close()
