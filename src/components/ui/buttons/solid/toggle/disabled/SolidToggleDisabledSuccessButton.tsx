import type { Component } from 'solid-js'

const SolidToggleDisabledSuccessButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-success" autocomplete="off"  />
		<label class="btn btn-success" for="id-btn-solid-toggle-success">Toggle Success</label>
	</div>
)

export default SolidToggleDisabledSuccessButton

// @screenshot *: 360x120 120
