import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const StartTooltip: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-row align-items-center justify-content-end border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary"
			data-bs-toggle="tooltip"
			ref={(tooltip) => new bootstrap.Tooltip(tooltip)}
			data-bs-placement="left"
			title="Tooltip on start"
		>
			Tooltip on start
		</button>
	</div>
)

export default StartTooltip
