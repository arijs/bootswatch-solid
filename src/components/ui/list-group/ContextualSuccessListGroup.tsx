import type { Component } from 'solid-js'

const ContextualSuccessListGroup: Component = () => (
	<div class="bd-example container-fluid">
		<div class="list-group">
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class="list-group-item list-group-item-action list-group-item-success"
			>
				A simple success list group item
			</a>
		</div>
	</div>
)

export default ContextualSuccessListGroup

// @screenshot *: 360x120 120

