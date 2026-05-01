import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	bdPlaceholderImg,
	figure,
	figureCaption,
	figureImg,
	imgFluid,
	mediaMiddle,
	rounded,
} from '../../../theme-contract/contents/contract.css'

const FigureExample: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<figure class={`${theme} ${figure}`}>
				<svg
					class={`${theme} ${bdPlaceholderImg} ${figureImg} ${imgFluid} ${mediaMiddle} ${rounded}`}
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

				<figcaption class={`${theme} ${figureCaption}`}>A caption for the above image.</figcaption>
			</figure>
		</div>
	)
}

export default FigureExample

// @screenshot *: 360x297 373
// @screenshot brite: 360x295 295
// @screenshot litera: 360x300 300
// @screenshot quartz: 360x305 305
