import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineCheckLightButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineLight } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnOutlineLight} pwhook-btn`}
				data-bs-toggle="button"
			>
				Light
			</button>
		</div>
	)
}

export default OutlineCheckLightButton

// @screenshot *: 360x120 120
