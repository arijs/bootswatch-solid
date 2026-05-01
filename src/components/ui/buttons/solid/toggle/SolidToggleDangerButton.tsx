import type { Component } from 'solid-js'

const SolidToggleDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-danger"
			autocomplete="off"
		/>
		<label class="btn btn-danger" for="id-btn-solid-toggle-danger">
			Toggle Danger
		</label>
	</div>
)

export default SolidToggleDangerButton

// @screenshot *: 360x120 120
