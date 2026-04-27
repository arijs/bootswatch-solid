import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import {
	progress,
	progressBar,
	progressBarTextDark,
	progressBarWarning,
} from '../../../themes/bootstrap/ui/progress/base.css'

const Progress75: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={progress}>
			<div class={`${progressBar} ${progressBarWarning} ${progressBarTextDark}`} style={{ width: '75%' }}>
				75%
			</div>
		</div>
	</div>
)

export default Progress75

// @screenshot *: 360x120 120
