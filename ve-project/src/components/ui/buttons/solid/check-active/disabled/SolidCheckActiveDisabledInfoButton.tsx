import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckActiveDisabledInfoButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnActiveHook, btnInfo } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${btn} ${btnInfo} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Info
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledInfoButton

// @screenshot *: 360x120 120
