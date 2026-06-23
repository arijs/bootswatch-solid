import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/basic/contract.css'
import { h6, horizontalRule } from '../../../theme-contract/contents/contract.css'
import { elButton } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownMenu,
	dropdownMenuShow,
	dropdownToggle,
	dropend,
	dropstart,
	dropup,
} from '../../../theme-contract/ui/dropdowns/contract.css'
import { configureVeDropdown } from './ve-dropdown'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/dropdowns',
	'ui/buttons',
	'contents/basic',
	'utilities/used',
]

const StartDropdown: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	configureVeDropdown({
		btnShowHook,
		dropdownItem,
		dropdownMenu,
		dropdownMenuShow,
		dropend,
		dropstart,
		dropup,
	})
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${dropstart}`}>
				<button
					class={`${theme} ${elButton} ${btn} ${btnSecondary} ${dropdownToggle} pwhook-dropdown-toggle`}
					type="button"
					id="dropstartMenuButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Dropstart button
				</button>
				<ul
					class={`${theme} ${dropdownMenu} pwhook-dropdown-menu`}
					aria-labelledby="dropstartMenuButton"
				>
					<li>
						<h6 class={`${theme} ${dropdownHeader} ${h6}`}>Dropdown header</h6>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a
							class={`${theme} ${link} ${dropdownItem}`}
							href="#"
							onClick={(e) => e.preventDefault()}
						>
							Action
						</a>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a
							class={`${theme} ${link} ${dropdownItem}`}
							href="#"
							onClick={(e) => e.preventDefault()}
						>
							Another action
						</a>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a
							class={`${theme} ${link} ${dropdownItem}`}
							href="#"
							onClick={(e) => e.preventDefault()}
						>
							Something else here
						</a>
					</li>
					<li>
						<hr class={`${theme} ${horizontalRule} ${dropdownDivider}`} />
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a
							class={`${theme} ${link} ${dropdownItem}`}
							href="#"
							onClick={(e) => e.preventDefault()}
						>
							Separated link
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default StartDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x196 196
