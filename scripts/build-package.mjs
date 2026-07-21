// Build do pacote @arijs/bootswatch-ve — TODOS os 27 temas (Fase 2).
// Compila, por tema, TODAS as famílias + scope + public-vars, só com o plugin
// VE (sem o app, que puxa o parser bloqueado). Cada família = um entry → CSS
// por família. O manifesto de contract (nomes hasheados: vars + classes) é
// THEME-AGNOSTIC → compilado UMA vez (junto do 1º tema) e compartilhado.
// Pós-processo: normaliza nomes de CSS e CONTA o literal --bs-* residual (deve
// ser 0 em todos os temas após o sweep de port).

import { rm, mkdir, writeFile, readdir, readFile, rename, stat } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { build } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const ROOT = process.cwd()
const VE = path.join(ROOT, 've-project2', 'src')
const OUT = path.join(ROOT, 'dist-pkg')

// Famílias excluídas do build granular: `literal` (monólito alternativo),
// `utilities/used` (subset só-da-demo) e `utilities` (baked) — o caminho das
// utilities é o preset UnoCSS (hasheado, JIT); a família baked reintroduziria
// literais --bs-* e duplicaria o preset.
const EXCLUDE_FAMILIES = new Set(['literal', 'utilities/used', 'utilities'])

async function listThemes() {
	return (await readdir(path.join(VE, 'themes'), { withFileTypes: true }))
		.filter((e) => e.isDirectory())
		.map((e) => e.name)
		.sort()
}

