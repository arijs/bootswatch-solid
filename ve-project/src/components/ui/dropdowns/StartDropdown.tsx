import type { Component } from 'solid-js'
import { useVeDropdownThemeClasses } from '../../../themes/runtime/hooks'
import { configureVeDropdown } from './ve-dropdown'

const StartDropdown: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		h6,
		btn,
		btnSecondary,
		dropdownDivider,
		dropdownHeader,
		dropdownItem,
		dropdownMenu,
		dropdownToggle,
		dropstart,
		dropstartMenu,
		dropstartToggle,
	} = useVeDropdownThemeClasses()
	configureVeDropdown(useVeDropdownThemeClasses())

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<div class={dropstart}>
				<button
					class={`${btn} ${btnSecondary} ${dropdownToggle} ${dropstartToggle} pwhook-dropdown-toggle`}
					type="button"
					id="dropstartMenuButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Dropstart button
				</button>
				<ul
					class={`${dropdownMenu} ${dropstartMenu} pwhook-dropdown-menu`}
					aria-labelledby="dropstartMenuButton"
				>
					<li>
						<h6 class={`${h6} ${dropdownHeader}`}>Dropdown header</h6>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={dropdownItem} href="#" onClick={(e) => e.preventDefault()}>
							Action
						</a>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={dropdownItem} href="#" onClick={(e) => e.preventDefault()}>
							Another action
						</a>
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={dropdownItem} href="#" onClick={(e) => e.preventDefault()}>
							Something else here
						</a>
					</li>
					<li>
						<hr class={dropdownDivider} />
					</li>
					<li>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={dropdownItem} href="#" onClick={(e) => e.preventDefault()}>
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
// @screenshot quartz/opened-dropdown: 360x242 242
// @screenshot vapor/opened-dropdown: 360x194 194
