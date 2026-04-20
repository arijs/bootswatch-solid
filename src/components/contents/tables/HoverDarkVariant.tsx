import type { Component } from 'solid-js'

const HoverDarkVariant: Component = () => (
	<div class="bd-example container-fluid">
		<table class="table table-hover">
			<thead>
				<tr class="table-dark">
					<th>Dark</th>
					<th>Heading</th>
					<th>Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-dark">
					<th>Dark</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverDarkVariant

// @screenshot *: 360x120 120
// @screenshot lux: 360x141 141
