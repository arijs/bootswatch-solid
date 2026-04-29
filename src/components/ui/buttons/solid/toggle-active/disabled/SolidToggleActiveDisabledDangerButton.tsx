import type { Component } from 'solid-js'

const SolidToggleActiveDisabledDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-active-disabled-danger"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-danger" for="id-btn-solid-toggle-active-disabled-danger">
			Checked Toggle Danger
		</label>
	</div>
)

export default SolidToggleActiveDisabledDangerButton

// @screenshot *: 360x120 120
