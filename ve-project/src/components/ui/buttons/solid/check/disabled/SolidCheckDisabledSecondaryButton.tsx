import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckDisabledSecondaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnSecondary } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${btn} ${btnSecondary} pwhook-btn`}
				data-bs-toggle="button"
			>
				Secondary
			</button>
		</div>
	)
}

export default SolidCheckDisabledSecondaryButton

// @screenshot *: 360x120 120
