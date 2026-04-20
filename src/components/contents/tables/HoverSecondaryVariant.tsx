import type { Component } from 'solid-js'

const HoverSecondaryVariant: Component = () => (
	<div class="bd-example container-fluid">
		<table class="table table-hover">
			<thead>
				<tr class="table-secondary">
					<th>Secondary</th>
					<th>Heading</th>
					<th>Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-secondary">
					<th>Secondary</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverSecondaryVariant

// @screenshot *: 360x120 120
// @screenshot lux: 360x141 141
