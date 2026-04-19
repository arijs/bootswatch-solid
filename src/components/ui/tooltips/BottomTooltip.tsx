import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const BottomTooltip: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-column align-items-center justify-content-start border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary"
			data-bs-toggle="tooltip"
			ref={(tooltip) => new bootstrap.Tooltip(tooltip)}
			data-bs-placement="bottom"
			title="Tooltip on bottom"
		>
			Tooltip on bottom
		</button>
	</div>
)

export default BottomTooltip
