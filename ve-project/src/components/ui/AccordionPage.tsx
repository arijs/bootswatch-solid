import type { Component } from 'solid-js'
import { body } from '../../themes/bootstrap/body.css'
import { containerFluid } from '../../themes/bootstrap/container.css'
import { bsTheme } from '../../themes/bootstrap/_vars.css'
import Accordion from './Accordion'

const AccordionPage: Component = () => (
	<div class={`${bsTheme} ${body} ${containerFluid}`}>
		<Accordion />
	</div>
)

export default AccordionPage
