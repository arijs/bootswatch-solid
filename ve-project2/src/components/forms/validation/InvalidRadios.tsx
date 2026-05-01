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
	invalidFeedback,
	isInvalid,
	row,
	rowCol,
} from '../../../theme-contract/forms/contract.css'

const InvalidRadios: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${row} ${g3}`}>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<div class={`${theme} ${formCheck}`}>
						<input
							class={`${theme} ${formCheckInput} ${isInvalid}`}
							type="radio"
							name="radioGroup"
							value=""
							id="invalidRadio3"
							required
						/>
						<label class={`${theme} ${formCheckLabel}`} for="invalidRadio3">
							Agree to terms and conditions
						</label>
						<div class={`${theme} ${invalidFeedback}`}>You must agree before submitting.</div>
					</div>
				</div>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<div class={`${theme} ${formCheck}`}>
						<input
							class={`${theme} ${formCheckInput} ${isInvalid}`}
							type="radio"
							name="radioGroup"
							value=""
							id="invalidRadio4"
							required
							checked
						/>
						<label class={`${theme} ${formCheckLabel}`} for="invalidRadio4">
							Do NOT Agree to terms and conditions
						</label>
						<div class={`${theme} ${invalidFeedback}`}>You must agree before submitting.</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default InvalidRadios

// @screenshot *: 360x134 134
// @screenshot brite: 360x123 123
// @screenshot litera: 360x143 143
// @screenshot quartz: 360x166 166
