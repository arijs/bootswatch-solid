import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	bdPlaceholderImg,
	bdPlaceholderImgLg,
	imgFluid,
} from '../../../theme-contract/contents/contract.css'

const Responsive: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<svg
				class={`${theme} ${bdPlaceholderImg} ${bdPlaceholderImgLg} ${imgFluid}`}
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
}

export default Responsive

// @screenshot *: 360x250 250
