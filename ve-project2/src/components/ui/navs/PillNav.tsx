import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	nav,
	navItem,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navPills,
} from '../../../theme-contract/ui/navs/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/navs',
	'contents',
	'utilities',
]

const PillNav: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
			<ul class={`${theme} ${nav} ${navPills}`}>
				<li class={`${theme} ${navItem}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class={`${theme} ${navLink} ${navLinkActive}`}
						aria-current="page"
						href="#"
						onClick={(e) => e.preventDefault()}
					>
						Active
					</a>
				</li>
				<li class={`${theme} ${navItem}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={`${theme} ${navLink}`} href="#" onClick={(e) => e.preventDefault()}>
						Link
					</a>
				</li>
				<li class={`${theme} ${navItem}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={`${theme} ${navLink}`} href="#" onClick={(e) => e.preventDefault()}>
						Link
					</a>
				</li>
				<li class={`${theme} ${navItem}`}>
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
				</li>
			</ul>
				</div>
		</div>
	)
}

export default PillNav

// @screenshot *: 360x120 120
