import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BasicPopover from './popovers/BasicPopover'
import PositionedPopovers from './popovers/PositionedPopovers'

const Popovers: Component = () => (
	<article class="my-3" id="popovers">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Popovers</h3>
			<DocLink href="/ui/popovers" />
			<DocLink href="/ui/popovers/basic-popover">Basic Popover</DocLink>
			<DocLink href="/ui/popovers/positioned-popovers">Positioned Popovers</DocLink>
		</div>

		<div>
			<BasicPopover />
			<PositionedPopovers />
		</div>
	</article>
)

export default Popovers
