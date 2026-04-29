import type { Component } from 'solid-js'

const SolidCheckActiveDisabledPrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-primary active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Primary
		</button>
	</div>
)

export default SolidCheckActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
