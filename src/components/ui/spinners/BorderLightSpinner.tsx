import type { Component } from 'solid-js'

const BorderLightSpinner: Component = () => (
	<div class="bd-example container-fluid">
		<div class="spinner-border text-light">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
)

export default BorderLightSpinner

// @screenshot bootstrap: 360x120 120
