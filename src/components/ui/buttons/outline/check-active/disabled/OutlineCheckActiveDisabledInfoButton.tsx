import type { Component } from 'solid-js'

const OutlineCheckActiveDisabledInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<button disabled type="button" class="btn btn-outline-info active" data-bs-toggle="button" aria-pressed="true">
			Info
		</button>
	</div>
)

export default OutlineCheckActiveDisabledInfoButton

// @screenshot *: 360x120 120
