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
