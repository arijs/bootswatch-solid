// Monta o pacote publicável @arijs/bootswatch-ve a partir dos artefatos do
// build VE (scripts/build-package.mjs) + contract por-família
// (scripts/build-contract.mjs) + runtime /solid. Saída: `package/`:
//
//   package/
//     package.json  README.md  contract-manifest.json
//     <familia>/   index.js index.d.ts   # classes hasheadas da família
//                  vars.js  vars.d.ts     # vars públicas (varBs*) da família
//     themes/<tema>/
//       scope.css  scope.js  scope.d.ts   # scope do tema (hash + vars)
//       public-vars.css                    # vars públicas (valores por tema)
//       <familia>.css ×N                   # regras .scope.contract
//       index.css                          # conveniência: tudo do tema
//     solid/    index.js  index.d.ts       # runtime mínimo Solid (scope + cx)
//
// Consumo: importe as classes de dentro da família
// (`import { btn } from '@arijs/bootswatch-ve/buttons'`) e aplique via `cx`.
//
// Pré-requisito: `pkg:build` (build-package) e `pkg:contract` (build-contract)
// já rodaram (populam dist-pkg/themes/ e dist-pkg/contract/). NÃO recompila o VE.

import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { build as esbuild } from 'esbuild'

const ROOT = process.cwd()
const SRC = path.join(ROOT, 'dist-pkg', 'themes')
const OUT = path.join(ROOT, 'package')
const PKG_NAME = '@arijs/bootswatch-ve'
// Versão do pacote publicável. O workflow de publish passa a versão da tag via
// BSVE_VERSION (sem o `v`); localmente cai no default.
const PKG_VERSION = process.env.BSVE_VERSION || '0.1.0'

// Ordem de concatenação do index.css: scope e vars primeiro (estabelecem os
// custom properties), global depois, resto alfabético.
const CSS_ORDER_HEAD = ['scope', 'public-vars', 'global']

async function listThemes() {
	return (await readdir(SRC, { withFileTypes: true }))
		.filter((e) => e.isDirectory())
		.map((e) => e.name)
		.sort()
}

/** Nomes exportados por um bundle JS de `export { a, b, c }`. */
function parseExportNames(js) {
	const m = js.match(/export\s*\{([^}]*)\}/s)
	if (!m) return []
	return m[1]
		.split(',')
		.map((s) =>
			s
				.trim()
				.split(/\s+as\s+/)
				.pop()
				.trim(),
		)
		.filter(Boolean)
		.sort()
}

async function assembleTheme(theme) {
	const from = path.join(SRC, theme)
	const to = path.join(OUT, 'themes', theme)
	await mkdir(to, { recursive: true })

	const files = (await readdir(from)).filter((f) => f.endsWith('.css'))
	// Famílias = todo .css que não seja scope/public-vars/contract*.
	const families = files
		.filter((f) => !/^contract.*\.css$/.test(f) && f !== 'scope.css' && f !== 'public-vars.css')
		.map((f) => f.replace(/\.css$/, ''))
		.sort()

	// Copia scope.css, public-vars.css e as famílias (nomes limpos).
	for (const f of ['scope.css', 'public-vars.css', ...families.map((n) => `${n}.css`)]) {
		await copyFile(path.join(from, f), path.join(to, f))
	}

	// scope.js (export const <tema>Scope = "<hash>") + .d.ts.
	const scopeJs = await readFile(path.join(from, 'scope.js'), 'utf8')
	await writeFile(path.join(to, 'scope.js'), scopeJs)
	const scopeConst =
		(scopeJs.match(/export\s*\{\s*([A-Za-z0-9_]+)\s*\}/) || [])[1] ?? `${theme}Scope`
	await writeFile(
		path.join(to, 'scope.d.ts'),
		`// Classe de scope hasheada do tema "${theme}".\nexport declare const ${scopeConst}: string\n`,
	)

	// index.css — concat na ordem definida.
	const order = [
		...CSS_ORDER_HEAD.filter(
			(n) => families.includes(n) || n === 'scope' || n === 'public-vars',
		),
		...families.filter((n) => !CSS_ORDER_HEAD.includes(n)),
	]
	const seen = new Set()
	const chunks = []
	for (const name of order) {
		if (seen.has(name)) continue
		seen.add(name)
		const p = path.join(to, `${name}.css`)
		if (
			await stat(p)
				.then(() => true)
				.catch(() => false)
		) {
			chunks.push(`/* ${name} */\n${await readFile(p, 'utf8')}`)
		}
	}
	await writeFile(path.join(to, 'index.css'), chunks.join('\n'))

	return { theme, families, scopeConst }
}

