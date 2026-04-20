import type { Component } from 'solid-js'

const HoverWarningVariant: Component = () => (
	<div class="bd-example container-fluid">
		<table class="table table-hover">
			<thead>
				<tr class="table-warning">
					<th>Warning</th>
					<th>Heading</th>
					<th>Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-warning">
					<th>Warning</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverWarningVariant

// @screenshot *: 360x120 120

