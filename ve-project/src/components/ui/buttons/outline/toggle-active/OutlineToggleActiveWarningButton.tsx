import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleActiveWarningButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnOutlineWarning,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-warning" checked autocomplete="off" />
		<label class={`${btn} ${btnOutlineWarning}`} for="id-btn-outline-toggle-active-warning">Checked Toggle Warning</label>
	</div>
	)
}

export default OutlineToggleActiveWarningButton

// @screenshot *: 360x120 120
