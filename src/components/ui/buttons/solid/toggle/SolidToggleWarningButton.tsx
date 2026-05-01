import type { Component } from 'solid-js'

const SolidToggleWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-warning"
			autocomplete="off"
		/>
		<label class="btn btn-warning" for="id-btn-solid-toggle-warning">
			Toggle Warning
		</label>
	</div>
)

export default SolidToggleWarningButton

// @screenshot *: 360x120 120
