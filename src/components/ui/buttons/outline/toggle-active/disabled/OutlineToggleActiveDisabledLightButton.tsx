import type { Component } from 'solid-js'

const OutlineToggleActiveDisabledLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-active-light" checked autocomplete="off"  />
		<label class="btn btn-outline-light" for="id-btn-outline-toggle-active-light">Checked Toggle Light</label>
	</div>
)

export default OutlineToggleActiveDisabledLightButton

// @screenshot *: 360x120 120
