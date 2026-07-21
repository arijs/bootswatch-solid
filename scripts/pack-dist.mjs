// Monta o pacote publicável @arijs/bootswatch-ve a partir dos artefatos do
// build VE (scripts/build-package.mjs) + preset (Fase 3) + runtime /solid
// (Fase 4). Saída: `package/` (raiz publicável) no layout do plano §2:
//
//   package/
//     package.json  README.md
//     contract/  index.js  index.d.ts        # manifesto theme-agnostic (nomes)
//     themes/<tema>/
//       scope.css  scope.js  scope.d.ts       # scope do tema (hash + vars)
//       public-vars.css                       # vars públicas (utilities)
//       <familia>.css ×N                       # regras .scope.contract
//       index.css                             # conveniência: tudo do tema
//     preset/   index.js  index.d.ts + dados  # UnoCSS presetBootswatch
//     solid/    index.js  index.d.ts          # runtime mínimo Solid
//
// Descarta o CSS solto do entry `contract` (frames de DEMO de popovers/tooltips
// e utilities duplicadas) — o manifesto é só JS (nomes). As regras reais de
// componente já vivem nos <familia>.css.
//
// Pré-requisito: `node scripts/build-package.mjs` já rodou (popula
// dist-pkg/themes/<tema>/). Este script NÃO recompila o VE.

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
	// O manifesto é theme-agnostic — pega de qualquer tema (usamos o primeiro).
	const themes = await listThemes()
	const contractJs = await readFile(path.join(SRC, themes[0], 'contract.js'), 'utf8')
	const dir = path.join(OUT, 'contract')
	await mkdir(dir, { recursive: true })
	await writeFile(path.join(dir, 'index.js'), contractJs)
	const names = parseExportNames(contractJs)
	const dts = [
		'// Manifesto de contract do @arijs/bootswatch-ve — nomes hasheados (VE),',
		'// compartilhados pelos temas. Cada `var*` é uma string `var(--b…)`;',
		'// cada contract de classe/elemento é a classe hasheada correspondente.',
		...names.map((n) => `export declare const ${n}: string`),
		'',
	].join('\n')
	await writeFile(path.join(dir, 'index.d.ts'), dts)
	return names.length
}

async function assemblePreset() {
	const dir = path.join(OUT, 'preset')
	await mkdir(dir, { recursive: true })
	// Runtime precisa só do preset + dados gerados (os JSON são build-time).
	await copyFile(
		path.join(ROOT, 'preset', 'preset-bootswatch.mjs'),
		path.join(dir, 'preset-bootswatch.mjs'),
	)
	await copyFile(
		path.join(ROOT, 'preset', 'bootstrap-utilities.generated.mjs'),
		path.join(dir, 'bootstrap-utilities.generated.mjs'),
	)
	await writeFile(
		path.join(dir, 'index.js'),
		"export { default, presetBootswatch } from './preset-bootswatch.mjs'\n",
	)
	await writeFile(
		path.join(dir, 'index.d.ts'),
		[
			"import type { Preset } from '@unocss/core'",
			'',
			'export interface PresetBootswatchOptions {',
			'\t/** Prefixo aplicado SÓ às classes de utility (ex.: "" → mb-3; "bsu-" → bsu-mb-3). */',
			'\tprefix?: string',
			'}',
			'',
			'export declare function presetBootswatch(options?: PresetBootswatchOptions): Preset',
			'export default presetBootswatch',
			'',
		].join('\n'),
	)
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
			'\t/** Prefixo das utilities do preset (ex.: "" ou "bsu-") — REATIVO. */',
			'\tutilityPrefix: Accessor<string>',
			'\t/** Classes de COMPONENTE: scope + contracts (reativo ao tema). */',
			'\tcx: (...classes: ClassArg[]) => string',
			'\t/** Classes de UTILITY com o prefixo do contexto. */',
			'\tu: (...classes: ClassArg[]) => string',
			'}',
			'',
			'export declare function BootswatchProvider(props: {',
			'\tscope: string | Accessor<string>',
			'\tutilityPrefix?: string | Accessor<string>',
			'\tchildren: JSX.Element',
			'}): JSX.Element',
			'',
			'/** Contexto reativo completo: `{ scope, utilityPrefix, cx, u }`. */',
			'export declare function useBootswatch(): Bootswatch',
			'',
			'/** Só o scope reativo do tema ativo. */',
			'export declare function useScope(): Accessor<string>',
			'',
			'/** `cx(...)` — classes de componente: scope + contracts (reativo). */',
			'export declare function useCx(): (...classes: ClassArg[]) => string',
			'',
			'/** `u(...)` — prefixa utilities com o prefixo do contexto. */',
			'export declare function useUtility(): (...classes: ClassArg[]) => string',
			'',
			'/** Núcleo puro: prefixa cada token de utility. */',
			'export declare function prefixClasses(prefix: string, classes: ClassArg[]): string',
			'',
		].join('\n'),
	)
}

