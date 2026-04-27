import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineCheckActiveDisabledDangerButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnOutlineDanger,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineDanger} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Danger
		</button>
	</div>
	)
}

export default OutlineCheckActiveDisabledDangerButton

// @screenshot *: 360x120 120
