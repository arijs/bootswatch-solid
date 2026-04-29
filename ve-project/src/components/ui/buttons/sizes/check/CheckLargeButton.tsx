import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const CheckLargeButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnLg, btnPrimary } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnPrimary} ${btnLg} pwhook-btn`}
				data-bs-toggle="button"
			>
				Large button
			</button>
		</div>
	)
}

export default CheckLargeButton

// @screenshot *: 360x120 120
