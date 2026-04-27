import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineDisabledSecondaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnOutlineSecondary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineSecondary} pwhook-btn`}>
			Secondary
		</button>
	</div>
	)
}

export default OutlineDisabledSecondaryButton

// @screenshot *: 360x120 120
