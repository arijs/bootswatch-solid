import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	form,
	formControl,
	formLabel,
	mb3,
} from '../../../theme-contract/forms/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents',
	'utilities',
]

const FileInput: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3}`}>
					<label class={`${theme} ${formLabel}`} for="customFile">
						Upload
					</label>
					<input type="file" class={`${theme} ${formControl} pwhook-file-input`} id="customFile" />
				</div>
			</form>
		</div>
	)
}

export default FileInput
