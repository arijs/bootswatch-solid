import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckActivePrimaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnPrimary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnPrimary} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Primary
		</button>
	</div>
	)
}

export default SolidCheckActivePrimaryButton

// @screenshot *: 360x120 120
