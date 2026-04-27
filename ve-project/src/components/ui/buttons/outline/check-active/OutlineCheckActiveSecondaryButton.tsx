import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineCheckActiveSecondaryButton: Component = () => {
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
		<button type="button" class={`${btn} ${btnOutlineSecondary} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Secondary
		</button>
	</div>
	)
}

export default OutlineCheckActiveSecondaryButton

// @screenshot *: 360x120 120
