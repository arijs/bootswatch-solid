import type { Component } from 'solid-js'

const SolidCheckActiveLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-light active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Light
		</button>
	</div>
)

export default SolidCheckActiveLightButton

// @screenshot *: 360x120 120
