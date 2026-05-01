import type { Component } from 'solid-js'
import { useVeDropdownThemeClasses } from '../../../themes/runtime/hooks'
import { configureVeDropdown } from './ve-dropdown'

const SplitLightDropdown: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnLight,
		btnGroup,
		dropdownItem,
		dropdownMenu,
		dropdownToggle,
		dropdownToggleSplit,
		visuallyHidden,
	} = useVeDropdownThemeClasses()
	configureVeDropdown(useVeDropdownThemeClasses())

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<div class={btnGroup}>
				<button type="button" class={`${btn} ${btnLight}`}>
					Light
				</button>
				<button
					type="button"
					class={`${btn} ${btnLight} ${dropdownToggle} ${dropdownToggleSplit} pwhook-dropdown-toggle`}
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<span class={visuallyHidden}>Toggle Dropdown</span>
				</button>
				<ul class={`${dropdownMenu} pwhook-dropdown-menu`}>
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
				</ul>
			</div>
		</div>
	)
}

export default SplitLightDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x154 154
// @screenshot quartz/opened-dropdown: 360x188 188
// @screenshot vapor/opened-dropdown: 360x150 150
