import type { Component } from 'solid-js'

const BasicProgress: Component = () => (
	<div class="bd-example container-fluid">
		<div class="progress mb-3">
			<div class="progress-bar">0%</div>
		</div>
		<div class="progress mb-3">
			<div class="progress-bar bg-success w-25">25%</div>
		</div>
		<div class="progress mb-3">
			<div class="progress-bar bg-info text-dark w-50">50%</div>
		</div>
		<div class="progress mb-3">
			<div class="progress-bar bg-warning text-dark w-75">75%</div>
		</div>
		<div class="progress">
			<div class="progress-bar bg-danger w-100">100%</div>
		</div>
	</div>
)

export default BasicProgress
