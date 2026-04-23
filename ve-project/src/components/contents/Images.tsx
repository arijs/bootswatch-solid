import type { Component } from 'solid-js'
import { alignSelfStart, bdHeading, mb3, mbXl2, mt5, mtXl0, my3, stickyXlTop } from '../../themes/bootstrap/contents/generated.css'
import DocLink from '../common/DocLink'
import Responsive from './images/Responsive'
import Thumbnail from './images/Thumbnail'

const Images: Component = () => (
	<article class={`${my3}`} id="images">
		<div class={`${bdHeading} ${stickyXlTop} ${alignSelfStart} ${mt5} ${mb3} ${mtXl0} ${mbXl2}`}>
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
