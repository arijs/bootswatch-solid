import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	form,
	formControl,
	formLabel,
	formText,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const BasicForm: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3}`}>
					<label for="exampleInputEmail1" class={`${theme} ${formLabel}`}>
						Email address
					</label>
					<input
						type="email"
						class={`${theme} ${formControl} pwhook-form-control`}
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" class={`${theme} ${formText}`}>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div class={`${theme} ${mb3}`}>
					<label for="exampleInputPassword1" class={`${theme} ${formLabel}`}>
						Password
					</label>
					<input
						type="password"
						class={`${theme} ${formControl} pwhook-form-control`}
						id="exampleInputPassword1"
					/>
				</div>
			</form>
		</div>
	)
}

export default BasicForm

// @screenshot *: 360x181 181
// @screenshot brite: 360x179 179
