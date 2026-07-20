// Gera os dados do presetBootswatch a partir da FONTE autoritativa: compila os
// utilities do Bootstrap (bootstrap-fork/scss/bootstrap-utilities.scss) com o
// sass e parseia o CSS em regras. Fiel por construção (decisão §9.2). Emite
// preset/bootstrap-utilities.generated.mjs consumido pelo preset em runtime.
//
// Modelo: cada utility atômica (.classe { decls }) vira uma STATIC RULE do
// UnoCSS; as variantes responsivas (.classe-md-x dentro de @media) NÃO viram
// regras próprias — são reconstruídas por uma variant que remove o `-{bp}-` e
// embrulha na media. `responsiveBases`/`printBases` restringem a variant às
// utilities que o Bootstrap realmente torna responsivas (fidelidade).

import { writeFile } from 'node:fs/promises'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import * as sass from 'sass'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { parse } from '@adobe/css-tools'

const ROOT = process.cwd()
const ENTRY = path.join(ROOT, 'bootstrap-fork', 'scss', 'bootstrap-utilities.scss')
const OUT = path.join(ROOT, 'preset', 'bootstrap-utilities.generated.mjs')

const BP_PX_TO_NAME = { 576: 'sm', 768: 'md', 992: 'lg', 1200: 'xl', 1400: 'xxl' }
const BREAKPOINTS = { sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }

const isSimpleClass = (sel) => /^\.[A-Za-z0-9_-]+$/.test(sel)
const clsName = (sel) => sel.slice(1)
const declsOf = (rule) =>
	Object.fromEntries(rule.declarations.filter((d) => d.type === 'declaration').map((d) => [d.property, d.value]))
const declsEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)
const stripBp = (name) => name.replace(/-(sm|md|lg|xl|xxl)-/, '-')

