import type { Component } from 'solid-js'

const OutlineCheckActiveWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-outline-warning active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Warning
		</button>
	</div>
)

export default OutlineCheckActiveWarningButton

// @screenshot *: 360x120 120
