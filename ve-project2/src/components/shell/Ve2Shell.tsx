import { useLocation } from '@solidjs/router'
import type { JSX } from 'solid-js'
import { bootstrapScope } from '../../themes/bootstrap/scope.css'
import { sketchyScope } from '../../themes/sketchy/scope.css'
// Side-effect imports: register globalStyle rules for all button variants
import '../../themes/bootstrap/ui/buttons/styles.css'
import '../../themes/sketchy/ui/buttons/styles.css'
// Side-effect imports: register globalStyle rules for all alert variants
import '../../themes/bootstrap/ui/alerts/styles.css'
import '../../themes/sketchy/ui/alerts/styles.css'
// Side-effect imports: register globalStyle rules for all badge variants
import '../../themes/bootstrap/ui/badge/styles.css'
import '../../themes/sketchy/ui/badge/styles.css'
// Side-effect imports: register globalStyle rules for breadcrumb
import '../../themes/bootstrap/ui/breadcrumb/styles.css'
import '../../themes/sketchy/ui/breadcrumb/styles.css'
// Side-effect imports: register globalStyle rules for button-group
import '../../themes/bootstrap/ui/button-group/styles.css'
import '../../themes/sketchy/ui/button-group/styles.css'
// Side-effect imports: register globalStyle rules for card + list-group
import '../../themes/bootstrap/ui/card/styles.css'
import '../../themes/sketchy/ui/card/styles.css'
// Side-effect imports: register globalStyle rules for card-tabs (nav + nav-tabs)
import '../../themes/bootstrap/ui/card-tabs/styles.css'
import '../../themes/sketchy/ui/card-tabs/styles.css'
// Side-effect imports: register globalStyle rules for carousel
import '../../themes/bootstrap/ui/carousel/styles.css'
import '../../themes/sketchy/ui/carousel/styles.css'
// Side-effect imports: register globalStyle rules for dropdowns
import '../../themes/bootstrap/ui/dropdowns/styles.css'
import '../../themes/sketchy/ui/dropdowns/styles.css'
// Layout class for screenshot demo containers
import '../../styles/bd-example.css'
import { ThemeContext } from '../../context/ThemeContext'
// Root-level contract classes: body wrapper + text-bearing root.
import { bodyText, vars } from '../../theme-contract/theme-contract.css'

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
// Wraps children in a div carrying scope + vars + body + bodyText so root-level
// theme vars and styles (font-family, color, background) take effect.
export function Ve2Shell(props: { children: JSX.Element }) {
	const location = useLocation()
	const themeClass = () => {
		const params = new URLSearchParams(location.search)
		return resolveThemeClass(params.get('theme'))
	}
	return (
		<ThemeContext value={themeClass()}>
			<div class={`${themeClass()} ${vars} ${bodyText}`}>{props.children}</div>
		</ThemeContext>
	)
}
