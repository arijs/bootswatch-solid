import type { Component } from 'solid-js'

const SolidCheckActiveDisabledBaseButton: Component = () => (
	<div class="bd-example container-fluid">
		<button disabled type="button" class="btn active" data-bs-toggle="button" aria-pressed="true">
			Button
		</button>
	</div>
)

export default SolidCheckActiveDisabledBaseButton

// @screenshot *: 360x120 120
