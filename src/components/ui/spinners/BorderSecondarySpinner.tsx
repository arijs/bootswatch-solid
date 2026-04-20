import type { Component } from 'solid-js'

const BorderSecondarySpinner: Component = () => (
	<div class="bd-example container-fluid">
		<div class="spinner-border text-secondary">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
)

export default BorderSecondarySpinner

// @screenshot bootstrap: 360x120 120
