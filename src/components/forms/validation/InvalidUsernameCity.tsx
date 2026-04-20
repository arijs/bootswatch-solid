import type { Component } from 'solid-js'

const InvalidUsernameCity: Component = () => (
	<div class="bd-example container-fluid">
		<form class="row g-3">
			<div class="col-md-6">
				<label for="validationServerUsername" class="form-label">
					Username
				</label>
				<div class="input-group has-validation is-invalid">
					<span class="input-group-text" id="inputGroupPrepend3">
						@
					</span>
					<input
						type="text"
						class="form-control is-invalid"
						id="validationServerUsername"
						aria-describedby="inputGroupPrepend3"
						required
					/>
				</div>
				<div class="invalid-feedback">Please choose a username.</div>
			</div>
			<div class="col-md-6">
				<label for="validationServer03" class="form-label">
					City
				</label>
				<input
					type="text"
					class="form-control is-invalid"
					id="validationServer03"
					required
				/>
				<div class="invalid-feedback">Please provide a valid city.</div>
			</div>
		</form>
	</div>
)

export default InvalidUsernameCity

// @screenshot bootstrap: 360x222 222
