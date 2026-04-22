import type { Component } from 'solid-js'

const SolidToggleActiveDisabledInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-active-disabled-info" checked autocomplete="off"  />
		<label class="btn btn-info" for="id-btn-solid-toggle-active-disabled-info">Checked Toggle Info</label>
	</div>
)

export default SolidToggleActiveDisabledInfoButton

// @screenshot *: 360x120 120
