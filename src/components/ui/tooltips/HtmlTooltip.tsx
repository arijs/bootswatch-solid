import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const HtmlTooltip: Component = () => (
	<div
		class="bd-example container-fluid d-flex flex-column align-items-center justify-content-center border"
		style={{ height: '16em' }}
	>
		<button
			type="button"
			class="btn btn-secondary"
			data-bs-toggle="tooltip"
			ref={(tooltip) => new bootstrap.Tooltip(tooltip)}
			data-bs-html="true"
			title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
		>
			Tooltip with HTML
		</button>
	</div>
)

export default HtmlTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
