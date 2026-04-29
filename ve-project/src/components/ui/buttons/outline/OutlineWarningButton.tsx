import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../themes/runtime/hooks'

const OutlineWarningButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnOutlineWarning } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button type="button" class={`${btn} ${btnOutlineWarning} pwhook-btn`}>
				Warning
			</button>
		</div>
	)
}

export default OutlineWarningButton

// @screenshot *: 360x120 120
