import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckDisabledDangerButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnDanger,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnDanger} pwhook-btn`} data-bs-toggle="button">
			Danger
		</button>
	</div>
	)
}

export default SolidCheckDisabledDangerButton

// @screenshot *: 360x120 120
