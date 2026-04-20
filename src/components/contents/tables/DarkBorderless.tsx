import type { Component } from 'solid-js'

const DarkBorderless: Component = () => (
	<div class="bd-example container-fluid">
		<table class="table table-dark table-borderless">
			<thead>
				<tr>
					<th>#</th>
					<th>First</th>
					<th>Last</th>
					<th>Handle</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th>2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th>3</th>
					<td colspan="2">Larry the Bird</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default DarkBorderless

// @screenshot *: 360x160 160

