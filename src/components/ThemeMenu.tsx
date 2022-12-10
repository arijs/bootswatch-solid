
import { For, Show, createMemo } from 'solid-js';
import {
	themeList,
	signalTheme,
	setSignalTheme,
	themeSetActive,
} from '../logic/themes';
import { classes } from '../logic/classes';
import type { Component } from 'solid-js';
import type { ThemeItem } from '../logic/themes';
import type { ClassArg } from '../logic/classes';

const ThemeMenu: Component<{ 'class'?: ClassArg }> = (props) => {
	const tlist = createMemo(() => themeList)
	const ctMemo = createMemo(() => {
		const ct = signalTheme()
		console.log(`ctMemo`, ct)
		return ct
	})

	const onClickItem = (data: ThemeItem, ev: Event) => {
		ev.preventDefault()
		setSignalTheme(data)
		themeSetActive(data)
	}

	return <ul class={classes("dropdown-menu", props['class'])}>
		<For each={tlist()}>
			{t => <>
				<Show when={t.href === ctMemo()?.href}>
					<li><span class="dropdown-item-text active">{t.name}</span></li>
				</Show>
				<Show when={t.href !== ctMemo()?.href}>
					<li><a
						href="#"
						onClick={[onClickItem, t]}
						class="dropdown-item"
					>
						{t.name}
					</a></li>
				</Show>
			</>}
		</For>
	</ul>

}

export default ThemeMenu
