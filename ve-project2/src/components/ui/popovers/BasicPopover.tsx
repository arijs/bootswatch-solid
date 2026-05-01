import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText, vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnDanger, btnLg } from '../../../theme-contract/ui/buttons/contract.css'
import {
popoverArrow,
popoverBody,
popoverHeader,
popoverVe,
} from '../../../theme-contract/ui/popovers/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'
import { h3 } from '../../../theme-contract/contents/contract.css'

const BasicPopover: Component = () => {
const theme = useContext(ThemeContext)
const VePopover = (
bootstrap.Popover as unknown as BootstrapWithDefaults<typeof bootstrap.Popover>
).extendDefaultConfig({
SELECTOR_ARROW: `.${popoverArrow}`,
SELECTOR_TITLE: `.${popoverHeader}`,
SELECTOR_CONTENT: `.${popoverBody}`,
}) as typeof bootstrap.Popover

return (
<div class={`bd-example ${theme} ${containerFluid}`}>
<button
type="button"
class={`${theme} ${btn} ${btnLg} ${btnDanger} pwhook-popover-trigger`}
ref={(popover) =>
new VePopover(popover, {
template: `<div class="${popoverVe} ${theme} ${vars} ${bodyText} pwhook-popover" role="tooltip"><div class="${popoverArrow} ${theme}"></div><h3 class="${popoverHeader} ${theme} ${h3}"></h3><div class="${popoverBody} ${theme}"></div></div>`,
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
