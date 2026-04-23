import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, table, tableBordered, tableSm } from '../../../themes/bootstrap/contents/generated.css'

const SmallBordered: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<table class={`table ${table} table-sm ${tableSm} table-bordered ${tableBordered}`}>
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

export default SmallBordered

// @screenshot *: 360x133 133
// @screenshot brite: 360x123 123
// @screenshot litera: 360x130 130
// @screenshot lux: 360x189 189
// @screenshot morph: 360x128 128
// @screenshot sketchy: 360x128 128
// @screenshot superhero: 360x121 121
// @screenshot vapor: 360x128 128
// @screenshot yeti: 360x121 121
// @screenshot zephyr: 360x153 153
