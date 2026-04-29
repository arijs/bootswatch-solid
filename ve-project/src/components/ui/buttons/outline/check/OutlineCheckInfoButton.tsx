import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineCheckInfoButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineInfo } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnOutlineInfo} pwhook-btn`}
				data-bs-toggle="button"
			>
				Info
			</button>
		</div>
	)
}

export default OutlineCheckInfoButton

// @screenshot *: 360x120 120
