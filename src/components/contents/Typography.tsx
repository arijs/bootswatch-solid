import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import Blockquote from './typography/Blockquote'
import Display from './typography/Display'
import Heading from './typography/Heading'
import InlineList from './typography/InlineList'
import Lead from './typography/Lead'
import TextElements from './typography/TextElements'
import UnstyledList from './typography/UnstyledList'

const Typography: Component = () => (
	<article class="my-3" id="typography">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
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
