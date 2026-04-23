import type { Component } from 'solid-js'
import { alignSelfStart, bdHeading, mb3, mbXl2, mt5, mtXl0, my3, stickyXlTop } from '../../themes/bootstrap/contents/generated.css'
import DocLink from '../common/DocLink'
import Blockquote from './typography/Blockquote'
import Display from './typography/Display'
import Heading from './typography/Heading'
import InlineList from './typography/InlineList'
import Lead from './typography/Lead'
import TextElements from './typography/TextElements'
import UnstyledList from './typography/UnstyledList'

const Typography: Component = () => (
	<article class={`my-3 ${my3}`} id="typography">
		<div class={`bd-heading ${bdHeading} sticky-xl-top ${stickyXlTop} align-self-start ${alignSelfStart} mt-5 ${mt5} mb-3 ${mb3} mt-xl-0 ${mtXl0} mb-xl-2 ${mbXl2}`}>
			<h3>Typography</h3>
			<DocLink href="/contents/typography" />
			<DocLink href="/contents/typography/display">Display</DocLink>
			<DocLink href="/contents/typography/heading">Heading</DocLink>
			<DocLink href="/contents/typography/lead">Lead</DocLink>
			<DocLink href="/contents/typography/text-elements">Text Elements</DocLink>
			<DocLink href="/contents/typography/blockquote">Blockquote</DocLink>
			<DocLink href="/contents/typography/unstyled-list">Unstyled List</DocLink>
			<DocLink href="/contents/typography/inline-list">Inline List</DocLink>
		</div>

		<div>
			<Display />
			<Heading />
			<Lead />
			<TextElements />
			<Blockquote />
			<UnstyledList />
			<InlineList />
		</div>
	</article>
)

export default Typography
