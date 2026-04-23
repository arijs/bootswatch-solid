import type { Component } from 'solid-js'
import { body } from '../../themes/bootstrap/body.css'
import { containerFluid } from '../../themes/bootstrap/container.css'
import { bsTheme } from '../../themes/bootstrap/_vars.css'
import Buttons from './Buttons'

const ButtonsPage: Component = () => (
	<div class={`${bsTheme} ${body} ${containerFluid}`}>
		<Buttons />
	</div>
)

export default ButtonsPage
