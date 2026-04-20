import type { Component } from 'solid-js'

const StaticBackdropModal: Component = () => (
	<>
		<div class="bd-example container-fluid">
			<div class="d-flex justify-content-between flex-wrap">
				<button
					type="button"
					class="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#staticBackdropLive"
				>
					Launch static backdrop modal
				</button>
			</div>
		</div>
		<div
			class="modal fade"
			id="staticBackdropLive"
			data-bs-backdrop="static"
			data-bs-keyboard="false"
			tabindex="-1"
			role="dialog"
			aria-modal="true"
			aria-labelledby="staticBackdropLiveLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="staticBackdropLiveLabel">
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
							I will not close if you click outside me. Don't even try to press escape
							key.
						</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" class="btn btn-primary">
							Understood
						</button>
					</div>
				</div>
			</div>
		</div>
	</>
)

export default StaticBackdropModal

// @screenshot *: 360x120 120
// @screenshot bootstrap/opened-modal: 360x576 576

