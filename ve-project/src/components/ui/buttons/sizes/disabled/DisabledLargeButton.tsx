import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const DisabledLargeButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnLg, btnPrimary } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button disabled type="button" class={`${btn} ${btnPrimary} ${btnLg} pwhook-btn`}>
				Large button
			</button>
		</div>
	)
}

export default DisabledLargeButton

// @screenshot *: 360x120 120
