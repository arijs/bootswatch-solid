import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bdExample, h1, h2, h3, h4, h5, h6 } from '../../../themes/bootstrap/contents/generated.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import {
	badge,
	bgDark,
	bgDanger,
	bgInfo,
	bgLight,
	bgPrimary,
	bgSecondary,
	bgSuccess,
	bgWarning,
	textDark,
} from '../../../themes/bootstrap/ui/badge/base.css'

const HeadingBadges: Component = () => (
	<div class={`bd-example ${bdExample} ${containerFluid} ${bsTheme} ${body}`}>
		<p class={h1}>
			Example heading <span class={`${badge} ${bgPrimary}`}>New</span>
		</p>
		<p class={h2}>
			Example heading <span class={`${badge} ${bgSecondary}`}>New</span>
		</p>
		<p class={h3}>
			Example heading <span class={`${badge} ${bgSuccess}`}>New</span>
		</p>
		<p class={h4}>
			Example heading <span class={`${badge} ${bgDanger}`}>New</span>
		</p>
		<p class={h5}>
			Example heading <span class={`${badge} ${bgWarning} ${textDark}`}>New</span>
		</p>
		<p class={h6}>
			Example heading <span class={`${badge} ${bgInfo} ${textDark}`}>New</span>
		</p>
		<p class={h6}>
			Example heading <span class={`${badge} ${bgLight} ${textDark}`}>New</span>
		</p>
		<p class={h6}>
			Example heading <span class={`${badge} ${bgDark}`}>New</span>
		</p>
	</div>
)

export default HeadingBadges

// @screenshot *: 360x276 276
// @screenshot brite: 360x280 280
// @screenshot cosmo: 360x275 275
// @screenshot cyborg: 360x348 348
// @screenshot darkly: 360x288 288
// @screenshot flatly: 360x288 288
// @screenshot journal: 360x267 267
// @screenshot litera: 360x379 379
// @screenshot lumen: 360x275 275
// @screenshot lux: 360x302 302
// @screenshot materia: 360x275 275
// @screenshot minty: 360x273 273
// @screenshot morph: 360x364 364
// @screenshot quartz: 360x332 332
// @screenshot sandstone: 360x275 275
// @screenshot simplex: 360x274 274
// @screenshot sketchy: 360x303 303
// @screenshot solar: 360x275 275
// @screenshot spacelab: 360x274 274
// @screenshot superhero: 360x277 277
// @screenshot united: 360x273 273
// @screenshot vapor: 360x277 277
// @screenshot yeti: 360x274 274
// @screenshot zephyr: 360x272 272