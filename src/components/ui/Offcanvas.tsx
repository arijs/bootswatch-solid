import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BodyScrollingOffcanvas from './offcanvas/BodyScrollingOffcanvas'
import BottomOffcanvas from './offcanvas/BottomOffcanvas'
import DefaultOffcanvas from './offcanvas/DefaultOffcanvas'
import EndOffcanvas from './offcanvas/EndOffcanvas'
import ResponsiveOffcanvas from './offcanvas/ResponsiveOffcanvas'
import ScrollingBackdropOffcanvas from './offcanvas/ScrollingBackdropOffcanvas'
import StaticBackdropOffcanvas from './offcanvas/StaticBackdropOffcanvas'
import TopOffcanvas from './offcanvas/TopOffcanvas'

const Offcanvas: Component = () => (
	<article class="my-3" id="offcanvas">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Offcanvas</h3>
			<DocLink href="/ui/offcanvas" />
			<DocLink href="/ui/offcanvas/default-offcanvas">Default Offcanvas</DocLink>
			<DocLink href="/ui/offcanvas/top-offcanvas">Top Offcanvas</DocLink>
			<DocLink href="/ui/offcanvas/end-offcanvas">End Offcanvas</DocLink>
			<DocLink href="/ui/offcanvas/bottom-offcanvas">Bottom Offcanvas</DocLink>
			<DocLink href="/ui/offcanvas/body-scrolling-offcanvas">
				Body Scrolling Offcanvas
			</DocLink>
			<DocLink href="/ui/offcanvas/scrolling-backdrop-offcanvas">
				Scrolling Backdrop Offcanvas
			</DocLink>
			<DocLink href="/ui/offcanvas/static-backdrop-offcanvas">
				Static Backdrop Offcanvas
			</DocLink>
			<DocLink href="/ui/offcanvas/responsive-offcanvas">Responsive Offcanvas</DocLink>
		</div>

		<div>
			<DefaultOffcanvas />
			<TopOffcanvas />
			<EndOffcanvas />
			<BottomOffcanvas />
			<BodyScrollingOffcanvas />
			<ScrollingBackdropOffcanvas />
			<StaticBackdropOffcanvas />
			<ResponsiveOffcanvas />
		</div>
	</article>
)

export default Offcanvas
