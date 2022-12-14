import Dropdown from '../Dropdown';
import { onClickBgColor, wrapperBgColor, wrapperBgColorList } from '../../logic/wrapperStyle';
import type { Component } from 'solid-js';
import type { DropdownProps } from '../Dropdown';

const WrapperBgColorDropdown: Component<DropdownProps> = (props) => {

	return <Dropdown
		class={props['class']}
		classMenuButton={props.classMenuButton}
		classMenuList={props.classMenuList}
		items={wrapperBgColorList()}
		selectedValue={wrapperBgColor()}
		onClickItem={onClickBgColor}
	/>

}

export default WrapperBgColorDropdown
