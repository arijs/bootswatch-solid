import type { Component } from 'solid-js'

const OutlineToggleDisabledDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-danger" autocomplete="off"  />
		<label class="btn btn-outline-danger" for="id-btn-outline-toggle-danger">Toggle Danger</label>
	</div>
)

export default OutlineToggleDisabledDangerButton

// @screenshot *: 360x120 120
