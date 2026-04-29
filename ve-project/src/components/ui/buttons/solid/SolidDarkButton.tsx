import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../themes/runtime/hooks'

const SolidDarkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnDark } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button type="button" class={`${btn} ${btnDark} pwhook-btn`}>
				Dark
			</button>
		</div>
	)
}

export default SolidDarkButton

// @screenshot *: 360x120 120
