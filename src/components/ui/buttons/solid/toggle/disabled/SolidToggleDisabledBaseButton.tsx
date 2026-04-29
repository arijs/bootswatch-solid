import type { Component } from 'solid-js'

const SolidToggleDisabledBaseButton: Component = () => (
	<div class="bd-example container-fluid">
		<input
			disabled
			type="checkbox"
			class="btn-check"
			id="id-btn-solid-toggle-disabled-base"
			autocomplete="off"
		/>
		<label class="btn" for="id-btn-solid-toggle-disabled-base">
			Toggle Button
		</label>
	</div>
)

export default SolidToggleDisabledBaseButton

// @screenshot *: 360x120 120
