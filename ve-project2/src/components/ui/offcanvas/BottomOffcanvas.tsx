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
	offcanvasBottom,
	offcanvasHeader,
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

const BottomOffcanvas: Component = () => {
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
						data-bs-target="#offcanvasBottom"
					>
						Toggle bottom offcanvas
					</button>
				</div>
			</div>
			<div
				class={`${theme} ${bodyText} ${offcanvas} ${offcanvasBottom} pwhook-offcanvas`}
				id="offcanvasBottom"
				role="dialog"
				tabindex="-1"
				aria-labelledby="offcanvasBottomLabel"
			>
				<div class={`${theme} ${offcanvasHeader}`}>
					<h5 class={`${theme} ${h5} ${offcanvasTitle}`} id="offcanvasBottomLabel">
						Offcanvas bottom
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

export default BottomOffcanvas

// @screenshot *: 360x120 120
// @screenshot */opened-offcanvas: 360x576 576
// @screenshot bootstrap: 360x310 215
// @screenshot brite: 360x213 213
// @screenshot cerulean: 360x215 215
// @screenshot cosmo: 360x215 215
// @screenshot cyborg: 360x218 218
// @screenshot darkly: 360x215 215
// @screenshot flatly: 360x215 215
// @screenshot journal: 360x215 215
// @screenshot litera: 360x217 217
// @screenshot lumen: 360x215 215
// @screenshot lux: 360x208 208
// @screenshot materia: 360x215 215
// @screenshot minty: 360x215 215
// @screenshot morph: 360x214 214
// @screenshot pulse: 360x215 215
// @screenshot quartz: 360x279 279
// @screenshot sandstone: 360x215 215
// @screenshot simplex: 360x215 215
// @screenshot sketchy: 360x216 216
// @screenshot slate: 360x215 215
// @screenshot solar: 360x215 215
// @screenshot spacelab: 360x215 215
// @screenshot superhero: 360x215 215
// @screenshot united: 360x215 215
// @screenshot vapor: 360x214 214
// @screenshot yeti: 360x215 215
// @screenshot zephyr: 360x215 215
