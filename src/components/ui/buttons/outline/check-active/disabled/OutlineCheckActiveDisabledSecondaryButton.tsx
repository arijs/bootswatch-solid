import type { Component } from 'solid-js'

const OutlineCheckActiveDisabledSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-outline-secondary active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Secondary
		</button>
	</div>
)

export default OutlineCheckActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
