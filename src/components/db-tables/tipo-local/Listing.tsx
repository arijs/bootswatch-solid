import { createSignal, createMemo, createEffect, createResource, ErrorBoundary } from 'solid-js'
import { inspectObj } from '@arijs/frontend/isomorphic/utils/inspect'
import Table from './Table'
import Paginate from '../../common/Paginate'
import Spinner from '../../Spinner'
import type { Component } from 'solid-js'
import type { OrcamentoPage } from '../../../types'
import Wrapper from '../../common/Wrapper'
import { wrapperBgColor, wrapperStyle, wrapperTextColor } from '../../../logic/wrapperStyle'


const fetchPage = async (pg: number): Promise<OrcamentoPage> =>
	(await fetch(`/api/orcamentos-vendedores?pg=${pg}`)).json();

const Listing: Component = () => {
	const [rowCount, setRowCount] = createSignal(0)
	const [current, setCurrent] = createSignal(1)
	const last = createMemo(() => Math.ceil(rowCount() / 20))
	const [page] = createResource(current, fetchPage)
	const onPageClick = (pg: number, ev: Event) => {
		setCurrent(pg)
		ev.preventDefault()
	}

	createEffect(() => {
		const result = page()
		if (result) setRowCount(result.count)
	})

	// headerText="Orçamentos e vendedores"
	return <Wrapper
		style={wrapperStyle()}
		bgColor={wrapperBgColor()}
		textColor={wrapperTextColor()}
	>
		<ErrorBoundary fallback={(error: any) => <div class="alert alert-danger" role="alert">
			<h4 class="alert-heading">Erro ao carregar os dados</h4>
			<pre>{JSON.stringify(inspectObj(error, 1, 64))}</pre>
		</div>}>
			{page.loading && <Spinner />}
			{page.latest && <Table page={page()} style={wrapperStyle()} bgColor={wrapperBgColor()} />}
			<Paginate current={current()} last={last()} onPageClick={onPageClick} />
		</ErrorBoundary>
	</Wrapper>

}

export default Listing
