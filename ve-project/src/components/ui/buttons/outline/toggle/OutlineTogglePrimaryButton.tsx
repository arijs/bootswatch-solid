import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineTogglePrimaryButton: Component = () => {
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
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-primary" autocomplete="off" />
		<label class={`${btn} ${btnOutlinePrimary}`} for="id-btn-outline-toggle-primary">Toggle Primary</label>
	</div>
	)
}

export default OutlineTogglePrimaryButton

// @screenshot *: 360x120 120
