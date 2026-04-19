import type { Component } from 'solid-js'

const ButtonSizes: Component = () => (
	<div class="bd-example container-fluid">
		<button type="button" class="btn btn-primary btn-sm">
			Small button
		</button>
		<button type="button" class="btn btn-primary">
			Standard button
		</button>
		<button type="button" class="btn btn-primary btn-lg">
			Large button
		</button>
	</div>
)

export default ButtonSizes
