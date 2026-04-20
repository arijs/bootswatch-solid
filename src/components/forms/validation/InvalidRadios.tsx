import type { Component } from 'solid-js'

const InvalidRadios: Component = () => (
	<div class="bd-example container-fluid">
		<form class="row g-3">
			<div class="col-md-6">
				<div class="form-check">
					<input
						class="form-check-input is-invalid"
						type="radio"
						name="radioGroup"
						value=""
						id="invalidRadio3"
						required
					/>
					<label class="form-check-label" for="invalidRadio3">
						Agree to terms and conditions
					</label>
					<div class="invalid-feedback">You must agree before submitting.</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-check">
					<input
						class="form-check-input is-invalid"
						type="radio"
						name="radioGroup"
						value=""
						id="invalidRadio4"
						required
						checked
					/>
					<label class="form-check-label" for="invalidRadio4">
						Do NOT Agree to terms and conditions
					</label>
					<div class="invalid-feedback">You must agree before submitting.</div>
				</div>
			</div>
		</form>
	</div>
)

export default InvalidRadios

// @screenshot bootstrap: 360x134 134
