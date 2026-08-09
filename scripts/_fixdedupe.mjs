/** Report tokens the dedupe pass dropped that were not renamed aliases. */
import { execFileSync } from 'node:child_process'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const BASE = process.argv[2] ?? 'main'
const SRC = 've-project2/src/components'
const RENAMED = new Set([
	'navLinkActive',
	'navLinkDisabled',
	'pageItemActive',
	'pageItemDisabled',
	'accordionButtonCollapsed',
	'toastShow',
	'toastShowing',
	'toastFade',
	'toastHide',
	'modalShowHook',
	'modalFade',
	'tooltipShow',
	'tooltipFade',
	'tooltipVe',
	'popoverShow',
	'popoverFade',
	'popoverVe',
	'btnShowHook',
	'btnActiveHook',
	'btnDisabledHook',
	'dropdownMenuShow',
	'dropdownItemActive',
	'dropdownItemDisabled',
	'listGroupItemActive',
	'listGroupItemDisabled',
	'breadcrumbItemActive',
	'carouselActive',
	'carouselItemActive',
	'carouselIndicatorActive',
	'accordionCollapseShow',
	'accordionCollapsing',
	'alertBtnCloseDisabledHook',
	'collapseShow',
	'navItemShow',
	'tabPaneActive',
])
const STATE = new Set(['active', 'disabled', 'show', 'showing', 'fade', 'collapsed', 'collapsing'])

async function collect(dir) {
	const out = []
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name)
		if (e.isDirectory()) out.push(...(await collect(p)))
		else if (/\.tsx?$/.test(e.name)) out.push(p)
	}
	return out
}
const counts = (s) => {
	const m = new Map()
	for (const x of s.matchAll(/\$\{(\w+)\}/g)) m.set(x[1], (m.get(x[1]) ?? 0) + 1)
	return m
}

let n = 0
for (const file of (await collect(SRC)).sort()) {
	let base = ''
	try {
		base = execFileSync('git', ['show', `${BASE}:${file}`], { encoding: 'utf8' })
	} catch {
		continue
	}
	const before = counts(base)
	const after = counts(await readFile(file, 'utf8'))
	const lost = []
	for (const [t, c] of before) {
		if (RENAMED.has(t)) continue
		const kept = after.get(t) ?? 0
		// a state token legitimately absorbs occurrences from the aliases it replaced
		if (STATE.has(t) && kept >= c) continue
		if (kept < c) lost.push(`${t} ${c}→${kept}`)
	}
	if (lost.length === 0) continue
	n++
	console.log(`${file}\n    ${lost.join(', ')}`)
}
console.log(`\n${n} file(s) with dropped non-alias tokens`)
