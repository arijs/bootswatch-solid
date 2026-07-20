// presetBootswatch — preset UnoCSS para os utilities do Bootstrap (Fase 3).
// JIT (só o que é usado é gerado), classes-string idênticas ao Bootstrap.
// Prefixo configurável SÓ nas utilities (scope/componentes são hashes VE).
// Cores referenciam --bs-*-rgb (theme-agnostic → um preset serve os 27 temas).
//
// SPINE: spacing, display, cores (text/bg/border), text-align, position +
// variant de breakpoint infix (mb-md-3). A cobertura completa derivada do
// $utilities do Sass (bootstrap-fork) entra na sequência da F3 (decisão §9.2).

const BREAKPOINTS = { sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }

// Escala de espaçamento do Bootstrap ($spacer = 1rem).
const SPACERS = { 0: '0', 1: '0.25rem', 2: '0.5rem', 3: '1rem', 4: '1.5rem', 5: '3rem' }
const SIDES = { t: ['-top'], b: ['-bottom'], s: ['-left'], e: ['-right'], x: ['-left', '-right'], y: ['-top', '-bottom'], '': [''] }
const COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'body', 'muted', 'white', 'black']

function spacingRules() {
	const rules = []
	for (const [prop, cssProp] of [['m', 'margin'], ['p', 'padding']]) {
		for (const [side, suffixes] of Object.entries(SIDES)) {
			// margin aceita `auto`; padding não tem valores negativos/auto.
			const re = new RegExp(`^${prop}${side}-(\\d|auto)$`)
			rules.push([re, ([, v]) => {
				if (v === 'auto' && prop !== 'm') return
				const val = v === 'auto' ? 'auto' : SPACERS[v]
				if (val === undefined) return
				return Object.fromEntries(suffixes.map((s) => [`${cssProp}${s}`, val]))
			}])
		}
	}
	return rules
}

function displayRules() {
	const values = ['none', 'inline', 'inline-block', 'block', 'grid', 'inline-grid', 'table', 'table-row', 'table-cell', 'flex', 'inline-flex']
	return [[new RegExp(`^d-(${values.join('|')})$`), ([, v]) => ({ display: v })]]
}

function colorRules() {
	const c = COLORS.join('|')
	return [
		[new RegExp(`^text-(${c})$`), ([, k]) => ({ '--bs-text-opacity': '1', color: `rgba(var(--bs-${k}-rgb), var(--bs-text-opacity))` })],
		[new RegExp(`^bg-(${c})$`), ([, k]) => ({ '--bs-bg-opacity': '1', 'background-color': `rgba(var(--bs-${k}-rgb), var(--bs-bg-opacity))` })],
		[new RegExp(`^border-(${c})$`), ([, k]) => ({ '--bs-border-opacity': '1', 'border-color': `rgba(var(--bs-${k}-rgb), var(--bs-border-opacity))` })],
	]
}

function miscRules() {
	return [
		[/^text-(start|center|end)$/, ([, v]) => ({ 'text-align': v === 'start' ? 'left' : v === 'end' ? 'right' : 'center' })],
		[/^position-(static|relative|absolute|fixed|sticky)$/, ([, v]) => ({ position: v })],
		['d-flex', { display: 'flex' }], // atalho estático redundante (exemplo)
	]
}

/**
 * Variant do infix responsivo do Bootstrap: `mb-md-3` → aplica `mb-3` dentro
 * de `@media (min-width: 768px)`. Reescreve o matcher removendo o `-{bp}-`.
 */
function breakpointInfixVariant() {
	return {
		name: 'bs-breakpoint-infix',
		match(matcher) {
			const m = matcher.match(/^([a-z]+)-(sm|md|lg|xl|xxl)-(.+)$/)
			if (!m) return
			const [, head, bp, tail] = m
			return {
				matcher: `${head}-${tail}`,
				handle: (input, next) => next({ ...input, parent: `@media (min-width: ${BREAKPOINTS[bp]}px)` }),
			}
		},
	}
}

export function presetBootswatch(options = {}) {
	const prefix = options.prefix ?? ''
	return {
		name: '@arijs/bootswatch-ve/preset',
		prefix, // aplicado só às regras deste preset (utilities)
		rules: [...spacingRules(), ...displayRules(), ...colorRules(), ...miscRules()],
		variants: [breakpointInfixVariant()],
	}
}

export default presetBootswatch
