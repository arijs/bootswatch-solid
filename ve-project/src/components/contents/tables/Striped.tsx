import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, table, tableStriped, tableElement, tableSection, tableRow, tableCell, tableHeaderCell } from '../../../themes/bootstrap/contents/generated.css'

const Striped: Component = () => (
	<div class={`bd-example ${bdExample} ${containerFluid} ${bsTheme} ${body}`}>
		<table class={`${table} ${tableElement} ${tableStriped}`}>
			<thead class={tableSection}>
				<tr class={tableRow}>
					<th class={tableHeaderCell}>#</th>
					<th class={tableHeaderCell}>First</th>
					<th class={tableHeaderCell}>Last</th>
					<th class={tableHeaderCell}>Handle</th>
				</tr>
			</thead>
			<tbody class={tableSection}>
				<tr class={tableRow}>
					<th class={tableHeaderCell}>1</th>
					<td class={tableCell}>Mark</td>
					<td class={tableCell}>Otto</td>
					<td class={tableCell}>@mdo</td>
				</tr>
				<tr class={tableRow}>
					<th class={tableHeaderCell}>2</th>
					<td class={tableCell}>Jacob</td>
					<td class={tableCell}>Thornton</td>
					<td class={tableCell}>@fat</td>
				</tr>
				<tr class={tableRow}>
					<th class={tableHeaderCell}>3</th>
					<td class={tableCell} colspan="2">Larry the Bird</td>
					<td class={tableCell}>@twitter</td>
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


