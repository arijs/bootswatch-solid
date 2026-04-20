import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const BottomPopover: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-column align-items-center justify-content-start border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary"
			data-bs-container="body"
			data-bs-toggle="popover"
			ref={(popover) => new bootstrap.Popover(popover)}
			data-bs-placement="bottom"
			data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
		>
			Popover on bottom
		</button>
	</div>
)

export default BottomPopover

// @screenshot *: 360x256 256

