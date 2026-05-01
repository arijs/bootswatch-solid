import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	nav,
	navLink,
	navLinkActive,
	navLinkDisabled,
} from '../../../theme-contract/ui/navs/contract.css'

const BasicNav: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
			<nav class={`${theme} ${nav}`}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					class={`${theme} ${navLink} ${navLinkActive}`}
					aria-current="page"
					href="#"
					onClick={(e) => e.preventDefault()}
				>
					Active
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a class={`${theme} ${navLink}`} href="#" onClick={(e) => e.preventDefault()}>
					Link
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a class={`${theme} ${navLink}`} href="#" onClick={(e) => e.preventDefault()}>
					Link
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					class={`${theme} ${navLink} ${navLinkDisabled}`}
					href="#"
					onClick={(e) => e.preventDefault()}
					tabindex="-1"
					aria-disabled="true"
				>
					Disabled
				</a>
			</nav>
			</div>
		</div>
	)
}

export default BasicNav

// @screenshot *: 360x120 120
