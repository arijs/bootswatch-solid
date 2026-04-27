import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../themes/runtime/hooks'

const SolidLinkButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnLink,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnLink} pwhook-btn`}>
			Link
		</button>
	</div>
	)
}

export default SolidLinkButton

// @screenshot *: 360x120 120
