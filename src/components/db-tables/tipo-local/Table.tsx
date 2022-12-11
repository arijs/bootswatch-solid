
import { For } from 'solid-js';
import TableRow from './TableRow';
import type { Component } from 'solid-js';
import type { OrcamentoPage } from '../../../types';
// import type { ThemeItem } from '../logic/themes';

const Table: Component<{
	page: OrcamentoPage
}> = (props) => {
	// const [currentTheme, setCurrentTheme] = createSignal<ThemeItem>(themeGetCurrent());
	// const tlist = createMemo(() => themeList)
	// const ctMemo = createMemo(() => {
	// 	const ct = currentTheme()
	// 	console.log(`ctMemo`, ct)
	// 	return ct
	// })
	// const list: { id: number, nome: string }[] = [
	// 	{
	// 		id: 1,
	// 		nome: 'Planeta',
	// 	},
	// 	{
	// 		id: 2,
	// 		nome: 'Continente',
	// 	},
	// 	{
	// 		id: 3,
	// 		nome: 'País',
	// 	},
	// 	{
	// 		id: 4,
	// 		nome: 'Região',
	// 	},
	// 	{
	// 		id: 5,
	// 		nome: 'Estado',
	// 	},
	// ]

	// createEffect(() => console.log(`common/db-tables/tipo-local/Table: props.page`, props.page))

	const onClickItem = (tipoLocal: any, ev: Event) => { //data: ThemeItem, 
		// ev.preventDefault()
		console.log(`db-tables/tipo-local onClickItem`, tipoLocal, ev)
	}

	return <table class="table table-striped">
		<thead>
			<tr>
				<th>Orçamento</th>
				<th>O.S.</th>
				<th>Execução</th>
				<th>Cliente</th>
				<th>Nome Fantasia</th>
				<th>Bairro</th>
				<th>Flags</th>
				<th>Vendedor 1</th>
				<th>Vendedor 2</th>
			</tr>
		</thead>
		<tbody class="table-group-divider">
			<For each={props.page.page}>
				{item => <TableRow tipoLocal={item} onClick={onClickItem} />}
			</For>
		</tbody>
	</table>

}

export default Table
