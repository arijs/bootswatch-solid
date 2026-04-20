import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const StartPopover: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-row align-items-center justify-content-end border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary"
			data-bs-container="body"
			data-bs-toggle="popover"
			ref={(popover) => new bootstrap.Popover(popover)}
			data-bs-placement="left"
			data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
		>
			Popover on start
		</button>
	</div>
)

export default StartPopover

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
