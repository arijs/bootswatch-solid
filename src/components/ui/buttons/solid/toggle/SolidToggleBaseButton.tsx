import type { Component } from 'solid-js'

const SolidToggleBaseButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-solid-toggle-base" autocomplete="off" />
		<label class="btn" for="id-btn-solid-toggle-base">
			Toggle Button
		</label>
	</div>
)

export default SolidToggleBaseButton

// @screenshot *: 360x120 120
