import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const EndTooltip: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-row align-items-center justify-content-start border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary"
			data-bs-toggle="tooltip"
			ref={(tooltip) => new bootstrap.Tooltip(tooltip)}
			data-bs-placement="right"
			title="Tooltip on end"
		>
			Tooltip on end
		</button>
	</div>
)

export default EndTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
