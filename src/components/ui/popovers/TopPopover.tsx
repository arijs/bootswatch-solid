import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const TopPopover: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-column align-items-center justify-content-end border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary"
			data-bs-container="body"
			data-bs-toggle="popover"
			ref={(popover) => new bootstrap.Popover(popover)}
			data-bs-placement="top"
			data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
		>
			Popover on top
		</button>
	</div>
)

export default TopPopover

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
