import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidDisabledBaseButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} pwhook-btn`}>
			Button
		</button>
	</div>
	)
}

export default SolidDisabledBaseButton

// @screenshot *: 360x120 120
