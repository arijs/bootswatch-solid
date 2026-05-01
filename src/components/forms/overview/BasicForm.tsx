import type { Component } from 'solid-js'

const BasicForm: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">
					Email address
				</label>
				<input
					type="email"
					class="form-control pwhook-form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
				<div id="emailHelp" class="form-text">
					We'll never share your email with anyone else.
				</div>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">
					Password
				</label>
				<input
					type="password"
					class="form-control pwhook-form-control"
					id="exampleInputPassword1"
				/>
			</div>
		</form>
	</div>
)

export default BasicForm

// @screenshot *: 360x181 181
// @screenshot brite: 360x179 179
// @screenshot cyborg: 360x177 177
// @screenshot litera: 360x201 201
// @screenshot lux: 360x201 201
// @screenshot materia: 360x217 217
// @screenshot morph: 360x217 217
// @screenshot quartz: 360x221 221
// @screenshot sketchy: 360x185 185
// @screenshot slate: 360x205 205
// @screenshot superhero: 360x179 179
// @screenshot vapor: 360x177 177
// @screenshot yeti: 360x179 179
// @screenshot zephyr: 360x183 183
