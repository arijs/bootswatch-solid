
import { For, Show } from 'solid-js';
import { classes } from '../logic/classes';
import type { Component } from 'solid-js';
import type { ClassArg } from '../logic/classes';

export type MenuItem<T = any> = {
	label: string
	value: T
}

export type MenuProps = {
	'class'?: ClassArg
	items: MenuItem[]
	selectedValue: any
	onClickItem: (item: MenuItem, ev: Event) => void
}

const Menu: Component<MenuProps> = (props) => {

	return <ul class={classes("dropdown-menu", props['class'])}>
		<For each={props.items}>
			{t => <>
				<Show when={t.value === props.selectedValue}>
					<li><span class="dropdown-item active">{t.label}</span></li>
				</Show>
				<Show when={t.value !== props.selectedValue}>
					<li><a
						href="#"
						onClick={[props.onClickItem, t]}
						class="dropdown-item"
					>
						{t.label}
					</a></li>
				</Show>
			</>}
		</For>
	</ul>

}

export default Menu
