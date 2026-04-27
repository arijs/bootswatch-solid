import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const CheckActiveDisabledLargeButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnLg,
		btnPrimary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnPrimary} ${btnLg} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Large button
		</button>
	</div>
	)
}

export default CheckActiveDisabledLargeButton

// @screenshot *: 360x120 120
