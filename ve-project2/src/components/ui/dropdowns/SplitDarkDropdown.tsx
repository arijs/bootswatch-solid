import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { btnGroup } from '../../../theme-contract/ui/button-group/contract.css'
import { btn, btnDark } from '../../../theme-contract/ui/buttons/contract.css'
import {
	dropdownItem,
	dropdownMenu,
	dropdownToggle,
	dropdownToggleSplit,
} from '../../../theme-contract/ui/dropdowns/contract.css'

const SplitDarkDropdown: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${btnGroup}`}>
				<button type="button" class={`${theme} ${btn} ${btnDark}`}>
					Dark
				</button>
				<button
					type="button"
					class={`${theme} ${btn} ${btnDark} ${dropdownToggle} ${dropdownToggleSplit}`}
					aria-expanded="false"
				>
					<span class="visually-hidden">Toggle Dropdown</span>
				</button>
				<ul class={`${theme} ${dropdownMenu}`}>
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
