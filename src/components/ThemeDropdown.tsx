import { createMemo } from 'solid-js';
import {
	themeList,
	signalTheme,
	ThemeItem,
	setSignalTheme,
	themeSetActive,
} from '../logic/themes';
import Dropdown from './Dropdown';
import type { Component } from 'solid-js';
import type { DropdownProps } from './Dropdown';
import type { MenuItem } from './Menu';

const ThemeDropdown: Component<DropdownProps> = (props) => {
	const tlist = createMemo(() => themeList)
	const ctMemo = createMemo(() => {
		const ct = signalTheme()
		console.log(`ctMemo`, ct)
		return ct
	})

	const onClickItem = (item: MenuItem<ThemeItem>, ev: Event) => {
		ev.preventDefault()
		setSignalTheme(item.value)
		themeSetActive(item.value)
	}

	return <Dropdown
		class={props['class']}
		classMenuButton={props.classMenuButton}
		classMenuList={props.classMenuList}
		items={tlist().map(t => ({ label: t.name, value: t }))}
		selectedValue={ctMemo()}
		onClickItem={onClickItem}
	/>

}

export default ThemeDropdown
