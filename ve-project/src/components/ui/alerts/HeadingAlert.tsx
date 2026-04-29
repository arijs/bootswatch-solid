import type { Component } from 'solid-js'
import { useVeAlertThemeClasses, useVeContentsThemeClasses } from '../../../themes/runtime/hooks'

const HeadingAlert: Component = () => {
	const cls = useVeAlertThemeClasses()
	const contents = useVeContentsThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={`${cls.alert} ${cls.alertSuccess}`}>
				<h4 class={`${contents.h4} ${cls.alertHeading}`}>Well done!</h4>
				<p>
					Aww yeah, you successfully read this important alert message. This example text
					is going to run a bit longer so that you can see how spacing within an alert
					works with this kind of content.
				</p>
				<hr class={cls.alertHr} />
				<p class={cls.mb0}>
					Whenever you need to, be sure to use margin utilities to keep things nice and
					tidy.
				</p>
			</div>
		</div>
	)
}

export default HeadingAlert

// @screenshot *: 360x293 293
// @screenshot brite: 360x229 229
// @screenshot cosmo: 360x267 267
// @screenshot cyborg: 360x295 295
// @screenshot darkly: 360x267 267
// @screenshot flatly: 360x267 267
// @screenshot journal: 360x291 291
// @screenshot litera: 360x262 262
// @screenshot lumen: 360x271 271
// @screenshot lux: 360x312 312
// @screenshot materia: 360x315 315
// @screenshot morph: 360x290 290
// @screenshot quartz: 360x387 387
// @screenshot sketchy: 360x248 248
// @screenshot slate: 360x291 291
// @screenshot solar: 360x267 267
// @screenshot superhero: 360x267 267
// @screenshot vapor: 360x267 267
// @screenshot yeti: 360x227 227
