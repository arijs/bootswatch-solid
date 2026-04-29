import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckLightButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnLight } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button type="button" class={`${btn} ${btnLight} pwhook-btn`} data-bs-toggle="button">
				Light
			</button>
		</div>
	)
}

export default SolidCheckLightButton

// @screenshot *: 360x120 120
