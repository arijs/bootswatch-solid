import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckDisabledInfoButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnInfo } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${btn} ${btnInfo} pwhook-btn`}
				data-bs-toggle="button"
			>
				Info
			</button>
		</div>
	)
}

export default SolidCheckDisabledInfoButton

// @screenshot *: 360x120 120
