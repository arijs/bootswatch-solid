import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const EndPopover: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-row align-items-center justify-content-start border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary pwhook-popover-trigger"
			data-bs-container="body"
			data-bs-custom-class="pwhook-popover"
			data-bs-toggle="popover"
			ref={(popover) => new bootstrap.Popover(popover)}
			data-bs-placement="right"
			data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
		>
			Popover on end
		</button>
	</div>
)

export default EndPopover

// @screenshot *: 360x120 120

// @screenshot bootstrap: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot cerulean: 360x256 256
// @screenshot cosmo: 360x256 256
// @screenshot cyborg: 360x256 256
// @screenshot darkly: 360x256 256
// @screenshot flatly: 360x256 256
// @screenshot journal: 360x256 256
// @screenshot litera: 360x282 282
// @screenshot lumen: 360x256 256
// @screenshot lux: 360x256 256
// @screenshot materia: 360x256 256
// @screenshot minty: 360x256 256
// @screenshot morph: 360x256 256
// @screenshot pulse: 360x256 256
// @screenshot quartz: 360x256 256
// @screenshot sandstone: 360x256 256
// @screenshot simplex: 360x256 256
// @screenshot sketchy: 360x256 256
// @screenshot slate: 360x256 256
// @screenshot solar: 360x256 256
// @screenshot spacelab: 360x256 256
// @screenshot superhero: 360x256 256
// @screenshot united: 360x256 256
// @screenshot vapor: 360x256 256
// @screenshot yeti: 360x256 256
// @screenshot zephyr: 360x256 256
