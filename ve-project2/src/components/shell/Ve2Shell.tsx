import { useLocation } from '@solidjs/router'
import { createEffect, type JSX } from 'solid-js'
import { bootstrapScope } from '../../themes/bootstrap/scope.css'
import { quartzScope } from '../../themes/quartz/scope.css'
import { solarScope } from '../../themes/solar/scope.css'
import { slateScope } from '../../themes/slate/scope.css'
import { sketchyScope } from '../../themes/sketchy/scope.css'
import { vaporScope } from '../../themes/vapor/scope.css'
import { sandstoneScope } from '../../themes/sandstone/scope.css'
import { materiaScope } from '../../themes/materia/scope.css'
// Layout class for screenshot demo containers
import '../../styles/bd-example.css'
import { ThemeContext } from '../../context/ThemeContext'
// Root-level contract classes: body wrapper + text-bearing root.
import { bodyText, bodyFrame, vars } from '../../theme-contract/theme-contract.css'

// Each loader returns a dynamic import for that theme's side-effect barrel.
// Explicit paths are required so Vite can build separate chunks per theme.
const themeLoaders: Record<string, () => Promise<unknown>> = {
	bootstrap: () => import('../../themes/bootstrap/theme'),
	quartz:    () => import('../../themes/quartz/theme'),
	solar:     () => import('../../themes/solar/theme'),
	slate:     () => import('../../themes/slate/theme'),
	sketchy:   () => import('../../themes/sketchy/theme'),
	vapor:     () => import('../../themes/vapor/theme'),
	sandstone: () => import('../../themes/sandstone/theme'),
	materia:   () => import('../../themes/materia/theme'),
}

// Tracks which themes have already been loaded (module-level, survives re-mounts).
const loadedThemes = new Set<string>()

function resolveThemeKey(rawTheme: string | null | undefined): string {
	switch (rawTheme) {
		case 'quartz':
		case 'solar':
		case 'slate':
		case 'sketchy':
		case 'vapor':
		case 'sandstone':
		case 'materia':
			return rawTheme
		default:
			return 'bootstrap'
	}
}

function resolveThemeClass(rawTheme: string | null | undefined): string {
	switch (rawTheme) {
		case 'quartz':
			return quartzScope
		case 'solar':
			return solarScope
		case 'slate':
			return slateScope
		case 'sketchy':
			return sketchyScope
		case 'vapor':
			return vaporScope
		case 'sandstone':
			return sandstoneScope
		case 'materia':
			return materiaScope
		default:
			return bootstrapScope
	}
}

// Ve2Shell — reads the ?theme= URL param (same convention as ve-project) and
// provides the matching scope class via ThemeContext to all child components.
// Wraps children in a div carrying scope + vars + body + bodyText so root-level
// theme vars and styles (font-family, color, background) take effect.
export function Ve2Shell(props: { children: JSX.Element }) {
	const location = useLocation()
	const themeKey = () => {
		const params = new URLSearchParams(location.search)
		return resolveThemeKey(params.get('theme'))
	}
	const themeClass = () => resolveThemeClass(themeKey())

	createEffect(
		() => themeKey(),
		(key) => {
			if (!loadedThemes.has(key)) {
				loadedThemes.add(key)
				themeLoaders[key]()
			}
		},
	)

	return (
		<ThemeContext value={themeClass()}>
			<div class={`${themeClass()} ${vars} ${bodyFrame} ${bodyText}`}>{props.children}</div>
		</ThemeContext>
	)
}
