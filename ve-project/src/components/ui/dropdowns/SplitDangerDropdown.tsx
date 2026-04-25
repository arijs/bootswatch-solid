import type { Component } from 'solid-js'
import './ve-dropdown'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnDanger } from '../../../themes/bootstrap/ui/buttons/generated.css'
import {
	btnGroup,
	dropdownItem,
	dropdownMenu,
	dropdownToggle,
	dropdownToggleSplit,
	visuallyHidden,
} from '../../../themes/bootstrap/ui/dropdowns/base.css'

const SplitDangerDropdown: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={btnGroup}>
			<button type="button" class={`${btn} ${btnDanger}`}>
				Danger
			</button>
			<button
				type="button"
				class={`${btn} ${btnDanger} ${dropdownToggle} ${dropdownToggleSplit} pwhook-dropdown-toggle`}
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

export default SplitDangerDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x154 154
// @screenshot quartz/opened-dropdown: 360x188 188
// @screenshot vapor/opened-dropdown: 360x150 150
