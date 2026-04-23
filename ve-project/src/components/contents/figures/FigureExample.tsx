import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, bdPlaceholderImg, figure, figureCaption, figureImg, imgFluid, rounded } from '../../../themes/bootstrap/contents/generated.css'

const FigureExample: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<figure class={`figure ${figure}`}>
			<svg
				class={`bd-placeholder-img ${bdPlaceholderImg} figure-img ${figureImg} img-fluid ${imgFluid} rounded ${rounded}`}
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

			<figcaption class={`figure-caption ${figureCaption}`}>A caption for the above image.</figcaption>
		</figure>
	</div>
)

export default FigureExample

// @screenshot *: 360x297 373
// @screenshot brite: 360x295 295
// @screenshot litera: 360x300 300
// @screenshot quartz: 360x305 305
