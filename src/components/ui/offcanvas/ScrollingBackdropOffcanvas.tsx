import type { Component } from 'solid-js'

const ScrollingBackdropOffcanvas: Component = () => (
	<>
		<div class="bd-example container-fluid">
			<div class="d-flex justify-content-between flex-wrap">
				<button
					type="button"
					class="btn btn-primary pwhook-offcanvas-trigger"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasWithBothOptions"
				>
					Enable both scrolling & backdrop
				</button>
			</div>
		</div>
		<div
			class="offcanvas offcanvas-start pwhook-offcanvas"
			id="offcanvasWithBothOptions"
			role="dialog"
			data-bs-scroll="true"
			tabindex="-1"
			aria-labelledby="offcanvasWithBothOptionsLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
					Backdrop with scrolling
				</h5>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">
				Try scrolling the rest of the page to see this option in action.
			</div>
		</div>
	</>
)

export default ScrollingBackdropOffcanvas

// @screenshot *: 360x120 120
// @screenshot */opened-offcanvas: 360x576 576
// @screenshot quartz: 360x158 158
