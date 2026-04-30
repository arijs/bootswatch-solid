import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { btnGroup } from '../../../theme-contract/ui/button-group/contract.css'
import { btn, btnDanger } from '../../../theme-contract/ui/buttons/contract.css'
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
import { vars } from '../../../theme-contract/theme-contract.css'

const SplitDangerDropdown: Component = () => {
	const theme = useContext(ThemeContext)
	configureVeDropdown({ btnShowHook, dropdownItem, dropdownMenu, dropdownMenuShow, dropend, dropstart, dropup })
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${vars} ${btnGroup}`}>
				<button type="button" class={`${theme} ${btn} ${btnDanger}`}>
					Danger
				</button>
				<button
					type="button"
					class={`${theme} ${btn} ${btnDanger} ${dropdownToggle} ${dropdownToggleSplit} pwhook-dropdown-toggle`}
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<span class="visually-hidden">Toggle Dropdown</span>
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

export default SplitDangerDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x154 154
