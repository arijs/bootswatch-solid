import { readFile } from 'node:fs/promises'

const report = JSON.parse(
	await readFile('ve-project2/src/themes/bootstrap/literal/literal-report.json', 'utf8'),
)

const uniqueSelectors = new Set()
const byWarning = new Map()
for (const entry of report.skipped) {
	uniqueSelectors.add(entry.selector)
	const key = entry.warning.split('"')[0]
	byWarning.set(key, (byWarning.get(key) ?? 0) + 1)
}

console.log('unique selectors:', uniqueSelectors.size)
console.log('total entries:', report.skipped.length)
console.log('\nBy warning type:')
for (const [k, v] of [...byWarning.entries()].sort((a, b) => b[1] - a[1])) {
	console.log(`  ${v}\t${k}`)
}

const unmappedVars = new Set()
for (const entry of report.skipped) {
	const m = entry.warning.match(/\[UNMAPPED_VAR\] (.+)/)
	if (m) unmappedVars.add(m[1])
}
console.log('\nUnmapped vars:', [...unmappedVars].sort().join(', '))
