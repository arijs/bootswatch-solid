import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckActiveDisabledLinkButton: Component = () => {
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
		<button disabled type="button" class={`${btn} ${btnLink} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Link
		</button>
	</div>
	)
}

export default SolidCheckActiveDisabledLinkButton

// @screenshot *: 360x120 120
