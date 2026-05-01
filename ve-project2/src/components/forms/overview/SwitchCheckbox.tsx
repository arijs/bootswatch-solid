import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	form,
	formCheck,
	formCheckInput,
	formCheckLabel,
	formSwitch,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const SwitchCheckbox: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3} ${formCheck} ${formSwitch}`}>
					<input
						class={`${theme} ${formCheckInput} pwhook-checkbox`}
						type="checkbox"
						id="flexSwitchCheckChecked"
						checked
					/>
					<label class={`${theme} ${formCheckLabel} pwhook-checkbox-label`} for="flexSwitchCheckChecked">
						Checked switch checkbox input
					</label>
				</div>
			</form>
		</div>
	)
}

export default SwitchCheckbox

// @screenshot *: 360x120 120
