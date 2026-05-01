import type { Component } from 'solid-js'

const OutlineTogglePrimaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-primary"
			autocomplete="off"
		/>
		<label class="btn btn-outline-primary" for="id-btn-outline-toggle-primary">
			Toggle Primary
		</label>
	</div>
)

export default OutlineTogglePrimaryButton

// @screenshot *: 360x120 120
