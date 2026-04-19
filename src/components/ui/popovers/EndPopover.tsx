import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const EndPopover: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-row align-items-center justify-content-start border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary"
			data-bs-container="body"
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
