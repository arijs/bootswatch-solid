import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import {
	table,
	tableCell,
	tableDanger,
	tableDark,
	tableElement,
	tableHeaderCell,
	tableHover,
	tableInfo,
	tableLight,
	tablePrimary,
	tableRow,
	tableSecondary,
	tableSection,
	tableSuccess,
	tableWarning,
} from '../../../themes/bootstrap/contents/generated.css'

const HoverVariants: Component = () => (
	<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
		<table class={`${table} ${tableElement} ${tableHover}`}>
			<thead class={tableSection}>
				<tr class={tableRow}>
					<th class={tableHeaderCell}>Class</th>
					<th class={tableHeaderCell}>Heading</th>
					<th class={tableHeaderCell}>Heading</th>
				</tr>
			</thead>
			<tbody class={tableSection}>
				<tr class={tableRow}>
					<th class={tableHeaderCell}>Default</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>

				<tr class={`${tablePrimary} ${tableRow}`}>
					<th class={tableHeaderCell}>Primary</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
				<tr class={`${tableSecondary} ${tableRow}`}>
					<th class={tableHeaderCell}>Secondary</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
				<tr class={`${tableSuccess} ${tableRow}`}>
					<th class={tableHeaderCell}>Success</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
				<tr class={`${tableDanger} ${tableRow}`}>
					<th class={tableHeaderCell}>Danger</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
				<tr class={`${tableWarning} ${tableRow}`}>
					<th class={tableHeaderCell}>Warning</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
				<tr class={`${tableInfo} ${tableRow}`}>
					<th class={tableHeaderCell}>Info</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
				<tr class={`${tableLight} ${tableRow}`}>
					<th class={tableHeaderCell}>Light</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
				<tr class={`${tableDark} ${tableRow}`}>
					<th class={tableHeaderCell}>Dark</th>
					<td class={tableCell}>Cell</td>
					<td class={tableCell}>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverVariants

// @screenshot *: 360x410 410
// @screenshot brite: 360x463 463
// @screenshot litera: 360x402 402
// @screenshot lux: 360x717 717
// @screenshot morph: 360x400 400
// @screenshot sketchy: 360x420 420
// @screenshot superhero: 360x380 380
// @screenshot vapor: 360x400 400
// @screenshot yeti: 360x380 380
// @screenshot zephyr: 360x540 540
