import type { Component } from 'solid-js'

const SolidToggleActivePrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-active-primary"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-primary" for="id-btn-solid-toggle-active-primary">
			Checked Toggle Primary
		</label>
	</div>
)

export default SolidToggleActivePrimaryButton

// @screenshot *: 360x120 120
