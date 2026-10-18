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
//
// O nome do arquivo acompanha o conteúdo PURGADO. O Vite dá o hash do nome pelo
// CSS inteiro do pacote, que não muda quando o app passa a usar uma classe nova:
// o mesmo `bootstrap-<hash>.css` saía com e sem a regra, e o navegador seguia
// com a cópia antiga em cache (ddsoft-online, 17/10/2026). Depois de purgar, o
// asset ganha o hash do conteúdo final e as referências nos chunks JS
// (`__vite__mapDeps`) e no HTML são trocadas.

import { createHash } from 'node:crypto'
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

/** 8 caracteres base64url do SHA-256 do conteúdo (o mesmo tamanho do hash do Vite). */
const contentHash = (src) => createHash('sha256').update(src).digest('base64url').slice(0, 8)

/** Troca o hash do nome (`nome-<hash>.css`) pelo do conteúdo; `null` se não há hash no nome. */
function renameByContent(file, src) {
	const m = /^(.*-)[\w-]{8}(\.css)$/.exec(file)
	return m ? `${m[1]}${contentHash(src)}${m[2]}` : null
}

/** Troca cada nome antigo pelo novo num texto (chunk JS ou HTML). */
const replaceNames = (text, renames) =>
	renames.reduce((t, [from, to]) => t.split(from).join(to), text)

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
		// `post`: depois do Vite preencher os nomes dos CSS nos chunks
		// (`__vite__mapDeps`) e no index.html, que aqui são trocados pelo novo.
		generateBundle: {
			order: 'post',
			handler(_outputOptions, bundle) {
				if (options.disabled || allHashes.size === 0) return
				// 1) conjunto usado = hashes de contract presentes nos chunks JS.
				const used = new Set()
				for (const file of Object.keys(bundle)) {
					const c = bundle[file]
					if (c.type !== 'chunk') continue
					for (const m of c.code.matchAll(STR_HASH)) if (allHashes.has(m[1])) used.add(m[1])
				}
				// 2) purga cada asset CSS (os chunks de tema) e renomeia pelo conteúdo.
				let before = 0
				let after = 0
				const renames = []
				for (const file of Object.keys(bundle)) {
					const a = bundle[file]
					if (a.type !== 'asset' || !file.endsWith('.css')) continue
					const src = String(a.source)
					const purged = purgeThemeCss(src, used, allHashes)
					before += src.length
					after += purged.length
					if (purged === src) continue
					const to = renameByContent(file, purged)
					if (!to || to === file) {
						a.source = purged
						continue
					}
					// O Rolldown não aceita entrada nova atribuída ao `bundle`: emite.
					delete bundle[file]
					this.emitFile({
						type: 'asset',
						fileName: to,
						source: purged,
						name: a.names?.[0] ?? a.name,
						originalFileName: a.originalFileNames?.[0] ?? a.originalFileName,
					})
					renames.push([file, to])
				}
				// 3) referências ao nome antigo: código dos chunks, metadados do Vite
				// (manifest) e assets de texto (index.html).
				if (renames.length) {
					const map = new Map(renames)
					for (const o of Object.values(bundle)) {
						if (o.type === 'chunk') {
							o.code = replaceNames(o.code, renames)
							const css = o.viteMetadata?.importedCss
							if (css) for (const [from, to] of map) if (css.delete(from)) css.add(to)
						} else if (o.fileName.endsWith('.html') && typeof o.source === 'string') {
							o.source = replaceNames(o.source, renames)
						}
					}
				}
				if (before) {
					const pct = (100 * (1 - after / before)).toFixed(0)
					this.info?.(`bootswatch purge: CSS ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (-${pct}%), ${used.size} classes usadas`)
				}
			},
		},
	}
}

export default bootswatchPurge
