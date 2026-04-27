import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckActiveDisabledDangerButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnDanger,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnDanger} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Danger
		</button>
	</div>
	)
}

export default SolidCheckActiveDisabledDangerButton

// @screenshot *: 360x120 120
