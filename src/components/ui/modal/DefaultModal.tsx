import type { Component } from 'solid-js'

const DefaultModal: Component = () => (
	<>
		<div class="bd-example container-fluid">
			<div class="d-flex justify-content-between flex-wrap">
				<button
					type="button"
					class="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModalDefault"
				>
					Launch demo modal
				</button>
			</div>
		</div>
		<div
			class="modal fade"
			id="exampleModalDefault"
			tabindex="-1"
			role="dialog"
			aria-modal="true"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							Modal title
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">...</div>
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

export default DefaultModal

// @screenshot bootstrap: 360x120 120
// @screenshot bootstrap/opened-modal: 360x576 576
