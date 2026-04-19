import isChildOf from '@arijs/frontend/client/dom/is-child-of'
import type { Component } from 'solid-js'
import { createMemo, createSignal, onSettled } from 'solid-js'
import { classes } from '../logic/classes'
import { signalTheme, themeList } from '../logic/themes'
import ThemeMenu from './ThemeMenu'

const ThemeDropdown: Component = () => {
	let elButton: HTMLButtonElement | undefined
	const ctSelected = createMemo(() => themeList.find((t) => t.href === signalTheme().href))
	const [dropOpen, setDropOpen] = createSignal(false)

	onSettled(() => {
		const docClick = (e: Event) => {
			const isButton = isChildOf(e.target, elButton)
			console.log(`ThemeDropdown: doc click`, { isButton })
			setDropOpen(isButton ? !dropOpen() : false)
		}
		window.document.documentElement.addEventListener('click', docClick, false)
		return () => window.document.documentElement.removeEventListener('click', docClick, false)
	})

	return (
		<div class="dropdown">
			<button
				ref={elButton}
				class={classes(
					'btn btn-secondary dropdown-toggle d-flex flex-row justify-content-center align-items-center',
					{ show: dropOpen() },
				)}
				type="button"
				aria-expanded="false"
			>
				{/* <Spinner /> */}
				<span class="ms-3">{ctSelected()?.name || '-- nenhum tema selecionado --'}</span>
			</button>
			<div class="position-relative">
				<ThemeMenu
					class={classes('position-absolute top-0 end-0 w-100', { show: dropOpen() })}
				/>
			</div>
		</div>
	)
}

export default ThemeDropdown
