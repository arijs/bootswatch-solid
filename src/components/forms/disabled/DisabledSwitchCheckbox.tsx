import type { Component } from 'solid-js'

const DisabledSwitchCheckbox: Component = () => (
	<div class="bd-example container-fluid">
		<form>
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
		</form>
	</div>
)

export default DisabledSwitchCheckbox

// @screenshot bootstrap: 360x120 120
