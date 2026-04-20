import type { Component } from 'solid-js'

const ValidCheckboxes: Component = () => (
	<div class="bd-example container-fluid">
		<form class="row g-3">
			<div class="col-md-6">
				<div class="form-check">
					<input
						class="form-check-input is-valid"
						type="checkbox"
						value=""
						id="validCheck3"
						required
						checked
					/>
					<label class="form-check-label" for="validCheck3">
						Agree to terms and conditions
					</label>
					<div class="valid-feedback">You agreed before submitting.</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-check">
					<input
						class="form-check-input is-valid"
						type="checkbox"
						value=""
						id="validCheck4"
						required
					/>
					<label class="form-check-label" for="validCheck4">
						Do NOT Agree to terms and conditions
					</label>
					<div class="valid-feedback">You agreed before submitting.</div>
				</div>
			</div>
		</form>
	</div>
)

export default ValidCheckboxes

// @screenshot *: 360x134 134
// @screenshot brite: 360x123 123
// @screenshot litera: 360x143 143
// @screenshot quartz: 360x166 166
