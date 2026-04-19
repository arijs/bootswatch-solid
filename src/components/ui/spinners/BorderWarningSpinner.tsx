import type { Component } from 'solid-js'

const BorderWarningSpinner: Component = () => (
	<div class="bd-example container-fluid">
		<div class="spinner-border text-warning">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
)

export default BorderWarningSpinner
