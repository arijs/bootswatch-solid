import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, table, tableBorderless, tableDark } from '../../../themes/bootstrap/contents/generated.css'

const DarkBorderless: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<table class={`table ${table} table-dark ${tableDark} table-borderless ${tableBorderless}`}>
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
// @screenshot brite: 360x184 184
// @screenshot litera: 360x157 157
// @screenshot lux: 360x285 285
// @screenshot superhero: 360x148 148
// @screenshot yeti: 360x148 148
// @screenshot zephyr: 360x212 212
