import type { Component } from 'solid-js'

const SolidToggleActiveSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-active-secondary"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-secondary" for="id-btn-solid-toggle-active-secondary">
			Checked Toggle Secondary
		</label>
	</div>
)

export default SolidToggleActiveSecondaryButton

// @screenshot *: 360x120 120
