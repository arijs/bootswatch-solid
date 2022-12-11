
// import { For, createSignal, createMemo } from 'solid-js';
import type { Component } from 'solid-js';
// import type { ThemeItem } from '../logic/themes';

const TableRow: Component<{
	tipoLocal: {
		NR_ORCAMENTO: number
		NR_ORDSERV: number | null
		DT_EXECUCAO: string | null
		NM_CLIENTE: string
		NM_FANTASIA: string | null
		MN_BAIRRO: string | null
		CD_STATUS: string
		NM_VENDEDOR1: string | null
		NM_VENDEDOR2: string | null
	}
	onClick?: (data: any, ev: Event) => void
}> = (props) => {
	// const id = () => props.tipoLocal.id
	// const nome = () => props.tipoLocal.nome

	const onClickItem = (data: any, ev: Event) => { //data: ThemeItem, 
		// ev.preventDefault()
		props.onClick?.(data, ev)
	}

	const printDate = (s: string | null) => {
		const d = null == s ? undefined : new Date(s)
		return d ? [
			`${d.getDate()}`.padStart(2, `0`),
			`${d.getMonth() + 1}`.padStart(2, `0`),
		].concat([
			`${d.getFullYear()}`
		]).join(`/`) : `---`
	}

	return <tr onClick={[onClickItem, props.tipoLocal]}>
		<th>{props.tipoLocal.NR_ORCAMENTO}</th>
		<td>{props.tipoLocal.NR_ORDSERV}</td>
		<td>{printDate(props.tipoLocal.DT_EXECUCAO)}</td>
		<td>{props.tipoLocal.NM_CLIENTE}</td>
		<td>{props.tipoLocal.NM_FANTASIA}</td>
		<td>{props.tipoLocal.MN_BAIRRO}</td>
		<td>{props.tipoLocal.CD_STATUS}</td>
		<td>{props.tipoLocal.NM_VENDEDOR1}</td>
		<td>{props.tipoLocal.NM_VENDEDOR2}</td>
	</tr>

}

export default TableRow
