import type { Component } from 'solid-js'

const DisabledFieldset: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<fieldset disabled aria-label="Disabled fieldset example">
				<div class="mb-3">
					<label for="disabledTextInput" class="form-label">
						Disabled input
					</label>
					<input
						type="text"
						id="disabledTextInput"
						class="form-control"
						placeholder="Disabled input"
					/>
				</div>
				<div class="mb-3">
					<label for="disabledSelect" class="form-label">
						Disabled select menu
					</label>
					<select id="disabledSelect" class="form-select">
						<option>Disabled select</option>
					</select>
				</div>
			</fieldset>
		</form>
	</div>
)

export default DisabledFieldset

// @screenshot *: 360x172 172
// @screenshot cyborg: 360x168 168
// @screenshot litera: 360x190 190
// @screenshot lux: 360x192 192
// @screenshot materia: 360x208 208
// @screenshot morph: 360x208 208
// @screenshot quartz: 360x228 228
// @screenshot sketchy: 360x176 176
// @screenshot slate: 360x196 196
// @screenshot superhero: 360x170 170
// @screenshot vapor: 360x168 168
// @screenshot yeti: 360x170 170
// @screenshot zephyr: 360x174 174
