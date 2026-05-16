import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

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
	plugins: [solidPlugin(), vanillaExtractPlugin()],
	build: {
		target: 'esnext',
		sourcemap: true,
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
