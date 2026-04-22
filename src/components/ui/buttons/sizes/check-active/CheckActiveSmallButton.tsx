import type { Component } from 'solid-js'

const CheckActiveSmallButton: Component = () => (
	<div class="bd-example container-fluid">
		<button type="button" class="btn btn-primary btn-sm active" data-bs-toggle="button" aria-pressed="true">
			Small button
		</button>
	</div>
)

export default CheckActiveSmallButton

// @screenshot *: 360x120 120
