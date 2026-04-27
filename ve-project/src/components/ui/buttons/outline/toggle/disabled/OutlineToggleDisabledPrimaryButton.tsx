import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleDisabledPrimaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnOutlinePrimary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-disabled-primary" autocomplete="off"  />
		<label class={`${btn} ${btnOutlinePrimary}`} for="id-btn-outline-toggle-disabled-primary">Toggle Primary</label>
	</div>
	)
}

export default OutlineToggleDisabledPrimaryButton

// @screenshot *: 360x120 120
