import type { Component } from 'solid-js'

const ContextualWarningListGroup: Component = () => (
	<div class="bd-example container-fluid">
		<div class="list-group">
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class="list-group-item list-group-item-action list-group-item-warning pwhook-list-group-item"
			>
				A simple warning list group item
			</a>
		</div>
	</div>
)

export default ContextualWarningListGroup

// @screenshot *: 360x120 120
