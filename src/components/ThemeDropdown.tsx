
import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js';
import isChildOf from '@arijs/frontend/client/dom/is-child-of';
import {
	themeList,
	signalTheme,
} from '../logic/themes';
import ThemeMenu from './ThemeMenu';
import { classes } from '../logic/classes';
import type { Component } from 'solid-js';
import Spinner from './Spinner';

const ThemeDropdown: Component = () => {
	let elButton: any
	const ctSelected = createMemo(() => themeList.find(t => t.href === signalTheme().href))
	const [dropOpen, setDropOpen] = createSignal(false)

	createEffect(() => {
		const docClick = (e: Event) => {
			const isButton = isChildOf(e.target, elButton)
			// console.log(`ThemeDropdown: doc click`, { isButton })
			setDropOpen(isButton ? !dropOpen() : false)
		}
		window.document.documentElement.addEventListener('click', docClick, false)
		onCleanup(() => window.document.documentElement.removeEventListener('click', docClick, false))
	})

	return <div class="dropdown">
		<button ref={elButton} class={classes("btn btn-outline-light dropdown-toggle d-flex flex-row justify-content-center align-items-center", { show: dropOpen() })} type="button" aria-expanded="false">
			{/* <Spinner /> class="ms-3" */}
			<span>{ctSelected()?.name || '-- nenhum tema selecionado --'}</span>
		</button>
		<div class="position-relative">
			<ThemeMenu class={classes("position-absolute top-0 end-0 w-100", { show: dropOpen() })} />
		</div>
	</div>

}

export default ThemeDropdown
