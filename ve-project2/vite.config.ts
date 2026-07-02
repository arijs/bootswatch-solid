import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig, type Plugin } from 'vite'
import solidPlugin from 'vite-plugin-solid'

/**
 * When VITE_LITERAL_THEMES=bootstrap,cerulean (comma-separated), every module
 * of every other theme (literal, utilities, forms, ui/*, theme.ts, …) is
 * replaced with an empty stub so neither Vite nor the vanilla-extract child
 * compiler ever touches those files. Without this, a single-theme build still
 * compiled all 925 `.css.ts` files across all 27 themes — the filter drops
 * that to the selected theme + shared contract (~100 files).
 *
 * The only theme modules imported *by name* from always-loaded code are the
 * `scope.css` files (`<theme>Scope` in theme-runtime.ts / Ve2Shell.tsx), so
 * their stubs keep that export; everything else is imported for side effects
 * only (dynamic family/theme loaders) and stubs to an empty module.
 */
function literalThemeFilterPlugin(): Plugin | null {
	const raw = process.env.VITE_LITERAL_THEMES
	if (!raw) return null
	const allowed = new Set(raw.split(',').map((s) => s.trim()).filter(Boolean))
	console.log(`[literal-theme-filter] active — building only: ${[...allowed].join(', ')}`)
	return {
		name: 'literal-theme-filter',
		enforce: 'pre',
		resolveId(id) {
			// Matches both relative (../../themes/foo/...) and absolute paths
			const m = id.match(/(?:^|[/\\])themes[/\\]([^/\\]+)[/\\](.+)$/)
			if (!m) return null
			const [, theme, rest] = m
			if (allowed.has(theme)) return null
			// Stub id must not end in `.css`, or vite:css would parse the JS.
			if (/^scope\.css(?:\.ts|\.js)?(?:\?.*)?$/.test(rest)) {
				return `\0theme-scope-stub:${theme}`
			}
			return `\0literal-theme-stub:${id}`
		},
		load(id) {
			if (id.startsWith('\0theme-scope-stub:')) {
				const theme = id.slice('\0theme-scope-stub:'.length)
				return `export const ${theme}Scope = 've2-stub-${theme}'\nexport default ${theme}Scope\n`
			}
			if (id.startsWith('\0literal-theme-stub:')) return 'export default {}'
		},
		// `order: 'pre'` so this runs on the RAW index.html before Vite resolves the
		// `/src/themes/.../fonts.generated.css` links into bundled assets — otherwise the
		// regex (which matches the source paths) never fires.
		transformIndexHtml: {
			order: 'pre',
			handler(html: string) {
				// index.html statically links EVERY theme's fonts.generated.css. Loading all
				// 27 themes' @import fonts into one document causes cross-theme contamination
				// (§10.3): e.g. another theme's `Lato:ital` face makes Vapor's synthesized-oblique
				// <cite> render as REAL italic (narrower) and mismatch the baseline, which loads
				// only the active theme's fonts. When building a single theme, strip the font
				// links for every other theme so only the active theme's fonts load.
				return html.replace(
					/[ \t]*<link\b[^>]*\/src\/themes\/([^/]+)\/fonts\.generated\.css[^>]*>\s*\n?/g,
					(full, theme) => (allowed.has(theme) ? full : ''),
				)
			},
		},
	}
}

/**
 * vite-plugin-solid's `solid-lazy-module-url` transform appends the resolved
 * module path as a 2nd arg to every `lazy(() => import('x'))`. It builds that
 * path with `path.relative`, which on Windows yields backslashes — and
 * `"src\components\..."` is an invalid escape sequence that breaks the parse.
 * Wrap solid's own transform and forward-slash the injected path on the way
 * out, so the fix is glued to solid's output regardless of pipeline ordering.
 * ponytail: drop this once vite-plugin-solid normalizes the path itself.
 */
