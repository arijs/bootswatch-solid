import type { Component } from 'solid-js'

const OutlineToggleActiveInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-active-info"
			checked
			autocomplete="off"
		/>
		<label class="btn btn-outline-info" for="id-btn-outline-toggle-active-info">
			Checked Toggle Info
		</label>
	</div>
)

export default OutlineToggleActiveInfoButton

// @screenshot *: 360x120 120
