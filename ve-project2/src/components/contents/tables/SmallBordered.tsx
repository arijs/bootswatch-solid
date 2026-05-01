import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	table,
	tableBordered,
	tableCell,
	tableElement,
	tableHeaderCell,
	tableRow,
	tableSection,
	tableSm,
} from '../../../theme-contract/contents/contract.css'

const SmallBordered: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<table class={`${theme} ${table} ${tableElement} ${tableSm} ${tableBordered}`}>
				<thead class={`${theme} ${tableSection}`}>
					<tr class={`${theme} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>#</th>
						<th class={`${theme} ${tableHeaderCell}`}>First</th>
						<th class={`${theme} ${tableHeaderCell}`}>Last</th>
						<th class={`${theme} ${tableHeaderCell}`}>Handle</th>
					</tr>
				</thead>
				<tbody class={`${theme} ${tableSection}`}>
					<tr class={`${theme} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>1</th>
						<td class={`${theme} ${tableCell}`}>Mark</td>
						<td class={`${theme} ${tableCell}`}>Otto</td>
						<td class={`${theme} ${tableCell}`}>@mdo</td>
					</tr>
					<tr class={`${theme} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>2</th>
						<td class={`${theme} ${tableCell}`}>Jacob</td>
						<td class={`${theme} ${tableCell}`}>Thornton</td>
						<td class={`${theme} ${tableCell}`}>@fat</td>
					</tr>
					<tr class={`${theme} ${tableRow}`}>
						<th class={`${theme} ${tableHeaderCell}`}>3</th>
						<td class={`${theme} ${tableCell}`} colspan="2">
							Larry the Bird
						</td>
						<td class={`${theme} ${tableCell}`}>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default SmallBordered

// @screenshot *: 360x133 133
// @screenshot brite: 360x123 123
// @screenshot litera: 360x130 130
// @screenshot lux: 360x189 189
// @screenshot morph: 360x128 128
// @screenshot sketchy: 360x128 128
// @screenshot superhero: 360x121 121
// @screenshot vapor: 360x128 128
// @screenshot yeti: 360x121 121
// @screenshot zephyr: 360x153 153
