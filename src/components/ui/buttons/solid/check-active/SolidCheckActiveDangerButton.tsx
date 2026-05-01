import type { Component } from 'solid-js'

const SolidCheckActiveDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-danger active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Danger
		</button>
	</div>
)

export default SolidCheckActiveDangerButton

// @screenshot *: 360x120 120
