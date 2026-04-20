import type { Component } from 'solid-js'

const ContextualDefaultListGroup: Component = () => (
	<div class="bd-example container-fluid">
		<div class="list-group">
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class="list-group-item list-group-item-action"
			>
				A simple default list group item
			</a>
		</div>
	</div>
)

export default ContextualDefaultListGroup

// @screenshot *: 360x120 120
