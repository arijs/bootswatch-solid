import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	form,
	formControl,
	formLabel,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const FileInput: Component = () => {
	const theme = useContext(ThemeContext)

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