async function listFamilies(theme) {
	const base = path.join(VE, 'themes', theme)
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
			// `literal/**` é o monólito: re-declara os MESMOS contracts das famílias.
			// Incluí-lo no barrel torna cada nome duplicado ambíguo p/ `export *`
			// (o ES omite silenciosamente nomes ambíguos → `btn`, `btnPrimary`, …
			// sumiam do manifesto). O contract autoritativo é o por-família.
			if (e.isDirectory()) {
				if (path.relative(base, p).replace(/\\/g, '/') === 'literal') continue
				await walk(p)
			} else if (e.name.endsWith('.css.ts')) {
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

async function buildTheme(theme, { includeContract }) {
	const families = await listFamilies(theme)
	const entries = {
		scope: path.join(VE, 'themes', theme, 'scope.css.ts'),
		'public-vars': path.join(VE, 'themes', theme, 'public-vars.css.ts'),
	}
	for (const f of families) entries[f.leaf] = f.file
	if (includeContract) entries.contract = path.join(VE, '__pkg', 'contract.ts')

	const themeOut = path.join(OUT, 'themes', theme)
	await build({
		root: path.join(ROOT, 've-project2'),
		configFile: false,
		logLevel: 'warn',
		plugins: [vanillaExtractPlugin({ identifiers: ({ hash }) => `b${hash}` })],
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

	// Normaliza nomes (Vite às vezes emite `X.css.ts.css`) e remove .css vazios.
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

	// Conta literal --bs-* residual + bytes.
	const cssFiles = (await readdir(themeOut)).filter((f) => f.endsWith('.css')).sort()
	let totalBytes = 0, litDecls = 0, litRefs = 0
	for (const f of cssFiles) {
		const css = await readFile(path.join(themeOut, f), 'utf8')
		totalBytes += Buffer.byteLength(css)
		litDecls += (css.match(/[^)]--bs-[a-z0-9-]+:/g) || []).length
		litRefs += (css.match(/var\(\s*--bs-[a-z0-9-]+/g) || []).length
	}
	return { theme, cssCount: cssFiles.length, kb: totalBytes / 1024, litDecls, litRefs }
}

async function main() {
	const themes = await listThemes()
	const contractModules = await listContractModules()

	// Barrel do contract (theme-agnostic) — compilado junto do 1º tema.
	await mkdir(path.join(VE, '__pkg'), { recursive: true })
	// Classes GENÉRICAS que carregam estilo real e vivem só em `literal/` (o modelo
	// do Bootstrap 5.3: `.componente` + `.active`/`.disabled`/`.fade`; cor de badge
	// via `.bg-*`/`.rounded-pill`). O `export *` das famílias exclui `literal/`, e as
	// cópias em `ui/*`/`utilities/generated` são VAZIAS (vestigiais). Sem estas, o
	// consumidor não alcança as classes que realmente estilizam estados/cores.
	// Re-export explícito VENCE a ambiguidade do `export *` → resolve p/ o hash
	// estilizado de literal. (Um genérico conserta o estado de TODOS os componentes.)
	const LITERAL_GENERICS = [
		'active',
		'disabled',
		'fade',
		'collapsing',
		'bgPrimary',
		'bgSecondary',
		'bgSuccess',
		'bgDanger',
		'bgWarning',
		'bgInfo',
		'bgLight',
		'roundedPill',
	]
	// Public vars (--bs-*) de `_public-vars.css.ts`: colidem em NOME com as vars
	// internas de `_vars.css.ts`, então o `export *` as descarta por ambiguidade
	// (só as 2 exclusivas do public-vars sobreviviam). Re-export explícito expõe
	// TODAS — resolve p/ o hash da public var (o handle tipado do valor `--bs-*`).
	// Lê os nomes do próprio arquivo p/ pegar automaticamente novas vars.
	const publicVarsSrc = await readFile(path.join(VE, 'theme-contract', '_public-vars.css.ts'), 'utf8')
	const PUBLIC_VARS = [...publicVarsSrc.matchAll(/export const (var\w+)\s*=\s*createVar/g)].map((m) => m[1])
	await writeFile(
		path.join(VE, '__pkg', 'contract.ts'),
		[
			...contractModules.map((m) => `export * from '${m}'`),
			`export { ${LITERAL_GENERICS.join(', ')} } from '../theme-contract/literal/contract.css'`,
			`export { ${PUBLIC_VARS.join(', ')} } from '../theme-contract/_public-vars.css'`,
			'',
		].join('\n'),
	)

	await rm(OUT, { recursive: true, force: true })

	const results = []
	for (let i = 0; i < themes.length; i++) {
		const t = themes[i]
		process.stdout.write(`[${i + 1}/${themes.length}] ${t.padEnd(12)} `)
		const r = await buildTheme(t, { includeContract: i === 0 })
		results.push(r)
		console.log(`${r.cssCount} CSS, ${r.kb.toFixed(1)} KB, literal=${r.litDecls}d/${r.litRefs}r`)
	}

	await rm(path.join(VE, '__pkg'), { recursive: true, force: true })

	// Manifesto de contract (do 1º tema, compartilhado).
	const contractJs = await readFile(path.join(OUT, 'themes', themes[0], 'contract.js'), 'utf8').catch(() => '')
	const names = new Set([...contractJs.matchAll(/\b([A-Za-z][A-Za-z0-9]*) =/g)].map((m) => m[1]))

	const totalKb = results.reduce((n, r) => n + r.kb, 0)
	const totalLit = results.reduce((n, r) => n + r.litDecls + r.litRefs, 0)
	const dirty = results.filter((r) => r.litDecls + r.litRefs > 0)
	console.log(`\n=== dist-pkg: ${themes.length} temas ===`)
	console.log(`CSS total: ${(totalKb / 1024).toFixed(2)} MB`)
	console.log(`manifesto de contract (compartilhado): ~${names.size} nomes`)
	console.log(`literal --bs-* residual TOTAL: ${totalLit}`)
	if (dirty.length) {
		console.log(`  ⚠ temas com literal: ${dirty.map((r) => `${r.theme}(${r.litDecls}d/${r.litRefs}r)`).join(', ')}`)
		process.exitCode = 1
	} else {
		console.log(`  ✔ 0 literal em todos os ${themes.length} temas`)
	}
}

main().catch((e) => { console.error(e); process.exit(1) })
