import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
frame,
frameRow,
justifyStart,
popoverArrow,
popoverBody,
popoverHeader,
popoverVe,
} from '../../../theme-contract/ui/popovers/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

const EndPopover: Component = () => {
const theme = useContext(ThemeContext)
const VePopover = (
bootstrap.Popover as unknown as BootstrapWithDefaults<typeof bootstrap.Popover>
).extendDefaultConfig({
SELECTOR_ARROW: `.${popoverArrow}`,
SELECTOR_TITLE: `.${popoverHeader}`,
SELECTOR_CONTENT: `.${popoverBody}`,
}) as typeof bootstrap.Popover

return (
<div class={`bd-example ${theme} ${containerFluid} ${frame} ${frameRow} ${justifyStart}`}>
<button
type="button"
class={`${theme} ${btn} ${btnSecondary} pwhook-popover-trigger`}
data-bs-container="body"
data-bs-toggle="popover"
ref={(popover) =>
new VePopover(popover, {
template: `<div class="${popoverVe} ${theme} ${vars} pwhook-popover" role="tooltip"><div class="${popoverArrow} ${theme}"></div><h3 class="${popoverHeader} ${theme}"></h3><div class="${popoverBody} ${theme}"></div></div>`,
})
}
data-bs-placement="right"
data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
>
Popover on end
</button>
</div>
)
}

export default EndPopover

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
