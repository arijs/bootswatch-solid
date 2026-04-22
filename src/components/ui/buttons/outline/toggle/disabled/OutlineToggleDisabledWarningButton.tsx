import type { Component } from 'solid-js'

const OutlineToggleDisabledWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-disabled-warning" autocomplete="off"  />
		<label class="btn btn-outline-warning" for="id-btn-outline-toggle-disabled-warning">Toggle Warning</label>
	</div>
)

export default OutlineToggleDisabledWarningButton

// @screenshot *: 360x120 120
