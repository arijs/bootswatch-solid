import type { Component } from 'solid-js'
import './ve-dropdown'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { h6 } from '../../../themes/bootstrap/contents/generated.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnSecondary } from '../../../themes/bootstrap/ui/buttons/generated.css'
import {
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownMenu,
	dropdownToggle,
	dropstart,
	dropstartMenu,
	dropstartToggle,
} from '../../../themes/bootstrap/ui/dropdowns/base.css'

const StartDropdown: Component = () => (
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
			<ul class={`${dropdownMenu} ${dropstartMenu} pwhook-dropdown-menu`} aria-labelledby="dropstartMenuButton">
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

export default StartDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x196 196
// @screenshot quartz/opened-dropdown: 360x242 242
// @screenshot vapor/opened-dropdown: 360x194 194
