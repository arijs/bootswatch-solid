import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleDisabledInfoButton: Component = () => {
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
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-disabled-info" autocomplete="off"  />
		<label class={`${btn} ${btnOutlineInfo}`} for="id-btn-outline-toggle-disabled-info">Toggle Info</label>
	</div>
	)
}

export default OutlineToggleDisabledInfoButton

// @screenshot *: 360x120 120
