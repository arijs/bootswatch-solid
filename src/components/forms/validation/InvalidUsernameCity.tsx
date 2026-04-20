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

// @screenshot *: 360x222 222
// @screenshot brite: 360x217 217
// @screenshot cyborg: 360x218 218
// @screenshot litera: 360x244 244
// @screenshot lux: 360x242 242
// @screenshot materia: 360x258 258
// @screenshot morph: 360x258 258
// @screenshot quartz: 360x278 278
// @screenshot sketchy: 360x226 226
// @screenshot slate: 360x246 246
// @screenshot superhero: 360x220 220
// @screenshot vapor: 360x218 218
// @screenshot yeti: 360x220 220
// @screenshot zephyr: 360x224 224
