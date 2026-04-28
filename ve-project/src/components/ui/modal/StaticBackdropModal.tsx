import type { Component } from 'solid-js'
import { useVeButtonThemeClasses, useVeModalThemeClasses } from '../../../themes/runtime/hooks'
import { configureVeModal } from './ve-modal'

const StaticBackdropModal: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnPrimary, btnSecondary } = useVeButtonThemeClasses()
	const modalThemeClasses = useVeModalThemeClasses()
	configureVeModal(modalThemeClasses)
	const { actionsRow, bodyText, btnClose, fade, flexWrap, h5, justifyContentBetween, modal, modalBody, modalContent, modalDialog, modalFade, modalFooter, modalHeader, modalTitle } = modalThemeClasses
	return (
		<>
			<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
				<div class={`${actionsRow} ${justifyContentBetween} ${flexWrap}`}>
					<button
						type="button"
						class={`${btn} ${btnPrimary} pwhook-modal-trigger`}
						data-bs-toggle="modal"
						data-bs-target="#staticBackdropLive"
					>
						Launch static backdrop modal
					</button>
				</div>
			</div>
			<div
				class={`${bsTheme} ${bodyText} ${modal} ${modalFade} ${fade} pwhook-modal`}
				id="staticBackdropLive"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				role="dialog"
				aria-modal="true"
				aria-labelledby="staticBackdropLiveLabel"
				aria-hidden="true"
			>
				<div class={modalDialog}>
					<div class={modalContent}>
						<div class={modalHeader}>
							<h5 class={`${h5} ${modalTitle}`} id="staticBackdropLiveLabel">
								Modal title
							</h5>
							<button
								type="button"
								class={btnClose}
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class={modalBody}>
							<p>
								I will not close if you click outside me. Don't even try to press escape
								key.
							</p>
						</div>
						<div class={modalFooter}>
							<button type="button" class={`${btn} ${btnSecondary}`} data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" class={`${btn} ${btnPrimary}`}>
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
