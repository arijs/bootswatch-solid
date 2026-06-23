import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	formSelect,
	formControl,
	formLabel,
	invalidFeedback,
	isInvalid,
} from '../../../theme-contract/forms/contract.css'
import {
	elInput,
	elLabel,
	elSelect,
} from '../../../theme-contract/global-elements/contract.css'
import {
	colMd3,
	colSm6,
	g3,
	row,
	rowCol,
} from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents/basic',
	'utilities/used',
]

const InvalidStateZip: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${row} ${g3}`}>
				<div class={`${theme} ${rowCol} ${colMd3} ${colSm6}`}>
					<label for="validationServer04" class={`${theme} ${elLabel} ${formLabel}`}>
						State
					</label>
					<select class={`${theme} ${elSelect} ${formSelect} ${isInvalid}`} id="validationServer04" required>
						<option selected disabled value="">
							Choose...
						</option>
						<option>...</option>
					</select>
					<div class={`${theme} ${invalidFeedback}`}>Please select a valid state.</div>
				</div>
				<div class={`${theme} ${rowCol} ${colMd3} ${colSm6}`}>
					<label for="validationServer05" class={`${theme} ${elLabel} ${formLabel}`}>
						Zip
					</label>
					<input
						type="text"
						class={`${theme} ${elInput} ${formControl} ${isInvalid}`}
						id="validationServer05"
						required
					/>
					<div class={`${theme} ${invalidFeedback}`}>Please provide a valid zip.</div>
				</div>
			</form>
		</div>
	)
}

export default InvalidStateZip

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
