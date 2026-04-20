import type { Component } from 'solid-js'

const HoverDangerVariant: Component = () => (
	<div class="bd-example container-fluid">
		<table class="table table-hover">
			<thead>
				<tr class="table-danger">
					<th>Danger</th>
					<th>Heading</th>
					<th>Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-danger">
					<th>Danger</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverDangerVariant

// @screenshot *: 360x120 120
// @screenshot lux: 360x141 141
