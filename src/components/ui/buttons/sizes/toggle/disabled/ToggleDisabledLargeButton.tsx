import type { Component } from 'solid-js'

const ToggleDisabledLargeButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-sizes-toggle-disabled-large" autocomplete="off"  />
		<label class="btn btn-primary btn-lg" for="id-btn-sizes-toggle-disabled-large">Toggle Large button</label>
	</div>
)

export default ToggleDisabledLargeButton

// @screenshot *: 360x120 120
