import type { Component } from 'solid-js'

const OutlineToggleDisabledInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-outline-toggle-disabled-info"
			autocomplete="off"
		/>
		<label class="btn btn-outline-info" for="id-btn-outline-toggle-disabled-info">
			Toggle Info
		</label>
	</div>
)

export default OutlineToggleDisabledInfoButton

// @screenshot *: 360x120 120
