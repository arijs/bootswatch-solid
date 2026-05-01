import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckActiveDarkButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnActiveHook, btnDark } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
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

export default SolidCheckActiveDarkButton

// @screenshot *: 360x120 120
