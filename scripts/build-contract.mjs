// Gera o contract POR FAMÍLIA reusando a infra da conversão granular:
//  - family-table.mjs (buildFamilyTable) → símbolo → família de emit (auditado,
//    0-unmapped nos 27 temas). É o mesmo mapa que particiona o CSS.
//  - o hash AUTORITATIVO de cada símbolo é o que TEM regra no CSS emitido
//    (resolve a duplicata literal-vs-utilities/generated automaticamente).
// Classes → <entry>/index.js (família via family-table). Vars públicas (varBs*) →
// <entry>/vars.js (família via o módulo _vars.css.ts que a declara).
// Saída: dist-pkg/contract/<entry>/{index,vars}.{js,d.ts} + manifest.json,
// consumidos pelo pack-dist e pelo plugin de purge.
//
// Requer: pkg:build já rodou (dist-pkg/themes/* com os chunks por-família).

import { existsSync } from 'node:fs'
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { build } from 'vite'
import { UNWIRED_ALLOWLIST } from './contract-wiring-allowlist.mjs'
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

// módulo (.../theme-contract/<dir>/_vars.css.ts) → entry das vars daquela família.
// Vars na raiz (_public-vars/_vars) são theme-globais → global.
function moduleToEntry(modulePath) {
	const rel = path.relative(TC, path.dirname(modulePath)).replace(/\\/g, '/')
	if (rel === '') return 'global'
	if (rel === 'utilities' || rel === 'utilities/generated') return 'utilities'
	if (rel === 'literal') return 'state'
	if (rel === 'contents') return 'contents'
	return rel.split('/').pop()
}

// Lista TODOS os módulos de contract. Um filtro por nome de arquivo deixava
// `layout/container.css.ts` de fora: `containerFluid` caía p/ a cópia de `literal/`
// (candidata única, hash morto) enquanto os temas estilizam a de `layout/`.
async function contractModules() {
	const out = []
	async function walk(dir) {
		for (const e of await readdir(dir, { withFileTypes: true })) {
			const p = path.join(dir, e.name)
			if (e.isDirectory()) await walk(p)
			else if (e.name.endsWith('.css.ts')) out.push(p)
		}
	}
	await walk(TC)
	return out.sort()
}

// tokens `b<hash>` presentes no CSS emitido (classes `.b…` e vars `--b…`).
// União dos 27 temas: o hash é theme-agnostic, mas a EXISTÊNCIA de uma regra não é —
// dezenas de classes legadas do BS3/4 (`.help-block`, `.card-primary`, `.pager`) só
// aparecem no CSS de alguns Bootswatch. Ler só `bootstrap` as marcaria como mortas.
async function liveHashes() {
	if (!existsSync(THEMES)) throw new Error('dist-pkg/themes ausente — rode pkg:build antes')
	const live = new Set()
	for (const theme of await readdir(THEMES)) {
		const themeDir = path.join(THEMES, theme)
		for (const f of (await readdir(themeDir)).filter((f) => f.endsWith('.css'))) {
			const css = await readFile(path.join(themeDir, f), 'utf8')
			for (const m of css.matchAll(/(?:\.|--)(b[a-z0-9]+)\b/g)) live.add(m[1])
		}
	}
	return live
}

// b<hash> "interno" de um valor JS: "b1j3ahob0" (classe) ou "var(--b54j…)" (var).
function innerHash(value) {
	const m = value.match(/b[a-z0-9]+/)
	return m ? m[0] : null
}
const isVar = (value) => value.startsWith('"var(') || value.startsWith("'var(")

