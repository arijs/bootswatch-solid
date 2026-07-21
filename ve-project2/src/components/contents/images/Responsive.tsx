import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { imgFluid } from '../../../theme-contract/contents/contract.css'
import { elSvg } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'contents/basic',
	'contents/images',
	'utilities/used',
]

const Responsive: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<svg
				class={`bd-placeholder-img bd-placeholder-img-lg ${theme} ${elSvg} ${imgFluid}`}
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
