import type { Component } from 'solid-js'

const SolidTogglePrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-solid-toggle-primary" autocomplete="off" />
		<label class="btn btn-primary" for="id-btn-solid-toggle-primary">Toggle Primary</label>
	</div>
)

export default SolidTogglePrimaryButton

// @screenshot *: 360x120 120
