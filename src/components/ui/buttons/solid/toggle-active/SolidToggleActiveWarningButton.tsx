import type { Component } from 'solid-js'

const SolidToggleActiveWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-active-warning"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-warning" for="id-btn-solid-toggle-active-warning">
			Checked Toggle Warning
		</label>
	</div>
)

export default SolidToggleActiveWarningButton

// @screenshot *: 360x120 120
