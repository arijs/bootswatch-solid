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

// @screenshot *: 360x176 176
// @screenshot brite: 360x179 179
// @screenshot cyborg: 360x170 170
// @screenshot litera: 360x180 180
// @screenshot lux: 360x314 314
// @screenshot materia: 360x242 242
// @screenshot morph: 360x170 170
// @screenshot quartz: 360x208 208
// @screenshot sketchy: 360x182 182
// @screenshot vapor: 360x170 170
