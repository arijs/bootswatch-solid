import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import {
	table,
	tableCell,
	tableElement,
	tableHeaderCell,
	tableHover,
	tableLight,
	tableRow,
	tableSection,
} from '../../../themes/bootstrap/contents/generated.css'

const HoverLightVariant: Component = () => (
	<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
		<table class={`${table} ${tableElement} ${tableHover} pwhook-table-hover`}>
			<thead class={tableSection}>
				<tr class={`${tableLight} ${tableRow}`}>
					<th class={tableHeaderCell}>Light</th>
					<th class={tableHeaderCell}>Heading</th>
					<th class={tableHeaderCell}>Heading</th>
				</tr>
			</thead>
			<tbody class={tableSection}>
				<tr class={`${tableLight} ${tableRow}`}>
					<th class={tableHeaderCell}>Light</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverLightVariant

// @screenshot *: 360x120 120
// @screenshot lux: 360x141 141
