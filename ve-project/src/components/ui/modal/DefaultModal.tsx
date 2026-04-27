import type { Component } from 'solid-js'
import { useVeButtonThemeClasses, useVeModalThemeClasses } from '../../../themes/runtime/hooks'
import './ve-modal'

const DefaultModal: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnPrimary, btnSecondary } = useVeButtonThemeClasses()
	const { actionsRow, bodyText, btnClose, fade, flexWrap, h5, justifyContentBetween, modal, modalBody, modalContent, modalDialog, modalFade, modalFooter, modalHeader, modalTitle } = useVeModalThemeClasses()
	return (
	<>
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<div class={`${actionsRow} ${justifyContentBetween} ${flexWrap}`}>
				<button
					type="button"
					class={`${btn} ${btnPrimary} pwhook-modal-trigger`}
					data-bs-toggle="modal"
					data-bs-target="#exampleModalDefault"
				>
					Launch demo modal
				</button>
			</div>
		</div>
		<div
			class={`${bsTheme} ${bodyText} ${modal} ${modalFade} ${fade} pwhook-modal`}
			id="exampleModalDefault"
			tabindex="-1"
			role="dialog"
			aria-modal="true"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class={modalDialog}>
				<div class={modalContent}>
					<div class={modalHeader}>
						<h5 class={`${h5} ${modalTitle}`} id="exampleModalLabel">
							Modal title
						</h5>
						<button
							type="button"
							class={btnClose}
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class={modalBody}>...</div>
					<div class={modalFooter}>
						<button type="button" class={`${btn} ${btnSecondary}`} data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" class={`${btn} ${btnPrimary}`}>
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
