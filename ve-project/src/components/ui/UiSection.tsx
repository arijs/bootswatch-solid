import type { Component } from 'solid-js'
import Accordion from './Accordion'
import Alerts from './Alerts'
import Badge from './Badge'
import ButtonGroup from './ButtonGroup'
import Buttons from './Buttons'
import Card from './Card'
import Carousel from './Carousel'
import Dropdowns from './Dropdowns'
import Pagination from './Pagination'
import Popovers from './Popovers'
import Progress from './Progress'
import Spinners from './Spinners'
import Toasts from './Toasts'
import Tooltips from './Tooltips'

const UiSection: Component = () => (
	<section id="ui">
		<h2>UI</h2>
		<Accordion />
		<Alerts />
		<Badge />
		<ButtonGroup />
		<Buttons />
		<Card />
		<Carousel />
		<Dropdowns />
		<Pagination />
		<Popovers />
		<Progress />
		<Spinners />
		<Toasts />
		<Tooltips />
	</section>
)

export default UiSection
