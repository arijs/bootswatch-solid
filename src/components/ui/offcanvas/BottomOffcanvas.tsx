import type { Component } from 'solid-js'

const BottomOffcanvas: Component = () => (
	<>
		<div class="bd-example container-fluid">
			<div class="d-flex justify-content-between flex-wrap">
				<button
					type="button"
					class="btn btn-primary pwhook-offcanvas-trigger"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasBottom"
				>
					Toggle bottom offcanvas
				</button>
			</div>
		</div>
		<div
			class="offcanvas offcanvas-bottom pwhook-offcanvas"
			id="offcanvasBottom"
			role="dialog"
			tabindex="-1"
			aria-labelledby="offcanvasBottomLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasBottomLabel">
					Offcanvas bottom
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

export default BottomOffcanvas

// @screenshot *: 360x120 120
// @screenshot */opened-offcanvas: 360x576 576
// @screenshot bootstrap: 360x310 215
// @screenshot brite: 360x213 213
// @screenshot cerulean: 360x215 215
// @screenshot cosmo: 360x215 215
// @screenshot cyborg: 360x218 218
// @screenshot darkly: 360x215 215
// @screenshot flatly: 360x215 215
// @screenshot journal: 360x215 215
// @screenshot litera: 360x217 217
// @screenshot lumen: 360x215 215
// @screenshot lux: 360x208 208
// @screenshot materia: 360x215 215
// @screenshot minty: 360x215 215
// @screenshot morph: 360x214 214
// @screenshot pulse: 360x215 215
// @screenshot quartz: 360x279 279
// @screenshot sandstone: 360x215 215
// @screenshot simplex: 360x215 215
// @screenshot sketchy: 360x216 216
// @screenshot slate: 360x215 215
// @screenshot solar: 360x215 215
// @screenshot spacelab: 360x215 215
// @screenshot superhero: 360x215 215
// @screenshot united: 360x215 215
// @screenshot vapor: 360x214 214
// @screenshot yeti: 360x215 215
// @screenshot zephyr: 360x215 215
