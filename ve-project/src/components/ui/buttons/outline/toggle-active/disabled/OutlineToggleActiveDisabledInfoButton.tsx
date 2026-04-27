import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleActiveDisabledInfoButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnOutlineInfo,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-disabled-info" checked autocomplete="off"  />
		<label class={`${btn} ${btnOutlineInfo}`} for="id-btn-outline-toggle-active-disabled-info">Checked Toggle Info</label>
	</div>
	)
}

export default OutlineToggleActiveDisabledInfoButton

// @screenshot *: 360x120 120
