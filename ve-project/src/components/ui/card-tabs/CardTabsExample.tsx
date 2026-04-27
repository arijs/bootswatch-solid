import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { card, cardBody, cardHeader, cardRow, cardText, cardTitle } from '../../../themes/bootstrap/ui/card/base.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnPrimary } from '../../../themes/bootstrap/ui/buttons/generated.css'
import { h5, paragraph } from '../../../themes/bootstrap/contents/generated.css'
import { nav, navButtonReset, navLink, navLinkActive, navLinkDisabled } from '../../../themes/bootstrap/ui/nav/base.css'
import { cardHeaderTabs, col, rowG4, textCenter } from '../../../themes/bootstrap/ui/card-tabs/base.css'

const CardTabsExample: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={`${cardRow} ${rowG4}`}>
			<div class={col}>
				<div class={`${card} ${textCenter}`}>
					<div class={cardHeader}>
						<ul class={`${nav} ${cardHeaderTabs}`}>
							<li>
								<button class={`${navButtonReset} ${navLink} ${navLinkActive}`} type="button" aria-current="true">
									Active
								</button>
							</li>
							<li>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a class={navLink} href="#">
									Link
								</a>
							</li>
							<li>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a class={`${navLink} ${navLinkDisabled}`} aria-disabled="true" href="#">
									Disabled
								</a>
							</li>
						</ul>
					</div>
					<div class={cardBody}>
						<h5 class={`${cardTitle} ${h5}`}>Special title treatment</h5>
						<p class={`${cardText} ${paragraph}`}>
							With supporting text below as a natural lead-in to additional content.
						</p>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a href="#" class={`${btn} ${btnPrimary}`}>
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default CardTabsExample

// @screenshot *: 360x242 294
// @screenshot brite: 360x259 259
// @screenshot cyborg: 360x244 244
// @screenshot darkly: 360x283 283
// @screenshot flatly: 360x283 283
// @screenshot journal: 360x240 240
// @screenshot litera: 360x248 248
// @screenshot lumen: 360x250 250
// @screenshot lux: 360x284 284
// @screenshot materia: 360x249 249
// @screenshot morph: 360x277 277
// @screenshot pulse: 360x241 241
// @screenshot quartz: 360x313 313
// @screenshot sandstone: 360x238 238
// @screenshot simplex: 360x255 255
// @screenshot sketchy: 360x248 248
// @screenshot slate: 360x254 254
// @screenshot zephyr: 360x266 266