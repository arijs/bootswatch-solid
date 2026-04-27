import type { Component } from 'solid-js'
import { bdPlaceholderImg, h5, paragraph, smallText } from '../../../themes/bootstrap/contents/generated.css'
import {
	card,
	cardBody,
	cardText,
	cardTitle,
	textMuted,
} from '../../../themes/bootstrap/ui/card/base.css'

const HorizontalCard: Component = () => (
	<div class={card}>
		<svg
			class={bdPlaceholderImg}
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
		<div class={cardBody}>
			<h5 class={`${h5} ${cardTitle}`}>Card title</h5>
			<p class={`${paragraph} ${cardText}`}>
				This is a wider card with supporting text below as a natural lead-in to
				additional content. This content is a little bit longer.
			</p>
			<p class={`${paragraph} ${cardText}`}>
				<small class={`${smallText} ${textMuted}`}>Last updated 3 mins ago</small>
			</p>
		</div>
	</div>
)

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