async function main() {
	const table = await buildFamilyTable()
	const modules = await contractModules()

	// 1) Compila cada módulo isolado → name→[{value, module}] (mantém duplicatas
	//    entre módulos: o mesmo nome pode ter hashes diferentes).
	await rm(TMP, { recursive: true, force: true })
	await mkdir(TMP, { recursive: true })
	const entries = {}
	modules.forEach((m, i) => {
		entries[`m${i}`] = m
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
			rollupOptions: {
				output: { entryFileNames: '[name].js', assetFileNames: '[name][extname]' },
			},
		},
	})

	const nameEntries = new Map() // name → [{ value, module }]
	for (const [rel, modulePath] of Object.entries(entries)) {
		const js = await readFile(path.join(OUTDIR, `${rel}.js`), 'utf8').catch(() => '')
		const exported = new Set(
			[...js.matchAll(/export\s*\{([^}]*)\}/g)]
				.flatMap((m) => m[1].split(','))
				.map((s) =>
					s
						.trim()
						.split(/\s+as\s+/)
						.pop(),
				)
				.filter(Boolean),
		)
		for (const m of js.matchAll(/\bvar (\w+) = ("[^"]*"|'[^']*')/g)) {
			if (!exported.has(m[1])) continue
			if (!nameEntries.has(m[1])) nameEntries.set(m[1], [])
			nameEntries.get(m[1]).push({ value: m[2], module: modulePath })
		}
	}

	// 2) resolve o valor autoritativo (hash com regra viva no CSS, p/ duplicatas).
	const live = await liveHashes()
	const resolve = (cands) => {
		if (cands.length === 1) return cands[0]
		return cands.find((c) => live.has(innerHash(c.value) ?? '')) ?? null
	}

	// 3) agrupa: classes por family-table; vars pelo módulo _vars que as declara.
	const classesByEntry = {} // entry → Map(name→value)
	const varsByEntry = {}
	let unresolvedFamily = 0
	let deadDup = 0
	// Candidata ÚNICA nunca passava por `live` — era esse buraco que publicava
	// `dropdownItemActive` & cia.: um hash real, exportado, sem uma única regra no
	// CSS de nenhum dos 27 temas. Aplicar a classe era um no-op silencioso.
	const deadSingles = []
	for (const [name, cands] of nameEntries) {
		const chosen = resolve(cands)
		if (!chosen) {
			deadDup++
			continue
		}
		if (
			!isVar(chosen.value) &&
			!live.has(innerHash(chosen.value) ?? '') &&
			!UNWIRED_ALLOWLIST[name]
		) {
			deadSingles.push(name)
		}
		if (isVar(chosen.value)) {
			const entry = moduleToEntry(chosen.module)
			if (!varsByEntry[entry]) varsByEntry[entry] = new Map()
			varsByEntry[entry].set(name, chosen.value)
		} else {
			// família via family-table; sem mapeamento (ex.: body/bodyFrame/vars de
			// theme-contract.css.ts) → global (sempre carregado, base do tema).
			const fam = table.familyForSymbol(name)
			if (!fam) unresolvedFamily++
			const entry = fam ? entryName(fam) : 'global'
			if (!classesByEntry[entry]) classesByEntry[entry] = new Map()
			classesByEntry[entry].set(name, chosen.value)
		}
	}

	// 4) emite contract/<entry>/{index,vars}.{js,d.ts} + manifest.
	await rm(DEST, { recursive: true, force: true })
	await mkdir(DEST, { recursive: true })
	const emit = async (entry, file, map) => {
		const names = [...map.keys()].sort()
		const dir = path.join(DEST, entry)
		await mkdir(dir, { recursive: true })
		await writeFile(
			path.join(dir, `${file}.js`),
			`${names.map((n) => `export const ${n} = ${map.get(n)}`).join('\n')}\n`,
		)
		await writeFile(
			path.join(dir, `${file}.d.ts`),
			`${names.map((n) => `export declare const ${n}: string`).join('\n')}\n`,
		)
		return names
	}

	const manifest = {}
	let totalClasses = 0
	let totalVars = 0
	const allEntries = new Set([...Object.keys(classesByEntry), ...Object.keys(varsByEntry)])
	for (const entry of allEntries) {
		const classes = classesByEntry[entry]
			? await emit(entry, 'index', classesByEntry[entry])
			: []
		const vars = varsByEntry[entry] ? await emit(entry, 'vars', varsByEntry[entry]) : []
		manifest[entry] = { classes, vars }
		totalClasses += classes.length
		totalVars += vars.length
	}
	await writeFile(path.join(DEST, 'manifest.json'), `${JSON.stringify(manifest, null, '\t')}\n`)

	await rm(TMP, { recursive: true, force: true })
	await rm(OUTDIR, { recursive: true, force: true })
	console.log(
		`build-contract: ${allEntries.size} entries, ${totalClasses} classes, ${totalVars} vars`,
	)
	console.log(`  entries: ${[...allEntries].sort().join(', ')}`)
	console.log(
		`  sem família (skipped): ${unresolvedFamily}; duplicatas mortas (skipped): ${deadDup}`,
	)

	if (deadSingles.length > 0) {
		console.error(
			`\nERRO: ${deadSingles.length} contract(s) exportado(s) sem UMA regra no CSS de nenhum tema.\n` +
				'Aplicá-los é um no-op silencioso: classe válida no DOM, zero CSS por trás.\n' +
				'Ou remova o contract, ou ligue-o num tema, ou — se for inerte de propósito —\n' +
				'declare-o em scripts/contract-wiring-allowlist.mjs com o motivo.\n',
		)
		for (const name of deadSingles.sort()) console.error(`  ${name}`)
		process.exit(1)
	}
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
