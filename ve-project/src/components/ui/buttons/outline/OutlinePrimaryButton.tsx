import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../themes/runtime/hooks'

const OutlinePrimaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnOutlinePrimary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnOutlinePrimary} pwhook-btn`}>
			Primary
		</button>
	</div>
	)
}

export default OutlinePrimaryButton

// @screenshot *: 360x120 120
