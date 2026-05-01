import type { Component } from 'solid-js'

const OutlineCheckActiveDisabledLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-outline-light active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Light
		</button>
	</div>
)

export default OutlineCheckActiveDisabledLightButton

// @screenshot *: 360x120 120
