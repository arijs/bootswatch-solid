import type { Component } from 'solid-js'

const OutlineToggleActiveDisabledInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-outline-toggle-active-disabled-info" checked autocomplete="off"  />
		<label class="btn btn-outline-info" for="id-btn-outline-toggle-active-disabled-info">Checked Toggle Info</label>
	</div>
)

export default OutlineToggleActiveDisabledInfoButton

// @screenshot *: 360x120 120
