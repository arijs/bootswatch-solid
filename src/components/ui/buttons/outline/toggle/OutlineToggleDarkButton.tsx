import type { Component } from 'solid-js'

const OutlineToggleDarkButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-dark"
			autocomplete="off"
		/>
		<label class="btn btn-outline-dark" for="id-btn-outline-toggle-dark">
			Toggle Dark
		</label>
	</div>
)

export default OutlineToggleDarkButton

// @screenshot *: 360x120 120
