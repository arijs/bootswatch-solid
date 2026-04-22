import type { Component } from 'solid-js'

const OutlineToggleActiveSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-outline-toggle-active-secondary" checked autocomplete="off" />
		<label class="btn btn-outline-secondary" for="id-btn-outline-toggle-active-secondary">Checked Toggle Secondary</label>
	</div>
)

export default OutlineToggleActiveSecondaryButton

// @screenshot *: 360x120 120
