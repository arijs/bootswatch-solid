import type { Component } from 'solid-js'

const SolidCheckActiveDisabledInfoButton: Component = () => (
	<div class="bd-example container-fluid">
		<button disabled type="button" class="btn btn-info active" data-bs-toggle="button" aria-pressed="true">
			Info
		</button>
	</div>
)

export default SolidCheckActiveDisabledInfoButton

// @screenshot *: 360x120 120