function withLazyUrlSlashFix(plugin: Plugin): Plugin {
	const t = plugin.transform
	const orig = typeof t === 'function' ? t : t?.handler
	if (!orig) return plugin
	const fix = (code: string) =>
		code.includes('lazy(') && code.includes('\\')
			? code.replace(
					/(import\(\s*['"][^'"]+['"]\s*\)\s*,\s*)"([^"]*\\[^"]*)"/g,
					(_full, head, p: string) => `${head}"${p.replace(/\\/g, '/')}"`,
				)
			: code
	const wrapped = async function (this: unknown, ...args: unknown[]) {
		const r = (await (orig as (...a: unknown[]) => unknown).apply(this, args)) as
			| string
			| { code?: string }
			| null
			| undefined
		if (typeof r === 'string') return fix(r)
		if (r && typeof r.code === 'string') r.code = fix(r.code)
		return r
	}
	plugin.transform = typeof t === 'function' ? wrapped : { ...t, handler: wrapped }
	return plugin
}

/**
 * Defuses a catastrophic-backtracking bomb in Vite's `vite:build-html` plugin.
 *
 * Vite's `entirelyImportRE` — an anchored `(import|comment)*`-shaped regex —
 * is run against the whole minified index entry chunk in generateBundle to ask
 * "is this chunk only CSS imports?". Rolldown replaces each pure-CSS JS module
 * (the 27 themes' scope.css imported by theme-runtime.ts) with a
 * `/* empty css *​/` marker, so our entry chunk starts with 27 consecutive
 * comment blocks followed by 200KB of one-line code full of `//` and `/*`
 * choice points. When the match fails, the regex backtracks exponentially
 * (measured ×4 per +2 leading markers) — turning the full 27-theme build from
 * ~2 minutes into 3.5 hours inside a single regex.test() call.
 *
 * The regex is anchored at `^`, so prepending a lone `;` (a no-op empty
 * statement, valid before import declarations) makes the very first iteration
 * mismatch and the whole test fail in O(1). The answer (false: the chunk is
 * not entirely imports) is unchanged — our entry has real code either way.
 * ponytail: drop this once Vite replaces entirelyImportRE with a linear scan.
 */
function defuseEmptyCssRegexBombPlugin(): Plugin {
	return {
		name: 'defuse-empty-css-regex-bomb',
		apply: 'build',
		generateBundle(_options, bundle) {
			for (const chunk of Object.values(bundle)) {
				if (chunk.type === 'chunk' && chunk.isEntry && !chunk.code.startsWith(';')) {
					chunk.code = `;${chunk.code}`
				}
			}
		},
	}
}

function inferThemeFamilyFromCss(source: string) {
	if (/contract_list/i.test(source)) return 'lists'
	if (/contract_table/i.test(source)) return 'tables'
	if (/contract_display/i.test(source)) return 'display'
	if (/contract_heading/i.test(source)) return 'heading'
	if (/contract_(figure|image|img|responsive|thumbnail)/i.test(source)) return 'images'
	if (/contract_(lead|paragraph|blockquote|inlineList|unstyledList|textElements)/i.test(source)) {
		return 'basic'
	}
	if (/contract_(formLabel|formText|formControl|formSelect|formRange|formCheck|formSwitch|inputGroup|formFloating|floatingLabel|fieldset|legend|validFeedback|invalidFeedback|isValid|isInvalid|hasValidation)/i.test(source)) {
		return 'forms'
	}
	if (/contract_(textMuted|alignSelfStart|dFlex|positionRelative|overflowXHidden|rowCols|rowCol|row|col|g0|g3|g4|px[23]|mb[23]|me2|meAuto|mt5|pt3|pb2|fwBold|visuallyHidden|stickyXlTop|mtXl0|mbXl2|mbXl5|ptXl5|pbXl3|mbLg0)/i.test(source)) {
		return 'utilities'
	}
	if (/contract_cardHeaderTabs/i.test(source)) return 'ui-card-tabs'
	if (/contract_accordion/i.test(source)) return 'ui-accordion'
	if (/contract_alert/i.test(source)) return 'ui-alerts'
	if (/contract_badge/i.test(source)) return 'ui-badge'
	if (/contract_breadcrumb/i.test(source)) return 'ui-breadcrumb'
	if (/contract_buttonGroup|contract_btnToolbar/i.test(source)) return 'ui-button-group'
	if (/contract_btn/i.test(source)) return 'ui-buttons'
	if (/contract_card/i.test(source)) return 'ui-card'
	if (/contract_carousel/i.test(source)) return 'ui-carousel'
	if (/contract_dropdown/i.test(source)) return 'ui-dropdowns'
	if (/contract_listGroup/i.test(source)) return 'ui-list-group'
	if (/contract_modal/i.test(source)) return 'ui-modal'
	if (/contract_navbar/i.test(source)) return 'ui-navbar'
	if (/contract_navTabs|contract_navPills|contract_navLink|contract_navItem/i.test(source)) return 'ui-navs'
	if (/contract_pagination/i.test(source)) return 'ui-pagination'
	if (/contract_popover/i.test(source)) return 'ui-popovers'
	if (/contract_progress/i.test(source)) return 'ui-progress'
	if (/contract_scrollspy/i.test(source)) return 'ui-scrollspy'
	if (/contract_spinner/i.test(source)) return 'ui-spinners'
	if (/contract_toast/i.test(source)) return 'ui-toasts'
	if (/contract_tooltip/i.test(source)) return 'ui-tooltips'
	return null
}

