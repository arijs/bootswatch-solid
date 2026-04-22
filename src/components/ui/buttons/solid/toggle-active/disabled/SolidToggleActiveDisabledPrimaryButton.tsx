import type { Component } from 'solid-js'

const SolidToggleActiveDisabledPrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-active-disabled-primary" checked autocomplete="off"  />
		<label class="btn btn-primary" for="id-btn-solid-toggle-active-disabled-primary">Checked Toggle Primary</label>
	</div>
)

export default SolidToggleActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
