import type { Component } from 'solid-js'
import { useVeGlobalThemeClasses } from '../../themes/runtime/hooks'
import Accordion from './Accordion'

const AccordionPage: Component = () => {
	const cls = useVeGlobalThemeClasses()

	return (
		<div class={`${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<Accordion />
		</div>
	)
}

export default AccordionPage
