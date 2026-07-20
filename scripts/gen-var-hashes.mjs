// Extrai o mapa export → nome hasheado das vars públicas, compilando
// _public-vars.css.ts SOZINHO (uma entry só → nada vira chunk compartilhado,
// tudo inline). Usa os MESMOS identifiers do build do pacote, então os hashes
// batem com o public-vars.css/contract. Escreve preset/public-vars.hash.json.

import { rm, mkdir, writeFile, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { build } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const ROOT = process.cwd()
const VE = path.join(ROOT, 've-project2', 'src')
const TMP = path.join(VE, '__pkg')
const OUTDIR = path.join(ROOT, 'dist-pkg', '_pubvars')
const OUT_JSON = path.join(ROOT, 'preset', 'public-vars.hash.json')

async function main() {
	await mkdir(TMP, { recursive: true })
	await writeFile(path.join(TMP, 'pubvars.ts'), "export * from '../theme-contract/_public-vars.css'\n")

	await build({
		root: path.join(ROOT, 've-project2'),
		configFile: false,
		logLevel: 'error',
		plugins: [vanillaExtractPlugin({ identifiers: ({ hash }) => `bsve_${hash}` })],
		build: {
			outDir: OUTDIR, emptyOutDir: true, cssCodeSplit: true, target: 'esnext', minify: false,
			lib: { entry: { pubvars: path.join(TMP, 'pubvars.ts') }, formats: ['es'] },
			rollupOptions: { output: { entryFileNames: '[name].js', assetFileNames: '[name][extname]' } },
		},
	})

	const js = await readFile(path.join(OUTDIR, 'pubvars.js'), 'utf8')
	const map = {}
	for (const m of js.matchAll(/(varBs[A-Za-z0-9]+)\s*=\s*"(var\(--bsve_[a-z0-9]+\))"/g)) map[m[1]] = m[2]
	await writeFile(OUT_JSON, JSON.stringify(map, null, '\t') + '\n')
	await rm(TMP, { recursive: true, force: true })
	await rm(OUTDIR, { recursive: true, force: true })
	console.log(`gen-var-hashes: ${Object.keys(map).length} vars → ${path.relative(ROOT, OUT_JSON)}`)
}

main().catch((e) => { console.error(e); process.exit(1) })
