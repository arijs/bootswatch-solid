import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bdExample } from '../../../themes/bootstrap/contents/generated.css'
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
	roundedPill,
	textDark,
} from '../../../themes/bootstrap/ui/badge/base.css'

const PillBadges: Component = () => (
	<div class={`bd-example ${bdExample} ${containerFluid} ${bsTheme} ${body}`}>
		<span class={`${badge} ${roundedPill} ${bgPrimary}`}>Primary</span>
		<span class={`${badge} ${roundedPill} ${bgSecondary}`}>Secondary</span>
		<span class={`${badge} ${roundedPill} ${bgSuccess}`}>Success</span>
		<span class={`${badge} ${roundedPill} ${bgDanger}`}>Danger</span>
		<span class={`${badge} ${roundedPill} ${bgWarning} ${textDark}`}>Warning</span>
		<span class={`${badge} ${roundedPill} ${bgInfo} ${textDark}`}>Info</span>
		<span class={`${badge} ${roundedPill} ${bgLight} ${textDark}`}>Light</span>
		<span class={`${badge} ${roundedPill} ${bgDark}`}>Dark</span>
	</div>
)

export default PillBadges

// @screenshot *: 360x120 120