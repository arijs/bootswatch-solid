import type { Component } from 'solid-js'

const ToggleActiveDisabledSmallButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-sizes-toggle-active-disabled-small"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-primary btn-sm" for="id-btn-sizes-toggle-active-disabled-small">
			Checked Toggle Small button
		</label>
	</div>
)

export default ToggleActiveDisabledSmallButton

// @screenshot *: 360x120 120
