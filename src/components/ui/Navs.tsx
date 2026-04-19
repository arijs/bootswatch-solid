import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BasicNav from './navs/BasicNav'
import PillNav from './navs/PillNav'
import TabbedNav from './navs/TabbedNav'

const Navs: Component = () => (
	<article class="my-3" id="navs">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Navs</h3>
			<DocLink href="/ui/navs" />
			<DocLink href="/ui/navs/basic-nav">Basic Nav</DocLink>
			<DocLink href="/ui/navs/tabbed-nav">Tabbed Nav</DocLink>
			<DocLink href="/ui/navs/pill-nav">Pill Nav</DocLink>
		</div>

		<div>
			<BasicNav />
			<TabbedNav />
			<PillNav />
		</div>
	</article>
)

export default Navs
