import type { Component } from 'solid-js'

const SwitchCheckbox: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<div class="mb-3 form-check form-switch">
				<input
					class="form-check-input"
					type="checkbox"
					id="flexSwitchCheckChecked"
					checked
				/>
				<label class="form-check-label" for="flexSwitchCheckChecked">
					Checked switch checkbox input
				</label>
			</div>
		</form>
	</div>
)

export default SwitchCheckbox

// @screenshot *: 360x120 120

