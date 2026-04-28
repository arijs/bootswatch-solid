import type { Component } from 'solid-js'
import { useVeContentsThemeClasses, useVeNavThemeClasses } from '../../../themes/runtime/hooks'

const TabbedNav: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
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
	} = useVeNavThemeClasses()
	const { mb3, paragraph } = useVeContentsThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<nav>
			<div class={`${nav} ${navTabs} ${mb3}`} role="tablist" aria-label="Example tabs">
				<button class={`${navButtonReset} ${navLink} ${navLinkActive}`} type="button" role="tab" aria-selected="true">
					Home
				</button>
				<button class={`${navButtonReset} ${navLink}`} type="button" role="tab" aria-selected="false">
					Profile
				</button>
				<button class={`${navButtonReset} ${navLink}`} type="button" role="tab" aria-selected="false">
					Contact
				</button>
			</div>
		</nav>
		<div class={tabContent}>
			<div class={`${tabPane} ${fade} ${show} ${tabPaneActive}`} role="tabpanel">
				<p class={paragraph}>
					Placeholder content for the tab panel. This one relates to the home tab. Takes you miles high, so high, 'cause she’s got that one international smile. There's a stranger in my bed, there's a pounding in my head. Oh, no. In another life I would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my crowning battle. Used to steal your parents' liquor and climb to the roof. Tone, tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug. I guess that I forgot I had a choice.
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