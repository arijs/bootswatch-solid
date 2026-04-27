import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineCheckDisabledDarkButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnOutlineDark,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineDark} pwhook-btn`} data-bs-toggle="button">
			Dark
		</button>
	</div>
	)
}

export default OutlineCheckDisabledDarkButton

// @screenshot *: 360x120 120
