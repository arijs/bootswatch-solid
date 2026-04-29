import type { Component } from 'solid-js'

const OutlineToggleInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-info"
			autocomplete="off"
		/>
		<label class="btn btn-outline-info" for="id-btn-outline-toggle-info">
			Toggle Info
		</label>
	</div>
)

export default OutlineToggleInfoButton

// @screenshot *: 360x120 120