async function main() {
	const { css: rawCss } = sass.compile(ENTRY, { style: 'expanded', quietDeps: true, silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls'] })
	// Bootstrap distribui o CSS APÓS autoprefixer (PostCSS) — sem isso faltam
	// prefixos de fornecedor (-webkit-/-moz-) em user-select, position:sticky…
	// Usa o mesmo browserslist do Bootstrap para paridade exata.
	const overrideBrowserslist = readFileSync(path.join(ROOT, 'bootstrap-fork', '.browserslistrc'), 'utf8')
		.split('\n').map((l) => l.replace(/#.*/, '').trim()).filter(Boolean)
	const { css } = await postcss([autoprefixer({ overrideBrowserslist })]).process(rawCss, { from: undefined })
	const ast = parse(css)

	const base = new Map()          // name -> decls
	const skippedSelectors = []     // seletores não-atômicos (relatório)
	const responsiveBases = new Set()
	const printBases = new Set()
	const nonInfixOverrides = new Set() // fs-* (RFS), reduced-motion: gap conhecido
	let responsiveChecked = 0
	const mismatches = []

	for (const node of ast.stylesheet.rules) {
		if (node.type !== 'rule') continue
		for (const sel of node.selectors) {
			if (sel === ':root') continue
			if (!isSimpleClass(sel)) { skippedSelectors.push(sel); continue }
			base.set(clsName(sel), declsOf(node))
		}
	}

	for (const node of ast.stylesheet.rules) {
		if (node.type !== 'media') continue
		const mw = node.media.match(/min-width:\s*(\d+)px/)
		const isPrint = /\bprint\b/.test(node.media)
		if (!mw && !isPrint) continue // ignora reduced-motion etc. (não é utility-composed)
		for (const rule of node.rules ?? []) {
			if (rule.type !== 'rule') continue
			for (const sel of rule.selectors) {
				if (!isSimpleClass(sel)) { skippedSelectors.push(sel); continue }
				const name = clsName(sel)
				const baseName = isPrint ? name.replace(/-print-/, '-') : stripBp(name)
				// Só é variante infix se o nome REALMENTE mudou (tinha `-{bp}-`/`-print-`).
				// Mesmo-nome dentro de @media = override (RFS de fs-*, reduced-motion):
				// não é utility responsiva por infix — o base já cobre; pula (gap doc.).
				if (baseName === name) { nonInfixOverrides.add(name); continue }
				const target = isPrint ? printBases : responsiveBases
				// Validação: a variante responsiva/print tem as MESMAS decls do base.
				if (base.has(baseName)) {
					responsiveChecked++
					target.add(baseName)
					if (!declsEqual(declsOf(rule), base.get(baseName))) {
						mismatches.push({ name, baseName })
					}
				} else {
					// base ausente = utility só-responsiva (raro); registra como base própria.
					base.set(baseName, declsOf(rule))
					target.add(baseName)
				}
			}
		}
	}

	// Substitui --bs-* pelos nomes hasheados do VE (camada de vars públicas,
	// §3.3-bis). Mapa: names.json (--bs-x → varBsX) + contract.js (varBsX →
	// "var(--bsve_hash)"). Requer build-package rodado antes.
	const bsToHash = loadPublicVarMap()
	let leftover = new Set()
	for (const [name, decls] of base) base.set(name, hashDecls(decls, bsToHash, leftover))

	const rules = [...base.entries()].sort((a, b) => a[0].localeCompare(b[0]))
	const data = {
		rules,
		responsiveBases: [...responsiveBases].sort(),
		printBases: [...printBases].sort(),
		breakpoints: BREAKPOINTS,
	}

	const banner = '// GERADO por scripts/generate-preset.mjs a partir de bootstrap-fork — NÃO editar à mão.\n'
	const body = `export const bootstrapUtilities = ${JSON.stringify(data, null, '\t')}\nexport default bootstrapUtilities\n`
	writeFileSyncMkdir(OUT, banner + body)

	// Relatório.
	const uniqSkipped = [...new Set(skippedSelectors)]
	console.log('=== generate-preset ===')
	console.log(`base rules (atômicas):        ${rules.length}`)
	console.log(`responsiveBases:              ${data.responsiveBases.length}`)
	console.log(`printBases:                   ${data.printBases.length}`)
	console.log(`variantes responsivas checadas: ${responsiveChecked} (mismatches: ${mismatches.length})`)
	console.log(`seletores não-atômicos pulados: ${uniqSkipped.length}`)
	if (uniqSkipped.length) console.log('   ex.:', uniqSkipped.slice(0, 8).join('  '))
	console.log(`overrides mesmo-nome em @media (gap: RFS fs-*/reduced-motion): ${[...nonInfixOverrides].length}`)
	if (nonInfixOverrides.size) console.log('   ex.:', [...nonInfixOverrides].slice(0, 8).join('  '))
	if (mismatches.length) console.log('   MISMATCHES REAIS:', mismatches.slice(0, 5))
	else console.log('mismatches reais: 0 ✔')
	console.log(`vars públicas mapeadas → hash: ${Object.keys(bsToHash).length}`)
	console.log(`--bs-* NÃO mapeadas (deve ser 0): ${leftover.size}${leftover.size ? ' → ' + [...leftover].join(', ') : ' ✔'}`)
	console.log(`→ ${path.relative(ROOT, OUT)}`)
}

function writeFileSyncMkdir(file, content) {
	// pequeno helper síncrono-ish via promise
	return writeFile(file, content)
}

/** { '--bs-primary-rgb': 'var(--bsve_xxxx)' } a partir de names.json + public-vars.hash.json. */
function loadPublicVarMap() {
	const names = JSON.parse(readFileSync(path.join(ROOT, 'preset', 'public-vars.names.json'), 'utf8'))
	const hashes = JSON.parse(readFileSync(path.join(ROOT, 'preset', 'public-vars.hash.json'), 'utf8'))
	const map = {}
	for (const [bsName, expName] of Object.entries(names)) {
		if (hashes[expName]) map[bsName] = hashes[expName]
	}
	return map
}

/** Troca chaves e refs var() de --bs-* pelos nomes hasheados. */
function hashDecls(decls, bsToHash, leftover) {
	const out = {}
	for (let [prop, val] of Object.entries(decls)) {
		if (prop.startsWith('--bs-')) {
			const h = bsToHash[prop]
			if (h) prop = h.slice(4, -1) // "var(--bsve_x)" → "--bsve_x"
			else leftover.add(prop)
		}
		val = String(val).replace(/var\((--bs-[a-z0-9-]+)\)/g, (m, name) => {
			if (bsToHash[name]) return bsToHash[name]
			leftover.add(name)
			return m
		})
		out[prop] = val
	}
	return out
}

main()
