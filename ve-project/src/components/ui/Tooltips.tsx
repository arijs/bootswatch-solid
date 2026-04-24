import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import BottomTooltip from './tooltips/BottomTooltip'
import EndTooltip from './tooltips/EndTooltip'
import HtmlTooltip from './tooltips/HtmlTooltip'
import StartTooltip from './tooltips/StartTooltip'
import TopTooltip from './tooltips/TopTooltip'

const Tooltips: Component = () => (
	<article class="my-3" id="tooltips">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Tooltips</h3>
			<DocLink href="/ui/tooltips" />
			<DocLink href="/ui/tooltips/top-tooltip">Top Tooltip</DocLink>
			<DocLink href="/ui/tooltips/end-tooltip">End Tooltip</DocLink>
			<DocLink href="/ui/tooltips/bottom-tooltip">Bottom Tooltip</DocLink>
			<DocLink href="/ui/tooltips/start-tooltip">Start Tooltip</DocLink>
			<DocLink href="/ui/tooltips/html-tooltip">HTML Tooltip</DocLink>
		</div>

		<div>
			<TopTooltip />
			<EndTooltip />
			<BottomTooltip />
			<StartTooltip />
			<HtmlTooltip />
		</div>
	</article>
)

export default Tooltips
