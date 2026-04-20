import type { Component } from 'solid-js'

const BorderDangerSpinner: Component = () => (
	<div class="bd-example container-fluid">
		<div class="spinner-border text-danger">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
)

export default BorderDangerSpinner

// @screenshot *: 360x120 120
