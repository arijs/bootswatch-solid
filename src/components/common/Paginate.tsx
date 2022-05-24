// import { pagesCurrent } from '@arijs/frontend/isomorphic/utils/pages'
import { pagesCurrent } from '../../logic/pages'
// https://github.com/arijs/front-end/blob/master/src/isomorphic/utils/pages.mjs

import { Index, Switch, Match, createSignal, createMemo } from 'solid-js';
import type { Component } from 'solid-js';
// import type { ThemeItem } from '../logic/themes';

const PageLink: Component = (props) => {
	const href = () => props.href
	const c = () => props.children

	return <Switch>
		<Match when={href()}>
			<li class="page-item">
				<a class="page-link" href={href()}>{c()}</a>
			</li>
		</Match>
		<Match when={true}>
			<li class="page-item active" aria-current="page">
				<span class="page-link">{c()}</span>
			</li>
		</Match>
	</Switch>
}

const PageLinkNum: Component = (props) => {
	const linkNum = () => props.linkNum
	const currentNum = () => props.currentNum
	const href = () => linkNum() === currentNum() ? null : `pg/${linkNum()}`
	const c = () => props.children

	return <PageLink href={href()}>{c()}</PageLink>
}

const PageItem: Component = (props) => {
	const linkNum = () => props.linkNum
	const currentNum = () => props.currentNum
	const lastNum = () => props.lastNum
	const disabled = () => linkNum() === currentNum()

	return <Switch>
		<Match when={lastNum() === 1}>
			<PageLinkNum linkNum={linkNum()} currentNum={currentNum()}>
				Página única
			</PageLinkNum>
		</Match>
		<Match when={linkNum() === 1}>
			<PageLinkNum linkNum={linkNum()} currentNum={currentNum()}>
				1 |&lt; Primeira
			</PageLinkNum>
		</Match>
		<Match when={linkNum() === lastNum()}>
			<PageLinkNum linkNum={linkNum()} currentNum={currentNum()}>
				Última &gt;| {linkNum()}
			</PageLinkNum>
		</Match>
		<Match when={linkNum() + 1 === currentNum()}>
			<PageLinkNum linkNum={linkNum()} currentNum={currentNum()}>
				{linkNum()} &lt; Anterior
			</PageLinkNum>
		</Match>
		<Match when={linkNum() - 1 === currentNum()}>
			<PageLinkNum linkNum={linkNum()} currentNum={currentNum()}>
				Próxima &gt; {linkNum()}
			</PageLinkNum>
		</Match>
		<Match when={true}>
			<PageLinkNum linkNum={linkNum()} currentNum={currentNum()}>
				{linkNum()}
			</PageLinkNum>
		</Match>
	</Switch>
}

const Paginate: Component = (props) => {
	const current = () => props.current
	const last = () => props.last
	const pageList = () => {
		const c = current()
		const l = last()
		const pl = pagesCurrent(c, l, [1, 2, 3, 5, 7, 10])
		// console.log(`PageList:`, c, l, pl)
		return pl
	}

	const onClickItem = (data: any, ev: Event) => { //data: ThemeItem, 
		// ev.preventDefault()
		props.onClick?.(data, ev)
	}

	return <nav aria-label="Paginação da lista">
		<ul class="pagination flex-wrap">
			<Index each={pageList()}>
				{linkNum => <PageItem linkNum={linkNum()} currentNum={current()} lastNum={last()} />}
			</Index>
			{/* <li class="page-item disabled" classList={{ disabled: current() === 1 }}>
				<PageLinkNum currentNum={current()} linkNum={1}>|&lt; Primeira</span>
			</li>
			<li class="page-item"><a class="page-link" href="#">1</a></li>
			<li class="page-item active" aria-current="page">
				<span class="page-link">2</span>
			</li>
			<li class="page-item"><a class="page-link" href="#">3</a></li>
			<li class="page-item">
				<a class="page-link" href="#">Next</a>
			</li> */}
		</ul>
	</nav>

}

export default Paginate
