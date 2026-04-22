import type { Component } from 'solid-js'

const SolidToggleDisabledInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-info" autocomplete="off"  />
		<label class="btn btn-info" for="id-btn-solid-toggle-info">Toggle Info</label>
	</div>
)

export default SolidToggleDisabledInfoButton

// @screenshot *: 360x120 120
