import type { Component } from 'solid-js'

const OutlineToggleDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-danger"
			autocomplete="off"
		/>
		<label class="btn btn-outline-danger" for="id-btn-outline-toggle-danger">
			Toggle Danger
		</label>
	</div>
)

export default OutlineToggleDangerButton

// @screenshot *: 360x120 120
