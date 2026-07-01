import { useLocation } from '@solidjs/router'
import { createMemo, createRenderEffect, type JSX } from 'solid-js'
import { ThemeContext } from '../../context/ThemeContext'
import { bodyFrame, bodyText, vars } from '../../theme-contract/theme-contract.css'
import { normalizeVe2StyleFamilies, type Ve2StyleFamily } from '../../theme-runtime/style-families'
import {
	type Ve2StyleLoaderApi,
	Ve2StyleLoaderContext,
} from '../../theme-runtime/style-loader-context'
import {
	resolveVe2ThemeClass,
	resolveVe2ThemeKey,
	type Ve2ThemeKey,
	ve2ThemeFamilyLoaders,
} from '../../theme-runtime/theme-runtime'
// Layout class for screenshot demo containers
import '../../styles/bd-example.css'

const loadedFamiliesByTheme = new Map<Ve2ThemeKey, Set<Ve2StyleFamily>>()
const inFlightFamilyLoads = new Map<string, Promise<void>>()

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

	const loader = ve2ThemeFamilyLoaders[theme][family]
	if (!loader) {
		if (import.meta.env.DEV) {
			console.warn(
				`[Ve2GranularShell] No loader found for family "${family}" in theme "${theme}".`,
			)
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

async function requestThemeFamilies(
	theme: Ve2ThemeKey,
	families: readonly string[],
): Promise<void> {
	const normalizedFamilies = normalizeVe2StyleFamilies(families, true)
	for (const family of normalizedFamilies) {
		await ensureFamilyLoaded(theme, family)
	}
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

	const styleLoaderApi: Ve2StyleLoaderApi = {
		requestFamilies: async (families) => {
			await requestThemeFamilies(themeKey(), families)
		},
	}

	// Always mark baseline global family as loaded for the active theme. Every
	// route's component declares its own families via useVe2RequiredStyleFamilies
	// (proven complete by family-closure-check.mjs), so no route-driven preload is
	// needed — the component demand signal is the single source of truth.
	createRenderEffect(
		() => themeKey(),
		(theme) => {
			void requestThemeFamilies(theme, ['global'])
		},
	)

	return (
		<ThemeContext value={themeClass()}>
			<Ve2StyleLoaderContext value={styleLoaderApi}>
				<div class={`${themeClass()} ${vars} ${bodyFrame} ${bodyText}`}>
					{props.children}
				</div>
			</Ve2StyleLoaderContext>
		</ThemeContext>
	)
}
