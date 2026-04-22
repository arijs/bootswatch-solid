import type { Component } from 'solid-js'

const SolidToggleActiveDisabledBaseButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-active-disabled-base" checked autocomplete="off"  />
		<label class="btn" for="id-btn-solid-toggle-active-disabled-base">Checked Toggle Button</label>
	</div>
)

export default SolidToggleActiveDisabledBaseButton

// @screenshot *: 360x120 120
