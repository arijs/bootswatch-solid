import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	table,
	tableCell,
	tableElement,
	tableHeaderCell,
	tableHover,
	tableRow,
	tableSecondary,
	tableSection,
} from '../../../theme-contract/contents/contract.css'

const HoverSecondaryVariant: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<table class={`${theme} ${table} ${tableElement} ${tableHover} pwhook-table-hover`}>
				<thead class={`${theme} ${tableSection}`}>
					<tr class={`${theme} ${tableSecondary} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Secondary</th>
						<th class={`${theme} ${tableHeaderCell}`}>Heading</th>
						<th class={`${theme} ${tableHeaderCell}`}>Heading</th>
					</tr>
				</thead>
				<tbody class={`${theme} ${tableSection}`}>
					<tr class={`${theme} ${tableSecondary} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>Secondary</th>
						<td class={`${theme} ${tableCell}`}>Cell</td>
						<td class={`${theme} ${tableCell}`}>Cell</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default HoverSecondaryVariant

// @screenshot *: 360x120 120
// @screenshot lux: 360x141 141
