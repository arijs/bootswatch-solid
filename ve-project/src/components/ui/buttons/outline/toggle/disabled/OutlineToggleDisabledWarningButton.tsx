import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleDisabledWarningButton: Component = () => {
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
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-disabled-warning" autocomplete="off"  />
		<label class={`${btn} ${btnOutlineWarning}`} for="id-btn-outline-toggle-disabled-warning">Toggle Warning</label>
	</div>
	)
}

export default OutlineToggleDisabledWarningButton

// @screenshot *: 360x120 120
