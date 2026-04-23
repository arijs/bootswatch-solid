import type { Component } from 'solid-js'
import Badge from './Badge'
import ButtonGroup from './ButtonGroup'
import Buttons from './Buttons'
import Dropdowns from './Dropdowns'

const UiSection: Component = () => (
	<section id="ui">
		<h2>UI</h2>
		<Badge />
		<ButtonGroup />
		<Buttons />
		<Dropdowns />
	</section>
)

export default UiSection
