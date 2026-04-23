import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, display1, display2, display3, display4, display5, display6, paragraph } from '../../../themes/bootstrap/contents/generated.css'

const Display: Component = () => (
	<div class={`bd-example ${bdExample} ${containerFluid} ${bsTheme} ${body}`}>
		<p class={`${display1} ${paragraph}`}>Display 1</p>
		<p class={`${display2} ${paragraph}`}>Display 2</p>
		<p class={`${display3} ${paragraph}`}>Display 3</p>
		<p class={`${display4} ${paragraph}`}>Display 4</p>
		<p class={`${display5} ${paragraph}`}>Display 5</p>
		<p class={`${display6} ${paragraph}`}>Display 6</p>
	</div>
)

export default Display

// @screenshot *: 360x331 331
// @screenshot journal: 360x310 310
// @screenshot materia: 360x432 432
