import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import NavbarExample from './navbar/NavbarExample'

const Navbar: Component = () => (
	<article id="navbar">
		<div>
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
