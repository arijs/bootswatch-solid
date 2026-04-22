import type { Component } from 'solid-js'

const OutlineToggleActiveDisabledDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-active-danger" checked autocomplete="off"  />
		<label class="btn btn-outline-danger" for="id-btn-outline-toggle-active-danger">Checked Toggle Danger</label>
	</div>
)

export default OutlineToggleActiveDisabledDangerButton

// @screenshot *: 360x120 120
