import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { h5, paragraph, small } from '../../../theme-contract/contents/contract.css'
import { textMuted } from '../../../theme-contract/utilities/contract.css'
import {
	card,
	cardBody,
	cardHorizontalColBody,
	cardHorizontalColImg,
	cardHorizontalRow,
	cardText,
	cardTitle,
} from '../../../theme-contract/ui/card/contract.css'

const HorizontalCard: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class={`bd-example-ve2 ${theme}`}>
			<div class={`${theme} ${card}`}>
				<div class={`${theme} ${cardHorizontalRow}`}>
					<div class={`${theme} ${cardHorizontalColImg}`}>
						<svg
							class="bd-placeholder-img"
							width="100%"
							height="250"
							xmlns="http://www.w3.org/2000/svg"
							aria-label="Placeholder: Image"
							preserveAspectRatio="xMidYMid slice"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#868e96" />
							<text x="50%" y="50%" fill="#dee2e6" dy=".3em" text-anchor="middle">
								Image
							</text>
						</svg>
					</div>
					<div class={`${theme} ${cardHorizontalColBody}`}>
						<div class={`${theme} ${cardBody}`}>
							<h5 class={`${theme} ${cardTitle} ${h5}`}>Card title</h5>
							<p class={`${theme} ${cardText} ${paragraph}`}>
								This is a wider card with supporting text below as a natural lead-in
								to additional content. This content is a little bit longer.
							</p>
							<p class={`${theme} ${cardText} ${paragraph}`}>
								<small class={`${theme} ${small} ${textMuted}`}>Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
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
