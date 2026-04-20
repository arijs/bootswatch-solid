import type { Component } from 'solid-js'

const DefaultListGroup: Component = () => (
	<div class="bd-example container-fluid">
		<ul class="list-group">
			<li class="list-group-item disabled" aria-disabled="true">
				A disabled item
			</li>
			<li class="list-group-item">A second item</li>
			<li class="list-group-item">A third item</li>
			<li class="list-group-item">A fourth item</li>
			<li class="list-group-item">And a fifth one</li>
		</ul>
	</div>
)

export default DefaultListGroup

// @screenshot *: 360x206 206
