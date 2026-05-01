import type { Component } from 'solid-js'

const SolidCheckActiveDisabledDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-danger active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Danger
		</button>
	</div>
)

export default SolidCheckActiveDisabledDangerButton

// @screenshot *: 360x120 120
