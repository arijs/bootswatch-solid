import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import {
	progress,
	progressBar,
	progressBarAnimated,
	progressBarStriped,
	progressBarSuccess,
} from '../../../themes/bootstrap/ui/progress/base.css'

const StripedProgress: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={progress}>
			<div class={progressBar} style={{ width: '15%' }}></div>
			<div
				class={`${progressBar} ${progressBarStriped} ${progressBarAnimated} ${progressBarSuccess}`}
				style={{ width: '40%' }}
			></div>
		</div>
	</div>
)

export default StripedProgress

// @screenshot *: 360x120 120
