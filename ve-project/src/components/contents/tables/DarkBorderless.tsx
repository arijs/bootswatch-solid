import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import {
	table,
	tableBorderless,
	tableCell,
	tableDark,
	tableElement,
	tableHeaderCell,
	tableRow,
	tableSection,
} from '../../../themes/bootstrap/contents/generated.css'

const DarkBorderless: Component = () => (
	<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
		<table class={`${table} ${tableElement} ${tableDark} ${tableBorderless}`}>
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
					<td class={tableCell} colspan="2">
						Larry the Bird
					</td>
					<td class={tableCell}>@twitter</td>
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
