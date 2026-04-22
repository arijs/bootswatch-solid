import type { Component } from 'solid-js'

const SolidCheckActiveWarningButton: Component = () => (
	<div class="bd-example container-fluid">
		<button type="button" class="btn btn-warning active" data-bs-toggle="button" aria-pressed="true">
			Warning
		</button>
	</div>
)

export default SolidCheckActiveWarningButton

// @screenshot *: 360x120 120
