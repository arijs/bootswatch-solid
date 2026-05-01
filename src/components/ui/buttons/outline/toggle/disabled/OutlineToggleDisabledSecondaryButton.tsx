import type { Component } from 'solid-js'

const OutlineToggleDisabledSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-disabled-secondary"
			autocomplete="off"
		/>
		<label class="btn btn-outline-secondary" for="id-btn-outline-toggle-disabled-secondary">
			Toggle Secondary
		</label>
	</div>
)

export default OutlineToggleDisabledSecondaryButton

// @screenshot *: 360x120 120
