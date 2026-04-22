import type { Component } from 'solid-js'

const ToggleActiveDisabledLargeButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-sizes-toggle-active-large" checked autocomplete="off"  />
		<label class="btn btn-primary btn-lg" for="id-btn-sizes-toggle-active-large">Checked Toggle Large button</label>
	</div>
)

export default ToggleActiveDisabledLargeButton

// @screenshot *: 360x120 120
