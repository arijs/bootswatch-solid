import type { Component } from 'solid-js'

const DefaultOffcanvas: Component = () => (
	<>
		<div class="bd-example container-fluid">
			<div class="d-flex justify-content-between flex-wrap">
				<button
					type="button"
					class="btn btn-primary pwhook-offcanvas-trigger"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasDefault"
				>
					Launch demo offcanvas
				</button>
			</div>
		</div>
		<div
			class="offcanvas offcanvas-start pwhook-offcanvas"
			id="offcanvasDefault"
			role="dialog"
			tabindex="-1"
			aria-labelledby="offcanvasDefaultLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasDefaultLabel">
					Offcanvas
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

export default DefaultOffcanvas

// @screenshot *: 360x120 120
// @screenshot */opened-offcanvas: 360x576 576
// @screenshot quartz: 360x158 158
