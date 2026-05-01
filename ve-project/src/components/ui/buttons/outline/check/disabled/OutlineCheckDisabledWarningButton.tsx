import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineCheckDisabledWarningButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineWarning } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${btn} ${btnOutlineWarning} pwhook-btn`}
				data-bs-toggle="button"
			>
				Warning
			</button>
		</div>
	)
}

export default OutlineCheckDisabledWarningButton

// @screenshot *: 360x120 120
