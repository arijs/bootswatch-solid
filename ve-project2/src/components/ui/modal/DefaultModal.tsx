import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { h5 } from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { alertBtnClose } from '../../../theme-contract/ui/alerts/contract.css'
import { btn, btnPrimary, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
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
import { configureVeModal } from './ve-modal'

const DefaultModal: Component = () => {
	const theme = useContext(ThemeContext)
	configureVeModal({ fade, modalBackdrop: `${theme} ${modalBackdrop}`, modalBody, modalDialog, modalOpenHook, modalShowHook })
	return (
		<>
			<div class={`bd-example ${theme} ${containerFluid}`}>
				<div class={`${theme} ${actionsRow} ${justifyContentBetween} ${flexWrap}`}>
					<button
						type="button"
						class={`${theme} ${btn} ${btnPrimary} pwhook-modal-trigger`}
						data-bs-toggle="modal"
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
								class={`${theme} ${alertBtnClose}`}
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class={`${theme} ${modalBody}`}>...</div>
						<div class={`${theme} ${modalFooter}`}>
							<button
								type="button"
								class={`${theme} ${btn} ${btnSecondary}`}
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" class={`${theme} ${btn} ${btnPrimary}`}>
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
