import type { Component } from 'solid-js'

const SolidToggleDisabledDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-disabled-danger"
			autocomplete="off"
		/>
		<label class="btn btn-danger" for="id-btn-solid-toggle-disabled-danger">
			Toggle Danger
		</label>
	</div>
)

export default SolidToggleDisabledDangerButton

// @screenshot *: 360x120 120
