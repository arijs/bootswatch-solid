import type { Component } from 'solid-js'

const SolidCheckActiveDisabledSuccessButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-success active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Success
		</button>
	</div>
)

export default SolidCheckActiveDisabledSuccessButton

// @screenshot *: 360x120 120
