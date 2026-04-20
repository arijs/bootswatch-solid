import type { Component } from 'solid-js'

const InvalidStateZip: Component = () => (
	<div class="bd-example container-fluid">
		<form class="row g-3">
			<div class="col-md-3 col-sm-6">
				<label for="validationServer04" class="form-label">
					State
				</label>
				<select class="form-select is-invalid" id="validationServer04" required>
					<option selected disabled value="">
						Choose...
					</option>
					<option>...</option>
				</select>
				<div class="invalid-feedback">Please select a valid state.</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<label for="validationServer05" class="form-label">
					Zip
				</label>
				<input
					type="text"
					class="form-control is-invalid"
					id="validationServer05"
					required
				/>
				<div class="invalid-feedback">Please provide a valid zip.</div>
			</div>
		</form>
	</div>
)

export default InvalidStateZip

// @screenshot bootstrap: 360x222 222
