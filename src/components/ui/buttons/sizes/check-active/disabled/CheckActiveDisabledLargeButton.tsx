import type { Component } from 'solid-js'

const CheckActiveDisabledLargeButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-primary btn-lg active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Large button
		</button>
	</div>
)

export default CheckActiveDisabledLargeButton

// @screenshot *: 360x120 120
