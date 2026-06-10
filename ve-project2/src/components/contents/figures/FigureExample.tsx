import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import {
	figure,
	figureCaption,
	figureImg,
	imgFluid,
	rounded,
} from '../../../theme-contract/contents/contract.css'
import { elFigure, elSvg } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'contents/basic',
	'contents/images',
	'utilities',
]

const FigureExample: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<figure class={`${theme} ${elFigure} ${figure}`}>
				<svg
					class={`bd-placeholder-img ${theme} ${elSvg} ${figureImg} ${imgFluid} ${rounded}`}
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
