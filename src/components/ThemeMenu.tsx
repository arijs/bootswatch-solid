
import { createMemo } from 'solid-js';
import {
	themeList,
	signalTheme,
	setSignalTheme,
	themeSetActive,
} from '../logic/themes';
import { classes } from '../logic/classes';
import Menu from './Menu';
import type { Component } from 'solid-js';
import type { ClassArg } from '../logic/classes';
import type { MenuItem } from './Menu';

const ThemeMenu: Component<{ 'class'?: ClassArg }> = (props) => {
	const tlist = createMemo(() => themeList)
	const ctMemo = createMemo(() => {
		const ct = signalTheme()
		console.log(`ctMemo`, ct)
		return ct
	})

	const onClickItem = (item: MenuItem, ev: Event) => {
		ev.preventDefault()
		setSignalTheme(item.value)
		themeSetActive(item.value)
	}

	return <Menu
		class={classes("dropdown-menu", props['class'])}
		items={tlist().map(t => ({ label: t.name, value: t }))}
		selectedValue={ctMemo()}
		onClickItem={onClickItem}
	/>

}

export default ThemeMenu
