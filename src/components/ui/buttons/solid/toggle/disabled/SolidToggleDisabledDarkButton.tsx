import type { Component } from 'solid-js'

const SolidToggleDisabledDarkButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-dark" autocomplete="off"  />
		<label class="btn btn-dark" for="id-btn-solid-toggle-dark">Toggle Dark</label>
	</div>
)

export default SolidToggleDisabledDarkButton

// @screenshot *: 360x120 120
