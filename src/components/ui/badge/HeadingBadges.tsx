import type { Component } from 'solid-js'

const HeadingBadges: Component = () => (
	<div class="bd-example container-fluid">
		<p class="h1">
			Example heading <span class="badge bg-primary">New</span>
		</p>
		<p class="h2">
			Example heading <span class="badge bg-secondary">New</span>
		</p>
		<p class="h3">
			Example heading <span class="badge bg-success">New</span>
		</p>
		<p class="h4">
			Example heading <span class="badge bg-danger">New</span>
		</p>
		<p class="h5">
			Example heading <span class="badge bg-warning text-dark">New</span>
		</p>
		<p class="h6">
			Example heading <span class="badge bg-info text-dark">New</span>
		</p>
		<p class="h6">
			Example heading <span class="badge bg-light text-dark">New</span>
		</p>
		<p class="h6">
			Example heading <span class="badge bg-dark">New</span>
		</p>
	</div>
)

export default HeadingBadges
