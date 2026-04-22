import type { Component } from 'solid-js'

const SolidToggleDisabledLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-disabled-light" autocomplete="off"  />
		<label class="btn btn-light" for="id-btn-solid-toggle-disabled-light">Toggle Light</label>
	</div>
)

export default SolidToggleDisabledLightButton

// @screenshot *: 360x120 120
