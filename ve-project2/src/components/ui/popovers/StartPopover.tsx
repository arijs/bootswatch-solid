import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { h3 } from '../../../theme-contract/contents/contract.css'
import { bodyText, vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import { fade } from '../../../theme-contract/ui/modal/contract.css'
import {
frame,
frameRow,
justifyEnd,
popoverArrow,
popoverBody,
popoverHeader,
popoverShow,
popoverVe,
} from '../../../theme-contract/ui/popovers/contract.css'
import { createVePopover } from './ve-popover'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/popovers',
	'ui/buttons',
	'contents/basic',
	'contents/heading',
	'utilities',
]

const StartPopover: Component = () => {
const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
const VePopover = createVePopover({ popoverArrow, popoverHeader, popoverBody, popoverShow })

return (
<div class={`bd-example ${theme} ${containerFluid} ${frame} ${frameRow} ${justifyEnd}`}>
<button
type="button"
class={`${theme} ${btn} ${btnSecondary} pwhook-popover-trigger`}
data-bs-container="body"
data-bs-toggle="popover"
ref={(popover) =>
new VePopover(popover, {
template: `<div class="${popoverVe} ${fade} ${theme} ${vars} ${bodyText} pwhook-popover" role="tooltip"><div class="${popoverArrow} ${theme}"></div><h3 class="${popoverHeader} ${theme} ${h3}"></h3><div class="${popoverBody} ${theme}"></div></div>`,
})
}
data-bs-placement="left"
data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
>
Popover on start
</button>
</div>
)
}

export default StartPopover

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
