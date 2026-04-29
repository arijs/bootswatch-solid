import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	btnGroup,
	btnToolbar,
} from '../../../theme-contract/ui/button-group/contract.css'
import {
	btn,
	btnSecondary,
} from '../../../theme-contract/ui/buttons/contract.css'

const ButtonGroupExample: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${btnToolbar}`} role="toolbar" aria-label="Toolbar with button groups">
				<fieldset class={btnGroup} style={{ 'margin-right': '0.5rem' }} aria-label="First group">
					<button type="button" class={`${theme} ${btn} ${btnSecondary}`}>
						1
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary}`}>
						2
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary}`}>
						3
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary}`}>
						4
					</button>
				</fieldset>
				<fieldset class={btnGroup} style={{ 'margin-right': '0.5rem' }} aria-label="Second group">
					<button type="button" class={`${theme} ${btn} ${btnSecondary}`}>
						5
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary}`}>
						6
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary}`}>
						7
					</button>
				</fieldset>
				<fieldset class={btnGroup} aria-label="Third group">
					<button type="button" class={`${theme} ${btn} ${btnSecondary}`}>
						8
					</button>
				</fieldset>
			</div>
		</div>
	)
}

export default ButtonGroupExample

// @screenshot *: 360x120 120
