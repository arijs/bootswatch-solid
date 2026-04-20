import type { Component } from 'solid-js'

const ContextualInfoListGroup: Component = () => (
	<div class="bd-example container-fluid">
		<div class="list-group">
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class="list-group-item list-group-item-action list-group-item-info"
			>
				A simple info list group item
			</a>
		</div>
	</div>
)

export default ContextualInfoListGroup

// @screenshot *: 360x120 120

