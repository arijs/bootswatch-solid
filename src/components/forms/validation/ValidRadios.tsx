import type { Component } from 'solid-js'

const ValidRadios: Component = () => (
	<div class="bd-example container-fluid">
		<form class="row g-3">
			<div class="col-md-6">
				<div class="form-check">
					<input
						class="form-check-input is-valid"
						type="radio"
						name="radioGroup"
						value=""
						id="validRadio3"
						required
						checked
					/>
					<label class="form-check-label" for="validRadio3">
						Agree to terms and conditions
					</label>
					<div class="valid-feedback">You agreed before submitting.</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-check">
					<input
						class="form-check-input is-valid"
						type="radio"
						name="radioGroup"
						value=""
						id="validRadio4"
						required
					/>
					<label class="form-check-label" for="validRadio4">
						Do NOT Agree to terms and conditions
					</label>
					<div class="valid-feedback">You agreed before submitting.</div>
				</div>
			</div>
		</form>
	</div>
)

export default ValidRadios

// @screenshot *: 360x134 134
// @screenshot brite: 360x123 123
// @screenshot litera: 360x143 143
// @screenshot quartz: 360x166 166
