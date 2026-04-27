import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckDisabledLinkButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnLink,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnLink} pwhook-btn`} data-bs-toggle="button">
			Link
		</button>
	</div>
	)
}

export default SolidCheckDisabledLinkButton

// @screenshot *: 360x120 120
