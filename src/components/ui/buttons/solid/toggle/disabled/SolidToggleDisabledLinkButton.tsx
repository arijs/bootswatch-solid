import type { Component } from 'solid-js'

const SolidToggleDisabledLinkButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-disabled-link" autocomplete="off"  />
		<label class="btn btn-link" for="id-btn-solid-toggle-disabled-link">Toggle Link</label>
	</div>
)

export default SolidToggleDisabledLinkButton

// @screenshot *: 360x120 120