function packageJson(themes) {
	const exportsMap = {
		'.': { types: './contract/index.d.ts', default: './contract/index.js' },
		'./contract': { types: './contract/index.d.ts', default: './contract/index.js' },
		'./preset': { types: './preset/index.d.ts', default: './preset/index.js' },
		'./solid': { types: './solid/index.d.ts', default: './solid/index.js' },
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
			'Bootswatch como design system Vanilla-Extract: CSS de componente pré-compilado (classes/vars hasheadas), preset UnoCSS de utilities e runtime Solid mínimo.',
		type: 'module',
		license: 'MIT',
		sideEffects: ['**/*.css'],
		exports: exportsMap,
		files: ['contract', 'preset', 'solid', 'themes', 'README.md'],
		peerDependencies: {
			'@unocss/core': '>=0.58.0',
			// `>=2.0.0-0` inclui os prereleases do Solid 2.0 (beta/next) — o alvo do
			// runtime /solid. Sem isso, `>=1.8.0` exclui prereleases e o npm tenta
			// puxar um solid-js 1.x stable em projetos no Solid 2.0-beta, conflitando.
			'solid-js': '>=1.8.0 || >=2.0.0-0',
		},
		peerDependenciesMeta: {
			'@unocss/core': { optional: true },
			'solid-js': { optional: true },
		},
		keywords: [
			'bootstrap',
			'bootswatch',
			'vanilla-extract',
			'unocss',
			'solid',
			'design-system',
			'css',
		],
		publishConfig: { access: 'public' },
		bootswatchThemes: themes,
	}
}

function readme(themes, contractCount) {
	return `# @arijs/bootswatch-ve

Bootswatch reempacotado como **design system Vanilla-Extract**: o CSS de
componente é pré-compilado com **classes e variáveis 100% hasheadas** (nada de
\`--bs-*\` literal — zero colisão no seu projeto), as **utilities** vêm de um
preset UnoCSS (JIT), e há um **runtime Solid mínimo** para amarrar scope +
prefixo.

## Camadas

- \`@arijs/bootswatch-ve/contract\` — manifesto (${contractCount} nomes): as
  classes e variáveis hasheadas que o CSS usa. Importe daqui para aplicar
  contracts nos seus componentes.
- \`@arijs/bootswatch-ve/themes/<tema>/index.css\` — todo o CSS de um tema
  (side-effect). Ou importe por família: \`.../themes/<tema>/buttons.css\`.
- \`@arijs/bootswatch-ve/themes/<tema>/scope\` — \`export const <tema>Scope\`
  (a classe de scope hasheada) + \`scope.css\` (efeito colateral que define as
  vars do tema).
- \`@arijs/bootswatch-ve/preset\` — \`presetBootswatch({ prefix })\` para o
  UnoCSS. Prefixo opcional SÓ nas utilities (\`bsu-mb-3\`); componentes/vars
  nunca têm prefixo (são hashes).
- \`@arijs/bootswatch-ve/solid\` — \`BootswatchProvider\` (aceita \`scope\` fixo
  OU accessor reativo p/ troca de tema em runtime), \`useBootswatch\` →
  \`{ scope, utilityPrefix, cx, u }\`, e os atalhos \`useScope\`/\`useCx\`/
  \`useUtility\`. \`cx(...)\` monta classes de componente (scope + contracts);
  \`u(...)\` monta utilities com o prefixo.

## Uso (Solid + UnoCSS)

\`\`\`ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetBootswatch } from '@arijs/bootswatch-ve/preset'
export default defineConfig({ presets: [presetBootswatch({ prefix: 'bsu-' })] })
\`\`\`

\`\`\`tsx
import '@arijs/bootswatch-ve/themes/bootstrap/index.css'
import { bootstrapScope } from '@arijs/bootswatch-ve/themes/bootstrap/scope'
import { btnPrimary } from '@arijs/bootswatch-ve/contract'
import { BootswatchProvider, useBootswatch } from '@arijs/bootswatch-ve/solid'

function Button() {
  const { cx, u } = useBootswatch()
  // cx aplica o scope do tema ativo automaticamente (reativo).
  return <button class={\`\${cx(btnPrimary)} \${u('mb-3')}\`}>OK</button>
}

// scope FIXO:
export const AppFixed = () => (
  <BootswatchProvider scope={bootstrapScope} utilityPrefix="bsu-">
    <Button />
  </BootswatchProvider>
)

// scope REATIVO (troca de tema em runtime): passe um accessor. O app carrega o
// CSS do tema e resolve o scope; o provider só o distribui.
// const [scope, setScope] = createSignal(bootstrapScope)
// <BootswatchProvider scope={scope} utilityPrefix="bsu-"> … </BootswatchProvider>
\`\`\`

Temas disponíveis: ${themes.join(', ')}.
`
}

async function main() {
	await rm(OUT, { recursive: true, force: true })
	await mkdir(OUT, { recursive: true })

	const themes = await listThemes()
	const themeInfos = []
	for (const t of themes) themeInfos.push(await assembleTheme(t))
	const contractCount = await assembleContract()
	await assemblePreset()
	await assembleSolid()

	await writeFile(
		path.join(OUT, 'package.json'),
		`${JSON.stringify(packageJson(themes), null, 2)}\n`,
	)
	await writeFile(path.join(OUT, 'README.md'), readme(themes, contractCount))

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
	console.log(`contract: ${contractCount} nomes (JS + d.ts)`)
	console.log(`preset + solid: compilados`)
	console.log(`tamanho total do pacote: ${(size / 1024).toFixed(1)} KB`)
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
