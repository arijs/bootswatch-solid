import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineCheckActiveDisabledDarkButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnOutlineDark,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineDark} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Dark
		</button>
	</div>
	)
}

export default OutlineCheckActiveDisabledDarkButton

// @screenshot *: 360x120 120
