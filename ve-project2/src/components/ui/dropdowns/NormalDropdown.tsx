import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { h6 } from '../../../theme-contract/contents/contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
	dropdown,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownMenu,
	dropdownMenuShow,
	dropdownToggle,
	dropend,
	dropstart,
	dropup,
} from '../../../theme-contract/ui/dropdowns/contract.css'
import { configureVeDropdown } from './ve-dropdown'
import { containerFluid } from '../../../theme-contract/layout/container.css'
const NormalDropdown: Component = () => {
	const theme = useContext(ThemeContext)
	configureVeDropdown({ btnShowHook, dropdownItem, dropdownMenu, dropdownMenuShow, dropend, dropstart, dropup })
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${dropdown}`}>
				<button
					class={`${theme} ${btn} ${btnSecondary} ${dropdownToggle} pwhook-dropdown-toggle`}
					type="button"
					id="dropdownMenuButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Dropdown button
				</button>
				<ul
					class={`${theme} ${dropdownMenu} pwhook-dropdown-menu`}
					aria-labelledby="dropdownMenuButton"
				>
					<li>
						<h6 class={`${theme} ${dropdownHeader} ${h6}`}>Dropdown header</h6>
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
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a class={`${theme} ${dropdownItem}`} href="#" onClick={(e) => e.preventDefault()}>
							Something else here
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
	)
}

export default NormalDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x236 236
