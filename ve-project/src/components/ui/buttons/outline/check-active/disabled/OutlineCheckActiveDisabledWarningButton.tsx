import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineCheckActiveDisabledWarningButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnOutlineWarning,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineWarning} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Warning
		</button>
	</div>
	)
}

export default OutlineCheckActiveDisabledWarningButton

// @screenshot *: 360x120 120
