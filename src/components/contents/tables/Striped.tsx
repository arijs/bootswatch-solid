import type { Component } from 'solid-js'

const Striped: Component = () => (
	<div class="bd-example container-fluid">
		<table class="table table-striped">
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

export default Striped

// @screenshot *: 360x164 164
// @screenshot brite: 360x187 187
// @screenshot litera: 360x161 161
// @screenshot lux: 360x285 285
// @screenshot morph: 360x160 160
// @screenshot sketchy: 360x168 168
// @screenshot superhero: 360x152 152
// @screenshot vapor: 360x160 160
// @screenshot yeti: 360x152 152
// @screenshot zephyr: 360x216 216
