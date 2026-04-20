import type { Component } from 'solid-js'

const SmallControls: Component = () => (
	<div class="bd-example container-fluid">
		<div class="mb-3">
			<input
				class="form-control form-control-sm"
				type="text"
				placeholder=".form-control-sm"
				aria-label=".form-control-sm example"
			/>
		</div>
		<div class="mb-3">
			<select class="form-select form-select-sm" aria-label=".form-select-sm example">
				<option selected>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
		</div>
		<div class="mb-3">
			<input
				type="file"
				class="form-control form-control-sm"
				aria-label="Small file input example"
			/>
		</div>
	</div>
)

export default SmallControls

// @screenshot *: 360x125 125

