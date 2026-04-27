import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineCheckActiveDisabledSecondaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnOutlineSecondary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineSecondary} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Secondary
		</button>
	</div>
	)
}

export default OutlineCheckActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
