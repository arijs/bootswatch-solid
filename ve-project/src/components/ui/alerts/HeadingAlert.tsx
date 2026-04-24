import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { h4 } from '../../../themes/bootstrap/contents/generated.css'
import {
	alert,
	alertHeading,
	alertHr,
	alertSuccess,
	mb0,
} from '../../../themes/bootstrap/ui/alerts/base.css'

const HeadingAlert: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={`${alert} ${alertSuccess}`}>
			<h4 class={`${h4} ${alertHeading}`}>Well done!</h4>
			<p>
				Aww yeah, you successfully read this important alert message. This example text is
				going to run a bit longer so that you can see how spacing within an alert works with
				this kind of content.
			</p>
			<hr class={alertHr} />
			<p class={mb0}>
				Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
			</p>
		</div>
	</div>
)

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
