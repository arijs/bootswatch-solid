import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	card,
	cardBody,
	cardFooter,
	cardHeader,
	cardText,
	cardTitle,
} from '../../../theme-contract/ui/card/contract.css'

const FeaturedCard: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${card}`}>
				<div class={`${theme} ${cardHeader}`}>Featured</div>
				<div class={`${theme} ${cardBody}`}>
					<h5 class={`${theme} ${cardTitle}`}>Card title</h5>
					<p class={`${theme} ${cardText}`}>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</p>
				</div>
				<div class={`${theme} ${cardFooter}`}>
					<small>2 days ago</small>
				</div>
			</div>
		</div>
	)
}

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
