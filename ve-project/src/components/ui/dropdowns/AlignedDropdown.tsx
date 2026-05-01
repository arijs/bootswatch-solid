import type { Component } from 'solid-js'
import { useVeDropdownThemeClasses } from '../../../themes/runtime/hooks'
import { configureVeDropdown } from './ve-dropdown'

const AlignedDropdown: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		h6,
		btn,
		btnSecondary,
		btnGroup,
		dropdown,
		dropdownDivider,
		dropdownHeader,
		dropdownItem,
		dropdownMenu,
		dropdownMenuEnd,
		dropdownToggle,
	} = useVeDropdownThemeClasses()
	configureVeDropdown(useVeDropdownThemeClasses())

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<div class={btnGroup}>
				<div class={dropdown}>
					<button
						class={`${btn} ${btnSecondary} ${dropdownToggle} pwhook-dropdown-toggle`}
						type="button"
						id="dropdownRightMenuButton"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						End-aligned menu
					</button>
					<ul
						class={`${dropdownMenu} ${dropdownMenuEnd} pwhook-dropdown-menu`}
						aria-labelledby="dropdownRightMenuButton"
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
		</div>
	)
}

export default AlignedDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x204 204
// @screenshot quartz/opened-dropdown: 360x252 252
// @screenshot vapor/opened-dropdown: 360x200 200
