
import { For, createSignal, createMemo } from 'solid-js';
import { themeList, themeGetCurrent, themeSetActive } from '../logic/themes';
import type { Component } from 'solid-js';
import type { ThemeItem } from '../logic/themes';

const ThemeList: Component = () => {
	const [currentTheme, setCurrentTheme] = createSignal<ThemeItem>(themeGetCurrent());
	const tlist = createMemo(() => themeList)
	const ctMemo = createMemo(() => {
		const ct = currentTheme()
		console.log(`ctMemo`, ct)
		return ct
	})

	const onClickItem = (data: ThemeItem, ev: Event) => {
		ev.preventDefault()
		setCurrentTheme(data)
		themeSetActive(data)
	}

	return <div class="list-group">
		<For each={tlist()}>
			{t => <>
				<Show when={t.href === ctMemo()?.href}>
					<div class="list-group-item list-group-item-primary">{t.name}</div>
				</Show>
				<Show when={t.href !== ctMemo()?.href}>
					<a
						href="#"
						onClick={[onClickItem, t]}
						class="list-group-item list-group-item-action"
					>
						{t.name}
					</a>
				</Show>
			</>}
		</For>
	</div>

}

export default ThemeList
