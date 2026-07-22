// Compila o contract POR FAMÍLIA — cada família isolada, sem a ambiguidade do
// barrel único (que derrubava nomes como textBgSecondary). Os hashes são
// path-based (mesmos identifiers do build do pacote), então batem com o CSS dos
// temas. Saída: dist-pkg/contract/<entry>/index.js + .d.ts + manifest.json
// (entry → nomes), consumidos pelo pack-dist e pelo plugin de purge.

import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { build } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const ROOT = process.cwd()
const VE = path.join(ROOT, 've-project2', 'src')
const TC = path.join(VE, 'theme-contract')
const TMP = path.join(VE, '__contract')
const OUTDIR = path.join(ROOT, 'dist-pkg', '_contract-build')
const DEST = path.join(ROOT, 'dist-pkg', 'contract')

// Descobre famílias (dirs com contract.css.ts) e define o nome do entry (leaf).
async function families() {
	const out = []
	async function walk(dir) {
		for (const e of await readdir(dir, { withFileTypes: true })) {
			const p = path.join(dir, e.name)
			if (e.isDirectory()) await walk(p)
			else if (e.name === 'contract.css.ts') out.push(path.relative(TC, dir).replace(/\\/g, '/'))
		}
	}
	await walk(TC)
	return out.sort()
}

const exportsOf = async (file) =>
	[...(await readFile(file, 'utf8')).matchAll(/export const (\w+)\b/g)].map((m) => m[1])

// entry name: literal→state; utilities/generated funde em utilities; senão o leaf.
function entryName(fam) {
	if (fam === 'literal') return 'state'
	if (fam === 'utilities' || fam === 'utilities/generated') return 'utilities'
	return fam.split('/').pop()
}

async function main() {
	await rm(TMP, { recursive: true, force: true })
	await mkdir(TMP, { recursive: true })
	const fams = await families()

	// Agrupa famílias por entry (utilities = generated + contract).
	const byEntry = {}
	for (const fam of fams) (byEntry[entryName(fam)] ??= []).push(fam)

	// Monta um módulo temp por entry. Em utilities, generated é primário (1808) e
	// só os nomes ÚNICOS de utilities/contract entram (evita ambiguidade do overlap).
	const entries = {}
	for (const [entry, famList] of Object.entries(byEntry)) {
		const lines = []
		if (entry === 'utilities') {
			const gen = path.join(TC, 'utilities', 'generated')
			lines.push(`export * from '${path.join(gen, 'contract.css').replace(/\\/g, '/')}'`)
			lines.push(`export * from '${path.join(gen, '_vars.css').replace(/\\/g, '/')}'`)
			const genNames = new Set([
				...(await exportsOf(path.join(gen, 'contract.css.ts'))),
				...(existsSync(path.join(gen, '_vars.css.ts')) ? await exportsOf(path.join(gen, '_vars.css.ts')) : []),
			])
			const baseContract = path.join(TC, 'utilities', 'contract.css.ts')
			const uniq = (await exportsOf(baseContract)).filter((n) => !genNames.has(n))
			if (uniq.length)
				lines.push(`export { ${uniq.join(', ')} } from '${path.join(TC, 'utilities', 'contract.css').replace(/\\/g, '/')}'`)
		} else {
			for (const fam of famList) {
				lines.push(`export * from '${path.join(TC, fam, 'contract.css').replace(/\\/g, '/')}'`)
				if (existsSync(path.join(TC, fam, '_vars.css.ts')))
					lines.push(`export * from '${path.join(TC, fam, '_vars.css').replace(/\\/g, '/')}'`)
			}
		}
		const tmpFile = path.join(TMP, `${entry}.ts`)
		await writeFile(tmpFile, `${lines.join('\n')}\n`)
		entries[entry] = tmpFile
	}

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

	// Extrai name→hash de cada entry e emite contract/<entry>/index.js + d.ts.
	await rm(DEST, { recursive: true, force: true })
	await mkdir(DEST, { recursive: true })
	const manifest = {}
	let totalNames = 0
	for (const entry of Object.keys(entries)) {
		const js = await readFile(path.join(OUTDIR, `${entry}.js`), 'utf8')
		// VE emite `var NAME = "hash";` + um `export { … }` no fim. Pega os consts
		// string-valued que estão de fato exportados.
		const exported = new Set(
			[...js.matchAll(/export\s*\{([^}]*)\}/g)]
				.flatMap((m) => m[1].split(','))
				.map((s) => s.trim().split(/\s+as\s+/).pop())
				.filter(Boolean),
		)
		const seen = new Map()
		for (const m of js.matchAll(/\bvar (\w+) = ("[^"]*"|'[^']*')/g)) {
			if (exported.has(m[1]) && !seen.has(m[1])) seen.set(m[1], m[2])
		}
		const names = [...seen.keys()].sort()
		const dir = path.join(DEST, entry)
		await mkdir(dir, { recursive: true })
		await writeFile(
			path.join(dir, 'index.js'),
			`${names.map((n) => `export const ${n} = ${seen.get(n)}`).join('\n')}\n`,
		)
		await writeFile(
			path.join(dir, 'index.d.ts'),
			`${names.map((n) => `export declare const ${n}: string`).join('\n')}\n`,
		)
		manifest[entry] = names
		totalNames += names.length
	}
	await writeFile(path.join(DEST, 'manifest.json'), `${JSON.stringify(manifest, null, '\t')}\n`)

	await rm(TMP, { recursive: true, force: true })
	await rm(OUTDIR, { recursive: true, force: true })
	console.log(`build-contract: ${Object.keys(entries).length} entries, ${totalNames} nomes → dist-pkg/contract/`)
	console.log(`  entries: ${Object.keys(manifest).sort().join(', ')}`)
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
