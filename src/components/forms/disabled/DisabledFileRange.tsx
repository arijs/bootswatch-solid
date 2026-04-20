import type { Component } from 'solid-js'

const DisabledFileRange: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<div class="mb-3">
				<label class="form-label" for="disabledCustomFile">
					Upload
				</label>
				<input type="file" class="form-control" id="disabledCustomFile" disabled />
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
					disabled
				/>
			</div>
		</form>
	</div>
)

export default DisabledFileRange

// @screenshot bootstrap: 360x148 148
