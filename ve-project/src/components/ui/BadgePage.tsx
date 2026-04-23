import type { Component } from 'solid-js'
import { body } from '../../themes/bootstrap/body.css'
import { containerFluid } from '../../themes/bootstrap/container.css'
import { bsTheme } from '../../themes/bootstrap/_vars.css'
import Badge from './Badge'

const BadgePage: Component = () => (
	<div class={`${bsTheme} ${body} ${containerFluid}`}>
		<Badge />
	</div>
)

export default BadgePage