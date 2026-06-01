import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { paragraph } from '../../../theme-contract/contents/basic/contract.css'
import { h5 } from '../../../theme-contract/contents/heading/contract.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { alertBtnClose } from '../../../theme-contract/ui/alerts/contract.css'
import { btn, btnPrimary, btnSecondary, inputFontFamily } from '../../../theme-contract/ui/buttons/contract.css'
import {
	actionsRow,
	fade,
	flexWrap,
	justifyContentBetween,
	modal,
	modalBackdrop,
	modalBody,
	modalContent,
	modalDialog,
	modalFade,
	modalFooter,
	modalHeader,
	modalOpenHook,
	modalShowHook,
	modalTitle,
} from '../../../theme-contract/ui/modal/contract.css'
import { dFlex } from '../../../theme-contract/utilities/contract.css'
import { configureVeModal } from './ve-modal'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/modal',
	'ui/buttons',
	'ui/alerts',
	'contents/basic',
	'contents/heading',
	'utilities',
]

const StaticBackdropModal: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const modalName = modal
	configureVeModal({ name: modalName, fade, modalBackdrop: `${theme} ${modalBackdrop}`, modalBody, modalDialog, modalOpenHook, modalShowHook })
	return (
		<>
			<div class={`bd-example ${theme} ${containerFluid}`}>
				<div class={`${theme} ${dFlex} ${actionsRow} ${justifyContentBetween} ${flexWrap}`}>
					<button
						type="button"
						class={`${theme} ${btn} ${btnPrimary} pwhook-modal-trigger`}
						data-bs-toggle={modalName}
						data-bs-target={`#staticBackdropLive`}
					>
						Launch static backdrop modal
					</button>
				</div>
			</div>
			<div
				class={`${theme} ${bodyText} ${modal} ${modalFade} ${fade} pwhook-modal`}
				id="staticBackdropLive"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				role="dialog"
				aria-modal="true"
				aria-labelledby="staticBackdropLiveLabel"
				aria-hidden="true"
			>
				<div class={`${theme} ${modalDialog}`}>
					<div class={`${theme} ${modalContent}`}>
						<div class={`${theme} ${modalHeader}`}>
							<h5 class={`${theme} ${h5} ${modalTitle}`} id="staticBackdropLiveLabel">
								Modal title
							</h5>
							<button
								type="button"
								class={`${theme} ${alertBtnClose} ${inputFontFamily}`}
								data-bs-dismiss={`.${modalName}`}
								aria-label="Close"
							></button>
						</div>
						<div class={`${theme} ${modalBody}`}>
							<p class={`${theme} ${paragraph}`}>
								I will not close if you click outside me. Don't even try to press
								escape key.
							</p>
						</div>
						<div class={`${theme} ${modalFooter}`}>
							<button
								type="button"
								class={`${theme} ${btn} ${btnSecondary}`}
								data-bs-dismiss={`.${modalName}`}
							>
								Close
							</button>
							<button type="button" class={`${theme} ${btn} ${btnPrimary}`}>
								Understood
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default StaticBackdropModal

// @screenshot *: 360x120 120
// @screenshot */opened-modal: 360x576 576
