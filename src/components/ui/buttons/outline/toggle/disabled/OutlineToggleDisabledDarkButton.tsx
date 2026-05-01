import type { Component } from 'solid-js'

const OutlineToggleDisabledDarkButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-disabled-dark"
			autocomplete="off"
		/>
		<label class="btn btn-outline-dark" for="id-btn-outline-toggle-disabled-dark">
			Toggle Dark
		</label>
	</div>
)

export default OutlineToggleDisabledDarkButton

// @screenshot *: 360x120 120
