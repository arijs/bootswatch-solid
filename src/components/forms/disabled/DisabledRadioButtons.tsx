import type { Component } from 'solid-js'

const DisabledRadioButtons: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<fieldset class="mb-3">
				<legend>Disabled radios buttons</legend>
				<div class="form-check">
					<input
						type="radio"
						name="radios"
						class="form-check-input"
						id="disabledRadio1"
						disabled
					/>
					<label class="form-check-label" for="disabledRadio1">
						Disabled radio
					</label>
				</div>
				<div class="mb-3 form-check">
					<input
						type="radio"
						name="radios"
						class="form-check-input"
						id="disabledRadio2"
						disabled
					/>
					<label class="form-check-label" for="disabledRadio2">
						Another radio
					</label>
				</div>
			</fieldset>
		</form>
	</div>
)

export default DisabledRadioButtons
