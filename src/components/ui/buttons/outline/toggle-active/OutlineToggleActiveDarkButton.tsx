import type { Component } from 'solid-js'

const OutlineToggleActiveDarkButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-outline-toggle-active-dark" checked autocomplete="off" />
		<label class="btn btn-outline-dark" for="id-btn-outline-toggle-active-dark">Checked Toggle Dark</label>
	</div>
)

export default OutlineToggleActiveDarkButton

// @screenshot *: 360x120 120
