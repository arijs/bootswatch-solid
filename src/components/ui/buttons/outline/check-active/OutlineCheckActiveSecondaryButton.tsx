import type { Component } from 'solid-js'

const OutlineCheckActiveSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-outline-secondary active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Secondary
		</button>
	</div>
)

export default OutlineCheckActiveSecondaryButton

// @screenshot *: 360x120 120
