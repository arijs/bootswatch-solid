import type { Component } from 'solid-js'

const OutlineToggleActiveSuccessButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-active-success"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-outline-success" for="id-btn-outline-toggle-active-success">
			Checked Toggle Success
		</label>
	</div>
)

export default OutlineToggleActiveSuccessButton

// @screenshot *: 360x120 120
