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
			<a class="d-flex align-items-center" href="/contents/typography/display">
				Display
			</a>
			<a class="d-flex align-items-center" href="/contents/typography/heading">
				Heading
			</a>
			<a class="d-flex align-items-center" href="/contents/typography/lead">
				Lead
			</a>
			<a class="d-flex align-items-center" href="/contents/typography/text-elements">
				Text Elements
			</a>
			<a class="d-flex align-items-center" href="/contents/typography/blockquote">
				Blockquote
			</a>
			<a class="d-flex align-items-center" href="/contents/typography/unstyled-list">
				Unstyled List
			</a>
			<a class="d-flex align-items-center" href="/contents/typography/inline-list">
				Inline List
			</a>
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
