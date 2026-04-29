import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineCheckSecondaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineSecondary } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnOutlineSecondary} pwhook-btn`}
				data-bs-toggle="button"
			>
				Secondary
			</button>
		</div>
	)
}

export default OutlineCheckSecondaryButton

// @screenshot *: 360x120 120
