import type { Component } from 'solid-js'

const SolidToggleActiveDisabledDarkButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-active-dark" checked autocomplete="off"  />
		<label class="btn btn-dark" for="id-btn-solid-toggle-active-dark">Checked Toggle Dark</label>
	</div>
)

export default SolidToggleActiveDisabledDarkButton

// @screenshot *: 360x120 120
