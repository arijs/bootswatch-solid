import type { Component } from 'solid-js'

const OutlineToggleLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-outline-toggle-light" autocomplete="off" />
		<label class="btn btn-outline-light" for="id-btn-outline-toggle-light">Toggle Light</label>
	</div>
)

export default OutlineToggleLightButton

// @screenshot *: 360x120 120
