import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckWarningButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnWarning } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button type="button" class={`${btn} ${btnWarning} pwhook-btn`} data-bs-toggle="button">
				Warning
			</button>
		</div>
	)
}

export default SolidCheckWarningButton

// @screenshot *: 360x120 120
