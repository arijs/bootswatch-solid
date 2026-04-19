import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import Responsive from './images/Responsive'
import Thumbnail from './images/Thumbnail'

const Images: Component = () => (
	<article class="my-3" id="images">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Images</h3>
			<DocLink href="/contents/images" />
			<DocLink href="/contents/images/responsive">Responsive</DocLink>
			<DocLink href="/contents/images/thumbnail">Thumbnail</DocLink>
		</div>

		<div>
			<Responsive />
			<Thumbnail />
		</div>
	</article>
)

export default Images
