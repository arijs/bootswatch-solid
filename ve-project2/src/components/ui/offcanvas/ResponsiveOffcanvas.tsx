import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { h5 } from '../../../theme-contract/contents/heading/contract.css'
import { elButton } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { btnClose, dLgNone } from '../../../theme-contract/literal/contract.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { alertBtnClose } from '../../../theme-contract/ui/alerts/contract.css'
import { btn, btnPrimary, inputFontFamily } from '../../../theme-contract/ui/buttons/contract.css'
import {
	offcanvas,
	offcanvasBackdrop,
	offcanvasBody,
	offcanvasEnd,
	offcanvasHeader,
	offcanvasLg,
	offcanvasTitle,
} from '../../../theme-contract/ui/offcanvas/contract.css'
import { dFlex } from '../../../theme-contract/utilities/contract.css'
import { configureVeOffcanvas } from './ve-offcanvas'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/offcanvas',
	'ui/buttons',
	'ui/alerts',
	'contents/basic',
	'contents/heading',
	'utilities/used',
]

const ResponsiveOffcanvas: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const offcanvasName = offcanvas
	configureVeOffcanvas({
		name: offcanvasName,
		offcanvasBackdrop: `${theme} ${offcanvasBackdrop}`,
	})
	return (
		<>
			<div class={`bd-example ${theme} ${containerFluid}`}>
				<div class={`${theme} ${dFlex}`}>
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnPrimary} ${dLgNone} pwhook-offcanvas-trigger`}
						data-bs-toggle={offcanvasName}
						data-bs-target="#offcanvasResponsive"
					>
						Toggle offcanvas
					</button>
				</div>
			</div>
			<div
				class={`${theme} ${bodyText} ${offcanvasLg} ${offcanvasEnd} pwhook-offcanvas`}
				id="offcanvasResponsive"
				role="dialog"
				tabindex="-1"
				aria-labelledby="offcanvasResponsiveLabel"
			>
				<div class={`${theme} ${offcanvasHeader}`}>
					<h5 class={`${theme} ${h5} ${offcanvasTitle}`} id="offcanvasResponsiveLabel">
						Responsive offcanvas
					</h5>
					<button
						type="button"
						class={`${theme} ${elButton} ${alertBtnClose} ${btnClose} ${inputFontFamily}`}
						data-bs-dismiss={`.${offcanvasName}`}
						data-bs-target="#offcanvasResponsive"
						aria-label="Close"
					></button>
				</div>
				<div class={`${theme} ${offcanvasBody}`}>
					This is content within an offcanvas-lg.
				</div>
			</div>
		</>
	)
}

export default ResponsiveOffcanvas

// @screenshot *: 360x120 120
// @screenshot */opened-offcanvas: 360x576 576
