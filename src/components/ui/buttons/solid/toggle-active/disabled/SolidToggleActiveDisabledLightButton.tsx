import type { Component } from 'solid-js'

const SolidToggleActiveDisabledLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-active-disabled-light"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-light" for="id-btn-solid-toggle-active-disabled-light">
			Checked Toggle Light
		</label>
	</div>
)

export default SolidToggleActiveDisabledLightButton

// @screenshot *: 360x120 120
