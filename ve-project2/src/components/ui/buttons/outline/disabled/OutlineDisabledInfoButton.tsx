import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineInfo } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineDisabledInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button disabled type="button" class={`${theme} ${btn} ${btnOutlineInfo} pwhook-btn`}>
				Info
			</button>
		</div>
	)
}

export default OutlineDisabledInfoButton

// @screenshot *: 360x120 120
