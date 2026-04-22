import type { Component } from 'solid-js'

const CheckActiveDisabledSmallButton: Component = () => (
	<div class="bd-example container-fluid">
		<button disabled type="button" class="btn btn-primary btn-sm active" data-bs-toggle="button" aria-pressed="true">
			Small button
		</button>
	</div>
)

export default CheckActiveDisabledSmallButton

// @screenshot *: 360x120 120
