import type { Component } from 'solid-js'

const SolidCheckActiveDisabledWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-warning active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Warning
		</button>
	</div>
)

export default SolidCheckActiveDisabledWarningButton

// @screenshot *: 360x120 120
