import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdPlaceholderImg, bdPlaceholderImgLg, imgFluid } from '../../../themes/bootstrap/contents/generated.css'

const Responsive: Component = () => (
	<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
		<svg class={`${bdPlaceholderImg} ${bdPlaceholderImgLg} ${imgFluid}`}
			width="100%"
			height="250"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Placeholder: Responsive image"
			preserveAspectRatio="xMidYMid slice"
			tabindex="0"
		>
			<title>Placeholder</title>
			<rect width="100%" height="100%" fill="#868e96" />
			<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
				Responsive image
			</text>
		</svg>
	</div>
)

export default Responsive

// @screenshot *: 360x250 250
