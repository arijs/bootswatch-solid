import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import NavbarExample from './navbar/NavbarExample'

const Navbar: Component = () => (
	<article class="my-3" id="navbar">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Navbar</h3>
			<DocLink href="/ui/navbar" />
			<DocLink href="/ui/navbar/navbar-example">Navbar</DocLink>
		</div>

		<div>
			<NavbarExample />
		</div>
	</article>
)

export default Navbar
