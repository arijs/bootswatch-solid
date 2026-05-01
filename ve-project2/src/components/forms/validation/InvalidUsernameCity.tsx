import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	colMd6,
	formControl,
	formLabel,
	g3,
	hasValidation,
	inputGroup,
	inputGroupText,
	invalidFeedback,
	isInvalid,
	row,
	rowCol,
} from '../../../theme-contract/forms/contract.css'

const InvalidUsernameCity: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${row} ${g3}`}>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<label for="validationServerUsername" class={`${theme} ${formLabel}`}>
						Username
					</label>
					<div class={`${theme} ${inputGroup} ${hasValidation} ${isInvalid}`}>
						<span class={`${theme} ${inputGroupText}`} id="inputGroupPrepend3">
							@
						</span>
						<input
							type="text"
							class={`${theme} ${formControl} ${isInvalid}`}
							id="validationServerUsername"
							aria-describedby="inputGroupPrepend3"
							required
						/>
					</div>
					<div class={`${theme} ${invalidFeedback}`}>Please choose a username.</div>
				</div>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<label for="validationServer03" class={`${theme} ${formLabel}`}>
						City
					</label>
					<input
						type="text"
						class={`${theme} ${formControl} ${isInvalid}`}
						id="validationServer03"
						required
					/>
					<div class={`${theme} ${invalidFeedback}`}>Please provide a valid city.</div>
				</div>
			</form>
		</div>
	)
}

export default InvalidUsernameCity

// @screenshot *: 360x222 222
// @screenshot brite: 360x217 217
// @screenshot cyborg: 360x218 218
// @screenshot litera: 360x244 244
// @screenshot lux: 360x242 242
// @screenshot materia: 360x258 258
// @screenshot morph: 360x258 258
// @screenshot quartz: 360x278 278
// @screenshot sketchy: 360x226 226
// @screenshot slate: 360x246 246
// @screenshot superhero: 360x220 220
// @screenshot vapor: 360x218 218
// @screenshot yeti: 360x220 220
// @screenshot zephyr: 360x224 224
