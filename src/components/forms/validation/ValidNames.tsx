import type { Component } from 'solid-js'

const ValidNames: Component = () => (
	<div class="bd-example container-fluid">
		<form class="row g-3">
			<div class="col-md-6">
				<label for="validationServer01" class="form-label">
					First name
				</label>
				<input
					type="text"
					class="form-control is-valid"
					id="validationServer01"
					value="Mark"
					required
				/>
				<div class="valid-feedback">Looks good!</div>
			</div>
			<div class="col-md-6">
				<label for="validationServer02" class="form-label">
					Last name
				</label>
				<input
					type="text"
					class="form-control is-valid"
					id="validationServer02"
					value="Otto"
					required
				/>
				<div class="valid-feedback">Looks good!</div>
			</div>
		</form>
	</div>
)

export default ValidNames
