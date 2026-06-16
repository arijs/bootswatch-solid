import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import {
	table,
	tableBorderless,
	tableCell,
	tableDark,
	tableElement,
	tableHead,
	tableHeaderCell,
	tableRow,
	tableSection,
} from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'contents/basic',
	'contents/tables',
	'utilities',
]

const DarkBorderless: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<table class={`${theme} ${table} ${tableElement} ${tableDark} ${tableBorderless}`}>
				<thead class={`${theme} ${tableHead}`}>
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

export default DarkBorderless

// @screenshot *: 360x160 160
// @screenshot brite: 360x184 184
// @screenshot litera: 360x157 157
// @screenshot lux: 360x285 285
// @screenshot superhero: 360x148 148
// @screenshot yeti: 360x148 148
// @screenshot zephyr: 360x212 212
