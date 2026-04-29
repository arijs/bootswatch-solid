import type { Component } from 'solid-js'

const SolidToggleSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-secondary"
			autocomplete="off"
		/>
		<label class="btn btn-secondary" for="id-btn-solid-toggle-secondary">
			Toggle Secondary
		</label>
	</div>
)

export default SolidToggleSecondaryButton

// @screenshot *: 360x120 120
