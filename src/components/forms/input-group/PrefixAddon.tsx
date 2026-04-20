import type { Component } from 'solid-js'

const PrefixAddon: Component = () => (
	<div class="bd-example container-fluid">
		<div class="input-group mb-3">
			<span class="input-group-text" id="basic-addon1">
				@
			</span>
			<input
				type="text"
				class="form-control"
				placeholder="Username"
				aria-label="Username"
				aria-describedby="basic-addon1"
			/>
		</div>
	</div>
)

export default PrefixAddon

// @screenshot *: 360x120 120
