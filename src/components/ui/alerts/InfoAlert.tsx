import type { Component } from 'solid-js'

const InfoAlert: Component = () => (
	<div class="bd-example container-fluid">
		<div class="alert alert-info alert-dismissible fade show">
			A simple info alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
				an example link
			</a>
			. Give it a click if you like.
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
		</div>
	</div>
)

export default InfoAlert

// @screenshot bootstrap: 360x120 120
