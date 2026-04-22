import type { Component } from 'solid-js'

const CheckActiveLargeButton: Component = () => (
	<div class="bd-example container-fluid">
		<button type="button" class="btn btn-primary btn-lg active" data-bs-toggle="button" aria-pressed="true">
			Large button
		</button>
	</div>
)

export default CheckActiveLargeButton

// @screenshot *: 360x120 120
