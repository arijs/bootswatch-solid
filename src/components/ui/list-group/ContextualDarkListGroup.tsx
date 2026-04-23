import type { Component } from 'solid-js'

const ContextualDarkListGroup: Component = () => (
	<div class="bd-example container-fluid">
		<div class="list-group">
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class="list-group-item list-group-item-action list-group-item-dark pwhook-list-group-item"
			>
				A simple dark list group item
			</a>
		</div>
	</div>
)

export default ContextualDarkListGroup

// @screenshot *: 360x120 120
