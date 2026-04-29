import type { Component } from 'solid-js'

const OutlineToggleActivePrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-active-primary"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-outline-primary" for="id-btn-outline-toggle-active-primary">
			Checked Toggle Primary
		</label>
	</div>
)

export default OutlineToggleActivePrimaryButton

// @screenshot *: 360x120 120
