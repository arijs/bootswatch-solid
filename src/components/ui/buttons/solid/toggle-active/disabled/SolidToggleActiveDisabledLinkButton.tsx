import type { Component } from 'solid-js'

const SolidToggleActiveDisabledLinkButton: Component = () => (
	<div class="bd-example container-fluid">
		<input disabled type="checkbox" class="btn-check" id="id-btn-solid-toggle-active-disabled-link" checked autocomplete="off"  />
		<label class="btn btn-link" for="id-btn-solid-toggle-active-disabled-link">Checked Toggle Link</label>
	</div>
)

export default SolidToggleActiveDisabledLinkButton

// @screenshot *: 360x120 120
