import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BasicPopover from './popovers/BasicPopover'
import BottomPopover from './popovers/BottomPopover'
import EndPopover from './popovers/EndPopover'
import StartPopover from './popovers/StartPopover'
import TopPopover from './popovers/TopPopover'

const Popovers: Component = () => (
	<article class="my-3" id="popovers">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Popovers</h3>
			<DocLink href="/ui/popovers" />
			<DocLink href="/ui/popovers/basic-popover">Basic Popover</DocLink>
			<DocLink href="/ui/popovers/top-popover">Top Popover</DocLink>
			<DocLink href="/ui/popovers/end-popover">End Popover</DocLink>
			<DocLink href="/ui/popovers/bottom-popover">Bottom Popover</DocLink>
			<DocLink href="/ui/popovers/start-popover">Start Popover</DocLink>
		</div>

		<div>
			<BasicPopover />
			<TopPopover />
			<EndPopover />
			<BottomPopover />
			<StartPopover />
		</div>
	</article>
)

export default Popovers
