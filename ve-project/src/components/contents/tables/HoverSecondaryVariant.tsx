import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, table, tableHover, tableSecondary, tableElement, tableSection, tableRow, tableCell, tableHeaderCell } from '../../../themes/bootstrap/contents/generated.css'

const HoverSecondaryVariant: Component = () => (
	<div class={`bd-example ${bdExample} ${containerFluid} ${bsTheme} ${body}`}>
		<table class={`${table} ${tableElement} ${tableHover} pwhook-table-hover`}>
			<thead class={tableSection}>
				<tr class={`${tableSecondary} ${tableRow}`}>
					<th class={tableHeaderCell}>Secondary</th>
					<th class={tableHeaderCell}>Heading</th>
					<th class={tableHeaderCell}>Heading</th>
				</tr>
			</thead>
			<tbody class={tableSection}>
				<tr class={`${tableSecondary} ${tableRow}`}>
					<th class={tableHeaderCell}>Secondary</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverSecondaryVariant

// @screenshot *: 360x120 120
// @screenshot lux: 360x141 141


