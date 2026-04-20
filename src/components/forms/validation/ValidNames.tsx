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
