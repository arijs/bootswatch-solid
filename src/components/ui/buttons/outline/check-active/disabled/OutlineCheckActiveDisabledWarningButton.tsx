import type { Component } from 'solid-js'

const OutlineCheckActiveDisabledWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-outline-warning active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Warning
		</button>
	</div>
)

export default OutlineCheckActiveDisabledWarningButton

// @screenshot *: 360x120 120
