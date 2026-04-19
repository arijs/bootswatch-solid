import type { Component } from 'solid-js'

const BorderSpinners: Component = () => (
	<div class="bd-example container-fluid">
		<div class="spinner-border text-primary">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-secondary">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-success">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-danger">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-warning">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-info">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-light">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-dark">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
)

export default BorderSpinners
