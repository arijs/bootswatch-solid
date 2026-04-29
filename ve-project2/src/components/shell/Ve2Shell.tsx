import { useLocation } from '@solidjs/router'
import type { JSX } from 'solid-js'
import { bootstrapScope } from '../../themes/bootstrap/scope.css'
import { sketchyScope } from '../../themes/sketchy/scope.css'
// Side-effect imports: register globalStyle rules for all button variants
import '../../themes/bootstrap/ui/buttons/styles.css'
import '../../themes/sketchy/ui/buttons/styles.css'
// Layout class for screenshot demo containers
import '../../styles/bd-example.css'
import { ThemeContext } from '../../context/ThemeContext'

function resolveThemeClass(rawTheme: string | null | undefined): string {
	switch (rawTheme) {
		case 'sketchy':
			return sketchyScope
		default:
			return bootstrapScope
	}
}

// Ve2Shell — reads the ?theme= URL param (same convention as ve-project) and
// provides the matching scope class via ThemeContext to all child components.
export function Ve2Shell(props: { children: JSX.Element }) {
	const location = useLocation()
	const themeClass = () => {
		const params = new URLSearchParams(location.search)
		return resolveThemeClass(params.get('theme'))
	}
	return (
		<ThemeContext.Provider value={themeClass()}>
			{props.children}
		</ThemeContext.Provider>
	)
}
