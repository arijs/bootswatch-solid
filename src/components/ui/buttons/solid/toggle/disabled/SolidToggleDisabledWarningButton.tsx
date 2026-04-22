import type { Component } from 'solid-js'

const SolidToggleDisabledWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-warning" autocomplete="off"  />
		<label class="btn btn-warning" for="id-btn-solid-toggle-warning">Toggle Warning</label>
	</div>
)

export default SolidToggleDisabledWarningButton

// @screenshot *: 360x120 120
