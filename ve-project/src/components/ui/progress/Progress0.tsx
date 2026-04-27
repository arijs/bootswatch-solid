import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { progress, progressBar } from '../../../themes/bootstrap/ui/progress/base.css'

const Progress0: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={progress}>
			<div class={progressBar} style={{ width: '0' }}>
				0%
			</div>
		</div>
	</div>
)

export default Progress0

// @screenshot *: 360x120 120
