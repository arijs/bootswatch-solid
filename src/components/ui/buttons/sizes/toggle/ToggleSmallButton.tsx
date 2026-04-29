import type { Component } from 'solid-js'

const ToggleSmallButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-sizes-toggle-small"
			autocomplete="off"
		/>
		<label class="btn btn-primary btn-sm" for="id-btn-sizes-toggle-small">
			Toggle Small button
		</label>
	</div>
)

export default ToggleSmallButton

// @screenshot *: 360x120 120
