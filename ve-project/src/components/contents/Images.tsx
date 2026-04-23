import type { Component } from 'solid-js'
import { alignSelfStart, bdHeading, mb3, mbXl2, mt5, mtXl0, my3, stickyXlTop } from '../../themes/bootstrap/contents/generated.css'
import DocLink from '../common/DocLink'
import Responsive from './images/Responsive'
import Thumbnail from './images/Thumbnail'

const Images: Component = () => (
	<article class={`my-3 ${my3}`} id="images">
		<div class={`bd-heading ${bdHeading} sticky-xl-top ${stickyXlTop} align-self-start ${alignSelfStart} mt-5 ${mt5} mb-3 ${mb3} mt-xl-0 ${mtXl0} mb-xl-2 ${mbXl2}`}>
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
