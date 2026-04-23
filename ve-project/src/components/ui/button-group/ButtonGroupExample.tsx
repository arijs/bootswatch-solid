import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { btnSecondary } from '../../../themes/bootstrap/ui/buttons/generated.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import {
	btnGroup,
	btnGroupButton,
	btnToolbar,
	marginEnd2,
	btnGroupInteractive,
} from '../../../themes/bootstrap/ui/button-group/base.css'

const ButtonGroupExample: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={btnToolbar} role="toolbar" aria-label="Toolbar with button groups">
			<fieldset class={`${btnGroup} ${marginEnd2}`} aria-label="First group">
				<button type="button" class={`${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
					1
				</button>
				<button type="button" class={`${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
					2
				</button>
				<button type="button" class={`${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
					3
				</button>
				<button type="button" class={`${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
					4
				</button>
			</fieldset>
			<fieldset class={`${btnGroup} ${marginEnd2}`} aria-label="Second group">
				<button type="button" class={`${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
					5
				</button>
				<button type="button" class={`${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
					6
				</button>
				<button type="button" class={`${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
					7
				</button>
			</fieldset>
			<fieldset class={btnGroup} aria-label="Third group">
				<button type="button" class={`${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
					8
				</button>
			</fieldset>
		</div>
	</div>
)

export default ButtonGroupExample

// @screenshot *: 360x120 120
