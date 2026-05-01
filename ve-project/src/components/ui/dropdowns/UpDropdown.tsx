import type { Component } from 'solid-js'
import { useVeDropdownThemeClasses } from '../../../themes/runtime/hooks'
import { configureVeDropdown } from './ve-dropdown'

const UpDropdown: Component = () => {
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
		dropup,
		dropupMenu,
		dropupToggle,
	} = useVeDropdownThemeClasses()
	configureVeDropdown(useVeDropdownThemeClasses())

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<div class={dropup}>
				<button
					class={`${btn} ${btnSecondary} ${dropdownToggle} ${dropupToggle} pwhook-dropdown-toggle`}
					type="button"
					id="dropupMenuButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Dropup button
				</button>
				<ul
					class={`${dropdownMenu} ${dropupMenu} pwhook-dropdown-menu`}
					aria-labelledby="dropupMenuButton"
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

export default UpDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x236 236
// @screenshot quartz/opened-dropdown: 360x292 292
// @screenshot vapor/opened-dropdown: 360x232 232
