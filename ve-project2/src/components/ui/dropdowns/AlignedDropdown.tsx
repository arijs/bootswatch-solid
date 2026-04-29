import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { btnGroup } from '../../../theme-contract/ui/button-group/contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
	dropdown,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownMenu,
	dropdownMenuEnd,
	dropdownToggle,
} from '../../../theme-contract/ui/dropdowns/contract.css'

const AlignedDropdown: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${btnGroup}`}>
				<div class={`${theme} ${dropdown}`}>
					<button
						class={`${theme} ${btn} ${btnSecondary} ${dropdownToggle}`}
						type="button"
						id="dropdownRightMenuButton"
						aria-expanded="false"
					>
						End-aligned menu
					</button>
					<ul
						class={`${theme} ${dropdownMenu} ${dropdownMenuEnd}`}
						aria-labelledby="dropdownRightMenuButton"
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
		</div>
	)
}

export default AlignedDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x204 204
