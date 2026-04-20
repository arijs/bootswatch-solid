import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const ToastExample: Component = () => (
	<div class="bd-example bg-dark p-5 align-items-center">
		<div
			class="toast"
			ref={(toastNode) => {
				const toast = new bootstrap.Toast(toastNode, {
					autohide: false,
				})

				toast.show()
			}}
			aria-live="assertive"
			aria-atomic="true"
		>
			<div class="toast-header">
				<svg
					class="bd-placeholder-img rounded me-2"
					width="20"
					height="20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					preserveAspectRatio="xMidYMid slice"
					tabindex="0"
				>
					<rect width="100%" height="100%" fill="#007aff" />
				</svg>

				<strong class="me-auto">Bootstrap</strong>
				<small class="text-muted">11 mins ago</small>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="toast"
					aria-label="Close"
				></button>
			</div>
			<div class="toast-body">Hello, world! This is a toast message.</div>
		</div>
	</div>
)

export default ToastExample

// @screenshot bootstrap: 360x181 257

