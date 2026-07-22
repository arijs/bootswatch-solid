// Plugin Vite de purge do @arijs/bootswatch-ve.
//
// O pacote entrega o CSS de cada tema COMPLETO (todas as famílias × responsivo).
// O consumidor carrega 1 chunk por tema (via import() dinâmico → code-split do
// Vite). Este plugin, no build do consumidor, enxuga cada chunk de tema para
// conter só as classes que o app realmente usa.
//
// Conjunto usado = os hashes das classes de contract que SOBREVIVEM ao bundle
// (o app importa `{ btn } from '@arijs/bootswatch-ve/buttons'` e usa; o valor
// "b…" da classe aparece nos chunks JS). É o grafo de módulos + tree-shaking do
// próprio bundler — o import é o sinal de uso, resolvendo classes dinâmicas.
//
// Uma regra CSS é mantida sse TODOS os hashes de contract que seu seletor exige
// estão no conjunto usado. O scope do tema e as vars (`:root`/reboot sem hash de
// contract) não exigem nada → sempre mantidos. Sem o plugin, o CSS completo é
// servido (correto, só maior) — é otimização, não correção.

import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse, stringify } from '@adobe/css-tools'

const HASH = /\.(b[a-z0-9]+)/g // `.b<hash>` num seletor
// `"b<hash>"` / `'b<hash>'` / `` `b<hash>` `` num JS bundlado (o minificador do
// Vite pode usar template literals p/ as strings de classe).
const STR_HASH = /["'`](b[a-z0-9]+)["'`]/g

const selectorContractHashes = (sel, allHashes) =>
	[...sel.matchAll(HASH)].map((m) => m[1]).filter((h) => allHashes.has(h))

function filterRules(rules, used, allHashes) {
	return rules.filter((node) => {
		if (node.type === 'rule') {
			// Mantém as partes (vírgula) cujo required ⊆ used; dropa a regra se nenhuma.
			const kept = node.selectors.filter((sel) =>
				selectorContractHashes(sel, allHashes).every((h) => used.has(h)),
			)
			if (!kept.length) return false
			node.selectors = kept
			return true
		}
		if (node.type === 'media' || node.type === 'supports' || node.type === 'document') {
			node.rules = filterRules(node.rules, used, allHashes)
			return node.rules.length > 0
		}
		// keyframes, font-face, comentários, etc. → estruturais, mantidos.
		return true
	})
}

/** Enxuga um CSS de tema mantendo só regras cujas classes de contract estão em `used`. */
export function purgeThemeCss(css, used, allHashes) {
	const ast = parse(css, { silent: true })
	ast.stylesheet.rules = filterRules(ast.stylesheet.rules, used, allHashes)
	return stringify(ast)
}

/** Todos os hashes de classe de contract do pacote (valores dos exports de família). */
function loadContractHashes(pkgDir) {
	const manifestPath = path.join(pkgDir, 'contract-manifest.json')
	const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
	const hashes = new Set()
	for (const entry of Object.keys(manifest)) {
		const idx = path.join(pkgDir, entry, 'index.js')
		if (!existsSync(idx)) continue
		for (const m of readFileSync(idx, 'utf8').matchAll(/=\s*"(b[a-z0-9]+)"/g)) hashes.add(m[1])
	}
	return hashes
}

/**
 * @param {object} [options]
 * @param {boolean} [options.disabled] desliga o purge (serve o CSS completo).
 */
export function bootswatchPurge(options = {}) {
	// vite/index.mjs vive na raiz do pacote (package/vite/); o pkg é `..`.
	const pkgDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
	let allHashes = new Set()
	return {
		name: '@arijs/bootswatch-ve:purge',
		apply: 'build',
		buildStart() {
			if (options.disabled) return
			allHashes = loadContractHashes(pkgDir)
		},
		generateBundle(_outputOptions, bundle) {
			if (options.disabled || allHashes.size === 0) return
			// 1) conjunto usado = hashes de contract presentes nos chunks JS.
			const used = new Set()
			for (const file of Object.keys(bundle)) {
				const c = bundle[file]
				if (c.type !== 'chunk') continue
				for (const m of c.code.matchAll(STR_HASH)) if (allHashes.has(m[1])) used.add(m[1])
			}
			// 2) purga cada asset CSS (os chunks de tema).
			let before = 0
			let after = 0
			for (const file of Object.keys(bundle)) {
				const a = bundle[file]
				if (a.type !== 'asset' || !file.endsWith('.css')) continue
				const src = String(a.source)
				before += src.length
				a.source = purgeThemeCss(src, used, allHashes)
				after += a.source.length
			}
			if (before) {
				const pct = (100 * (1 - after / before)).toFixed(0)
				this.info?.(`bootswatch purge: CSS ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (-${pct}%), ${used.size} classes usadas`)
			}
		},
	}
}

export default bootswatchPurge
