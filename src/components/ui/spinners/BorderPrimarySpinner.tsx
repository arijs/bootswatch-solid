import type { Component } from 'solid-js'

const BorderPrimarySpinner: Component = () => (
	<div class="bd-example container-fluid">
		<div class="spinner-border text-primary">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
)

export default BorderPrimarySpinner

// @screenshot bootstrap: 360x120 120
