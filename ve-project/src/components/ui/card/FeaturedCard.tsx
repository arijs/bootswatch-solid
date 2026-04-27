import type { Component } from 'solid-js'
import { h5, paragraph } from '../../../themes/bootstrap/contents/generated.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnPrimary } from '../../../themes/bootstrap/ui/buttons/generated.css'
import {
	card,
	cardBody,
	cardFooter,
	cardHeader,
	cardText,
	cardTitle,
	textMuted,
} from '../../../themes/bootstrap/ui/card/base.css'

const FeaturedCard: Component = () => (
	<div class={card}>
		<div class={cardHeader}>Featured</div>
		<div class={cardBody}>
			<h5 class={`${h5} ${cardTitle}`}>Card title</h5>
			<p class={`${paragraph} ${cardText}`}>
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</p>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a href="#" onClick={(e) => e.preventDefault()} class={`${btn} ${btnPrimary}`}>
				Go somewhere
			</a>
		</div>
		<div class={`${cardFooter} ${textMuted}`}>2 days ago</div>
	</div>
)

export default FeaturedCard

// @screenshot *: 360x274 274
// @screenshot brite: 360x245 245
// @screenshot cosmo: 360x250 250
// @screenshot cyborg: 360x276 276
// @screenshot journal: 360x272 272
// @screenshot litera: 360x288 288
// @screenshot lumen: 360x252 252
// @screenshot lux: 360x276 276
// @screenshot materia: 360x282 282
// @screenshot morph: 360x321 321
// @screenshot quartz: 360x340 340
// @screenshot sandstone: 360x272 272
// @screenshot sketchy: 360x256 256
// @screenshot slate: 360x286 286
// @screenshot solar: 360x250 250
// @screenshot vapor: 360x276 276
// @screenshot zephyr: 360x307 307
