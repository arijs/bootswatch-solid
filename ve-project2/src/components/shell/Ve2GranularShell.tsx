import { useLocation } from '@solidjs/router'
import { createMemo, createRenderEffect, type JSX } from 'solid-js'
import { ThemeContext } from '../../context/ThemeContext'
import { bodyFrame, bodyText, vars } from '../../theme-contract/theme-contract.css'
import { getVe2RouteStyleLoadPlan } from '../../theme-runtime/route-style-families'
import {
	type Ve2StyleFamily,
	normalizeVe2StyleFamilies,
} from '../../theme-runtime/style-families'
import { Ve2StyleLoaderContext, type Ve2StyleLoaderApi } from '../../theme-runtime/style-loader-context'
import {
	type Ve2ThemeKey,
	resolveVe2ThemeClass,
	resolveVe2ThemeKey,
	ve2ThemeLoaders,
	ve2ThemeFamilyLoaders,
} from '../../theme-runtime/theme-runtime'
// Layout class for screenshot demo containers
import '../../styles/bd-example.css'

const loadedFamiliesByTheme = new Map<Ve2ThemeKey, Set<Ve2StyleFamily>>()
const inFlightFamilyLoads = new Map<string, Promise<void>>()
const fullyLoadedThemes = new Set<Ve2ThemeKey>()
const inFlightThemeLoads = new Map<Ve2ThemeKey, Promise<void>>()

function getThemeLoadedFamilies(theme: Ve2ThemeKey): Set<Ve2StyleFamily> {
	let loadedFamilies = loadedFamiliesByTheme.get(theme)
	if (loadedFamilies) return loadedFamilies

	loadedFamilies = new Set<Ve2StyleFamily>()
	loadedFamiliesByTheme.set(theme, loadedFamilies)
	return loadedFamilies
}

function createFamilyLoadKey(theme: Ve2ThemeKey, family: Ve2StyleFamily): string {
	return `${theme}:${family}`
}

async function ensureFamilyLoaded(theme: Ve2ThemeKey, family: Ve2StyleFamily): Promise<void> {
	const loadedFamilies = getThemeLoadedFamilies(theme)
	if (loadedFamilies.has(family)) return

	if (family === 'global') {
		loadedFamilies.add('global')
		return
	}

	const loader = ve2ThemeFamilyLoaders[theme][family]
	if (!loader) {
		if (import.meta.env.DEV) {
			console.warn(`[Ve2GranularShell] No loader found for family "${family}" in theme "${theme}".`)
		}
		return
	}

	const loadKey = createFamilyLoadKey(theme, family)
	const existingLoad = inFlightFamilyLoads.get(loadKey)
	if (existingLoad) {
		await existingLoad
		return
	}

	const loadPromise = loader()
		.then(() => {
			loadedFamilies.add(family)
		})
		.finally(() => {
			inFlightFamilyLoads.delete(loadKey)
		})

	inFlightFamilyLoads.set(loadKey, loadPromise)
	await loadPromise
}

async function requestThemeFamilies(theme: Ve2ThemeKey, families: readonly string[]): Promise<void> {
	if (fullyLoadedThemes.has(theme)) return

	const normalizedFamilies = normalizeVe2StyleFamilies(families, true)
	for (const family of normalizedFamilies) {
		await ensureFamilyLoaded(theme, family)
	}
}

async function ensureThemeLoaded(theme: Ve2ThemeKey): Promise<void> {
	if (fullyLoadedThemes.has(theme)) return

	const existingLoad = inFlightThemeLoads.get(theme)
	if (existingLoad) {
		await existingLoad
		return
	}

	const loadPromise = ve2ThemeLoaders[theme]()
		.then(() => {
			fullyLoadedThemes.add(theme)
			const loadedFamilies = getThemeLoadedFamilies(theme)
			loadedFamilies.add('global')
			for (const family of Object.keys(ve2ThemeFamilyLoaders[theme]) as Ve2StyleFamily[]) {
				loadedFamilies.add(family)
			}
		})
		.finally(() => {
			inFlightThemeLoads.delete(theme)
		})

	inFlightThemeLoads.set(theme, loadPromise)
	await loadPromise
}

export function Ve2GranularShell(props: { children: JSX.Element }) {
	const location = useLocation()

	const themeKey = createMemo<Ve2ThemeKey>(() => {
		const params = new URLSearchParams(location.search)
		return resolveVe2ThemeKey(params.get('theme'))
	})

	const themeClass = createMemo(() => {
		const resolved = resolveVe2ThemeClass(themeKey())
		return resolved || resolveVe2ThemeClass('bootstrap')
	})
	const themeScopeClass = createMemo(() => `${themeKey()} ${themeClass()}`)

	const styleLoaderApi: Ve2StyleLoaderApi = {
		requestFamilies: async (families) => {
			await requestThemeFamilies(themeKey(), families)
		},
	}

	// Always mark baseline global family as loaded for the active theme.
	createRenderEffect(
		() => themeKey(),
		(theme) => {
			void requestThemeFamilies(theme, ['global'])
		}
	)

	// Route-driven preload keeps granular mode working across non-migrated routes.
	createRenderEffect(
		() => ({ theme: themeKey(), plan: getVe2RouteStyleLoadPlan(location.pathname) }),
		({ theme, plan }) => {
			if (plan.fullThemeFallback) {
				void ensureThemeLoaded(theme)
				return
			}

			void requestThemeFamilies(theme, plan.families)
		}
	)

	return (
		<ThemeContext value={themeClass()}>
			<Ve2StyleLoaderContext value={styleLoaderApi}>
				<div class={`${themeClass()} ${vars} ${bodyFrame} ${bodyText}`}>{props.children}</div>
			</Ve2StyleLoaderContext>
		</ThemeContext>
	)
}
