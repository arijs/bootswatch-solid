import type { Component } from 'solid-js'

const RangeInput: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<div class="mb-3">
				<label for="customRange3" class="form-label">
					Example range
				</label>
				<input
					type="range"
					class="form-range"
					min="0"
					max="5"
					step="0.5"
					id="customRange3"
				/>
			</div>
		</form>
	</div>
)

export default RangeInput
