import type { Component } from 'solid-js'

const GrowDangerSpinner: Component = () => (
	<div class="bd-example container-fluid">
		<div class="spinner-grow text-danger">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
)

export default GrowDangerSpinner

// @screenshot bootstrap: 360x120 120
