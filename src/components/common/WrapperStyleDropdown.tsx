import Dropdown from '../Dropdown';
import type { Component } from 'solid-js';
import type { DropdownProps } from '../Dropdown';
import { onClickStyle, wrapperStyle, wrapperStyleList } from '../../logic/wrapperStyle';

const WrapperStyleDropdown: Component<DropdownProps> = (props) => {

	return <Dropdown
		class={props['class']}
		classMenuButton={props.classMenuButton}
		classMenuList={props.classMenuList}
		items={wrapperStyleList()}
		selectedValue={wrapperStyle()}
		onClickItem={onClickStyle}
	/>

}

export default WrapperStyleDropdown
