import type { Component } from 'solid-js'

const OutlineToggleWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-outline-toggle-warning" autocomplete="off" />
		<label class="btn btn-outline-warning" for="id-btn-outline-toggle-warning">Toggle Warning</label>
	</div>
)

export default OutlineToggleWarningButton

// @screenshot *: 360x120 120
