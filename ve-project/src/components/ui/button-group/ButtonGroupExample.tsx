import type { Component } from 'solid-js'
import { useVeButtonGroupThemeClasses, useVeButtonThemeClasses } from '../../../themes/runtime/hooks'

const ButtonGroupExample: Component = () => {
	const buttonCls = useVeButtonThemeClasses()
	const groupCls = useVeButtonGroupThemeClasses()

	return (
		<div class={`bd-example ${buttonCls.bsTheme} ${buttonCls.body} ${buttonCls.containerFluid}`}>
			<div class={groupCls.btnToolbar} role="toolbar" aria-label="Toolbar with button groups">
				<fieldset class={`${groupCls.btnGroup} ${groupCls.marginEnd2}`} aria-label="First group">
					<button type="button" class={`${buttonCls.btn} ${buttonCls.btnSecondary} ${groupCls.btnGroupButton} ${groupCls.btnGroupInteractive}`}>
						1
					</button>
					<button type="button" class={`${buttonCls.btn} ${buttonCls.btnSecondary} ${groupCls.btnGroupButton} ${groupCls.btnGroupInteractive}`}>
						2
					</button>
					<button type="button" class={`${buttonCls.btn} ${buttonCls.btnSecondary} ${groupCls.btnGroupButton} ${groupCls.btnGroupInteractive}`}>
						3
					</button>
					<button type="button" class={`${buttonCls.btn} ${buttonCls.btnSecondary} ${groupCls.btnGroupButton} ${groupCls.btnGroupInteractive}`}>
						4
					</button>
				</fieldset>
				<fieldset class={`${groupCls.btnGroup} ${groupCls.marginEnd2}`} aria-label="Second group">
					<button type="button" class={`${buttonCls.btn} ${buttonCls.btnSecondary} ${groupCls.btnGroupButton} ${groupCls.btnGroupInteractive}`}>
						5
					</button>
					<button type="button" class={`${buttonCls.btn} ${buttonCls.btnSecondary} ${groupCls.btnGroupButton} ${groupCls.btnGroupInteractive}`}>
						6
					</button>
					<button type="button" class={`${buttonCls.btn} ${buttonCls.btnSecondary} ${groupCls.btnGroupButton} ${groupCls.btnGroupInteractive}`}>
						7
					</button>
				</fieldset>
				<fieldset class={groupCls.btnGroup} aria-label="Third group">
					<button type="button" class={`${buttonCls.btn} ${buttonCls.btnSecondary} ${groupCls.btnGroupButton} ${groupCls.btnGroupInteractive}`}>
						8
					</button>
				</fieldset>
			</div>
		</div>
	)
}

export default ButtonGroupExample

// @screenshot *: 360x120 120
