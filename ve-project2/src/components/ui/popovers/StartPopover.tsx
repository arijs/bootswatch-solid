import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { h3 } from '../../../theme-contract/contents/contract.css'
import { elButton } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	border,
	flexRow,
	justifyContentEnd,
	popover,
} from '../../../theme-contract/literal/contract.css'
import { bodyText, vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
	bsPopoverAuto,
	frame,
	frameRow,
	justifyEnd,
	popoverArrow,
	popoverBody,
	popoverFade,
	popoverHeader,
	popoverVe,
} from '../../../theme-contract/ui/popovers/contract.css'
import { alignItemsCenter, dFlex } from '../../../theme-contract/utilities/contract.css'
import { createVePopover } from './ve-popover'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/popovers',
	'ui/buttons',
	'contents/basic',
	'contents/heading',
	'utilities/used',
]

const StartPopover: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const VePopover = createVePopover({ popoverArrow, popoverHeader, popoverBody })

	return (
		<div
			class={`bd-example ${theme} ${containerFluid} ${frame} ${frameRow} ${justifyEnd} ${dFlex} ${flexRow} ${alignItemsCenter} ${justifyContentEnd} ${border}`}
		>
			<button
				type="button"
				class={`${theme} ${elButton} ${btn} ${btnSecondary} pwhook-popover-trigger`}
				data-bs-container="body"
				data-bs-toggle="popover"
				ref={(el) =>
					new VePopover(el, {
						template: `<div class="${popoverVe} ${popover} ${bsPopoverAuto} ${popoverFade} ${theme} ${vars} ${bodyText} pwhook-popover" role="tooltip"><div class="${popoverArrow} ${theme}"></div><h3 class="${popoverHeader} ${theme} ${h3}"></h3><div class="${popoverBody} ${theme}"></div></div>`,
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
