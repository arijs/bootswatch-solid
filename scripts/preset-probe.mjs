// Prova o spine do presetBootswatch com o gerador do UnoCSS (JIT).
import { createGenerator } from '@unocss/core'
import { presetBootswatch } from '../preset/preset-bootswatch.mjs'

async function gen(preset, tokens) {
	const uno = await createGenerator({ presets: [preset] })
	const { css } = await uno.generate(new Set(tokens), { preflights: false })
	return css
}

let fails = 0
const check = (label, css, ...needles) => {
	const ok = needles.every((n) => css.includes(n))
	console.log(`${ok ? '✔' : '✗'} ${label}`)
	if (!ok) {
		fails++
		console.log('   esperava:', needles.join(' | '))
		console.log('   css:\n' + css.split('\n').map((l) => '     ' + l).join('\n'))
	}
}

// 1. Sem prefixo: nomes idênticos ao Bootstrap.
const base = await gen(presetBootswatch(), ['mb-3', 'p-0', 'me-2', 'd-flex', 'text-primary', 'bg-danger', 'text-center', 'mt-auto'])
check('mb-3 → margin-bottom:1rem', base, '.mb-3', 'margin-bottom:1rem')
check('p-0 → padding:0', base, '.p-0', 'padding:0')
check('me-2 → margin-right:.5rem', base, '.me-2', 'margin-right:0.5rem')
check('d-flex → display:flex', base, '.d-flex', 'display:flex')
check('text-primary → var(--bs-primary-rgb)', base, '.text-primary', 'var(--bs-primary-rgb)')
check('bg-danger → var(--bs-danger-rgb)', base, '.bg-danger', 'var(--bs-danger-rgb)')
check('text-center → text-align:center', base, '.text-center', 'text-align:center')
check('mt-auto → margin-top:auto', base, '.mt-auto', 'margin-top:auto')

// 2. Com prefixo custom: só as utilities levam o prefixo.
const pfx = await gen(presetBootswatch({ prefix: 'bsu-' }), ['bsu-mb-3', 'mb-3'])
check('prefixo: bsu-mb-3 gera', pfx, '.bsu-mb-3', 'margin-bottom:1rem')
{
	const semPrefixo = !/\.mb-3\s*\{/.test(pfx)
	console.log(`${semPrefixo ? '✔' : '✗'} prefixo: mb-3 (sem prefixo) NÃO gera`)
	if (!semPrefixo) fails++
}

// 3. Breakpoint infix: mb-md-3 dentro de @media.
const bp = await gen(presetBootswatch(), ['mb-md-3'])
check('mb-md-3 → @media min-width:768px + margin-bottom:1rem', bp, '@media (min-width: 768px)', 'margin-bottom:1rem')

console.log(fails === 0 ? '\nTODOS OS CHECKS PASSARAM' : `\n${fails} CHECK(S) FALHARAM`)
process.exit(fails === 0 ? 0 : 1)
