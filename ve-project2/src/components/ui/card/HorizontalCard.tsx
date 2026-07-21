import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { h5, paragraph, small } from '../../../theme-contract/contents/contract.css'
import { elSvg } from '../../../theme-contract/global-elements/contract.css'
import { card, cardBody, cardText, cardTitle } from '../../../theme-contract/ui/card/contract.css'
import { colMd4, colMd8, g0, row, textMuted } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/card',
	'contents/basic',
	'contents/heading',
	'contents/images',
	'utilities/used',
]

const HorizontalCard: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	const cardMarkup = (
		<div class={`${theme} ${card}`}>
			<div class={`${theme} ${row} ${g0}`}>
				<div class={`${theme} ${colMd4}`}>
					<svg
						class={`bd-placeholder-img ${theme} ${elSvg}`}
						width="100%"
						height="250"
						xmlns="http://www.w3.org/2000/svg"
						aria-label="Placeholder: Image"
						preserveAspectRatio="xMidYMid slice"
						tabindex="0"
					>
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#868e96" />
						<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
							Image
						</text>
					</svg>
				</div>
				<div class={`${theme} ${colMd8}`}>
					<div class={`${theme} ${cardBody}`}>
						<h5 class={`${theme} ${cardTitle} ${h5}`}>Card title</h5>
						<p class={`${theme} ${cardText} ${paragraph}`}>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</p>
						<p class={`${theme} ${cardText} ${paragraph}`}>
							<small class={`${theme} ${small} ${textMuted}`}>
								Last updated 3 mins ago
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
	return cardMarkup
}

export default HorizontalCard

// @screenshot *: 360x428 428
// @screenshot brite: 360x415 415
// @screenshot cyborg: 360x430 430
// @screenshot journal: 360x426 426
// @screenshot litera: 360x439 439
// @screenshot lux: 360x446 446
// @screenshot materia: 360x426 426
// @screenshot morph: 360x442 442
// @screenshot quartz: 360x458 458
// @screenshot sketchy: 360x430 430
// @screenshot vapor: 360x430 430
