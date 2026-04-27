import type { Component } from 'solid-js'
import { useVeNavThemeClasses } from '../../../themes/runtime/hooks'

const PillNav: Component = () => {
	const { bsTheme, body, containerFluid, nav, navItem, navLink, navLinkActive, navLinkDisabled, navPills } = useVeNavThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<ul class={`${nav} ${navPills}`}>
			<li class={navItem}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					class={`${navLink} ${navLinkActive}`}
					aria-current="page"
					href="#"
					onClick={(event) => event.preventDefault()}
				>
					Active
				</a>
			</li>
			<li class={navItem}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a class={navLink} href="#" onClick={(event) => event.preventDefault()}>
					Link
				</a>
			</li>
			<li class={navItem}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a class={navLink} href="#" onClick={(event) => event.preventDefault()}>
					Link
				</a>
			</li>
			<li class={navItem}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					class={`${navLink} ${navLinkDisabled}`}
					href="#"
					onClick={(event) => event.preventDefault()}
					tabindex="-1"
					aria-disabled="true"
				>
					Disabled
				</a>
			</li>
		</ul>
	</div>
	)
}

export default PillNav

// @screenshot *: 360x120 120