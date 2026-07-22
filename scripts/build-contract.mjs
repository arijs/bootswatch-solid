// Gera o contract POR FAMÍLIA reusando a infra da conversão granular:
//  - family-table.mjs (buildFamilyTable) → símbolo → família de emit (auditado,
//    0-unmapped nos 27 temas). É o mesmo mapa que particiona o CSS.
//  - o hash AUTORITATIVO de cada símbolo é o que TEM regra no CSS emitido
//    (resolve a duplicata literal-vs-utilities/generated automaticamente).
// Saída: dist-pkg/contract/<entry>/index.js + .d.ts + manifest.json (entry→nomes),
// consumidos pelo pack-dist e pelo plugin de purge.
//
// Requer: pkg:build já rodou (dist-pkg/themes/* com os chunks por-família).

import { existsSync } from 'node:fs'
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { build } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { buildFamilyTable } from './generate-ve-literal/family-table.mjs'

const ROOT = process.cwd()
const VE = path.join(ROOT, 've-project2', 'src')
const TC = path.join(VE, 'theme-contract')
const TMP = path.join(VE, '__contract')
const OUTDIR = path.join(ROOT, 'dist-pkg', '_contract-build')
const DEST = path.join(ROOT, 'dist-pkg', 'contract')
const THEMES = path.join(ROOT, 'dist-pkg', 'themes')

// família de emit → nome do entry publicável (leaf; utilities/used funde em utilities).
function entryName(family) {
	if (family === 'global') return 'global'
	if (family === 'utilities' || family === 'utilities/used') return 'utilities'
	return family.split('/').pop()
}

// Lista todos os módulos de contract (contract.css.ts + _vars.css.ts).
async function contractModules() {
	const out = []
	async function walk(dir) {
		for (const e of await readdir(dir, { withFileTypes: true })) {
			const p = path.join(dir, e.name)
			if (e.isDirectory()) await walk(p)
			else if (e.name === 'contract.css.ts' || e.name === '_vars.css.ts') out.push(p)
		}
	}
	await walk(TC)
	return out.sort()
}

// hashes de classe presentes no CSS emitido de UM tema (basta um: hashes são
// theme-agnostic). Pega qualquer `.b<hash>` — o subject das regras `.scope.hash`.
async function liveHashes() {
	const themeDir = existsSync(path.join(THEMES, 'bootstrap')) ? path.join(THEMES, 'bootstrap') : null
	if (!themeDir) throw new Error('dist-pkg/themes/bootstrap ausente — rode pkg:build antes')
	const live = new Set()
	for (const f of (await readdir(themeDir)).filter((f) => f.endsWith('.css'))) {
		const css = await readFile(path.join(themeDir, f), 'utf8')
		for (const m of css.matchAll(/\.(b[a-z0-9]+)\b/g)) live.add(m[1])
	}
	return live
}

async function main() {
	const table = await buildFamilyTable()
	const modules = await contractModules()

	// 1) Compila cada módulo isolado (entry próprio) → name→hash por módulo. Mantém
	//    duplicatas entre módulos (o mesmo nome pode ter hashes diferentes).
	await rm(TMP, { recursive: true, force: true })
	await mkdir(TMP, { recursive: true })
	const entries = {}
	modules.forEach((m, i) => {
		const rel = `m${i}`
		entries[rel] = m // Vite aceita .css.ts direto como entry via o plugin VE
	})

	await build({
		root: path.join(ROOT, 've-project2'),
		configFile: false,
		logLevel: 'error',
		plugins: [vanillaExtractPlugin({ identifiers: ({ hash }) => `b${hash}` })],
		build: {
			outDir: OUTDIR,
			emptyOutDir: true,
			cssCodeSplit: true,
			target: 'esnext',
			minify: false,
			lib: { entry: entries, formats: ['es'] },
			rollupOptions: { output: { entryFileNames: '[name].js', assetFileNames: '[name][extname]' } },
		},
	})

	// name → Set(hash) juntando todos os módulos.
	const nameHashes = new Map()
	for (const rel of Object.keys(entries)) {
		const js = await readFile(path.join(OUTDIR, `${rel}.js`), 'utf8').catch(() => '')
		const exported = new Set(
			[...js.matchAll(/export\s*\{([^}]*)\}/g)]
				.flatMap((m) => m[1].split(','))
				.map((s) => s.trim().split(/\s+as\s+/).pop())
				.filter(Boolean),
		)
		for (const m of js.matchAll(/\bvar (\w+) = ("[^"]*"|'[^']*')/g)) {
			if (!exported.has(m[1])) continue
			if (!nameHashes.has(m[1])) nameHashes.set(m[1], new Set())
			nameHashes.get(m[1]).add(m[2])
		}
	}

	// 2) hash autoritativo = o que tem regra no CSS (para duplicatas). O valor no
	//    JS é `"b<hash>"` (classe) ou `"var(--b…)"` (var pública). Só classes
	//    passam pelo filtro de liveness; vars ficam pelo único valor.
	const live = await liveHashes()
	const resolveHash = (name) => {
		const vals = [...nameHashes.get(name)]
		if (vals.length === 1) return vals[0]
		// múltiplos: prefere o que a classe (b<hash>) está viva no CSS
		const liveVal = vals.find((v) => {
			const cls = v.replace(/^["']|["']$/g, '')
			return live.has(cls)
		})
		return liveVal ?? null // sem hash vivo → duplicata morta; descarta
	}

	// 3) agrupa por família (entry).
	const byEntry = {}
	let unresolvedFamily = 0
	let deadDup = 0
	for (const name of nameHashes.keys()) {
		const fam = table.familyForSymbol(name)
		if (!fam) {
			unresolvedFamily++
			continue
		}
		const hash = resolveHash(name)
		if (hash == null) {
			deadDup++
			continue
		}
		const entry = entryName(fam)
		;(byEntry[entry] ??= new Map()).set(name, hash)
	}

	// 4) emite contract/<entry>/index.js + d.ts + manifest.
	await rm(DEST, { recursive: true, force: true })
	await mkdir(DEST, { recursive: true })
	const manifest = {}
	let total = 0
	for (const [entry, map] of Object.entries(byEntry)) {
		const names = [...map.keys()].sort()
		const dir = path.join(DEST, entry)
		await mkdir(dir, { recursive: true })
		await writeFile(
			path.join(dir, 'index.js'),
			`${names.map((n) => `export const ${n} = ${map.get(n)}`).join('\n')}\n`,
		)
		await writeFile(
			path.join(dir, 'index.d.ts'),
			`${names.map((n) => `export declare const ${n}: string`).join('\n')}\n`,
		)
		manifest[entry] = names
		total += names.length
	}
	await writeFile(path.join(DEST, 'manifest.json'), `${JSON.stringify(manifest, null, '\t')}\n`)

	await rm(TMP, { recursive: true, force: true })
	await rm(OUTDIR, { recursive: true, force: true })
	console.log(`build-contract: ${Object.keys(byEntry).length} entries, ${total} nomes`)
	console.log(`  entries: ${Object.keys(manifest).sort().join(', ')}`)
	console.log(`  sem família (skipped): ${unresolvedFamily}; duplicatas mortas (skipped): ${deadDup}`)
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
