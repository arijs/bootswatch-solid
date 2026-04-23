import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, bdPlaceholderImg, imgThumbnail } from '../../../themes/bootstrap/contents/generated.css'

const Thumbnail: Component = () => (
	<div class={`bd-example ${bdExample} ${containerFluid} ${bsTheme} ${body}`}>
		<svg class={`${bdPlaceholderImg} ${imgThumbnail}`}
			width="200"
			height="200"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
			preserveAspectRatio="xMidYMid slice"
			tabindex="0"
		>
			<title>
				A generic square placeholder image with a white border around it, making it resemble
				a photograph taken with an old instant camera
			</title>
			<rect width="100%" height="100%" fill="#868e96" />
			<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
				200x200
			</text>
		</svg>
	</div>
)

export default Thumbnail

// @screenshot *: 360x200 200
