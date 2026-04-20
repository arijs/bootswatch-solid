import type { Component } from 'solid-js'

const SuffixAddon: Component = () => (
	<div class="bd-example container-fluid">
		<div class="input-group mb-3">
			<input
				type="text"
				class="form-control"
				placeholder="Recipient's username"
				aria-label="Recipient's username"
				aria-describedby="basic-addon2"
			/>
			<span class="input-group-text" id="basic-addon2">
				@example.com
			</span>
		</div>
	</div>
)

export default SuffixAddon

// @screenshot *: 360x120 120

