import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText, vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnDanger, btnLg } from '../../../theme-contract/ui/buttons/contract.css'
import { fade } from '../../../theme-contract/ui/modal/contract.css'
import {
popoverArrow,
popoverBody,
popoverHeader,
popoverShow,
popoverVe,
} from '../../../theme-contract/ui/popovers/contract.css'
import { createVePopover } from './ve-popover'
import { h3 } from '../../../theme-contract/contents/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/popovers',
	'ui/buttons',
	'contents/basic',
	'contents/heading',
	'utilities',
]

const BasicPopover: Component = () => {
const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
const VePopover = createVePopover({ popoverArrow, popoverHeader, popoverBody, popoverShow })

return (
<div class={`bd-example ${theme} ${containerFluid}`}>
<button
type="button"
class={`${theme} ${btn} ${btnLg} ${btnDanger} pwhook-popover-trigger`}
ref={(popover) =>
new VePopover(popover, {
template: `<div class="${popoverVe} ${fade} ${theme} ${vars} ${bodyText} pwhook-popover" role="tooltip"><div class="${popoverArrow} ${theme}"></div><h3 class="${popoverHeader} ${theme} ${h3}"></h3><div class="${popoverBody} ${theme}"></div></div>`,
})
}
title="Popover title"
data-bs-content="And here's some amazing content. It's very engaging. Right?"
>
Click to toggle popover
</button>
</div>
)
}

export default BasicPopover

// @screenshot *: 360x120 120
