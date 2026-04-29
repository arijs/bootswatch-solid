import type { Component } from 'solid-js'

const SolidToggleDarkButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-solid-toggle-dark" autocomplete="off" />
		<label class="btn btn-dark" for="id-btn-solid-toggle-dark">
			Toggle Dark
		</label>
	</div>
)

export default SolidToggleDarkButton

// @screenshot *: 360x120 120
