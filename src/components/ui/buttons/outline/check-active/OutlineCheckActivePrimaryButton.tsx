import type { Component } from 'solid-js'

const OutlineCheckActivePrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			type="button"
			class="btn btn-outline-primary active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Primary
		</button>
	</div>
)

export default OutlineCheckActivePrimaryButton

// @screenshot *: 360x120 120
