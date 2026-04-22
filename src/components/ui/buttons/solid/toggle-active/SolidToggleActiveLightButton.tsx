import type { Component } from 'solid-js'

const SolidToggleActiveLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-solid-toggle-active-light" checked autocomplete="off" />
		<label class="btn btn-light" for="id-btn-solid-toggle-active-light">Checked Toggle Light</label>
	</div>
)

export default SolidToggleActiveLightButton

// @screenshot *: 360x120 120
