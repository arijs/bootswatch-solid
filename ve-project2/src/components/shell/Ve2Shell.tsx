import { useLocation } from '@solidjs/router'
import { createEffect, createSignal, type JSX, Show } from 'solid-js'
import { bootstrapScope } from '../../themes/bootstrap/scope.css'
import { briteScope } from '../../themes/brite/scope.css'
import { ceruleanScope } from '../../themes/cerulean/scope.css'
import { cosmoScope } from '../../themes/cosmo/scope.css'
import { cyborgScope } from '../../themes/cyborg/scope.css'
import { darklyScope } from '../../themes/darkly/scope.css'
import { flatlyScope } from '../../themes/flatly/scope.css'
import { journalScope } from '../../themes/journal/scope.css'
import { literaScope } from '../../themes/litera/scope.css'
import { lumenScope } from '../../themes/lumen/scope.css'
import { luxScope } from '../../themes/lux/scope.css'
import { materiaScope } from '../../themes/materia/scope.css'
import { mintyScope } from '../../themes/minty/scope.css'
import { morphScope } from '../../themes/morph/scope.css'
import { pulseScope } from '../../themes/pulse/scope.css'
import { quartzScope } from '../../themes/quartz/scope.css'
import { sandstoneScope } from '../../themes/sandstone/scope.css'
import { simplexScope } from '../../themes/simplex/scope.css'
import { sketchyScope } from '../../themes/sketchy/scope.css'
import { slateScope } from '../../themes/slate/scope.css'
import { solarScope } from '../../themes/solar/scope.css'
import { spacelabScope } from '../../themes/spacelab/scope.css'
import { superheroScope } from '../../themes/superhero/scope.css'
import { unitedScope } from '../../themes/united/scope.css'
import { vaporScope } from '../../themes/vapor/scope.css'
import { yetiScope } from '../../themes/yeti/scope.css'
import { zephyrScope } from '../../themes/zephyr/scope.css'
// Layout class for screenshot demo containers
import '../../styles/bd-example.css'
import { ThemeContext } from '../../context/ThemeContext'
// Root-level contract classes: vars host, page canvas, typography.
import { bodyFrame, bodyText, vars } from '../../theme-contract/theme-contract.css'

// Each loader returns a dynamic import for that theme's side-effect barrel.
// Explicit paths are required so Vite can build separate chunks per theme.
const themeLoaders: Record<string, () => Promise<unknown>> = {
	bootstrap: () => import('../../themes/bootstrap/theme.js'),
	brite: () => import('../../themes/brite/theme.js'),
	cerulean: () => import('../../themes/cerulean/theme.js'),
	cosmo: () => import('../../themes/cosmo/theme.js'),
	cyborg: () => import('../../themes/cyborg/theme.js'),
	darkly: () => import('../../themes/darkly/theme.js'),
	flatly: () => import('../../themes/flatly/theme.js'),
	journal: () => import('../../themes/journal/theme.js'),
	litera: () => import('../../themes/litera/theme.js'),
	lumen: () => import('../../themes/lumen/theme.js'),
	lux: () => import('../../themes/lux/theme.js'),
	materia: () => import('../../themes/materia/theme.js'),
	minty: () => import('../../themes/minty/theme.js'),
	morph: () => import('../../themes/morph/theme.js'),
	pulse: () => import('../../themes/pulse/theme.js'),
	quartz: () => import('../../themes/quartz/theme.js'),
	sandstone: () => import('../../themes/sandstone/theme.js'),
	simplex: () => import('../../themes/simplex/theme.js'),
	sketchy: () => import('../../themes/sketchy/theme.js'),
	slate: () => import('../../themes/slate/theme.js'),
	solar: () => import('../../themes/solar/theme.js'),
	spacelab: () => import('../../themes/spacelab/theme.js'),
	superhero: () => import('../../themes/superhero/theme.js'),
	united: () => import('../../themes/united/theme.js'),
	vapor: () => import('../../themes/vapor/theme.js'),
	yeti: () => import('../../themes/yeti/theme.js'),
	zephyr: () => import('../../themes/zephyr/theme.js'),
}

/** Full bootstrap.css monolith per theme (see scripts/generate-ve-literal.mjs). */
const literalThemeLoaders: Record<string, () => Promise<unknown>> = {
	bootstrap: () => import('../../themes/bootstrap/literal/theme.js'),
	brite: () => import('../../themes/brite/literal/theme.js'),
	cerulean: () => import('../../themes/cerulean/literal/theme.js'),
	cosmo: () => import('../../themes/cosmo/literal/theme.js'),
	cyborg: () => import('../../themes/cyborg/literal/theme.js'),
	darkly: () => import('../../themes/darkly/literal/theme.js'),
	flatly: () => import('../../themes/flatly/literal/theme.js'),
	journal: () => import('../../themes/journal/literal/theme.js'),
	litera: () => import('../../themes/litera/literal/theme.js'),
	lumen: () => import('../../themes/lumen/literal/theme.js'),
	lux: () => import('../../themes/lux/literal/theme.js'),
	materia: () => import('../../themes/materia/literal/theme.js'),
	minty: () => import('../../themes/minty/literal/theme.js'),
	morph: () => import('../../themes/morph/literal/theme.js'),
	pulse: () => import('../../themes/pulse/literal/theme.js'),
	quartz: () => import('../../themes/quartz/literal/theme.js'),
	sandstone: () => import('../../themes/sandstone/literal/theme.js'),
	simplex: () => import('../../themes/simplex/literal/theme.js'),
	sketchy: () => import('../../themes/sketchy/literal/theme.js'),
	slate: () => import('../../themes/slate/literal/theme.js'),
	solar: () => import('../../themes/solar/literal/theme.js'),
	spacelab: () => import('../../themes/spacelab/literal/theme.js'),
	superhero: () => import('../../themes/superhero/literal/theme.js'),
	united: () => import('../../themes/united/literal/theme.js'),
	vapor: () => import('../../themes/vapor/literal/theme.js'),
	yeti: () => import('../../themes/yeti/literal/theme.js'),
	zephyr: () => import('../../themes/zephyr/literal/theme.js'),
}

