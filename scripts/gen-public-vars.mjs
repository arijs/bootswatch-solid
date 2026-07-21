// Gera a CAMADA DE VARS PÚBLICAS (docs/packaging-plan.md §3.3-bis).
// As utilities referenciam ~65 vars globais --bs-* que NÃO estão no contract.
// Aqui: (1) um _public-vars.css.ts no contract com createVar() de cada uma
// (hasheadas pelo próprio VE, mesmo namespace --b das classes; SEM prefixo
// próprio); (2) o mapa nome-bootstrap → export; (3) por tema, a atribuição dos
// valores no scope, extraída do :root do screenshots/{theme}/bootstrap.css.
//
// generate-preset depois lê o contract compilado + este mapa e substitui os
// --bs-* das utilities pelos nomes hasheados.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { parse } from '@adobe/css-tools'
import { bootstrapUtilities } from '../preset/bootstrap-utilities.generated.mjs'

const ROOT = process.cwd()
const VE = path.join(ROOT, 've-project2', 'src')
const CONTRACT_FILE = path.join(VE, 'theme-contract', '_public-vars.css.ts')
const NAMES_JSON = path.join(ROOT, 'preset', 'public-vars.names.json')

// 1. Vars --bs-* que as utilities usam (referenciam OU setam).
function utilityVars() {
	const set = new Set()
	for (const [, decls] of bootstrapUtilities.rules) {
		for (const [prop, val] of Object.entries(decls)) {
			if (prop.startsWith('--bs-')) set.add(prop)
			for (const m of String(val).matchAll(/var\((--bs-[a-z0-9-]+)/g)) set.add(m[1])
		}
	}
	return [...set].sort()
}

const exportName = (v) =>
	'varBs' + v.replace(/^--bs-/, '').split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join('')

// 2. :root de um tema → { '--bs-x': 'valor' } (default/light; ignora dark).
function rootVars(theme) {
	const css = readFileSync(path.join(ROOT, 'screenshots', theme, 'bootstrap.css'), 'utf8')
	const ast = parse(css)
	const out = {}
	for (const r of ast.stylesheet.rules) {
		if (r.type !== 'rule') continue
		// pega o bloco que inclui :root (ex.: ":root, [data-bs-theme=light]").
		if (!r.selectors.includes(':root')) continue
		for (const d of r.declarations) {
			if (d.type === 'declaration' && d.property.startsWith('--bs-')) out[d.property] = d.value.trim()
		}
		break // primeiro bloco :root = tema default
	}
	return out
}

function themes() {
	return readdirSync(path.join(VE, 'themes')).filter((t) =>
		existsSync(path.join(VE, 'themes', t, 'scope.css.ts')))
}

function scopeExport(theme) {
	// bootstrapScope, ceruleanScope, … (mesmo export do scope.css.ts).
	return `${theme.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Scope`
}

function main() {
	const vars = utilityVars()
	const nameMap = Object.fromEntries(vars.map((v) => [v, exportName(v)]))

	// (1) contract: _public-vars.css.ts
	const contract = [
		'// GERADO por scripts/gen-public-vars.mjs — NÃO editar à mão.',
		'// Vars públicas globais (:root) do Bootstrap que as utilities referenciam.',
		'// createVar() → hasheadas pelo VE (mesmo --b das classes). Os valores',
		'// por tema são atribuídos em themes/<tema>/public-vars.css.ts.',
		"import { createVar } from '@vanilla-extract/css'",
		'',
		...vars.map((v) => `export const ${nameMap[v]} = createVar() // ${v}`),
		'',
	].join('\n')
	writeFileSync(CONTRACT_FILE, contract)
	writeFileSync(NAMES_JSON, JSON.stringify(nameMap, null, '\t') + '\n')

	// (2) por tema: atribuição dos valores presentes no :root.
	let themeCount = 0, assignedSample = 0
	for (const theme of themes()) {
		const root = rootVars(theme)
		const assigns = vars.filter((v) => v in root)
		if (theme === 'bootstrap') assignedSample = assigns.length
		const scope = scopeExport(theme)
		const imports = assigns.map((v) => nameMap[v]).join(', ')
		const body = [
			`// GERADO por scripts/gen-public-vars.mjs — NÃO editar à mão.`,
			`import { globalStyle } from '@vanilla-extract/css'`,
			`import { ${scope} } from './scope.css'`,
			`import { ${imports} } from '../../theme-contract/_public-vars.css'`,
			'',
			`globalStyle(${scope}, {`,
			`\tvars: {`,
			...assigns.map((v) => `\t\t[${nameMap[v]}]: ${JSON.stringify(root[v])},`),
			`\t},`,
			`})`,
			'',
		].join('\n')
		writeFileSync(path.join(VE, 'themes', theme, 'public-vars.css.ts'), body)
		themeCount++
	}

	console.log('=== gen-public-vars ===')
	console.log(`vars públicas (createVar):     ${vars.length}`)
	console.log(`temas com public-vars.css.ts:  ${themeCount}`)
	console.log(`atribuídas no scope (bootstrap): ${assignedSample} (as demais são setadas pela própria utility, ex. opacidades)`)
	console.log(`não no :root (utility-local):  ${vars.length - assignedSample}`)
	console.log(`→ ${path.relative(ROOT, CONTRACT_FILE)}, ${path.relative(ROOT, NAMES_JSON)}, themes/*/public-vars.css.ts`)
}

main()
