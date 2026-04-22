import type { Component } from 'solid-js'

const ToggleActiveSmallButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-sizes-toggle-active-small" checked autocomplete="off" />
		<label class="btn btn-primary btn-sm" for="id-btn-sizes-toggle-active-small">Checked Toggle Small button</label>
	</div>
)

export default ToggleActiveSmallButton

// @screenshot *: 360x120 120
