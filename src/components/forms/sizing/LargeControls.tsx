import type { Component } from 'solid-js'

const LargeControls: Component = () => (
	<div class="bd-example container-fluid">
		<div class="mb-3">
			<input
				class="form-control form-control-lg"
				type="text"
				placeholder=".form-control-lg"
				aria-label=".form-control-lg example"
			/>
		</div>
		<div class="mb-3">
			<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
				<option selected>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
		</div>
		<div class="mb-3">
			<input
				type="file"
				class="form-control form-control-lg"
				aria-label="Large file input example"
			/>
		</div>
	</div>
)

export default LargeControls
