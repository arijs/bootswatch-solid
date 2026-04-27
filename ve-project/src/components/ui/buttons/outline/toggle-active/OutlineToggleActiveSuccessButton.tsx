import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleActiveSuccessButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnOutlineSuccess,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-success" checked autocomplete="off" />
		<label class={`${btn} ${btnOutlineSuccess}`} for="id-btn-outline-toggle-active-success">Checked Toggle Success</label>
	</div>
	)
}

export default OutlineToggleActiveSuccessButton

// @screenshot *: 360x120 120
