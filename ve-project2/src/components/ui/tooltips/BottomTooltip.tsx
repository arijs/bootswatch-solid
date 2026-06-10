import {
	elButton,
} from '../../../theme-contract/global-elements/contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	border,
	bsTooltipAuto,
	fade,
	flexColumn,
	justifyContentStart,
	tooltip,
} from '../../../theme-contract/literal/contract.css'
import { alignItemsCenter, dFlex } from '../../../theme-contract/utilities/contract.css'
import { bodyText, vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
	frame,
	frameColumn,
	justifyStart,
	tooltipArrow,
	tooltipInner,
	tooltipVe,
} from '../../../theme-contract/ui/tooltips/contract.css'
import { createVeTooltip } from './ve-tooltip'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/tooltips',
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const BottomTooltip: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const VeTooltip = createVeTooltip({ tooltipArrow, tooltipInner })

	return (
		<div
			class={`bd-example ${theme} ${containerFluid} ${frame} ${frameColumn} ${justifyStart} ${dFlex} ${flexColumn} ${alignItemsCenter} ${justifyContentStart} ${border}`}
		>
			<button
				type="button"
				class={`${theme} ${elButton} ${btn} ${btnSecondary} pwhook-tooltip-trigger`}
				data-bs-toggle="tooltip"
				data-bs-custom-class="pwhook-tooltip"
				ref={(el) =>
					new VeTooltip(el, {
						template: `<div class="${tooltipVe} ${tooltip} ${bsTooltipAuto} ${fade} ${theme} ${vars} ${bodyText} pwhook-tooltip" role="tooltip"><div class="${tooltipArrow} ${theme}"></div><div class="${tooltipInner} ${theme}"></div></div>`,
					})
				}
				data-bs-placement="bottom"
				title="Tooltip on bottom"
			>
				Tooltip on bottom
			</button>
		</div>
	)
}

export default BottomTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
