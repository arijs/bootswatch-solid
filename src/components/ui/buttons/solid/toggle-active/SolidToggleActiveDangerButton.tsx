import type { Component } from 'solid-js'

const SolidToggleActiveDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-solid-toggle-active-danger" checked autocomplete="off" />
		<label class="btn btn-danger" for="id-btn-solid-toggle-active-danger">Checked Toggle Danger</label>
	</div>
)

export default SolidToggleActiveDangerButton

// @screenshot *: 360x120 120
