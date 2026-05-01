import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineDisabledDarkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineDark } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button disabled type="button" class={`${btn} ${btnOutlineDark} pwhook-btn`}>
				Dark
			</button>
		</div>
	)
}

export default OutlineDisabledDarkButton

// @screenshot *: 360x120 120
