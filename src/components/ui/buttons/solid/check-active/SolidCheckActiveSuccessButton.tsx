import type { Component } from 'solid-js'

const SolidCheckActiveSuccessButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-success active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Success
		</button>
	</div>
)

export default SolidCheckActiveSuccessButton

// @screenshot *: 360x120 120
