import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'

const DisabledForms: Component = () => (
	<article class="my-3" id="disabled-forms">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Disabled forms</h3>
			<DocLink href="/forms/disabled" />
		</div>

		<div>
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
						<div class="mb-3">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									id="disabledFieldsetCheck"
									disabled
								/>
								<label class="form-check-label" for="disabledFieldsetCheck">
									Can't check this
								</label>
							</div>
						</div>
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
						<div class="mb-3">
							<label class="form-label" for="disabledCustomFile">
								Upload
							</label>
							<input
								type="file"
								class="form-control"
								id="disabledCustomFile"
								disabled
							/>
						</div>
						<div class="mb-3 form-check form-switch">
							<input
								class="form-check-input"
								type="checkbox"
								id="disabledSwitchCheckChecked"
								checked
								disabled
							/>
							<label class="form-check-label" for="disabledSwitchCheckChecked">
								Disabled checked switch checkbox input
							</label>
						</div>
						<div class="mb-3">
							<label for="disabledRange" class="form-label">
								Disabled range
							</label>
							<input
								type="range"
								class="form-range"
								min="0"
								max="5"
								step="0.5"
								id="disabledRange"
							/>
						</div>
						<button type="submit" class="btn btn-primary">
							Submit
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	</article>
)

export default DisabledForms
