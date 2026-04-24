import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import {
	alert,
	alertDark,
	alertDismissible,
	alertLink,
	btnClose,
	fade,
	show,
} from '../../../themes/bootstrap/ui/alerts/base.css'

const DarkAlert: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={`${alert} ${alertDark} ${alertDismissible} ${fade} ${show}`}>
			A simple dark alert with{' '}
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class={alertLink}>
				an example link
			</a>
			. Give it a click if you like.
			<button type="button" class={btnClose} data-bs-dismiss="alert" data-bs-target={`.${alert}`} aria-label="Close" />
		</div>
	</div>
)

export default DarkAlert

// @screenshot *: 360x120 120
// @screenshot quartz: 360x136 136
