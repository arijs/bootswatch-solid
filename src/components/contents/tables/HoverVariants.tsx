import type { Component } from 'solid-js'

const HoverVariants: Component = () => (
	<div class="bd-example container-fluid">
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Class</th>
					<th>Heading</th>
					<th>Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Default</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>

				<tr class="table-primary">
					<th>Primary</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class="table-secondary">
					<th>Secondary</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class="table-success">
					<th>Success</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class="table-danger">
					<th>Danger</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class="table-warning">
					<th>Warning</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class="table-info">
					<th>Info</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class="table-light">
					<th>Light</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class="table-dark">
					<th>Dark</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverVariants
