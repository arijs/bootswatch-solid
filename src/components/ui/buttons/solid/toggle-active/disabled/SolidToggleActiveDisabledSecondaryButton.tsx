import type { Component } from 'solid-js'

const SolidToggleActiveDisabledSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-active-disabled-secondary"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-secondary" for="id-btn-solid-toggle-active-disabled-secondary">
			Checked Toggle Secondary
		</label>
	</div>
)

export default SolidToggleActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
