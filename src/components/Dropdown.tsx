
import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js';
import isChildOf from '@arijs/frontend/client/dom/is-child-of';
import Menu from './Menu';
import { classes } from '../logic/classes';
import type { Component } from 'solid-js';
import type { ClassArg } from '../logic/classes';
import type { MenuProps } from './Menu';

export type DropdownProps = {
	'class'?: ClassArg | undefined
	classMenuButton?: ClassArg | undefined
	classMenuList?: ClassArg | undefined
	labelEmpty?: string | undefined
}

const Dropdown: Component<DropdownProps & MenuProps> = (props) => {
	let elButton: any
	const ctSelected = createMemo(() => props.items.find(t => t.value === props.selectedValue))
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

	return <div class={classes("dropdown", props.class)}>
		<button ref={elButton} class={classes("btn btn-outline-light dropdown-toggle d-flex flex-row justify-content-center align-items-center", { show: dropOpen() }, props.classMenuButton)} type="button" aria-expanded="false">
			{/* <Spinner /> class="ms-3" */}
			<span>{ctSelected()?.label || (props.labelEmpty ?? '---')}</span>
		</button>
		<div class="position-relative">
			<Menu
				class={classes("position-absolute top-0 end-0 w-100", { show: dropOpen() }, props.classMenuList)}
				items={props.items}
				selectedValue={props.selectedValue}
				onClickItem={props.onClickItem}
			/>
		</div>
	</div>

}

export default Dropdown
