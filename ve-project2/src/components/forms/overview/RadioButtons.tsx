import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	fieldset,
	form,
	formCheck,
	formCheckInput,
	formCheckLabel,
	legend,
	legendClear,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const RadioButtons: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<fieldset class={`${theme} ${mb3} ${fieldset}`}>
					<legend class={`${theme} ${legend}`}>Radios buttons</legend>
					<div class={`${theme} ${legendClear} ${formCheck}`}>
						<input
							type="radio"
							name="radios"
							class={`${theme} ${formCheckInput} pwhook-radio`}
							id="exampleRadio1"
						/>
						<label class={`${theme} ${formCheckLabel}`} for="exampleRadio1">
							Default radio
						</label>
					</div>
					<div class={`${theme} ${mb3} ${formCheck}`}>
						<input
							type="radio"
							name="radios"
							class={`${theme} ${formCheckInput} pwhook-radio`}
							id="exampleRadio2"
						/>
						<label class={`${theme} ${formCheckLabel}`} for="exampleRadio2">
							Another radio
						</label>
					</div>
				</fieldset>
			</form>
		</div>
	)
}

export default RadioButtons

// @screenshot *: 360x120 120
