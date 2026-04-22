import type { Component } from 'solid-js'

const OutlineCheckActiveDisabledDangerButton: Component = () => (
	<div class="bd-example container-fluid">
		<button disabled type="button" class="btn btn-outline-danger active" data-bs-toggle="button" aria-pressed="true">
			Danger
		</button>
	</div>
)

export default OutlineCheckActiveDisabledDangerButton

// @screenshot *: 360x120 120
