import type { Component } from 'solid-js'

const OutlineCheckActiveDisabledDarkButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-outline-dark active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Dark
		</button>
	</div>
)

export default OutlineCheckActiveDisabledDarkButton

// @screenshot *: 360x120 120
