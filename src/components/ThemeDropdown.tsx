
import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js';
import isChildOf from '@arijs/frontend/client/dom/is-child-of';
import {
	themeList,
	signalTheme,
} from '../logic/themes';
import ThemeMenu from './ThemeMenu';
import { classes } from '../logic/classes';
import type { Component } from 'solid-js';

const ThemeDropdown: Component = () => {
	let elDropdown: any
	const ctSelected = createMemo(() => themeList.find(t => t.href === signalTheme().href))
	const [dropOpen, setDropOpen] = createSignal(false)

	createEffect(() => {
		const docClick = (e: Event) => {
			const isInside = isChildOf(e.target, elDropdown)
			console.log(`ThemeDropdown: doc click`, { isInside })
			setDropOpen(isInside ? !dropOpen() : false)
		}
		window.document.documentElement.addEventListener('click', docClick, false)
		onCleanup(() => window.document.documentElement.removeEventListener('click', docClick, false))
	})

	return <div class="dropdown" ref={elDropdown}>
		<button class={classes("btn btn-secondary dropdown-toggle", { show: dropOpen() })} type="button" aria-expanded="false">
			{ctSelected()?.name || '-- nenhum tema selecionado --'}
		</button>
		<div class="position-relative">
			<ThemeMenu class={classes("position-absolute top-0 start-0 w-100", { show: dropOpen() })} />
		</div>
	</div>

}

export default ThemeDropdown
