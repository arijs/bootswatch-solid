import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	table,
	tableDanger,
	tableDark,
	tableCell,
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
} from '../../../theme-contract/contents/contract.css'

const HoverVariants: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<table class={`${theme} ${table} ${tableElement} ${tableHover}`}>
				<thead class={`${theme} ${tableSection}`}>
					<tr class={`${theme} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Class</th>
						<th class={`${theme} ${tableHeaderCell}`}>Heading</th>
						<th class={`${theme} ${tableHeaderCell}`}>Heading</th>
					</tr>
				</thead>
				<tbody class={`${theme} ${tableSection}`}>
					<tr class={`${theme} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Default</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
					<tr class={`${theme} ${tablePrimary} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Primary</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
					<tr class={`${theme} ${tableSecondary} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Secondary</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
					<tr class={`${theme} ${tableSuccess} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Success</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
					<tr class={`${theme} ${tableDanger} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Danger</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
					<tr class={`${theme} ${tableWarning} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Warning</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
					<tr class={`${theme} ${tableInfo} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Info</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
					<tr class={`${theme} ${tableLight} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Light</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
					<tr class={`${theme} ${tableDark} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Dark</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

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
