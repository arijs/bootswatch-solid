import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { bdPlaceholderImg, imgThumbnail } from '../../../theme-contract/contents/contract.css'

const Thumbnail: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<svg
				class={`${theme} ${bdPlaceholderImg} ${imgThumbnail}`}
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
}

export default Thumbnail

// @screenshot *: 360x200 200
