import type { Component } from 'solid-js'

const GrowSuccessSpinner: Component = () => (
	<div class="bd-example container-fluid">
		<div class="spinner-grow text-success">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
)

export default GrowSuccessSpinner

// @screenshot bootstrap: 360x120 120
