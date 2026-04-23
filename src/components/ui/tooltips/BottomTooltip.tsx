import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const BottomTooltip: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-column align-items-center justify-content-start border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary pwhook-tooltip-trigger"
			data-bs-toggle="tooltip"
			data-bs-custom-class="pwhook-tooltip"
			ref={(tooltip) => new bootstrap.Tooltip(tooltip)}
			data-bs-placement="bottom"
			title="Tooltip on bottom"
		>
			Tooltip on bottom
		</button>
	</div>
)

export default BottomTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
