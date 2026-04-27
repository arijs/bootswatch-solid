import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineDisabledWarningButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnOutlineWarning,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineWarning} pwhook-btn`}>
			Warning
		</button>
	</div>
	)
}

export default OutlineDisabledWarningButton

// @screenshot *: 360x120 120