function getThemeSourceFile(paths: readonly string[]) {
	return paths.find((file) => file.includes('/src/themes/')) ?? null
}

function getThemeAssetBaseName(sourceFile: string) {
	const themeMatch = sourceFile.match(/src\/themes\/([^/]+)\/theme\.ts$/)
	if (themeMatch) return `theme-${themeMatch[1]}`

	const styleMatch = sourceFile.match(/src\/themes\/([^/]+)\/(.+)\/styles\.css\.ts$/)
	if (styleMatch) {
		const familyPath = styleMatch[2].replace(/\//g, '-')
		return `theme-${styleMatch[1]}-${familyPath}`
	}

	const rootStyleMatch = sourceFile.match(/src\/themes\/([^/]+)\/([^/]+)\.css\.ts$/)
	if (rootStyleMatch) {
		return `theme-${rootStyleMatch[1]}-${rootStyleMatch[2]}`
	}

	return null
}

function assetSourceToText(source: unknown) {
	if (typeof source === 'string') return source
	if (source instanceof Uint8Array) {
		return new TextDecoder().decode(source)
	}
	return ''
}

export default defineConfig({
	mode: 'development',
	plugins: [
		withLazyUrlSlashFix(solidPlugin() as Plugin),
		vanillaExtractPlugin(),
		literalThemeFilterPlugin(),
		defuseEmptyCssRegexBombPlugin(),
	],
	build: {
		target: 'esnext',
		sourcemap: false,
		modulePreload: {
			polyfill: false,
		},
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const assetName = assetInfo.name ?? ''
					const sourceFile = getThemeSourceFile(assetInfo.originalFileNames)
					const baseName = sourceFile ? getThemeAssetBaseName(sourceFile) : null
					if (baseName) {
						return `assets/${baseName}-[hash][extname]`
					}
					const assetSource = assetSourceToText((assetInfo as { source?: unknown }).source)
					if (assetSource) {
						const themeMatch = assetSource.match(/scope_([a-z]+)Scope__/)
						const family = inferThemeFamilyFromCss(assetSource)
						if (themeMatch && family) {
							return `assets/theme-${themeMatch[1]}-${family}-[hash][extname]`
						}
					}
					if (/^styles(?:\d+)?\.css$/i.test(assetName)) {
						return 'assets/shared-[hash][extname]'
					}
					return 'assets/[name]-[hash][extname]'
				},
				chunkFileNames: (chunk) => {
					const sourceFile = chunk.facadeModuleId ? getThemeSourceFile([chunk.facadeModuleId]) ?? getThemeSourceFile(chunk.moduleIds) : getThemeSourceFile(chunk.moduleIds)
					const baseName = sourceFile ? getThemeAssetBaseName(sourceFile) : null
					if (baseName) return `assets/${baseName}-[hash].js`
					if (chunk.facadeModuleId) {
						const match = chunk.facadeModuleId.match(/\/themes\/([^/]+)\/theme\.ts$/)
						if (match) return `assets/theme-${match[1]}-[hash].js`
					}
					return 'assets/[name]-[hash].js'
				},
			},
		},
	},
})
