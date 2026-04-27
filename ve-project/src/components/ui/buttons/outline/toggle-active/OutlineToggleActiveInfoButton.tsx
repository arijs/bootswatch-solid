import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleActiveInfoButton: Component = () => {
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
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-info" checked autocomplete="off" />
		<label class={`${btn} ${btnOutlineInfo}`} for="id-btn-outline-toggle-active-info">Checked Toggle Info</label>
	</div>
	)
}

export default OutlineToggleActiveInfoButton

// @screenshot *: 360x120 120
