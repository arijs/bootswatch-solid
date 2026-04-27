import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledPrimaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnPrimary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-disabled-primary" autocomplete="off"  />
		<label class={`${btn} ${btnPrimary}`} for="id-btn-solid-toggle-disabled-primary">Toggle Primary</label>
	</div>
	)
}

export default SolidToggleDisabledPrimaryButton

// @screenshot *: 360x120 120
