import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const CheckDisabledSmallButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnPrimary,
		btnSm,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnPrimary} ${btnSm} pwhook-btn`} data-bs-toggle="button">
			Small button
		</button>
	</div>
	)
}

export default CheckDisabledSmallButton

// @screenshot *: 360x120 120
