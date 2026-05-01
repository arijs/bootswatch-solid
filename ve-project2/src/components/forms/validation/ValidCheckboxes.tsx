import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	colMd6,
	formCheck,
	formCheckInput,
	formCheckLabel,
	g3,
	isValid,
	row,
	rowCol,
	validFeedback,
} from '../../../theme-contract/forms/contract.css'

const ValidCheckboxes: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${row} ${g3}`}>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<div class={`${theme} ${formCheck}`}>
						<input
							class={`${theme} ${formCheckInput} ${isValid}`}
							type="checkbox"
							value=""
							id="validCheck3"
							required
							checked
						/>
						<label class={`${theme} ${formCheckLabel}`} for="validCheck3">
							Agree to terms and conditions
						</label>
						<div class={`${theme} ${validFeedback}`}>You agreed before submitting.</div>
					</div>
				</div>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<div class={`${theme} ${formCheck}`}>
						<input
							class={`${theme} ${formCheckInput} ${isValid}`}
							type="checkbox"
							value=""
							id="validCheck4"
							required
						/>
						<label class={`${theme} ${formCheckLabel}`} for="validCheck4">
							Do NOT Agree to terms and conditions
						</label>
						<div class={`${theme} ${validFeedback}`}>You agreed before submitting.</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ValidCheckboxes

// @screenshot *: 360x134 134
// @screenshot brite: 360x123 123
// @screenshot litera: 360x143 143
// @screenshot quartz: 360x166 166
