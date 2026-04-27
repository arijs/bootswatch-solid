import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const CheckActiveDisabledSmallButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnPrimary,
		btnSm,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnPrimary} ${btnSm} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Small button
		</button>
	</div>
	)
}

export default CheckActiveDisabledSmallButton

// @screenshot *: 360x120 120
