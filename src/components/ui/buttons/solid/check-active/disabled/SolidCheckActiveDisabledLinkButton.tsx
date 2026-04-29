import type { Component } from 'solid-js'

const SolidCheckActiveDisabledLinkButton: Component = () => (
	<div class="bd-example container-fluid">
		<button
			disabled
			type="button"
			class="btn btn-link active"
			data-bs-toggle="button"
			aria-pressed="true"
		>
			Link
		</button>
	</div>
)

export default SolidCheckActiveDisabledLinkButton

// @screenshot *: 360x120 120
