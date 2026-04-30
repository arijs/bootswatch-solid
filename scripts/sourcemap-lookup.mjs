import { readFile } from 'node:fs/promises'
import { SourceMapConsumer } from 'source-map'

const mapPath = 've-project2/dist/assets/index-DkYvZ0pv.js.map'
const mapRaw = await readFile(mapPath, 'utf-8')
const smc = await new SourceMapConsumer(mapRaw)

// Crash positions from stack trace
const positions = [
	{ name: 'ot', col: 10970 },
	{ name: 'gt', col: 12056 },
	{ name: 'wt', col: 14406 },
	{ name: 'Ut.lazy', col: 21465 },
]

for (const { name, col } of positions) {
	const pos = smc.originalPositionFor({ line: 1, column: col })
	console.log(`${name} (col ${col}) -> ${pos.source}:${pos.line}:${pos.column} [${pos.name}]`)
}

smc.destroy()
