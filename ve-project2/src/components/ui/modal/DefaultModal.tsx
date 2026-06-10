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
import { h5 } from '../../../theme-contract/contents/heading/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { btnClose, fade } from '../../../theme-contract/literal/contract.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { alertBtnClose } from '../../../theme-contract/ui/alerts/contract.css'
import {
	btn,
	btnPrimary,
	btnSecondary,
	inputFontFamily,
} from '../../../theme-contract/ui/buttons/contract.css'
import {
	actionsRow,
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

const DefaultModal: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const modalName = modal
	configureVeModal({
		name: modalName,
		modalBackdrop: `${theme} ${modalBackdrop}`,
		modalBody,
		modalDialog,
		modalOpenHook,
		modalShowHook,
	})
	return (
		<>
			<div class={`bd-example ${theme} ${containerFluid}`}>
				<div class={`${theme} ${dFlex} ${actionsRow} ${justifyContentBetween} ${flexWrap}`}>
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnPrimary} pwhook-modal-trigger`}
						data-bs-toggle={modalName}
						data-bs-target="#exampleModalDefault"
					>
						Launch demo modal
					</button>
				</div>
			</div>
			<div
				class={`${theme} ${bodyText} ${modal} ${modalFade} ${fade} pwhook-modal`}
				id="exampleModalDefault"
				tabindex="-1"
				role="dialog"
				aria-modal="true"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class={`${theme} ${modalDialog}`}>
					<div class={`${theme} ${modalContent}`}>
						<div class={`${theme} ${modalHeader}`}>
							<h5 class={`${theme} ${h5} ${modalTitle}`} id="exampleModalLabel">
								Modal title
							</h5>
							<button
								type="button"
								class={`${theme} ${elButton} ${alertBtnClose} ${btnClose} ${inputFontFamily}`}
								data-bs-dismiss={`.${modalName}`}
								aria-label="Close"
							></button>
						</div>
						<div class={`${theme} ${modalBody}`}>...</div>
						<div class={`${theme} ${modalFooter}`}>
							<button
								type="button"
								class={`${theme} ${elButton} ${btn} ${btnSecondary}`}
								data-bs-dismiss={`.${modalName}`}
							>
								Close
							</button>
							<button type="button" class={`${theme} ${elButton} ${btn} ${btnPrimary}`}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DefaultModal

// @screenshot *: 360x120 120
// @screenshot */opened-modal: 360x576 576
