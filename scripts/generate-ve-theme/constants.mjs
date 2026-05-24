import path from 'node:path'
import process from 'node:process'

export const ROOT = process.cwd()
export const VE2_ROOT = path.join(ROOT, 've-project2')
export const VE2_THEMES_ROOT = path.join(VE2_ROOT, 'src', 'themes')
export const VE2_CONTRACT_ROOT = path.join(VE2_ROOT, 'src', 'theme-contract')
export const SCREENSHOTS_ROOT = path.join(ROOT, 'screenshots')
export const STRUCTURE_REFERENCE_THEME = 'bootstrap'

/** Families that emit a styles.css.ts file (excludes contents barrel and global). */
export const EMIT_FAMILIES = [
	'contents/basic',
	'contents/heading',
	'contents/display',
	'contents/lists',
	'contents/tables',
	'contents/images',
	'forms',
	'utilities',
	'ui/accordion',
	'ui/alerts',
	'ui/badge',
	'ui/breadcrumb',
	'ui/button-group',
	'ui/buttons',
	'ui/card',
	'ui/card-tabs',
	'ui/carousel',
	'ui/dropdowns',
	'ui/list-group',
	'ui/modal',
	'ui/navbar',
	'ui/navs',
	'ui/pagination',
	'ui/popovers',
	'ui/progress',
	'ui/scrollspy',
	'ui/spinners',
	'ui/toasts',
	'ui/tooltips',
]

/** Map family id → relative path under themes/{theme}/ */
export function familyToRelativePath(family) {
	return `${family}/styles.css.ts`
}

export function themeScopeExportName(themeSlug) {
	return `${themeSlug}Scope`
}

export function themeScopeClassComment(themeSlug) {
	const label = themeSlug.charAt(0).toUpperCase() + themeSlug.slice(1)
	return `${label} theme scope class.`
}
