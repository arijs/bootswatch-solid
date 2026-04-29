import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import {
	bdPlaceholderImg,
	figure,
	figureCaption,
	figureImg,
	imgFluid,
	mediaMiddle,
	rounded,
} from '../../../themes/bootstrap/contents/generated.css'

const FigureExample: Component = () => (
	<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
		<figure class={`${figure}`}>
			<svg
				class={`${bdPlaceholderImg} ${figureImg} ${imgFluid} ${mediaMiddle} ${rounded}`}
				width="400"
				height="300"
				xmlns="http://www.w3.org/2000/svg"
				aria-label="Placeholder: 400x300"
				preserveAspectRatio="xMidYMid slice"
				tabindex="0"
			>
				<title>Placeholder</title>
				<rect width="100%" height="100%" fill="#868e96" />
				<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
					400x300
				</text>
			</svg>

			<figcaption class={`${figureCaption}`}>A caption for the above image.</figcaption>
		</figure>
	</div>
)

export default FigureExample

// @screenshot *: 360x297 373
// @screenshot brite: 360x295 295
// @screenshot litera: 360x300 300
// @screenshot quartz: 360x305 305
