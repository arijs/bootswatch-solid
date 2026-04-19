import type { Component } from 'solid-js'
import Accordion from './Accordion'
import Alerts from './Alerts'
import Badge from './Badge'
import Breadcrumb from './Breadcrumb'
import ButtonGroup from './ButtonGroup'
import Buttons from './Buttons'
import Card from './Card'
import CardTabs from './CardTabs'
import Carousel from './Carousel'
import Dropdowns from './Dropdowns'
import ListGroup from './ListGroup'
import Modal from './Modal'
import Navbar from './Navbar'
import Navs from './Navs'
import Pagination from './Pagination'
import Popovers from './Popovers'
import Progress from './Progress'
import Scrollspy from './Scrollspy'
import Spinners from './Spinners'
import Toasts from './Toasts'
import Tooltips from './Tooltips'

const UiSection: Component = () => (
	<section id="ui">
		<h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">UI</h2>
		<Accordion />
		<Alerts />
		<Badge />
		<Breadcrumb />
		<Buttons />
		<ButtonGroup />
		<Card />
		<CardTabs />
		<Carousel />
		<Dropdowns />
		<ListGroup />
		<Modal />
		<Navs />
		<Navbar />
		<Pagination />
		<Popovers />
		<Progress />
		<Scrollspy />
		<Spinners />
		<Toasts />
		<Tooltips />
	</section>
)

export default UiSection
