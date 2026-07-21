import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import {
	formControl,
	formLabel,
	hasValidation,
	inputGroup,
	inputGroupText,
	invalidFeedback,
	isInvalid,
} from '../../../theme-contract/forms/contract.css'
import { elInput, elLabel } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { colMd6, g3, row, rowCol } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents/basic',
	'utilities/used',
]

const InvalidUsernameCity: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${row} ${g3}`}>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<label
						for="validationServerUsername"
						class={`${theme} ${elLabel} ${formLabel}`}
					>
						Username
					</label>
					<div class={`${theme} ${inputGroup} ${hasValidation} ${isInvalid}`}>
						<span class={`${theme} ${inputGroupText}`} id="inputGroupPrepend3">
							@
						</span>
						<input
							type="text"
							class={`${theme} ${elInput} ${formControl} ${isInvalid}`}
							id="validationServerUsername"
							aria-describedby="inputGroupPrepend3"
							required
						/>
					</div>
					<div class={`${theme} ${invalidFeedback}`}>Please choose a username.</div>
				</div>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<label for="validationServer03" class={`${theme} ${elLabel} ${formLabel}`}>
						City
					</label>
					<input
						type="text"
						class={`${theme} ${elInput} ${formControl} ${isInvalid}`}
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
