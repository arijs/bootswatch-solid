import type { Component } from 'solid-js'

const DisabledCheckbox: Component = () => (
	<div class="bd-example container-fluid">
		<form>
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
		</form>
	</div>
)

export default DisabledCheckbox

// @screenshot bootstrap: 360x120 120
