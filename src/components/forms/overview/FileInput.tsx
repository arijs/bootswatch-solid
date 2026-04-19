import type { Component } from 'solid-js'

const FileInput: Component = () => (
	<div class="bd-example container-fluid">
		<form>
			<div class="mb-3">
				<label class="form-label" for="customFile">
					Upload
				</label>
				<input type="file" class="form-control" id="customFile" />
			</div>
		</form>
	</div>
)

export default FileInput
