import type { Component } from 'solid-js'

const CenteredScrollableModal: Component = () => (
	<>
		<div class="bd-example container-fluid">
			<div class="d-flex justify-content-between flex-wrap">
				<button
					type="button"
					class="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModalCenteredScrollable"
				>
					Vertically centered scrollable modal
				</button>
			</div>
		</div>
		<div
			class="modal fade"
			id="exampleModalCenteredScrollable"
			tabindex="-1"
			role="dialog"
			aria-modal="true"
			aria-labelledby="exampleModalCenteredScrollableTitle"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalCenteredScrollableTitle">
							Modal title
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
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
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" class="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	</>
)

export default CenteredScrollableModal

// @screenshot *: 360x120 120
// @screenshot bootstrap/opened-modal: 360x687 687

