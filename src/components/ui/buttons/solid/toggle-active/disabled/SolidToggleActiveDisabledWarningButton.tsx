import type { Component } from 'solid-js'

const SolidToggleActiveDisabledWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-active-disabled-warning"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-warning" for="id-btn-solid-toggle-active-disabled-warning">
			Checked Toggle Warning
		</label>
	</div>
)

export default SolidToggleActiveDisabledWarningButton

// @screenshot *: 360x120 120
