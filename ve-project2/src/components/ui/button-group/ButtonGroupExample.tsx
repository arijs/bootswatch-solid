import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	btnGroup,
	btnGroupButton,
	btnGroupInteractive,
	btnToolbar,
	marginEnd2,
} from '../../../theme-contract/ui/button-group/contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
const ButtonGroupExample: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div
				class={`${theme} ${btnToolbar}`}
				role="toolbar"
				aria-label="Toolbar with button groups"
			>
				<fieldset
					class={`${theme} ${btnGroup} ${marginEnd2}`}
					aria-label="First group"
				>
					<button type="button" class={`${theme} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
						1
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
						2
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
						3
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
						4
					</button>
				</fieldset>
				<fieldset
					class={`${theme} ${btnGroup} ${marginEnd2}`}
					aria-label="Second group"
				>
					<button type="button" class={`${theme} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
						5
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
						6
					</button>
					<button type="button" class={`${theme} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
						7
					</button>
				</fieldset>
				<fieldset class={`${theme} ${btnGroup}`} aria-label="Third group">
					<button type="button" class={`${theme} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}>
						8
					</button>
				</fieldset>
			</div>
		</div>
	)
}

export default ButtonGroupExample

// @screenshot *: 360x120 120
