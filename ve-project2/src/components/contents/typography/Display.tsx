import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	display1,
	display2,
	display3,
	display4,
	display5,
	display6,
	paragraph,
} from '../../../theme-contract/contents/contract.css'

const Display: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<p class={`${theme} ${display1} ${paragraph}`}>Display 1</p>
			<p class={`${theme} ${display2} ${paragraph}`}>Display 2</p>
			<p class={`${theme} ${display3} ${paragraph}`}>Display 3</p>
			<p class={`${theme} ${display4} ${paragraph}`}>Display 4</p>
			<p class={`${theme} ${display5} ${paragraph}`}>Display 5</p>
			<p class={`${theme} ${display6} ${paragraph}`}>Display 6</p>
		</div>
	)
}

export default Display

// @screenshot *: 360x331 331
// @screenshot journal: 360x310 310
// @screenshot materia: 360x432 432
