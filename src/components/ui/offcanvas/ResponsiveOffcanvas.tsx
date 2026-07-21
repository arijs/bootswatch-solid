import type { Component } from 'solid-js'

const ResponsiveOffcanvas: Component = () => (
	<>
		<div class="bd-example container-fluid">
			<div class="d-flex justify-content-between flex-wrap">
				<button
					type="button"
					class="btn btn-primary d-lg-none pwhook-offcanvas-trigger"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasResponsive"
				>
					Toggle offcanvas
				</button>
			</div>
		</div>
		<div
			class="offcanvas-lg offcanvas-end pwhook-offcanvas"
			id="offcanvasResponsive"
			role="dialog"
			tabindex="-1"
			aria-labelledby="offcanvasResponsiveLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasResponsiveLabel">
					Responsive offcanvas
				</h5>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="offcanvas"
					data-bs-target="#offcanvasResponsive"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">This is content within an offcanvas-lg.</div>
		</div>
	</>
)

export default ResponsiveOffcanvas

// @screenshot *: 360x120 120
// @screenshot */opened-offcanvas: 360x576 576
// @screenshot quartz: 360x158 158
