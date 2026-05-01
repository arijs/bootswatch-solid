import type { Component } from 'solid-js'

const OutlineCheckActiveDisabledPrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-outline-primary active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Primary
		</button>
	</div>
)

export default OutlineCheckActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
