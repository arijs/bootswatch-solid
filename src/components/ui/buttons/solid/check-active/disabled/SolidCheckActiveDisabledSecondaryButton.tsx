import type { Component } from 'solid-js'

const SolidCheckActiveDisabledSecondaryButton: Component = () => (
	<div class="bd-example container-fluid">
		<button disabled type="button" class="btn btn-secondary active" data-bs-toggle="button" aria-pressed="true">
			Secondary
		</button>
	</div>
)

export default SolidCheckActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
