import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineDisabledLightButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineLight } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button disabled type="button" class={`${btn} ${btnOutlineLight} pwhook-btn`}>
				Light
			</button>
		</div>
	)
}

export default OutlineDisabledLightButton

// @screenshot *: 360x120 120
