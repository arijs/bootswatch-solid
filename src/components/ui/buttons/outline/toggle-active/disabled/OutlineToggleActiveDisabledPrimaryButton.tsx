import type { Component } from 'solid-js'

const OutlineToggleActiveDisabledPrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-active-disabled-primary" checked autocomplete="off"  />
		<label class="btn btn-outline-primary" for="id-btn-outline-toggle-active-disabled-primary">Checked Toggle Primary</label>
	</div>
)

export default OutlineToggleActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
