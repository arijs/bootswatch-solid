import type { Component } from 'solid-js'

const DangerAlert: Component = () => (
	<div class="bd-example container-fluid">
		<div class="alert alert-danger alert-dismissible fade show">
			A simple danger alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
		</div>
	</div>
)

export default DangerAlert

// @screenshot *: 360x120 120
