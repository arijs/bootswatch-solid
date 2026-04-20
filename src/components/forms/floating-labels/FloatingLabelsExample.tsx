import type { Component } from 'solid-js'

const FloatingLabelsExample: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<div class="form-floating mb-3">
				<input
					type="email"
					class="form-control"
					id="floatingInput"
					placeholder="name@example.com"
				/>
				<label for="floatingInput">Email address</label>
			</div>
			<div class="form-floating">
				<input
					type="password"
					class="form-control"
					id="floatingPassword"
					placeholder="Password"
				/>
				<label for="floatingPassword">Password</label>
			</div>
		</form>
	</div>
)

export default FloatingLabelsExample

// @screenshot *: 360x132 208
// @screenshot brite: 360x136 136
// @screenshot cyborg: 360x128 128
// @screenshot lux: 360x120 120
// @screenshot materia: 360x128 128
// @screenshot morph: 360x120 120
// @screenshot quartz: 360x148 148
// @screenshot sketchy: 360x136 136
// @screenshot vapor: 360x120 120
