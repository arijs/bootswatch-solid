import type { Component } from 'solid-js'

const ToggleLargeButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-sizes-toggle-large" autocomplete="off" />
		<label class="btn btn-primary btn-lg" for="id-btn-sizes-toggle-large">Toggle Large button</label>
	</div>
)

export default ToggleLargeButton

// @screenshot *: 360x120 120
