import type { Component } from 'solid-js'

const OutlineCheckActiveLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-outline-light active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Light
		</button>
	</div>
)

export default OutlineCheckActiveLightButton

// @screenshot *: 360x120 120
