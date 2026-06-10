import {
	elButton,
} from '../../../theme-contract/global-elements/contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { btn, btnSecondary, btnSm } from '../../../theme-contract/ui/buttons/contract.css'
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
import { h6, horizontalRule } from '../../../theme-contract/contents/contract.css'
import { configureVeDropdown } from './ve-dropdown'
import { containerFluid } from '../../../theme-contract/layout/container.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/dropdowns',
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const SmallDropdown: Component = () => {
const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
configureVeDropdown({ btnShowHook, dropdownItem, dropdownMenu, dropdownMenuShow, dropend, dropstart, dropup })
return (
<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
<div class={`${theme} ${dropdown}`}>
<button
class={`${theme} ${elButton} ${btn} ${btnSecondary} ${btnSm} ${dropdownToggle} pwhook-dropdown-toggle`}
type="button"
id="dropdownMenuButtonSM"
data-bs-toggle="dropdown"
aria-expanded="false"
>
Dropdown button
</button>
<ul
class={`${theme} ${dropdownMenu} pwhook-dropdown-menu`}
aria-labelledby="dropdownMenuButtonSM"
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
<hr class={`${theme} ${horizontalRule} ${dropdownDivider}`} />
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

export default SmallDropdown

// @screenshot *: 360x120 120
// @screenshot */opened-dropdown: 360x229 229
