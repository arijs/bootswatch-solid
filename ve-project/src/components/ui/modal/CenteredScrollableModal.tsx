import { createSignal, type Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
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
	modalBackdrop,
	modalBody,
	modalContent,
	modalDialog,
	modalDialogCentered,
	modalDialogScrollable,
	modalFade,
	modalFooter,
	modalHeader,
	modalShowHook,
	modalTitle,
} from '../../../themes/bootstrap/ui/modal/base.css'

const CenteredScrollableModal: Component = () => {
	const [isOpen, setIsOpen] = createSignal(false)

	return (
		<>
			<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
				<div class={`${actionsRow} ${justifyContentBetween} ${flexWrap}`}>
					<button
						type="button"
						class={`${btn} ${btnPrimary} pwhook-modal-trigger`}
						onClick={() => setIsOpen(true)}
					>
						Vertically centered scrollable modal
					</button>
				</div>
			</div>
			<div
				class={`${bsTheme} ${modal} ${modalFade} ${fade} pwhook-modal${isOpen() ? ` ${modalShowHook}` : ''}`}
				id="exampleModalCenteredScrollable"
				tabindex="-1"
				role="dialog"
				aria-modal="true"
				aria-labelledby="exampleModalCenteredScrollableTitle"
				aria-hidden={isOpen() ? 'false' : 'true'}
			>
				<div class={`${modalDialog} ${modalDialogCentered} ${modalDialogScrollable}`}>
					<div class={modalContent}>
						<div class={modalHeader}>
							<h5 class={`${h5} ${modalTitle}`} id="exampleModalCenteredScrollableTitle">
								Modal title
							</h5>
							<button
								type="button"
								class={btnClose}
								onClick={() => setIsOpen(false)}
								aria-label="Close"
							></button>
						</div>
						<div class={modalBody}>
							<p>
								Placeholder text for this demonstration of a vertically centered modal
								dialog.
							</p>
							<p>
								In this case, the dialog has a bit more content, just to show how
								vertical centering can be added to a scrollable modal.
							</p>
							<p>
								What follows is just some placeholder text for this modal dialog.
								Sipping on Rose, Silver Lake sun, coming up all lazy. It's in the palm
								of your hand now baby. So we hit the boulevard. So make a wish, I'll
								make it like your birthday everyday. Do you ever feel already buried
								deep six feet under? It's time to bring out the big balloons. You
								could've been the greatest. Passport stamps, she's cosmopolitan. Your
								kiss is cosmic, every move is magic.
							</p>
							<p>
								We're living the life. We're doing it right. Open up your heart. I was
								tryna hit it and quit it. Her love is like a drug. Always leaves a trail
								of stardust. The girl's a freak, she drive a jeep in Laguna Beach. Fine,
								fresh, fierce, we got it on lock. All my girls vintage Chanel baby.
							</p>
						</div>
						<div class={modalFooter}>
							<button
								type="button"
								class={`${btn} ${btnSecondary}`}
								onClick={() => setIsOpen(false)}
							>
								Close
							</button>
							<button type="button" class={`${btn} ${btnPrimary}`}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
			{isOpen() ? <div class={`${modalBackdrop} ${fade} ${modalShowHook}`}></div> : null}
		</>
	)
}

export default CenteredScrollableModal

// @screenshot *: 360x120 120
// @screenshot */opened-modal: 360x687 687
// @screenshot litera/opened-modal: 360x795 795
// @screenshot lux/opened-modal: 360x774 774
// @screenshot materia/opened-modal: 360x710 710
// @screenshot morph/opened-modal: 360x707 707
// @screenshot quartz/opened-modal: 360x783 780
// @screenshot simplex/opened-modal: 360x709 709
// @screenshot spacelab/opened-modal: 360x709 709
// @screenshot united/opened-modal: 360x709 709
// @screenshot yeti/opened-modal: 360x709 709
// @screenshot zephyr/opened-modal: 360x733 733
// @screenshot bootstrap/opened-modal: 360x688 688