// Tracks which themes have already been loaded (module-level, survives re-mounts).
const loadedThemes = new Set<string>()
const inFlightThemeLoads = new Map<string, Promise<void>>()

async function ensureThemeLoaded(key: string, literalStyles = false): Promise<void> {
	const cacheKey = literalStyles ? `${key}:literal` : key
	if (loadedThemes.has(cacheKey)) return

	const existing = inFlightThemeLoads.get(cacheKey)
	if (existing) {
		await existing
		return
	}

	const loaders = literalStyles ? literalThemeLoaders : themeLoaders
	const loader =
		loaders[key] ?? (literalStyles ? literalThemeLoaders.bootstrap : themeLoaders.bootstrap)
	const loadPromise = loader()
		.then(() => {
			loadedThemes.add(cacheKey)
		})
		.finally(() => {
			inFlightThemeLoads.delete(cacheKey)
		})

	inFlightThemeLoads.set(cacheKey, loadPromise)
	await loadPromise
}

function resolveThemeKey(rawTheme: string | null | undefined): string {
	switch (rawTheme) {
		case 'brite':
			return rawTheme
		case 'cerulean':
			return rawTheme
		case 'cosmo':
			return rawTheme
		case 'cyborg':
			return rawTheme
		case 'darkly':
			return rawTheme
		case 'flatly':
			return rawTheme
		case 'journal':
			return rawTheme
		case 'litera':
			return rawTheme
		case 'lumen':
			return rawTheme
		case 'lux':
			return rawTheme
		case 'materia':
			return rawTheme
		case 'minty':
			return rawTheme
		case 'morph':
			return rawTheme
		case 'pulse':
			return rawTheme
		case 'quartz':
			return rawTheme
		case 'sandstone':
			return rawTheme
		case 'simplex':
			return rawTheme
		case 'sketchy':
			return rawTheme
		case 'slate':
			return rawTheme
		case 'solar':
			return rawTheme
		case 'spacelab':
			return rawTheme
		case 'superhero':
			return rawTheme
		case 'united':
			return rawTheme
		case 'vapor':
			return rawTheme
		case 'yeti':
			return rawTheme
		case 'zephyr':
			return rawTheme
		default:
			return 'bootstrap'
	}
}

function resolveThemeClass(rawTheme: string | null | undefined): string {
	switch (rawTheme) {
		case 'brite':
			return briteScope
		case 'cerulean':
			return ceruleanScope
		case 'cosmo':
			return cosmoScope
		case 'cyborg':
			return cyborgScope
		case 'darkly':
			return darklyScope
		case 'flatly':
			return flatlyScope
		case 'journal':
			return journalScope
		case 'litera':
			return literaScope
		case 'lumen':
			return lumenScope
		case 'lux':
			return luxScope
		case 'materia':
			return materiaScope
		case 'minty':
			return mintyScope
		case 'morph':
			return morphScope
		case 'pulse':
			return pulseScope
		case 'quartz':
			return quartzScope
		case 'sandstone':
			return sandstoneScope
		case 'simplex':
			return simplexScope
		case 'sketchy':
			return sketchyScope
		case 'slate':
			return slateScope
		case 'solar':
			return solarScope
		case 'spacelab':
			return spacelabScope
		case 'superhero':
			return superheroScope
		case 'united':
			return unitedScope
		case 'vapor':
			return vaporScope
		case 'yeti':
			return yetiScope
		case 'zephyr':
			return zephyrScope
		default:
			return bootstrapScope
	}
}

// Ve2Shell — reads the ?theme= URL param (same convention as ve-project) and
// provides the matching scope class via ThemeContext to all child components.
// Wraps children in a div carrying scope + vars + bodyFrame + bodyText so root-level
// theme vars, page canvas (background), and typography take effect.
export function Ve2Shell(props: { children: JSX.Element; literalStyles?: boolean }) {
	const location = useLocation()
	const [themeReady, setThemeReady] = createSignal(false)
	const themeKey = () => {
		const params = new URLSearchParams(location.search)
		return resolveThemeKey(params.get('theme'))
	}
	const themeClass = () => resolveThemeClass(themeKey())
	const literalStyles = () => props.literalStyles === true

	createEffect(
		() => [themeKey(), literalStyles()] as const,
		([key, literal]) => {
			setThemeReady(false)
			void ensureThemeLoaded(key, literal).then(() => setThemeReady(true))
		},
	)

	return (
		<Show when={themeReady()}>
			<ThemeContext value={themeClass()}>
				<div class={`${themeClass()} ${vars} ${bodyFrame} ${bodyText}`}>
					{props.children}
				</div>
			</ThemeContext>
		</Show>
	)
}