async function assembleContract() {
	// Contract POR FAMÍLIA (build-contract.mjs → dist-pkg/contract/<entry>/). Copia
	// cada entry p/ package/<entry>/ e o manifest (usado pelo plugin de purge).
	// manifest: { <entry>: { classes: string[], vars: string[] } }. Classes →
	// <entry>/index.{js,d.ts}; vars → <entry>/vars.{js,d.ts} (import de
	// <familia>/vars). classEntries têm ./<entry>; varsEntries têm ./<entry>/vars.
	const SRC_C = path.join(ROOT, 'dist-pkg', 'contract')
	const manifest = JSON.parse(await readFile(path.join(SRC_C, 'manifest.json'), 'utf8'))
	const classEntries = []
	const varsEntries = []
	let total = 0
	for (const entry of Object.keys(manifest).sort()) {
		const { classes = [], vars = [] } = manifest[entry]
		const dir = path.join(OUT, entry)
		await mkdir(dir, { recursive: true })
		if (classes.length) {
			await copyFile(path.join(SRC_C, entry, 'index.js'), path.join(dir, 'index.js'))
			await copyFile(path.join(SRC_C, entry, 'index.d.ts'), path.join(dir, 'index.d.ts'))
			classEntries.push(entry)
		}
		if (vars.length) {
			await copyFile(path.join(SRC_C, entry, 'vars.js'), path.join(dir, 'vars.js'))
			await copyFile(path.join(SRC_C, entry, 'vars.d.ts'), path.join(dir, 'vars.d.ts'))
			varsEntries.push(entry)
		}
		total += classes.length + vars.length
	}
	await copyFile(path.join(SRC_C, 'manifest.json'), path.join(OUT, 'contract-manifest.json'))
	const entries = [...new Set([...classEntries, ...varsEntries])].sort()
	return { entries, classEntries, varsEntries, total }
}

async function assembleSolid() {
	const dir = path.join(OUT, 'solid')
	await mkdir(dir, { recursive: true })
	// TSX → JS (ESM), solid-js e o JSX-runtime do Solid ficam external (peer).
	await esbuild({
		entryPoints: [path.join(ROOT, 'solid', 'index.tsx')],
		outfile: path.join(dir, 'index.js'),
		bundle: true,
		format: 'esm',
		platform: 'neutral',
		target: 'es2020',
		jsx: 'preserve',
		external: ['solid-js', 'solid-js/*'],
		loader: { '.tsx': 'tsx', '.mjs': 'js' },
		logLevel: 'silent',
	})
	await writeFile(
		path.join(dir, 'index.d.ts'),
		[
			"import type { Accessor, JSX } from 'solid-js'",
			'',
			'type ClassArg = string | false | null | undefined',
			'',
			'export interface Bootswatch {',
			'\t/** Scope hasheado do tema ativo — REATIVO. Vazio até o tema resolver. */',
			'\tscope: Accessor<string>',
			'\t/** scope do tema ativo + classes de contract (reativo). */',
			'\tcx: (...classes: ClassArg[]) => string',
			'}',
			'',
			'export declare function BootswatchProvider(props: {',
			'\tscope: string | Accessor<string>',
			'\tchildren: JSX.Element',
			'}): JSX.Element',
			'',
			'/** Contexto reativo: `{ scope, cx }`. */',
			'export declare function useBootswatch(): Bootswatch',
			'',
			'/** Só o scope reativo do tema ativo. */',
			'export declare function useScope(): Accessor<string>',
			'',
			'/** `cx(...)` — scope do tema ativo + classes de contract (reativo). */',
			'export declare function useCx(): (...classes: ClassArg[]) => string',
			'',
		].join('\n'),
	)
}

function packageJson(themes, contract) {
	const exportsMap = {
		// Um entry por família (importe as classes de dentro da família:
		// import { btn } from '@arijs/bootswatch-ve/buttons'). As vars públicas da
		// família saem em <familia>/vars. Sem barrel global — é o que torna o purge
		// por imports trivial.
		...Object.fromEntries(
			contract.classEntries.map((e) => [
				`./${e}`,
				{ types: `./${e}/index.d.ts`, default: `./${e}/index.js` },
			]),
		),
		...Object.fromEntries(
			contract.varsEntries.map((e) => [
				`./${e}/vars`,
				{ types: `./${e}/vars.d.ts`, default: `./${e}/vars.js` },
			]),
		),
		'./solid': { types: './solid/index.d.ts', default: './solid/index.js' },
		'./contract-manifest.json': './contract-manifest.json',
		// `exports` só admite UM `*` por padrão. `./themes/*.css` (o `*` cruza
		// barras) cobre scope.css/index.css/<familia>.css; e por ter sufixo `.css`
		// tem prioridade sobre `./themes/*` (que só pega o import "pelado" do tema
		// → index.css). `./themes/*/scope` dá o JS+tipos do scope sem extensão.
		'./themes/*/scope': { types: './themes/*/scope.d.ts', default: './themes/*/scope.js' },
		'./themes/*.css': './themes/*.css',
		'./themes/*': './themes/*/index.css',
		'./package.json': './package.json',
	}
	return {
		name: PKG_NAME,
		version: PKG_VERSION,
		description:
			'Bootswatch como design system Vanilla-Extract: CSS por-tema pré-compilado (componentes E utilities, classes/vars hasheadas), importado por família e aplicado via cx (runtime Solid).',
		type: 'module',
		license: 'MIT',
		// Obrigatório p/ o publish com provenance (OIDC): o registry valida que
		// este URL bate com o repo do GitHub Actions que assinou o bundle sigstore.
		repository: { type: 'git', url: 'git+https://github.com/arijs/bootswatch-solid.git' },
		homepage: 'https://github.com/arijs/bootswatch-solid#readme',
		bugs: { url: 'https://github.com/arijs/bootswatch-solid/issues' },
		sideEffects: ['**/*.css'],
		exports: exportsMap,
		files: [...contract.entries, 'solid', 'themes', 'contract-manifest.json', 'README.md'],
		peerDependencies: {
			// `>=2.0.0-0` inclui os prereleases do Solid 2.0 (beta/next) — o alvo do
			// runtime /solid. Sem isso, `>=1.8.0` exclui prereleases e o npm tenta
			// puxar um solid-js 1.x stable em projetos no Solid 2.0-beta, conflitando.
			'solid-js': '>=1.8.0 || >=2.0.0-0',
		},
		peerDependenciesMeta: {
			'solid-js': { optional: true },
		},
		keywords: ['bootstrap', 'bootswatch', 'vanilla-extract', 'solid', 'design-system', 'css'],
		publishConfig: { access: 'public' },
		bootswatchThemes: themes,
	}
}

