import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { paragraph } from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { mb3 } from '../../../theme-contract/utilities/contract.css'
import {
	fade,
	nav,
	navButtonReset,
	navLink,
	navLinkActive,
	navTabs,
	show,
	tabContent,
	tabPane,
	tabPaneActive,
} from '../../../theme-contract/ui/navs/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/navs',
	'contents/basic',
	'utilities',
]

const TabbedNav: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<nav>
				<div class={`${theme} ${nav} ${navTabs} ${mb3}`} id="nav-tab" role="tablist">
					<button
						class={`${theme} ${navButtonReset} ${navLink} ${navLinkActive}`}
						id="nav-home-tab"
						type="button"
						role="tab"
						aria-controls="nav-home"
						aria-selected="true"
					>
						Home
					</button>
					<button
						class={`${theme} ${navButtonReset} ${navLink}`}
						id="nav-profile-tab"
						type="button"
						role="tab"
						aria-controls="nav-profile"
						aria-selected="false"
					>
						Profile
					</button>
					<button
						class={`${theme} ${navButtonReset} ${navLink}`}
						id="nav-contact-tab"
						type="button"
						role="tab"
						aria-controls="nav-contact"
						aria-selected="false"
					>
						Contact
					</button>
				</div>
			</nav>
			<div class={`${theme} ${tabContent}`} id="nav-tabContent">
				<div
					class={`${theme} ${tabPane} ${fade} ${show} ${tabPaneActive}`}
					id="nav-home"
					role="tabpanel"
					aria-labelledby="nav-home-tab"
				>
					<p class={`${theme} ${paragraph}`}>
						Placeholder content for the tab panel. This one relates to the home tab. Takes
						you miles high, so high, 'cause she’s got that one international smile. There's
						a stranger in my bed, there's a pounding in my head. Oh, no. In another life I
						would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my
						crowning battle. Used to steal your parents' liquor and climb to the roof. Tone,
						tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug.
						I guess that I forgot I had a choice.
					</p>
				</div>
			</div>
		</div>
	)
}

export default TabbedNav

// @screenshot *: 360x322 322
// @screenshot brite: 360x357 357
// @screenshot cosmo: 360x298 298
// @screenshot darkly: 360x363 363
// @screenshot flatly: 360x363 363
// @screenshot litera: 360x374 374
// @screenshot lumen: 360x304 304
// @screenshot lux: 360x368 368
// @screenshot materia: 360x344 344
// @screenshot morph: 360x320 320
// @screenshot pulse: 360x321 321
// @screenshot quartz: 360x336 336
// @screenshot sandstone: 360x320 320
// @screenshot simplex: 360x359 359
// @screenshot sketchy: 360x276 276
// @screenshot solar: 360x298 298
// @screenshot spacelab: 360x346 346
// @screenshot united: 360x346 346
// @screenshot vapor: 360x320 320
// @screenshot yeti: 360x346 346
// @screenshot zephyr: 360x361 361
