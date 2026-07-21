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
import { popover } from '../../../theme-contract/literal/contract.css'
import { bodyText, vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnDanger, btnLg } from '../../../theme-contract/ui/buttons/contract.css'
import {
	bsPopoverAuto,
	popoverArrow,
	popoverBody,
	popoverFade,
	popoverHeader,
	popoverVe,
} from '../../../theme-contract/ui/popovers/contract.css'
import { createVePopover } from './ve-popover'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/popovers',
	'ui/buttons',
	'contents/basic',
	'contents/heading',
	'utilities/used',
]

const BasicPopover: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const VePopover = createVePopover({ popoverArrow, popoverHeader, popoverBody })

	return (
		<div class={`bd-example ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${elButton} ${btn} ${btnLg} ${btnDanger} pwhook-popover-trigger`}
				ref={(el) =>
					new VePopover(el, {
						template: `<div class="${popoverVe} ${popover} ${bsPopoverAuto} ${popoverFade} ${theme} ${vars} ${bodyText} pwhook-popover" role="tooltip"><div class="${popoverArrow} ${theme}"></div><h3 class="${popoverHeader} ${theme} ${h3}"></h3><div class="${popoverBody} ${theme}"></div></div>`,
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
