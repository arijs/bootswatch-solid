import type { Component } from 'solid-js'

const OutlineToggleDisabledLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-light" autocomplete="off"  />
		<label class="btn btn-outline-light" for="id-btn-outline-toggle-light">Toggle Light</label>
	</div>
)

export default OutlineToggleDisabledLightButton

// @screenshot *: 360x120 120
