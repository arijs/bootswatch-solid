import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineCheckActivePrimaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnOutlinePrimary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnOutlinePrimary} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Primary
		</button>
	</div>
	)
}

export default OutlineCheckActivePrimaryButton

// @screenshot *: 360x120 120
