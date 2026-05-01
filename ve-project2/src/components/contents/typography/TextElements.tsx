import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { markText, paragraph, smallText } from '../../../theme-contract/contents/contract.css'

const TextElements: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<p class={`${theme} ${paragraph}`}>
				You can use the mark tag to <mark class={`${theme} ${markText}`}>highlight</mark> text.
			</p>
			<p class={`${theme} ${paragraph}`}>
				<del>This line of text is meant to be treated as deleted text.</del>
			</p>
			<p class={`${theme} ${paragraph}`}>
				<s>This line of text is meant to be treated as no longer accurate.</s>
			</p>
			<p class={`${theme} ${paragraph}`}>
				<ins>This line of text is meant to be treated as an addition to the document.</ins>
			</p>
			<p class={`${theme} ${paragraph}`}>
				<u>This line of text will render as underlined.</u>
			</p>
			<p class={`${theme} ${paragraph}`}>
				<small class={`${theme} ${smallText}`}>This line of text is meant to be treated as fine print.</small>
			</p>
			<p class={`${theme} ${paragraph}`}>
				<strong>This line rendered as bold text.</strong>
			</p>
			<p class={`${theme} ${paragraph}`}>
				<em>This line rendered as italicized text.</em>
			</p>
		</div>
	)
}

export default TextElements

// @screenshot *: 360x378 378
// @screenshot brite: 360x324 324
// @screenshot cosmo: 360x377 377
// @screenshot cyborg: 360x377 377
// @screenshot darkly: 360x377 377
// @screenshot flatly: 360x377 377
// @screenshot litera: 360x429 429
// @screenshot lumen: 360x377 377
// @screenshot lux: 360x426 426
// @screenshot materia: 360x377 377
// @screenshot sandstone: 360x377 377
// @screenshot sketchy: 360x354 354
// @screenshot solar: 360x377 377
// @screenshot superhero: 360x377 377
// @screenshot united: 360x376 376
// @screenshot vapor: 360x377 377
// @screenshot zephyr: 360x401 401
