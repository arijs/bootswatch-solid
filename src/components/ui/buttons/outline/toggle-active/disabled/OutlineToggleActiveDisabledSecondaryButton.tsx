import type { Component } from 'solid-js'

const OutlineToggleActiveDisabledSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-active-disabled-secondary" checked autocomplete="off"  />
		<label class="btn btn-outline-secondary" for="id-btn-outline-toggle-active-disabled-secondary">Checked Toggle Secondary</label>
	</div>
)

export default OutlineToggleActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
