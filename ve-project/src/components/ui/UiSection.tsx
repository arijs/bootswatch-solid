import type { Component } from 'solid-js'
import Accordion from './Accordion'
import Alerts from './Alerts'
import Badge from './Badge'
import ButtonGroup from './ButtonGroup'
import Buttons from './Buttons'
import Dropdowns from './Dropdowns'
import Popovers from './Popovers'
import Tooltips from './Tooltips'

const UiSection: Component = () => (
	<section id="ui">
		<h2>UI</h2>
		<Accordion />
		<Alerts />
		<Badge />
		<ButtonGroup />
		<Buttons />
		<Dropdowns />
		<Popovers />
		<Tooltips />
	</section>
)

export default UiSection
