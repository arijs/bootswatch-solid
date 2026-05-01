import type { Component } from 'solid-js'

const OutlineToggleDisabledPrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-disabled-primary"
			autocomplete="off"
		/>
		<label class="btn btn-outline-primary" for="id-btn-outline-toggle-disabled-primary">
			Toggle Primary
		</label>
	</div>
)

export default OutlineToggleDisabledPrimaryButton

// @screenshot *: 360x120 120
