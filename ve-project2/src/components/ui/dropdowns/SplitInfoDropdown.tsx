import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/basic/contract.css'
import { elButton } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { btnGroup } from '../../../theme-contract/ui/button-group/contract.css'
import { btn, btnInfo } from '../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
	dropdownItem,
	dropdownMenu,
	dropdownMenuShow,
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
} from '../../../theme-contract/ui/dropdowns/contract.css'
import { visuallyHidden } from '../../../theme-contract/utilities/contract.css'
import { configureVeDropdown } from './ve-dropdown'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/button-group',
	'ui/buttons',
	'ui/dropdowns',
	'contents/basic',
	'utilities',
]

const SplitInfoDropdown: Component = () => {
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
				<button type="button" class={`${theme} ${elButton} ${btn} ${btnInfo}`}>
					Info
				</button>
				<button
					type="button"
					class={`${theme} ${elButton} ${btn} ${btnInfo} ${dropdownToggle} ${dropdownToggleSplit} pwhook-dropdown-toggle`}
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<span class={`${theme} ${visuallyHidden}`}>Toggle Dropdown</span>
				</button>
				<ul class={`${theme} ${dropdownMenu} pwhook-dropdown-menu`}>
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
				</ul>
			</div>
		</div>
	)
}

export default SplitInfoDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x154 154
