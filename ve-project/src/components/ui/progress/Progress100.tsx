import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { progress, progressBar, progressBarDanger } from '../../../themes/bootstrap/ui/progress/base.css'

const Progress100: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={progress}>
			<div class={`${progressBar} ${progressBarDanger}`} style={{ width: '100%' }}>
				100%
			</div>
		</div>
	</div>
)

export default Progress100

// @screenshot *: 360x120 120
