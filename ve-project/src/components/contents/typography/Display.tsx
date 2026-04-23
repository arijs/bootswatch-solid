import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, display1, display2, display3, display4, display5, display6 } from '../../../themes/bootstrap/contents/generated.css'

const Display: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<p class={`display-1 ${display1}`}>Display 1</p>
		<p class={`display-2 ${display2}`}>Display 2</p>
		<p class={`display-3 ${display3}`}>Display 3</p>
		<p class={`display-4 ${display4}`}>Display 4</p>
		<p class={`display-5 ${display5}`}>Display 5</p>
		<p class={`display-6 ${display6}`}>Display 6</p>
	</div>
)

export default Display

// @screenshot *: 360x331 331
// @screenshot journal: 360x310 310
// @screenshot materia: 360x432 432
