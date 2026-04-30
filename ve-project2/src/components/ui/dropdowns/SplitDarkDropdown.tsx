import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { visuallyHidden } from '../../../theme-contract/utilities/contract.css'
import { btnGroup } from '../../../theme-contract/ui/button-group/contract.css'
import { btn, btnDark } from '../../../theme-contract/ui/buttons/contract.css'
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
import { configureVeDropdown } from './ve-dropdown'
import { containerFluid } from '../../../theme-contract/layout/container.css'
const SplitDarkDropdown: Component = () => {
	const theme = useContext(ThemeContext)
	configureVeDropdown({ btnShowHook, dropdownItem, dropdownMenu, dropdownMenuShow, dropend, dropstart, dropup })
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${btnGroup}`}>
				<button type="button" class={`${theme} ${btn} ${btnDark}`}>
					Dark
				</button>
				<button
					type="button"
					class={`${theme} ${btn} ${btnDark} ${dropdownToggle} ${dropdownToggleSplit} pwhook-dropdown-toggle`}
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<span class={visuallyHidden}>Toggle Dropdown</span>
				</button>
				<ul class={`${theme} ${dropdownMenu} pwhook-dropdown-menu`}>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={`${theme} ${dropdownItem}`} href="#" onClick={(e) => e.preventDefault()}>
							Action
						</a>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={`${theme} ${dropdownItem}`} href="#" onClick={(e) => e.preventDefault()}>
							Another action
						</a>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={`${theme} ${dropdownItem}`} href="#" onClick={(e) => e.preventDefault()}>
							Something else here
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SplitDarkDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x154 154