function readme(themes, contractCount) {
	return `# @arijs/bootswatch-ve

Bootswatch reempacotado como **design system Vanilla-Extract**: o CSS (componentes
E utilities) é pré-compilado por-tema com **classes e variáveis 100% hasheadas**
(nada de \`--bs-*\` literal — zero colisão no seu projeto). As classes são
importadas **por família** e aplicadas via \`cx\` do runtime Solid.

## Uso (Solid)

\`\`\`tsx
import '@arijs/bootswatch-ve/themes/bootstrap/index.css'
import { bootstrapScope } from '@arijs/bootswatch-ve/themes/bootstrap/scope'
import { btn, btnPrimary } from '@arijs/bootswatch-ve/buttons'
import { mb3, textBgSecondary } from '@arijs/bootswatch-ve/utilities'
import { BootswatchProvider, useBootswatch } from '@arijs/bootswatch-ve/solid'

function Button() {
  const { cx } = useBootswatch()
  // cx aplica o scope do tema ativo automaticamente (reativo).
  return <button class={cx(btn, btnPrimary, mb3)}>OK</button>
}

export default () => (
  <BootswatchProvider scope={bootstrapScope}>
    <Button />
  </BootswatchProvider>
)
\`\`\`

## Camadas

- **Por família** — \`@arijs/bootswatch-ve/buttons\`, \`/alerts\`, \`/utilities\`,
  \`/global\`, … (${contractCount} classes no total). Componentes e utilities são o
  mesmo tipo de coisa: classes de contract hasheadas, aplicadas por \`cx\`.
- \`@arijs/bootswatch-ve/themes/<tema>/index.css\` — todo o CSS de um tema
  (side-effect). Ou por família: \`.../themes/<tema>/buttons.css\`.
- \`@arijs/bootswatch-ve/themes/<tema>/scope\` — \`export const <tema>Scope\`
  (a classe de scope hasheada) + \`scope.css\` (define as vars do tema).
- \`@arijs/bootswatch-ve/solid\` — \`BootswatchProvider\` (aceita \`scope\` fixo
  OU accessor reativo p/ troca de tema em runtime), \`useBootswatch\` →
  \`{ scope, cx }\`, e os atalhos \`useScope\`/\`useCx\`.

Temas disponíveis: ${themes.join(', ')}.
`
}

async function main() {
	await rm(OUT, { recursive: true, force: true })
	await mkdir(OUT, { recursive: true })

	const themes = await listThemes()
	const themeInfos = []
	for (const t of themes) themeInfos.push(await assembleTheme(t))
	const contract = await assembleContract()
	await assembleSolid()

	await writeFile(
		path.join(OUT, 'package.json'),
		`${JSON.stringify(packageJson(themes, contract), null, 2)}\n`,
	)
	await writeFile(path.join(OUT, 'README.md'), readme(themes, contract.total))

	// Relatório
	async function dirSize(dir) {
		let total = 0
		for (const e of await readdir(dir, { withFileTypes: true })) {
			const p = path.join(dir, e.name)
			if (e.isDirectory()) total += await dirSize(p)
			else total += (await stat(p)).size
		}
		return total
	}
	const size = await dirSize(OUT)
	console.log(`\n=== ${PKG_NAME}@${PKG_VERSION} → package/ ===`)
	for (const ti of themeInfos) {
		console.log(
			`tema ${ti.theme}: ${ti.families.length} famílias + scope + public-vars + index.css`,
		)
	}
	console.log(`contract: ${contract.entries.length} famílias, ${contract.total} nomes`)
	console.log(`solid: compilado`)
	console.log(`tamanho total do pacote: ${(size / 1024).toFixed(1)} KB`)
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
