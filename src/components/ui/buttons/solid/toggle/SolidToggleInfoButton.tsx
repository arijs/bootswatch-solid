import type { Component } from 'solid-js'

const SolidToggleInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-solid-toggle-info" autocomplete="off" />
		<label class="btn btn-info" for="id-btn-solid-toggle-info">
			Toggle Info
		</label>
	</div>
)

export default SolidToggleInfoButton

// @screenshot *: 360x120 120
