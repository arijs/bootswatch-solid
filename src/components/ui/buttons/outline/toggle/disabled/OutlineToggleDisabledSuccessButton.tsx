import type { Component } from 'solid-js'

const OutlineToggleDisabledSuccessButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-success" autocomplete="off"  />
		<label class="btn btn-outline-success" for="id-btn-outline-toggle-success">Toggle Success</label>
	</div>
)

export default OutlineToggleDisabledSuccessButton

// @screenshot *: 360x120 120
