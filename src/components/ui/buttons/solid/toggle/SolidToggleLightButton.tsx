import type { Component } from 'solid-js'

const SolidToggleLightButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-light"
			autocomplete="off"
		/>
		<label class="btn btn-light" for="id-btn-solid-toggle-light">
			Toggle Light
		</label>
	</div>
)

export default SolidToggleLightButton

// @screenshot *: 360x120 120
