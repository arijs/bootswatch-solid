import type { Component } from 'solid-js'

const StaticBackdropOffcanvas: Component = () => (
	<>
		<div class="bd-example container-fluid">
			<div class="d-flex justify-content-between flex-wrap">
				<button
					type="button"
					class="btn btn-primary pwhook-offcanvas-trigger"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasStatic"
				>
					Toggle static offcanvas
				</button>
			</div>
		</div>
		<div
			class="offcanvas offcanvas-start pwhook-offcanvas"
			id="offcanvasStatic"
			role="dialog"
			data-bs-backdrop="static"
			data-bs-keyboard="false"
			tabindex="-1"
			aria-labelledby="offcanvasStaticLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasStaticLabel">
					Offcanvas
				</h5>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">I will not close if you click outside of me.</div>
		</div>
	</>
)

export default StaticBackdropOffcanvas

// @screenshot *: 360x120 120
// @screenshot */opened-offcanvas: 360x576 576
// @screenshot quartz: 360x158 158
