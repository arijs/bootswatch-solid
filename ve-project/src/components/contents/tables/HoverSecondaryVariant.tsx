import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, pwhookTableHover, table, tableHover, tableSecondary } from '../../../themes/bootstrap/contents/generated.css'

const HoverSecondaryVariant: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<table class={`table ${table} table-hover ${tableHover} pwhook-table-hover ${pwhookTableHover}`}>
			<thead>
				<tr class={`table-secondary ${tableSecondary}`}>
					<th>Secondary</th>
					<th>Heading</th>
					<th>Heading</th>
				</tr>
			</thead>
			<tbody>
				<tr class={`table-secondary ${tableSecondary}`}>
					<th>Secondary</th>
					<td>Cell</td>
					<td>Cell</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default HoverSecondaryVariant

// @screenshot *: 360x120 120
// @screenshot lux: 360x141 141
