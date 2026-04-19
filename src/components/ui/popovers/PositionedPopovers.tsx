import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const PositionedPopovers: Component = () => (
	<div class="bd-example container-fluid">
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

export default PositionedPopovers
