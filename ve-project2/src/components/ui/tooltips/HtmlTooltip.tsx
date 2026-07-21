import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { elB, elButton, elEm } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	border,
	bsTooltipAuto,
	flexColumn,
	justifyContentCenter,
	tooltip,
} from '../../../theme-contract/literal/contract.css'
import { bodyText, vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
	frame,
	frameColumn,
	justifyCenter,
	tooltipArrow,
	tooltipFade,
	tooltipInner,
	tooltipVe,
} from '../../../theme-contract/ui/tooltips/contract.css'
import { alignItemsCenter, dFlex } from '../../../theme-contract/utilities/contract.css'
import { createVeTooltip } from './ve-tooltip'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/tooltips',
	'ui/buttons',
	'contents/basic',
	'utilities/used',
]

const HtmlTooltip: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const VeTooltip = createVeTooltip({ tooltipArrow, tooltipInner })

	return (
		<div
			class={`bd-example ${theme} ${containerFluid} ${frame} ${frameColumn} ${justifyCenter} ${dFlex} ${flexColumn} ${alignItemsCenter} ${justifyContentCenter} ${border}`}
		>
			<button
				type="button"
				class={`${theme} ${elButton} ${btn} ${btnSecondary} pwhook-tooltip-trigger`}
				data-bs-toggle="tooltip"
				data-bs-custom-class="pwhook-tooltip"
				ref={(el) =>
					new VeTooltip(el, {
						template: `<div class="${tooltipVe} ${tooltip} ${bsTooltipAuto} ${tooltipFade} ${theme} ${vars} ${bodyText} pwhook-tooltip" role="tooltip"><div class="${tooltipArrow} ${theme}"></div><div class="${tooltipInner} ${theme}"></div></div>`,
						html: true,
						// Stamp scope + element contracts so the injected <b>/<em> pick up sketchy's
						// `b,strong{font-family:Cabin Sketch; font-weight:bolder}` element rules.
						// Title is passed in config (not the `title` attribute) because SolidJS sets a
						// dynamic `title={…}` in an effect AFTER this ref, so the tooltip would be
						// constructed with an empty title and never show.
						title: `<em class="${theme} ${elEm}">Tooltip</em> <u>with</u> <b class="${theme} ${elB}">HTML</b>`,
					})
				}
			>
				Tooltip with HTML
			</button>
		</div>
	)
}

export default HtmlTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
