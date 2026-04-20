import type { Component } from 'solid-js'

const UrlAddon: Component = () => (
	<div class="bd-example container-fluid">
		<label for="basic-url" class="form-label">
			Your vanity URL
		</label>
		<div class="input-group mb-3">
			<span class="input-group-text" id="basic-addon3">
				https://example.com/users/
			</span>
			<input
				type="text"
				class="form-control"
				id="basic-url"
				aria-describedby="basic-addon3"
			/>
		</div>
	</div>
)

export default UrlAddon

// @screenshot *: 360x120 120

