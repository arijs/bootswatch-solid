import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body, bodyText } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { h5 } from '../../../themes/bootstrap/contents/generated.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import {
	btnPrimary,
	btnSecondary,
} from '../../../themes/bootstrap/ui/buttons/generated.css'
import { btnClose } from '../../../themes/bootstrap/ui/alerts/base.css'
import {
	actionsRow,
	fade,
	flexWrap,
	justifyContentBetween,
	modal,
	modalBody,
	modalContent,
	modalDialog,
	modalFade,
	modalFooter,
	modalHeader,
	modalTitle,
} from '../../../themes/bootstrap/ui/modal/base.css'
import './ve-modal'

const DefaultModal: Component = () => (
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

export default DefaultModal

// @screenshot *: 360x120 120
// @screenshot */opened-modal: 360x576 576
