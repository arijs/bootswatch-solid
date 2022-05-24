
import { For, createSignal, createMemo } from 'solid-js';
import type { Component } from 'solid-js';
// import type { ThemeItem } from '../logic/themes';

const TableRow: Component = (props) => {
	const id = () => props.tipoLocal.id
	const nome = () => props.tipoLocal.nome

	const onClickItem = (data: any, ev: Event) => { //data: ThemeItem, 
		// ev.preventDefault()
		props.onClick?.(data, ev)
	}

	return <tr onClick={[onClickItem, props.tipoLocal]}>
		<th>{id()}</th>
		<td>{nome()}</td>
	</tr>

}

export default TableRow
