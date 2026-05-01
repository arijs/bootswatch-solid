import type { Component } from 'solid-js'

const SolidToggleDisabledSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-disabled-secondary"
			autocomplete="off"
		/>
		<label class="btn btn-secondary" for="id-btn-solid-toggle-disabled-secondary">
			Toggle Secondary
		</label>
	</div>
)

export default SolidToggleDisabledSecondaryButton

// @screenshot *: 360x120 120
