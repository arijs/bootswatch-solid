
import { For, createSignal, createMemo, onMount } from 'solid-js';
import { themeList, themeGetCurrent, themeSetActive } from '../logic/themes';
import type { Component } from 'solid-js';
import type { ThemeItem } from '../logic/themes';

const ThemeList: Component = () => {
	const [currentTheme, setCurrentTheme] = createSignal<ThemeItem>();
	const tlist = createMemo(() => themeList)

	onMount(() => setCurrentTheme(themeGetCurrent()))

	const onClickItem = (data: ThemeItem, ev: Event) => {
		ev.preventDefault()
		setCurrentTheme(data)
		themeSetActive(data)
	}

	return <div class="list-group">
		<For each={tlist()}>
			{t => t === currentTheme()
				? <div class="list-group-item">{t.name}</div>
				: <a
					href="#"
					onClick={[onClickItem, t]}
					class="list-group-item list-group-item-action"
				>
					{t.name}
				</a>
			}
		</For>
	</div>

}

export default ThemeList
