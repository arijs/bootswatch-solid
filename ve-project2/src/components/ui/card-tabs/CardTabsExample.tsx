import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/basic/contract.css'
import { h5, paragraph } from '../../../theme-contract/contents/contract.css'
import { elButton } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { active, disabled, textCenter } from '../../../theme-contract/literal/contract.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { btn, btnPrimary } from '../../../theme-contract/ui/buttons/contract.css'
import {
	card,
	cardBody,
	cardHeader,
	cardText,
	cardTitle,
} from '../../../theme-contract/ui/card/contract.css'
import { cardHeaderTabs } from '../../../theme-contract/ui/card-tabs/contract.css'
import {
	nav,
	navButtonReset,
	navItem,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navTabs,
} from '../../../theme-contract/ui/navs/contract.css'
import { col, g4, row } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/card-tabs',
	'ui/card',
	'ui/navs',
	'ui/buttons',
	'contents/basic',
	'contents/heading',
	'utilities/used',
]

const CardTabsExample: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<div class={`${theme} ${row} ${g4}`}>
				<div class={`${theme} ${col}`}>
					<div class={`${theme} ${card} ${textCenter}`}>
						<div class={`${theme} ${cardHeader}`}>
							<ul class={`${theme} ${nav} ${navTabs} ${cardHeaderTabs}`}>
								<li class={`${theme} ${navItem}`}>
									<button
										class={`${theme} ${elButton} ${navButtonReset} ${navLink} ${navLinkActive} ${active}`}
										type="button"
										aria-current="true"
									>
										Active
									</button>
								</li>
								<li class={`${theme} ${navItem}`}>
									{/* biome-ignore lint: <a> is used for demonstration purposes */}
									<a
										class={`${theme} ${link} ${navLink}`}
										href="#"
										onClick={(e) => e.preventDefault()}
									>
										Link
									</a>
								</li>
								<li class={`${theme} ${navItem}`}>
									{/* biome-ignore lint: <a> is used for demonstration purposes */}
									<a
										class={`${theme} ${link} ${navLink} ${navLinkDisabled} ${disabled}`}
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
							<h5 class={`${theme} ${cardTitle} ${h5}`}>Special title treatment</h5>
							<p class={`${theme} ${cardText} ${paragraph}`}>
								With supporting text below as a natural lead-in to additional
								content.
							</p>
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								href="#"
								onClick={(e) => e.preventDefault()}
								class={`${theme} ${link} ${btn} ${btnPrimary}`}
							>
								Go somewhere
							</a>
						</div>
					</div>
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
