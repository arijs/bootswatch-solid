import { readFileSync } from 'node:fs'
import path from 'node:path'

const RUN_DIR = process.argv[2] ?? 'docs/ve-theme-generator-validation/2026-05-23-144119'

function parseLog(file) {
	const items = []
	for (const line of readFileSync(file, 'utf8').split('\n')) {
		const m = line.match(/Skipped screenshots\\(.+?) \(directive.*MISMATCH ratio=([0-9.]+)/)
		if (m) items.push({ path: m[1].replace(/\\/g, '/'), ratio: parseFloat(m[2]) })
	}
	items.sort((a, b) => b.ratio - a.ratio)
	return items
}

function familyBucket(scenarioPath) {
	const parts = scenarioPath.split('/')
	const slug = parts[0]
	const rest = parts.slice(1).join('/')
	if (rest.startsWith('ui/alerts/')) return 'ui/alerts'
	if (rest.startsWith('ui/buttons/')) return 'ui/buttons'
	if (rest.startsWith('ui/card')) return 'ui/card'
	if (rest.startsWith('ui/dropdowns/')) return 'ui/dropdowns'
	if (rest.startsWith('ui/list-group/')) return 'ui/list-group'
	if (rest.startsWith('ui/modal/')) return 'ui/modal'
	if (rest.startsWith('ui/accordion/')) return 'ui/accordion'
	if (rest.startsWith('contents/tables/')) return 'contents/tables'
	if (rest.startsWith('forms/')) return 'forms'
	if (rest.startsWith('ui/badge/')) return 'ui/badge'
	return rest.split('/').slice(0, 2).join('/') || slug
}

function summarize(theme, fileName) {
	const file = path.join(RUN_DIR, fileName)
	const items = parseLog(file)
	const summaryLine = readFileSync(file, 'utf8').match(
		/VE verification: ran=\d+, matched=(\d+), mismatched=(\d+), skipped=(\d+)/,
	)
	const buckets = new Map()
	for (const item of items) {
		const fam = familyBucket(item.path)
		if (!buckets.has(fam)) buckets.set(fam, { n: 0, sum: 0, max: 0, worst: null })
		const b = buckets.get(fam)
		b.n += 1
		b.sum += item.ratio
		if (item.ratio > b.max) {
			b.max = item.ratio
			b.worst = item.path
		}
	}
	return { theme, items, summaryLine: summaryLine?.[0] ?? null, buckets }
}

for (const [theme, log] of [
	['bootstrap', 'verify-bootstrap.log'],
	['brite', 'verify-brite.log'],
]) {
	const { items, summaryLine, buckets } = summarize(theme, log)
	console.log(`\n=== ${theme} ===`)
	console.log(summaryLine)
	console.log(`Parsed mismatches: ${items.length}`)
	console.log('Top 15:')
	for (const i of items.slice(0, 15)) {
		console.log(`  ${i.ratio.toFixed(4)}  ${i.path}`)
	}
	console.log('Worst families (by avg ratio):')
	const ranked = [...buckets.entries()].sort((a, b) => b[1].sum / b[1].n - a[1].sum / a[1].n)
	for (const [fam, b] of ranked.slice(0, 10)) {
		console.log(
			`  ${fam.padEnd(22)} n=${String(b.n).padStart(3)} avg=${(b.sum / b.n).toFixed(3)} max=${b.max.toFixed(3)}`,
		)
	}
}
