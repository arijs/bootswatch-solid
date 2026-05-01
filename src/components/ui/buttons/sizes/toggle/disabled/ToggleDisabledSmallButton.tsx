import type { Component } from 'solid-js'

const ToggleDisabledSmallButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-sizes-toggle-disabled-small"
			autocomplete="off"
		/>
		<label class="btn btn-primary btn-sm" for="id-btn-sizes-toggle-disabled-small">
			Toggle Small button
		</label>
	</div>
)

export default ToggleDisabledSmallButton

// @screenshot *: 360x120 120
