import type { Component } from 'solid-js'
import { body } from '../../themes/bootstrap/body.css'
import { containerFluid } from '../../themes/bootstrap/container.css'
import { bsTheme } from '../../themes/bootstrap/_vars.css'
import ButtonGroup from './ButtonGroup'

const ButtonGroupPage: Component = () => (
	<div class={`${bsTheme} ${body} ${containerFluid}`}>
		<ButtonGroup />
	</div>
)

export default ButtonGroupPage
