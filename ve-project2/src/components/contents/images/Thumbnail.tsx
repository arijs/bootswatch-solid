import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { imgThumbnail } from '../../../theme-contract/contents/contract.css'
import { elSvg } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'contents/basic',
	'contents/images',
	'utilities/used',
]

const Thumbnail: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<svg
				class={`bd-placeholder-img ${theme} ${elSvg} ${imgThumbnail}`}
				width="200"
				height="200"
				xmlns="http://www.w3.org/2000/svg"
				aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
				preserveAspectRatio="xMidYMid slice"
				tabindex="0"
			>
				<title>
					A generic square placeholder image with a white border around it, making it
					resemble a photograph taken with an old instant camera
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
