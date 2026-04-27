import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import {
	progress,
	progressBar,
	progressBarInfo,
	progressBarTextDark,
} from '../../../themes/bootstrap/ui/progress/base.css'

const Progress50: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={progress}>
			<div class={`${progressBar} ${progressBarInfo} ${progressBarTextDark}`} style={{ width: '50%' }}>
				50%
			</div>
		</div>
	</div>
)

export default Progress50

// @screenshot *: 360x120 120
