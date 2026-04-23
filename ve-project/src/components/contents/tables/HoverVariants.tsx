import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, table, tableDanger, tableDark, tableHover, tableInfo, tableLight, tablePrimary, tableSecondary, tableSuccess, tableWarning } from '../../../themes/bootstrap/contents/generated.css'

const HoverVariants: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<table class={`table ${table} table-hover ${tableHover}`}>
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

				<tr class={`table-primary ${tablePrimary}`}>
					<th>Primary</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class={`table-secondary ${tableSecondary}`}>
					<th>Secondary</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class={`table-success ${tableSuccess}`}>
					<th>Success</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class={`table-danger ${tableDanger}`}>
					<th>Danger</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class={`table-warning ${tableWarning}`}>
					<th>Warning</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class={`table-info ${tableInfo}`}>
					<th>Info</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class={`table-light ${tableLight}`}>
					<th>Light</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
				<tr class={`table-dark ${tableDark}`}>
					<th>Dark</th>
					<td>Cell</td>
					<td>Cell</td>
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
