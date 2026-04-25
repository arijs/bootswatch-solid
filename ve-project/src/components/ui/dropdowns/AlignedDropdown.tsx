import type { Component } from 'solid-js'
import './ve-dropdown'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { h6 } from '../../../themes/bootstrap/contents/generated.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnSecondary } from '../../../themes/bootstrap/ui/buttons/generated.css'
import {
	btnGroup,
	dropdown,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownMenu,
	dropdownMenuEnd,
	dropdownToggle,
} from '../../../themes/bootstrap/ui/dropdowns/base.css'

const AlignedDropdown: Component = () => (
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

export default AlignedDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x204 204
// @screenshot quartz/opened-dropdown: 360x252 252
// @screenshot vapor/opened-dropdown: 360x200 200
