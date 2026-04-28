import type { Component } from 'solid-js'
import { configureVeDropdown } from './ve-dropdown'
import { useVeDropdownThemeClasses } from '../../../themes/runtime/hooks'

const SmallDropdown: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		h6,
		btn,
		btnSecondary,
		btnSm,
		dropdown,
		dropdownDivider,
		dropdownHeader,
		dropdownItem,
		dropdownMenu,
		dropdownToggle,
	} = useVeDropdownThemeClasses()
	configureVeDropdown(useVeDropdownThemeClasses())

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={dropdown}>
			<button
				class={`${btn} ${btnSecondary} ${btnSm} ${dropdownToggle} pwhook-dropdown-toggle`}
				type="button"
				id="dropdownMenuButtonSM"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Dropdown button
			</button>
			<ul class={`${dropdownMenu} pwhook-dropdown-menu`} aria-labelledby="dropdownMenuButtonSM">
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

export default SmallDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x229 229
// @screenshot quartz/opened-dropdown: 360x273 273
// @screenshot vapor/opened-dropdown: 360x225 225
