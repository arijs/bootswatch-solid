import type { Component } from 'solid-js'

const OutlineButtons: Component = () => (
	<div class="bd-example container-fluid">
		<button type="button" class="btn btn-outline-primary">
			Primary
		</button>
		<button type="button" class="btn btn-outline-secondary">
			Secondary
		</button>
		<button type="button" class="btn btn-outline-success">
			Success
		</button>
		<button type="button" class="btn btn-outline-danger">
			Danger
		</button>
		<button type="button" class="btn btn-outline-warning">
			Warning
		</button>
		<button type="button" class="btn btn-outline-info">
			Info
		</button>
		<button type="button" class="btn btn-outline-light">
			Light
		</button>
		<button type="button" class="btn btn-outline-dark">
			Dark
		</button>
	</div>
)

export default OutlineButtons
