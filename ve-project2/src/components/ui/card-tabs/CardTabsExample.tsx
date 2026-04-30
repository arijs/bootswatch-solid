import { vars } from '../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	cardHeaderTabs,
	nav,
	navItem,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navTabs,
} from '../../../theme-contract/ui/card-tabs/contract.css'
import {
	card,
	cardBody,
	cardHeader,
	cardText,
	cardTitle,
} from '../../../theme-contract/ui/card/contract.css'

const CardTabsExample: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${vars} ${card}`} style={{ 'text-align': 'center' }}>
				<div class={`${theme} ${cardHeader}`}>
					<ul class={`${theme} ${nav} ${navTabs} ${cardHeaderTabs}`}>
						<li class={`${theme} ${navItem}`}>
							<button
								class={`${theme} ${navLink} ${navLinkActive}`}
								type="button"
								aria-current="true"
							>
								Active
							</button>
						</li>
						<li class={`${theme} ${navItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a class={`${theme} ${navLink}`} href="#" onClick={(e) => e.preventDefault()}>
								Link
							</a>
						</li>
						<li class={`${theme} ${navItem}`}>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class={`${theme} ${navLink} ${navLinkDisabled}`}
								aria-disabled="true"
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								Disabled
							</a>
						</li>
					</ul>
				</div>
				<div class={`${theme} ${cardBody}`}>
					<h5 class={`${theme} ${cardTitle}`}>Special title treatment</h5>
					<p class={`${theme} ${cardText}`}>
						With supporting text below as a natural lead-in to additional content.
					</p>
				</div>
			</div>
		</div>
	)
}

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
