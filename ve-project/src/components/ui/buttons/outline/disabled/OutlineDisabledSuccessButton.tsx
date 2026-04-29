import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineDisabledSuccessButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineSuccess } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button disabled type="button" class={`${btn} ${btnOutlineSuccess} pwhook-btn`}>
				Success
			</button>
		</div>
	)
}

export default OutlineDisabledSuccessButton

// @screenshot *: 360x120 120
