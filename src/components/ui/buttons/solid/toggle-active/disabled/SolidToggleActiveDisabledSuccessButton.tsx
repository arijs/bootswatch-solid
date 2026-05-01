import type { Component } from 'solid-js'

const SolidToggleActiveDisabledSuccessButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-active-disabled-success"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-success" for="id-btn-solid-toggle-active-disabled-success">
			Checked Toggle Success
		</label>
	</div>
)

export default SolidToggleActiveDisabledSuccessButton

// @screenshot *: 360x120 120
