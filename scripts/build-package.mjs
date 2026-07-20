// Build do pacote @arijs/bootswatch-ve (Fase 1 completa p/ o tema bootstrap).
// Compila TODAS as famílias do tema + scope + public-vars + o manifesto de
// contract (todos os nomes hasheados), só com o plugin VE — sem o app (que
// puxa o parser bloqueado). Cada família = um entry → CSS por família.
// Pós-processo: remove declarações --bs-* literais órfãs do global (não são
// referenciadas por nada; Bootstrap as emite no :root por convenção) para o
// artefato ficar 100% sem literal, e normaliza os nomes dos CSS.
//
// Escopo atual: tema `bootstrap`. A Fase 2 varre isto sobre os 27 temas.

import { rm, mkdir, writeFile, readdir, readFile, rename, stat } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { build } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const ROOT = process.cwd()
const VE = path.join(ROOT, 've-project2', 'src')
const OUT = path.join(ROOT, 'dist-pkg')
const THEME = 'bootstrap'

// Famílias excluídas do build granular: `literal` (monólito alternativo),
// `utilities/used` (subset só-da-demo) e `utilities` (baked) — o caminho das
// utilities é o preset UnoCSS (hasheado, JIT); a família baked reintroduziria
// literais --bs-* e duplicaria o preset.
const EXCLUDE_FAMILIES = new Set(['literal', 'utilities/used', 'utilities'])

async function listFamilies() {
	const base = path.join(VE, 'themes', THEME)
	const out = []
	async function walk(dir) {
		for (const e of await readdir(dir, { withFileTypes: true })) {
			const p = path.join(dir, e.name)
			if (e.isDirectory()) await walk(p)
			else if (e.name === 'styles.css.ts') {
				const rel = path.relative(base, path.dirname(p)).replace(/\\/g, '/')
				if (!EXCLUDE_FAMILIES.has(rel)) out.push({ rel, file: p, leaf: rel.split('/').pop() })
			}
		}
	}
	await walk(base)
	return out.sort((a, b) => a.rel.localeCompare(b.rel))
}

async function listContractModules() {
	const base = path.join(VE, 'theme-contract')
	const out = []
	async function walk(dir) {
		for (const e of await readdir(dir, { withFileTypes: true })) {
			const p = path.join(dir, e.name)
			if (e.isDirectory()) await walk(p)
			else if (e.name.endsWith('.css.ts')) {
				out.push('../theme-contract/' + path.relative(base, p).replace(/\\/g, '/').replace(/\.ts$/, ''))
			}
		}
	}
	await walk(base)
	return out.sort()
}

// Deriva o nome de saída do CSS a partir do arquivo-fonte (originalFileNames).
function familyNameFromSource(src) {
	if (!src) return null
	let m = src.match(/themes\/[^/]+\/(.+)\/styles\.css\.ts$/)
	if (m) return m[1].split('/').pop() // família → leaf
	m = src.match(/themes\/[^/]+\/([^/]+)\.css\.ts$/)
	if (m) return m[1] // scope, public-vars
	return null
}

async function main() {
	const families = await listFamilies()
	const contractModules = await listContractModules()

	// Entradas: scope + public-vars + todas as famílias + contract (barrel).
	const entries = {
		scope: path.join(VE, 'themes', THEME, 'scope.css.ts'),
		'public-vars': path.join(VE, 'themes', THEME, 'public-vars.css.ts'),
		contract: path.join(VE, '__pkg', 'contract.ts'),
	}
	for (const f of families) entries[f.leaf] = f.file

	await mkdir(path.join(VE, '__pkg'), { recursive: true })
	await writeFile(
		path.join(VE, '__pkg', 'contract.ts'),
		[
			...contractModules.map((m) => `export * from '${m}'`),
			`export { ${THEME}Scope } from '../themes/${THEME}/scope.css'`,
			'',
		].join('\n'),
	)

	await rm(OUT, { recursive: true, force: true })
	const themeOut = path.join(OUT, 'themes', THEME)

	await build({
		root: path.join(ROOT, 've-project2'),
		configFile: false,
		logLevel: 'warn',
		plugins: [vanillaExtractPlugin({ identifiers: ({ hash }) => `bsve_${hash}` })],
		build: {
			outDir: themeOut,
			emptyOutDir: true,
			cssCodeSplit: true,
			target: 'esnext',
			minify: false,
			lib: { entry: entries, formats: ['es'] },
			rollupOptions: {
				output: {
					entryFileNames: '[name].js',
					assetFileNames: (info) => {
						const src = (info.originalFileNames ?? []).find((f) => f.includes('/themes/'))
						const fam = familyNameFromSource(src)
						return fam ? `${fam}.css` : '[name][extname]'
					},
				},
			},
		},
	})

	await rm(path.join(VE, '__pkg'), { recursive: true, force: true })

	// Pós-processo: normaliza nomes (Vite às vezes emite `X.css.ts.css` para
	// entries .css.ts) e remove .css vazios. NÃO removemos --bs-* aqui (quebra
	// referências do port); o literal residual é do port e some quando o
	// conversor hashear (sweep separado) — aqui só CONTAMOS para dimensionar.
	for (const e of (await readdir(themeOut, { withFileTypes: true })).filter((e) => e.isFile())) {
		const p = path.join(themeOut, e.name)
		if (e.name.endsWith('.css') && (await stat(p)).size === 0) { await rm(p); continue }
		if (e.name.endsWith('.css.ts.css')) {
			let dest = e.name.replace(/\.css\.ts\.css$/, '.css')
			let i = 2
			while (await stat(path.join(themeOut, dest)).then(() => true).catch(() => false)) {
				dest = e.name.replace(/\.css\.ts\.css$/, `-${i++}.css`)
			}
			await rename(p, path.join(themeOut, dest))
		}
	}

	// Conta o literal --bs-* residual (do port) por arquivo.
	const cssFiles = (await readdir(themeOut)).filter((f) => f.endsWith('.css')).sort()
	let totalBytes = 0, litDecls = 0, litRefs = 0
	const litByFile = []
	for (const f of cssFiles) {
		const css = await readFile(path.join(themeOut, f), 'utf8')
		totalBytes += Buffer.byteLength(css)
		const decls = (css.match(/[^)]--bs-[a-z0-9-]+:/g) || []).length
		const refs = (css.match(/var\(--bs-[a-z0-9-]+\)/g) || []).length
		litDecls += decls; litRefs += refs
		if (decls + refs) litByFile.push(`${f}(${decls}d/${refs}r)`)
	}
	console.log(`\n=== dist-pkg/themes/${THEME} ===`)
	console.log(`famílias + scope/public-vars: ${cssFiles.length} CSS, ${(totalBytes / 1024).toFixed(1)} KB`)
	console.log(`literal --bs-* residual (do port): ${litDecls} decls + ${litRefs} refs`)
	if (litByFile.length) console.log(`  em: ${litByFile.join(', ')}`)

	// Manifesto de contract: quantos nomes hasheados.
	const contractJs = await readFile(path.join(themeOut, 'contract.js'), 'utf8').catch(() => '')
	const names = new Set([...contractJs.matchAll(/\b([A-Za-z][A-Za-z0-9]*) =/g)].map((m) => m[1]))
	console.log(`manifesto de contract: ~${names.size} nomes exportados`)
}

main().catch((e) => { console.error(e); process.exit(1) })
