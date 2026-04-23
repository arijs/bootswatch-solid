import type { Component } from 'solid-js'

const RadioButtons: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<fieldset class="mb-3">
				<legend>Radios buttons</legend>
				<div class="form-check">
					<input type="radio" name="radios" class="form-check-input pwhook-radio" id="exampleRadio1" />
					<label class="form-check-label" for="exampleRadio1">
						Default radio
					</label>
				</div>
				<div class="mb-3 form-check">
					<input type="radio" name="radios" class="form-check-input pwhook-radio" id="exampleRadio2" />
					<label class="form-check-label" for="exampleRadio2">
						Another radio
					</label>
				</div>
			</fieldset>
		</form>
	</div>
)

export default RadioButtons

// @screenshot *: 360x120 120
// @screenshot quartz: 360x123 123
