import type { Component } from 'solid-js'

const BorderDarkSpinner: Component = () => (
	<div class="bd-example container-fluid">
		<div class="spinner-border text-dark">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
)

export default BorderDarkSpinner

// @screenshot bootstrap: 360x120 120
