import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'

const BasicPopover: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-lg btn-danger pwhook-popover-trigger"
			data-bs-custom-class="pwhook-popover"
			data-bs-toggle="popover"
			ref={(popover) => new bootstrap.Popover(popover)}
			title="Popover title"
			data-bs-content="And here's some amazing content. It's very engaging. Right?"
		>
			Click to toggle popover
		</button>
	</div>
)

export default BasicPopover

// @screenshot *: 360x120 120
