import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/basic/contract.css'
import { h6, horizontalRule } from '../../../theme-contract/contents/contract.css'
import { elButton } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { btnGroup } from '../../../theme-contract/ui/button-group/contract.css'
import { btn, btnSecondary, inputFontFamily } from '../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
	dropdown,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownMenu,
	dropdownMenuEnd,
	dropdownMenuShow,
	dropdownToggle,
	dropend,
	dropstart,
	dropup,
} from '../../../theme-contract/ui/dropdowns/contract.css'
import type { Ve2StyleFamily } from '../../../theme-runtime/style-families'
import { useVe2RequiredStyleFamilies } from '../../../theme-runtime/style-loader-context'
import { configureVeDropdown } from './ve-dropdown'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/button-group',
	'ui/buttons',
	'ui/dropdowns',
	'contents/basic',
	'utilities/used',
]

const AlignedDropdown: Component = () => {
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
			<div class={`${theme} ${btnGroup}`}>
				<div class={`${theme} ${dropdown}`}>
					<button
						class={`${theme} ${elButton} ${inputFontFamily} ${btn} ${btnSecondary} ${dropdownToggle} pwhook-dropdown-toggle`}
						type="button"
						id="dropdownRightMenuButton"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						End-aligned menu
					</button>
					<ul
						class={`${theme} ${dropdownMenu} ${dropdownMenuEnd} pwhook-dropdown-menu`}
						aria-labelledby="dropdownRightMenuButton"
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
		</div>
	)
}

export default AlignedDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x204 204
