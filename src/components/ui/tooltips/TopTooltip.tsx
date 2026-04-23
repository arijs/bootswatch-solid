import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const TopTooltip: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-column align-items-center justify-content-end border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary pwhook-tooltip-trigger"
			data-bs-toggle="tooltip"
			data-bs-custom-class="pwhook-tooltip"
			ref={(tooltip) => new bootstrap.Tooltip(tooltip)}
			data-bs-placement="top"
			title="Tooltip on top"
		>
			Tooltip on top
		</button>
	</div>
)

export default TopTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
