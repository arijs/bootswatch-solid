import type { Component } from 'solid-js'

const OutlineToggleActiveDisabledSuccessButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-active-success" checked autocomplete="off"  />
		<label class="btn btn-outline-success" for="id-btn-outline-toggle-active-success">Checked Toggle Success</label>
	</div>
)

export default OutlineToggleActiveDisabledSuccessButton

// @screenshot *: 360x120 120
