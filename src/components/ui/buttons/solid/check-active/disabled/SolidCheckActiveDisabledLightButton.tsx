import type { Component } from 'solid-js'

const SolidCheckActiveDisabledLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-light active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Light
		</button>
	</div>
)

export default SolidCheckActiveDisabledLightButton

// @screenshot *: 360x120 120
