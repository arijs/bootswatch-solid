import type { Component } from 'solid-js'

const SolidToggleActiveInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-solid-toggle-active-info" checked autocomplete="off" />
		<label class="btn btn-info" for="id-btn-solid-toggle-active-info">Checked Toggle Info</label>
	</div>
)

export default SolidToggleActiveInfoButton

// @screenshot *: 360x120 120
