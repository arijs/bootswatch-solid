import type { Component } from 'solid-js'

const HoverInfoVariant: Component = () => (
	<div class="bd-example container-fluid">
		<table class="table table-hover">
			<thead>
				<tr class="table-info">
					<th>Info</th>
					<th>Heading</th>
					<th>Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-info">
					<th>Info</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverInfoVariant

// @screenshot *: 360x120 120

