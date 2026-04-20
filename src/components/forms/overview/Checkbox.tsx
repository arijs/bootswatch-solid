import type { Component } from 'solid-js'

const Checkbox: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<div class="mb-3 form-check">
				<input type="checkbox" class="form-check-input" id="exampleCheck1" />
				<label class="form-check-label" for="exampleCheck1">
					Check me out
				</label>
			</div>
		</form>
	</div>
)

export default Checkbox

// @screenshot *: 360x120 120
