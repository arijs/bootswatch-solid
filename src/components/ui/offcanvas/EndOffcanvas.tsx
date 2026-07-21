import type { Component } from 'solid-js'

const EndOffcanvas: Component = () => (
	<>
		<div class="bd-example container-fluid">
			<div class="d-flex justify-content-between flex-wrap">
				<button
					type="button"
					class="btn btn-primary pwhook-offcanvas-trigger"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasEnd"
				>
					Toggle right offcanvas
				</button>
			</div>
		</div>
		<div
			class="offcanvas offcanvas-end pwhook-offcanvas"
			id="offcanvasEnd"
			role="dialog"
			tabindex="-1"
			aria-labelledby="offcanvasEndLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasEndLabel">
					Offcanvas right
				</h5>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">
				Content for the offcanvas goes here. You can place just about any Bootstrap
				component or custom elements here.
			</div>
		</div>
	</>
)

export default EndOffcanvas

// @screenshot *: 360x120 120
// @screenshot */opened-offcanvas: 360x576 576
// @screenshot quartz: 360x158 158
