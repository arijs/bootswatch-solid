import type { Component } from 'solid-js'

const StripedProgress: Component = () => (
	<div class="bd-example container-fluid">
		<div class="progress">
			<div class="progress-bar" style="width: 15%"></div>
			<div
				class="progress-bar progress-bar-striped progress-bar-animated bg-success"
				style="width: 40%"
			></div>
		</div>
	</div>
)

export default StripedProgress

// @screenshot *: 360x120 120
