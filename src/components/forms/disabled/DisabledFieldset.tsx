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
