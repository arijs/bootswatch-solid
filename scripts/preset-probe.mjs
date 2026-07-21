// Valida o presetBootswatch: (1) fidelidade contra o bootstrap.css de
// referência para uma amostra ampla; (2) prefixo só nas utilities;
// (3) variantes responsiva (infix) e print.
import { readFileSync } from 'node:fs'
import { parse } from '@adobe/css-tools'
import { createGenerator } from '@unocss/core'
import { presetBootswatch } from '../preset/preset-bootswatch.mjs'

const REF = 'screenshots/bootstrap/bootstrap.css'

let fails = 0
const ok = (cond, label, extra) => {
	console.log(`${cond ? '✔' : '✗'} ${label}`)
	if (!cond) {
		fails++
		if (extra) console.log(`   ${extra}`)
	}
}

// Mapa --bs-* → nome hasheado (mesmo do preset), para mapear o bootstrap.css
// de referência (literal) antes de comparar com o preset (hasheado).
const NAMES = JSON.parse(readFileSync('preset/public-vars.names.json', 'utf8'))
const HASHES = JSON.parse(readFileSync('preset/public-vars.hash.json', 'utf8'))
const BS_TO_VAR = {}
for (const [bs, exp] of Object.entries(NAMES)) if (HASHES[exp]) BS_TO_VAR[bs] = HASHES[exp]
const rawName = (v) => v.slice(4, -1) // "var(--x)" → "--x"
const mapProp = (p) => (BS_TO_VAR[p] ? rawName(BS_TO_VAR[p]) : p)
const mapVal = (v) => v.replace(/var\((--bs-[a-z0-9-]+)\)/g, (m, n) => BS_TO_VAR[n] ?? m)

// --- decls do bootstrap.css (top-level, não-media) para uma classe ---
const refAst = parse(readFileSync(REF, 'utf8'))
function refDecls(cls) {
	for (const r of refAst.stylesheet.rules) {
		if (r.type === 'rule' && r.selectors.length === 1 && r.selectors[0] === `.${cls}`) {
			return normDecls(r.declarations)
		}
	}
	return null
}
const normDecls = (decls) =>
	decls
		.filter((d) => d.type === 'declaration')
		.map((d) => `${mapProp(d.property)}:${mapVal(d.value).replace(/\s+/g, ' ').trim()}`)
		.sort()
		.join(';')

// --- decls que o UnoCSS gera para uma classe ---
const uno = await createGenerator({ presets: [presetBootswatch()] })
async function unoDecls(cls) {
	const { css } = await uno.generate(new Set([cls]), { preflights: false })
	const m = css.match(/\{([^}]*)\}/)
	if (!m) return null
	return m[1]
		.split(';')
		.map((s) => s.trim())
		.filter(Boolean)
		.map((s) => {
			const i = s.indexOf(':')
			return `${s.slice(0, i).trim()}:${s
				.slice(i + 1)
				.replace(/\s+/g, ' ')
				.trim()}`
		})
		.sort()
		.join(';')
}

// (1) Fidelidade — amostra ampla e diversa.
const SAMPLE = [
	'mb-3',
	'mt-0',
	'p-2',
	'px-4',
	'me-auto',
	'm-0',
	'd-flex',
	'd-none',
	'd-inline-block',
	'flex-row',
	'flex-column',
	'flex-fill',
	'justify-content-center',
	'align-items-center',
	'gap-3',
	'text-primary',
	'bg-danger',
	'border-success',
	'text-bg-primary',
	'text-center',
	'text-uppercase',
	'fw-bold',
	'fst-italic',
	'lh-1',
	'rounded',
	'rounded-circle',
	'rounded-pill',
	'w-50',
	'h-100',
	'mw-100',
	'vh-100',
	'position-absolute',
	'top-0',
	'start-50',
	'translate-middle',
	'opacity-50',
	'shadow',
	'shadow-sm',
	'overflow-hidden',
	'float-end',
	'order-2',
	'user-select-none',
	'pe-none',
	'align-middle',
	'visible',
	'invisible',
]
let matched = 0,
	absentInRef = 0
for (const cls of SAMPLE) {
	const ref = refDecls(cls)
	if (ref === null) {
		absentInRef++
		continue
	}
	const got = await unoDecls(cls)
	const same = got === ref
	if (same) matched++
	else {
		fails++
		console.log(`✗ ${cls}\n   ref: ${ref}\n   uno: ${got}`)
	}
}
ok(
	fails === 0,
	`fidelidade: ${matched}/${SAMPLE.length - absentInRef} classes batem com bootstrap.css (${absentInRef} fora da amostra de ref)`,
)

// (2) Prefixo só nas utilities.
{
	const u = await createGenerator({ presets: [presetBootswatch({ prefix: 'bsu-' })] })
	const { css } = await u.generate(new Set(['bsu-mb-3', 'mb-3', 'bsu-text-primary']), {
		preflights: false,
	})
	ok(/\.bsu-mb-3\s*\{[^}]*margin-bottom:1rem/.test(css), 'prefixo: bsu-mb-3 gera')
	ok(!/\.mb-3\s*\{/.test(css), 'prefixo: mb-3 sem prefixo NÃO gera')
	const hashedPrimary = BS_TO_VAR['--bs-primary-rgb'].replace(/[()]/g, '\\$&')
	ok(
		new RegExp(`\\.bsu-text-primary\\s*\\{[^}]*${hashedPrimary}`).test(css),
		`prefixo: bsu-text-primary usa o hash ${BS_TO_VAR['--bs-primary-rgb']} (sem --bs- literal)`,
	)
	ok(!/--bs-/.test(css), 'nenhum --bs-* literal no CSS emitido')
}

// (3) Responsivo (infix) e print.
{
	const { css } = await uno.generate(new Set(['mb-md-3', 'd-lg-flex', 'd-print-none']), {
		preflights: false,
	})
	ok(
		/@media \(min-width: 768px\)[\s\S]*margin-bottom:1rem/.test(css),
		'responsivo: mb-md-3 → @media 768px',
	)
	ok(
		/@media \(min-width: 992px\)[\s\S]*display:flex/.test(css),
		'responsivo: d-lg-flex → @media 992px',
	)
	ok(/@media print[\s\S]*display:none/.test(css), 'print: d-print-none → @media print')
	// Fidelidade: utility NÃO-responsiva não deve gerar variante infix.
	const { css: bad } = await uno.generate(new Set(['fw-md-bold']), { preflights: false })
	ok(!/font-weight/.test(bad), 'fidelidade: fw-md-bold (fw não é responsivo) NÃO gera')
}

console.log(fails === 0 ? '\n✅ TODOS OS CHECKS PASSARAM' : `\n❌ ${fails} CHECK(S) FALHARAM`)
process.exit(fails === 0 ? 0 : 1)
