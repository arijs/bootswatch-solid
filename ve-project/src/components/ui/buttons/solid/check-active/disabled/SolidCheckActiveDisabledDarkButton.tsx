import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckActiveDisabledDarkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnActiveHook, btnDark } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${btn} ${btnDark} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Dark
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledDarkButton

// @screenshot *: 360x120 120
