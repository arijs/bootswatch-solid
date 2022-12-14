import Dropdown from '../Dropdown';
import { onClickTextColor, wrapperTextColor, wrapperTextColorList } from '../../logic/wrapperStyle';
import type { Component } from 'solid-js';
import type { DropdownProps } from '../Dropdown';

const WrapperTextColorDropdown: Component<DropdownProps> = (props) => {

	return <Dropdown
		class={props['class']}
		classMenuButton={props.classMenuButton}
		classMenuList={props.classMenuList}
		items={wrapperTextColorList()}
		selectedValue={wrapperTextColor()}
		onClickItem={onClickTextColor}
	/>

}

export default WrapperTextColorDropdown
