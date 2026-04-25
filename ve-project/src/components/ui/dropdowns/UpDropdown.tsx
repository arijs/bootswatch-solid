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
	dropup,
	dropupMenu,
	dropupToggle,
} from '../../../themes/bootstrap/ui/dropdowns/base.css'

const UpDropdown: Component = () => (
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
			<ul class={`${dropdownMenu} ${dropupMenu} pwhook-dropdown-menu`} aria-labelledby="dropupMenuButton">
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

export default UpDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x236 236
// @screenshot quartz/opened-dropdown: 360x292 292
// @screenshot vapor/opened-dropdown: 360x232 232
