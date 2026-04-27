import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckActiveLinkButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnLink,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnLink} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Link
		</button>
	</div>
	)
}

export default SolidCheckActiveLinkButton

// @screenshot *: 360x120 120
