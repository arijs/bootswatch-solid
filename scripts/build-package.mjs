// Fase 1 do docs/packaging-plan.md — build do pacote @arijs/bootswatch-ve.
// Compila os .css.ts (temas + contract) via Vite + vanillaExtractPlugin, SEM
// o app (index.tsx importa @arijs/stream-xml-parser → css-selector-parser, que
// está bloqueado no sandbox e não é necessário para o pacote). Cada família é
// um ENTRY próprio → CSS por família (a granularidade que o app tinha via
// dynamic import). O entry de contract exporta os nomes hasheados (manifesto).
//
// Escopo F1: tema `bootstrap`, famílias `global` + `ui/buttons` + `scope`.
// Fases 2/3 escalam para 27 temas / todas as famílias / preset UnoCSS.

import { rm, mkdir, writeFile, readdir, readFile, cp } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { build } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const ROOT = process.cwd()
const VE = path.join(ROOT, 've-project2', 'src')
const OUT = path.join(ROOT, 'dist-pkg')
const THEME = 'bootstrap'

// Entradas do build. `name` vira o nome do arquivo (JS+CSS) na saída.
const entries = {
	scope: path.join(VE, 'themes', THEME, 'scope.css.ts'),
	global: path.join(VE, 'themes', THEME, 'global', 'styles.css.ts'),
	buttons: path.join(VE, 'themes', THEME, 'ui', 'buttons', 'styles.css.ts'),
	contract: path.join(VE, '__pkg', 'contract.ts'),
}

async function main() {
	// 1. Gera o entry de contract (manifesto dos nomes hasheados p/ botões).
	await mkdir(path.join(VE, '__pkg'), { recursive: true })
	await writeFile(
		path.join(VE, '__pkg', 'contract.ts'),
		[
			"export * from '../theme-contract/ui/buttons/contract.css'",
			"export * from '../theme-contract/_vars.css'",
			"export { bootstrapScope } from '../themes/bootstrap/scope.css'",
			'',
		].join('\n'),
	)

	await rm(OUT, { recursive: true, force: true })
	const themeOut = path.join(OUT, 'themes', THEME)

	// 2. Build: só o plugin VE, identifiers determinísticos e estáveis.
	await build({
		root: path.join(ROOT, 've-project2'),
		configFile: false,
		logLevel: 'warn',
		plugins: [
			vanillaExtractPlugin({
				identifiers: ({ hash }) => `bsve_${hash}`, // estável entre builds
			}),
		],
		build: {
			outDir: themeOut,
			emptyOutDir: true,
			cssCodeSplit: true,
			target: 'esnext',
			minify: false,
			lib: {
				entry: entries,
				formats: ['es'],
			},
			rollupOptions: {
				output: {
					entryFileNames: '[name].js',
					assetFileNames: (info) => {
						const n = info.names?.[0] ?? info.name ?? ''
						return n.endsWith('.css') ? '[name].css' : '[name][extname]'
					},
				},
			},
		},
	})

	// 3. Relatório do que saiu (só arquivos no nível do tema).
	const entriesOut = await readdir(themeOut, { withFileTypes: true })
	console.log('\n=== dist-pkg/themes/%s ===', THEME)
	for (const d of entriesOut.filter((e) => e.isFile()).sort((a, b) => a.name.localeCompare(b.name))) {
		const buf = await readFile(path.join(themeOut, d.name))
		console.log(`  ${d.name.padEnd(18)} ${String(buf.length).padStart(7)} bytes`)
	}

	// Amostra: os hashes do contract (manifesto) e regras da família buttons.
	const contractJs = await readFile(path.join(themeOut, 'contract.js'), 'utf8').catch(() => '')
	console.log('\n=== manifesto (contract.js) — amostra de exports hasheados ===')
	for (const m of contractJs.matchAll(/export\s*\{\s*([^}]+)\}/g)) {
		console.log('  ', m[1].replace(/\s+/g, ' ').slice(0, 200))
	}
	const buttonsCss = await readFile(path.join(themeOut, 'buttons.css'), 'utf8').catch(() => '')
	console.log('\n=== buttons.css — 1as linhas (deve ter seletores .scope.contract) ===')
	console.log(buttonsCss.split('\n').slice(0, 6).map((l) => '  ' + l).join('\n'))
	console.log(`\n(buttons.css: ${buttonsCss.length} bytes; contém hash bsve_? ${/\.bsve_/.test(buttonsCss)})`)
}

main()
	.catch((e) => {
		console.error(e)
		process.exitCode = 1
	})
	.finally(async () => {
		// Remove o entry temporário de contract (não versionar).
		await rm(path.join(VE, '__pkg'), { recursive: true, force: true })
	})
