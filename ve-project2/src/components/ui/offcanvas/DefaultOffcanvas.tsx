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
import { btnClose } from '../../../theme-contract/literal/contract.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { alertBtnClose } from '../../../theme-contract/ui/alerts/contract.css'
import { btn, btnPrimary, inputFontFamily } from '../../../theme-contract/ui/buttons/contract.css'
import {
	offcanvas,
	offcanvasBackdrop,
	offcanvasBody,
	offcanvasHeader,
	offcanvasStart,
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
	'utilities',
]

const DefaultOffcanvas: Component = () => {
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
						class={`${theme} ${elButton} ${btn} ${btnPrimary} pwhook-offcanvas-trigger`}
						data-bs-toggle={offcanvasName}
						data-bs-target="#offcanvasDefault"
					>
						Launch demo offcanvas
					</button>
				</div>
			</div>
			<div
				class={`${theme} ${bodyText} ${offcanvas} ${offcanvasStart} pwhook-offcanvas`}
				id="offcanvasDefault"
				role="dialog"
				tabindex="-1"
				aria-labelledby="offcanvasDefaultLabel"
			>
				<div class={`${theme} ${offcanvasHeader}`}>
					<h5 class={`${theme} ${h5} ${offcanvasTitle}`} id="offcanvasDefaultLabel">
						Offcanvas
					</h5>
					<button
						type="button"
						class={`${theme} ${elButton} ${alertBtnClose} ${btnClose} ${inputFontFamily}`}
						data-bs-dismiss={`.${offcanvasName}`}
						aria-label="Close"
					></button>
				</div>
				<div class={`${theme} ${offcanvasBody}`}>
					Content for the offcanvas goes here. You can place just about any Bootstrap
					component or custom elements here.
				</div>
			</div>
		</>
	)
}

export default DefaultOffcanvas

// @screenshot *: 360x120 120
// @screenshot */opened-offcanvas: 360x576 576
