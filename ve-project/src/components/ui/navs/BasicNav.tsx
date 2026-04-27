import type { Component } from 'solid-js'
import { useVeNavThemeClasses } from '../../../themes/runtime/hooks'

const BasicNav: Component = () => {
	const { bsTheme, body, containerFluid, nav, navLink, navLinkActive, navLinkDisabled } = useVeNavThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<nav class={nav}>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				class={`${navLink} ${navLinkActive}`}
				aria-current="page"
				href="#"
				onClick={(event) => event.preventDefault()}
			>
				Active
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a class={navLink} href="#" onClick={(event) => event.preventDefault()}>
				Link
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a class={navLink} href="#" onClick={(event) => event.preventDefault()}>
				Link
			</a>
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
		</nav>
	</div>
	)
}

export default BasicNav

// @screenshot *: 360x120 120