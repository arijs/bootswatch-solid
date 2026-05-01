import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckDisabledBaseButton: Component = () => {
	const { bsTheme, body, containerFluid, btn } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button disabled type="button" class={`${btn} pwhook-btn`} data-bs-toggle="button">
				Button
			</button>
		</div>
	)
}

export default SolidCheckDisabledBaseButton

// @screenshot *: 360x120 120
