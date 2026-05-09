import { useLocation } from '@solidjs/router'
import type { JSX } from 'solid-js'
import { bootstrapScope } from '../../themes/bootstrap/scope.css'
import { quartzScope } from '../../themes/quartz/scope.css'
import { solarScope } from '../../themes/solar/scope.css'
import { slateScope } from '../../themes/slate/scope.css'
import { sketchyScope } from '../../themes/sketchy/scope.css'
import { vaporScope } from '../../themes/vapor/scope.css'
import { sandstoneScope } from '../../themes/sandstone/scope.css'
import { materiaScope } from '../../themes/materia/scope.css'
// Side-effect imports: register globalStyle rules for all button variants
import '../../themes/bootstrap/ui/buttons/styles.css'
import '../../themes/quartz/ui/buttons/styles.css'
import '../../themes/solar/ui/buttons/styles.css'
import '../../themes/slate/ui/buttons/styles.css'
import '../../themes/sketchy/ui/buttons/styles.css'
import '../../themes/vapor/ui/buttons/styles.css'
import '../../themes/sandstone/ui/buttons/styles.css'
import '../../themes/materia/ui/buttons/styles.css'
// Side-effect imports: register globalStyle rules for all alert variants
import '../../themes/bootstrap/ui/alerts/styles.css'
import '../../themes/quartz/ui/alerts/styles.css'
import '../../themes/solar/ui/alerts/styles.css'
import '../../themes/slate/ui/alerts/styles.css'
import '../../themes/sketchy/ui/alerts/styles.css'
import '../../themes/vapor/ui/alerts/styles.css'
import '../../themes/sandstone/ui/alerts/styles.css'
import '../../themes/materia/ui/alerts/styles.css'
// Side-effect imports: register globalStyle rules for all badge variants
import '../../themes/bootstrap/ui/badge/styles.css'
import '../../themes/quartz/ui/badge/styles.css'
import '../../themes/solar/ui/badge/styles.css'
import '../../themes/slate/ui/badge/styles.css'
import '../../themes/sketchy/ui/badge/styles.css'
import '../../themes/vapor/ui/badge/styles.css'
import '../../themes/sandstone/ui/badge/styles.css'
import '../../themes/materia/ui/badge/styles.css'
// Side-effect imports: register globalStyle rules for breadcrumb
import '../../themes/bootstrap/ui/breadcrumb/styles.css'
import '../../themes/quartz/ui/breadcrumb/styles.css'
import '../../themes/solar/ui/breadcrumb/styles.css'
import '../../themes/slate/ui/breadcrumb/styles.css'
import '../../themes/sketchy/ui/breadcrumb/styles.css'
import '../../themes/vapor/ui/breadcrumb/styles.css'
import '../../themes/sandstone/ui/breadcrumb/styles.css'
import '../../themes/materia/ui/breadcrumb/styles.css'
// Side-effect imports: register globalStyle rules for button-group
import '../../themes/bootstrap/ui/button-group/styles.css'
import '../../themes/quartz/ui/button-group/styles.css'
import '../../themes/solar/ui/button-group/styles.css'
import '../../themes/slate/ui/button-group/styles.css'
import '../../themes/sketchy/ui/button-group/styles.css'
import '../../themes/vapor/ui/button-group/styles.css'
import '../../themes/sandstone/ui/button-group/styles.css'
import '../../themes/materia/ui/button-group/styles.css'
// Side-effect imports: register globalStyle rules for card + list-group
import '../../themes/bootstrap/ui/card/styles.css'
import '../../themes/quartz/ui/card/styles.css'
import '../../themes/solar/ui/card/styles.css'
import '../../themes/slate/ui/card/styles.css'
import '../../themes/sketchy/ui/card/styles.css'
import '../../themes/vapor/ui/card/styles.css'
import '../../themes/sandstone/ui/card/styles.css'
import '../../themes/materia/ui/card/styles.css'
// Side-effect imports: register globalStyle rules for list-group
import '../../themes/bootstrap/ui/list-group/styles.css'
import '../../themes/quartz/ui/list-group/styles.css'
import '../../themes/solar/ui/list-group/styles.css'
import '../../themes/slate/ui/list-group/styles.css'
import '../../themes/sketchy/ui/list-group/styles.css'
import '../../themes/vapor/ui/list-group/styles.css'
import '../../themes/sandstone/ui/list-group/styles.css'
import '../../themes/materia/ui/list-group/styles.css'
// Side-effect imports: register globalStyle rules for navs (nav, nav-tabs, nav-pills)
import '../../themes/bootstrap/ui/navs/styles.css'
import '../../themes/quartz/ui/navs/styles.css'
import '../../themes/solar/ui/navs/styles.css'
import '../../themes/slate/ui/navs/styles.css'
import '../../themes/sketchy/ui/navs/styles.css'
import '../../themes/vapor/ui/navs/styles.css'
import '../../themes/sandstone/ui/navs/styles.css'
import '../../themes/materia/ui/navs/styles.css'
// Side-effect imports: register globalStyle rules for navbar
import '../../themes/bootstrap/ui/navbar/styles.css'
import '../../themes/quartz/ui/navbar/styles.css'
import '../../themes/solar/ui/navbar/styles.css'
import '../../themes/slate/ui/navbar/styles.css'
import '../../themes/sketchy/ui/navbar/styles.css'
import '../../themes/vapor/ui/navbar/styles.css'
import '../../themes/sandstone/ui/navbar/styles.css'
import '../../themes/materia/ui/navbar/styles.css'
// Side-effect imports: register globalStyle rules for card-tabs
import '../../themes/bootstrap/ui/card-tabs/styles.css'
import '../../themes/quartz/ui/card-tabs/styles.css'
import '../../themes/solar/ui/card-tabs/styles.css'
import '../../themes/slate/ui/card-tabs/styles.css'
import '../../themes/sketchy/ui/card-tabs/styles.css'
import '../../themes/vapor/ui/card-tabs/styles.css'
import '../../themes/sandstone/ui/card-tabs/styles.css'
import '../../themes/materia/ui/card-tabs/styles.css'
// Side-effect imports: register globalStyle rules for carousel
import '../../themes/bootstrap/ui/carousel/styles.css'
import '../../themes/quartz/ui/carousel/styles.css'
import '../../themes/solar/ui/carousel/styles.css'
import '../../themes/slate/ui/carousel/styles.css'
import '../../themes/sketchy/ui/carousel/styles.css'
import '../../themes/vapor/ui/carousel/styles.css'
import '../../themes/sandstone/ui/carousel/styles.css'
import '../../themes/materia/ui/carousel/styles.css'
// Side-effect imports: register globalStyle rules for dropdowns
import '../../themes/bootstrap/ui/dropdowns/styles.css'
import '../../themes/quartz/ui/dropdowns/styles.css'
import '../../themes/solar/ui/dropdowns/styles.css'
import '../../themes/slate/ui/dropdowns/styles.css'
import '../../themes/sketchy/ui/dropdowns/styles.css'
import '../../themes/vapor/ui/dropdowns/styles.css'
import '../../themes/sandstone/ui/dropdowns/styles.css'
import '../../themes/materia/ui/dropdowns/styles.css'
// Side-effect imports: register globalStyle rules for accordion
import '../../themes/bootstrap/ui/accordion/styles.css'
import '../../themes/quartz/ui/accordion/styles.css'
import '../../themes/solar/ui/accordion/styles.css'
import '../../themes/slate/ui/accordion/styles.css'
import '../../themes/sketchy/ui/accordion/styles.css'
import '../../themes/vapor/ui/accordion/styles.css'
import '../../themes/sandstone/ui/accordion/styles.css'
import '../../themes/materia/ui/accordion/styles.css'
// Side-effect imports: register globalStyle rules for modal
import '../../themes/bootstrap/ui/modal/styles.css'
import '../../themes/quartz/ui/modal/styles.css'
import '../../themes/solar/ui/modal/styles.css'
import '../../themes/slate/ui/modal/styles.css'
import '../../themes/sketchy/ui/modal/styles.css'
import '../../themes/vapor/ui/modal/styles.css'
import '../../themes/sandstone/ui/modal/styles.css'
import '../../themes/materia/ui/modal/styles.css'
// Side-effect imports: register globalStyle rules for tooltips
import '../../themes/bootstrap/ui/tooltips/styles.css'
import '../../themes/quartz/ui/tooltips/styles.css'
import '../../themes/solar/ui/tooltips/styles.css'
import '../../themes/slate/ui/tooltips/styles.css'
import '../../themes/sketchy/ui/tooltips/styles.css'
import '../../themes/vapor/ui/tooltips/styles.css'
import '../../themes/sandstone/ui/tooltips/styles.css'
import '../../themes/materia/ui/tooltips/styles.css'
// Side-effect imports: register globalStyle rules for popovers
import '../../themes/bootstrap/ui/popovers/styles.css'
import '../../themes/quartz/ui/popovers/styles.css'
import '../../themes/solar/ui/popovers/styles.css'
import '../../themes/slate/ui/popovers/styles.css'
import '../../themes/sketchy/ui/popovers/styles.css'
import '../../themes/vapor/ui/popovers/styles.css'
import '../../themes/sandstone/ui/popovers/styles.css'
import '../../themes/materia/ui/popovers/styles.css'
// Side-effect imports: register globalStyle rules for toasts
import '../../themes/bootstrap/ui/toasts/styles.css'
import '../../themes/quartz/ui/toasts/styles.css'
import '../../themes/solar/ui/toasts/styles.css'
import '../../themes/slate/ui/toasts/styles.css'
import '../../themes/sketchy/ui/toasts/styles.css'
import '../../themes/vapor/ui/toasts/styles.css'
import '../../themes/sandstone/ui/toasts/styles.css'
import '../../themes/materia/ui/toasts/styles.css'
// Side-effect imports: register globalStyle rules for scrollspy
import '../../themes/bootstrap/ui/scrollspy/styles.css'
import '../../themes/quartz/ui/scrollspy/styles.css'
import '../../themes/solar/ui/scrollspy/styles.css'
import '../../themes/slate/ui/scrollspy/styles.css'
import '../../themes/sketchy/ui/scrollspy/styles.css'
import '../../themes/vapor/ui/scrollspy/styles.css'
import '../../themes/sandstone/ui/scrollspy/styles.css'
import '../../themes/materia/ui/scrollspy/styles.css'
// Side-effect imports: register globalStyle rules for contents heading classes
import '../../themes/bootstrap/contents/styles.css'
import '../../themes/quartz/contents/styles.css'
import '../../themes/solar/contents/styles.css'
import '../../themes/slate/contents/styles.css'
import '../../themes/sketchy/contents/styles.css'
import '../../themes/vapor/contents/styles.css'
import '../../themes/sandstone/contents/styles.css'
import '../../themes/materia/contents/styles.css'
// Side-effect imports: register globalStyle rules for forms
import '../../themes/bootstrap/forms/styles.css'
import '../../themes/quartz/forms/styles.css'
import '../../themes/solar/forms/styles.css'
import '../../themes/slate/forms/styles.css'
import '../../themes/sketchy/forms/styles.css'
import '../../themes/vapor/forms/styles.css'
import '../../themes/sandstone/forms/styles.css'
import '../../themes/materia/forms/styles.css'
// Side-effect imports: register globalStyle rules for pagination
import '../../themes/bootstrap/ui/pagination/styles.css'
import '../../themes/quartz/ui/pagination/styles.css'
import '../../themes/solar/ui/pagination/styles.css'
import '../../themes/slate/ui/pagination/styles.css'
import '../../themes/sketchy/ui/pagination/styles.css'
import '../../themes/vapor/ui/pagination/styles.css'
import '../../themes/sandstone/ui/pagination/styles.css'
import '../../themes/materia/ui/pagination/styles.css'
// Side-effect imports: register globalStyle rules for progress
import '../../themes/bootstrap/ui/progress/styles.css'
import '../../themes/quartz/ui/progress/styles.css'
import '../../themes/solar/ui/progress/styles.css'
import '../../themes/slate/ui/progress/styles.css'
import '../../themes/sketchy/ui/progress/styles.css'
import '../../themes/vapor/ui/progress/styles.css'
import '../../themes/sandstone/ui/progress/styles.css'
import '../../themes/materia/ui/progress/styles.css'
// Side-effect imports: register globalStyle rules for spinners
import '../../themes/bootstrap/ui/spinners/styles.css'
import '../../themes/quartz/ui/spinners/styles.css'
import '../../themes/solar/ui/spinners/styles.css'
import '../../themes/slate/ui/spinners/styles.css'
import '../../themes/sketchy/ui/spinners/styles.css'
import '../../themes/vapor/ui/spinners/styles.css'
import '../../themes/sandstone/ui/spinners/styles.css'
import '../../themes/materia/ui/spinners/styles.css'
// Side-effect imports: register utility classes (e.g. text-muted)
import '../../themes/bootstrap/utilities/styles.css'
import '../../themes/quartz/utilities/styles.css'
import '../../themes/solar/utilities/styles.css'
import '../../themes/slate/utilities/styles.css'
import '../../themes/sketchy/utilities/styles.css'
import '../../themes/vapor/utilities/styles.css'
import '../../themes/sandstone/utilities/styles.css'
import '../../themes/materia/utilities/styles.css'
// Layout class for screenshot demo containers
import '../../styles/bd-example.css'
import { ThemeContext } from '../../context/ThemeContext'
// Root-level contract classes: body wrapper + text-bearing root.
import { bodyText, bodyFrame, vars } from '../../theme-contract/theme-contract.css'

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
	const themeClass = () => {
		const params = new URLSearchParams(location.search)
		return resolveThemeClass(params.get('theme'))
	}
	return (
		<ThemeContext value={themeClass()}>
			<div class={`${themeClass()} ${vars} ${bodyFrame} ${bodyText}`}>{props.children}</div>
		</ThemeContext>
	)
}
