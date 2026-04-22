import type { Component } from 'solid-js'

const OutlineToggleActiveDisabledWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-active-disabled-warning" checked autocomplete="off"  />
		<label class="btn btn-outline-warning" for="id-btn-outline-toggle-active-disabled-warning">Checked Toggle Warning</label>
	</div>
)

export default OutlineToggleActiveDisabledWarningButton

// @screenshot *: 360x120 120
