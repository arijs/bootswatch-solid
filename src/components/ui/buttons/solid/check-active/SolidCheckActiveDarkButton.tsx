import type { Component } from 'solid-js'

const SolidCheckActiveDarkButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-dark active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Dark
		</button>
	</div>
)

export default SolidCheckActiveDarkButton

// @screenshot *: 360x120 120
