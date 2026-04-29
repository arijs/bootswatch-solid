import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownMenu,
	dropdownToggle,
	dropstart,
} from '../../../theme-contract/ui/dropdowns/contract.css'

const StartDropdown: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${dropstart}`}>
				<button
					class={`${theme} ${btn} ${btnSecondary} ${dropdownToggle}`}
					type="button"
					id="dropstartMenuButton"
					aria-expanded="false"
				>
					Dropstart button
				</button>
				<ul
					class={`${theme} ${dropdownMenu}`}
					aria-labelledby="dropstartMenuButton"
				>
					<li>
						<h6 class={`${theme} ${dropdownHeader}`}>Dropdown header</h6>
					</li>
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
					<li>
						<hr class={`${theme} ${dropdownDivider}`} />
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={`${theme} ${dropdownItem}`} href="#" onClick={(e) => e.preventDefault()}>
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
