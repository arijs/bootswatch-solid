import { fieldset } from '../../../theme-contract/forms/contract.css'
import {
	elButton,
} from '../../../theme-contract/global-elements/contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { me2 } from '../../../theme-contract/utilities/contract.css'
import {
	btnGroup,
	btnGroupButton,
	btnGroupInteractive,
	btnToolbar,
} from '../../../theme-contract/ui/button-group/contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/button-group',
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const ButtonGroupExample: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div
				class={`${theme} ${btnToolbar}`}
				role="toolbar"
				aria-label="Toolbar with button groups"
			>
				<fieldset class={`${theme} ${fieldset} ${btnGroup} ${me2}`} aria-label="First group">
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}
					>
						1
					</button>
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}
					>
						2
					</button>
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}
					>
						3
					</button>
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}
					>
						4
					</button>
				</fieldset>
				<fieldset class={`${theme} ${fieldset} ${btnGroup} ${me2}`} aria-label="Second group">
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}
					>
						5
					</button>
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}
					>
						6
					</button>
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}
					>
						7
					</button>
				</fieldset>
				<fieldset class={`${theme} ${fieldset} ${btnGroup}`} aria-label="Third group">
					<button
						type="button"
						class={`${theme} ${elButton} ${btn} ${btnSecondary} ${btnGroupButton} ${btnGroupInteractive}`}
					>
						8
					</button>
				</fieldset>
			</div>
		</div>
	)
}

export default ButtonGroupExample

// @screenshot *: 360x120 120
