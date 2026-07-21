import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/basic/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	nav,
	navLink,
	navLinkActive,
	navLinkDisabled,
} from '../../../theme-contract/ui/navs/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/navs',
	'contents/basic',
	'utilities/used',
]

const BasicNav: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<nav class={`${theme} ${nav}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class={`${theme} ${link} ${navLink} ${navLinkActive}`}
						aria-current="page"
						href="#"
						onClick={(e) => e.preventDefault()}
					>
						Active
					</a>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class={`${theme} ${link} ${navLink}`}
						href="#"
						onClick={(e) => e.preventDefault()}
					>
						Link
					</a>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class={`${theme} ${link} ${navLink}`}
						href="#"
						onClick={(e) => e.preventDefault()}
					>
						Link
					</a>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class={`${theme} ${link} ${navLink} ${navLinkDisabled}`}
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
