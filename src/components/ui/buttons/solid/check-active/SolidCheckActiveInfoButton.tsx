import type { Component } from 'solid-js'

const SolidCheckActiveInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-info active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Info
		</button>
	</div>
)

export default SolidCheckActiveInfoButton

// @screenshot *: 360x120 120
