import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { progress, progressBar, progressBarSuccess } from '../../../themes/bootstrap/ui/progress/base.css'

const Progress25: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={progress}>
			<div class={`${progressBar} ${progressBarSuccess}`} style={{ width: '25%' }}>
				25%
			</div>
		</div>
	</div>
)

export default Progress25

// @screenshot *: 360x120 120
