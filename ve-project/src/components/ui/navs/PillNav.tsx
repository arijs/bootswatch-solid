import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { nav, navItem, navLink, navLinkActive, navLinkDisabled, navPills } from '../../../themes/bootstrap/ui/nav/base.css'

const PillNav: Component = () => (
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

export default PillNav

// @screenshot *: 360x120 120