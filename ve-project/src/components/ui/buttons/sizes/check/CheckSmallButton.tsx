import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const CheckSmallButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnPrimary, btnSm } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnPrimary} ${btnSm} pwhook-btn`}
				data-bs-toggle="button"
			>
				Small button
			</button>
		</div>
	)
}

export default CheckSmallButton

// @screenshot *: 360x120 120
