// presetBootswatch — preset UnoCSS para os utilities do Bootstrap (Fase 3).
// JIT (só o que é usado é gerado), classes-string idênticas ao Bootstrap.
// Prefixo configurável SÓ nas utilities (scope/componentes são hashes VE).
// Cores referenciam --bs-*-rgb (theme-agnostic → um preset serve os 27 temas).
//
// As regras vêm de preset/bootstrap-utilities.generated.mjs, DERIVADAS do
// $utilities do Sass (bootstrap-fork) por scripts/generate-preset.mjs — fiel
// por construção (decisão §9.2). 482 utilities atômicas + variantes responsivas
// (infix -{bp}-) e print (-print-) reconstruídas por variants.
//
// Gaps conhecidos (ver generate-preset): RFS fluido de fs-1..4 nas media,
// estados :hover/:focus dos link-utilities, e uns poucos pseudo-elementos
// (.clearfix::after, .ratio::before).

import { bootstrapUtilities } from './bootstrap-utilities.generated.mjs'

const { rules: BASE_RULES, responsiveBases, printBases, breakpoints } = bootstrapUtilities
const RESPONSIVE = new Set(responsiveBases)
const PRINT = new Set(printBases)

const stripInfix = (s, re) => s.replace(re, '-')

/** Variant do infix responsivo do Bootstrap: `mb-md-3` → `mb-3` em @media min-width. */
function responsiveInfixVariant() {
	return {
		name: 'bs-breakpoint-infix',
		match(matcher) {
			const bpm = matcher.match(/-(sm|md|lg|xl|xxl)-/)
			if (!bpm) return
			const base = stripInfix(matcher, /-(sm|md|lg|xl|xxl)-/)
			if (!RESPONSIVE.has(base)) return
			return {
				matcher: base,
				handle: (input, next) => next({ ...input, parent: `@media (min-width: ${breakpoints[bpm[1]]}px)` }),
			}
		},
	}
}

/** Variant do print: `d-print-none` → `d-none` em @media print. */
function printInfixVariant() {
	return {
		name: 'bs-print-infix',
		match(matcher) {
			if (!matcher.includes('-print-')) return
			const base = stripInfix(matcher, /-print-/)
			if (!PRINT.has(base)) return
			return {
				matcher: base,
				handle: (input, next) => next({ ...input, parent: '@media print' }),
			}
		},
	}
}

/**
 * Extractor que reconhece as chamadas `u('classe1 classe2', cond && 'classe3')`
 * do runtime /solid e entrega os tokens JÁ PREFIXADOS ao UnoCSS. Sem isso, o
 * JIT (que varre a FONTE) veria `mb-3`, mas em runtime o `u()` emite
 * `bsu-mb-3` — e o UnoCSS com prefixo só gera o que aparece prefixado na fonte.
 * Com o extractor, fonte e runtime concordam.
 */
function extractorU(prefix) {
	return {
		name: '@arijs/bootswatch-ve/extractor-u',
		extract({ code }) {
			const out = new Set()
			for (const call of code.matchAll(/\bu\(\s*([^)]*)\)/g)) {
				for (const lit of call[1].matchAll(/['"`]([^'"`]+)['"`]/g)) {
					for (const tok of lit[1].split(/\s+/).filter(Boolean)) out.add(prefix + tok)
				}
			}
			return out
		},
	}
}

export function presetBootswatch(options = {}) {
	const prefix = options.prefix ?? ''
	return {
		name: '@arijs/bootswatch-ve/preset',
		prefix, // aplicado só às regras deste preset (utilities)
		// STATIC RULES: [classe, { prop: 'valor !important' }] — 1:1 com o Bootstrap.
		rules: BASE_RULES.map(([name, decls]) => [name, decls]),
		variants: [responsiveInfixVariant(), printInfixVariant()],
		extractors: [extractorU(prefix)],
	}
}

export default presetBootswatch
