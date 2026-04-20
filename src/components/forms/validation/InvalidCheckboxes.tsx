import type { Component } from 'solid-js'

const InvalidCheckboxes: Component = () => (
	<div class="bd-example container-fluid">
		<form class="row g-3">
			<div class="col-md-6">
				<div class="form-check">
					<input
						class="form-check-input is-invalid"
						type="checkbox"
						value=""
						id="invalidCheck3"
						required
					/>
					<label class="form-check-label" for="invalidCheck3">
						Agree to terms and conditions
					</label>
					<div class="invalid-feedback">You must agree before submitting.</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-check">
					<input
						class="form-check-input is-invalid"
						type="checkbox"
						value=""
						id="invalidCheck4"
						required
						checked
					/>
					<label class="form-check-label" for="invalidCheck4">
						Do NOT Agree to terms and conditions
					</label>
					<div class="invalid-feedback">You must agree before submitting.</div>
				</div>
			</div>
		</form>
	</div>
)

export default InvalidCheckboxes

// @screenshot *: 360x134 134

