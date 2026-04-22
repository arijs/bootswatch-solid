import type { Component } from 'solid-js'

const SolidToggleLinkButton: Component = () => (
	<div class="bd-example container-fluid">
		<input type="checkbox" class="btn-check" id="id-btn-solid-toggle-link" autocomplete="off" />
		<label class="btn btn-link" for="id-btn-solid-toggle-link">Toggle Link</label>
	</div>
)

export default SolidToggleLinkButton

// @screenshot *: 360x120 120
