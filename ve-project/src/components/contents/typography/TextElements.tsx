import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample } from '../../../themes/bootstrap/contents/generated.css'

const TextElements: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<p>
			You can use the mark tag to <mark>highlight</mark> text.
		</p>
		<p>
			<del>This line of text is meant to be treated as deleted text.</del>
		</p>
		<p>
			<s>This line of text is meant to be treated as no longer accurate.</s>
		</p>
		<p>
			<ins>This line of text is meant to be treated as an addition to the document.</ins>
		</p>
		<p>
			<u>This line of text will render as underlined.</u>
		</p>
		<p>
			<small>This line of text is meant to be treated as fine print.</small>
		</p>
		<p>
			<strong>This line rendered as bold text.</strong>
		</p>
		<p>
			<em>This line rendered as italicized text.</em>
		</p>
	</div>
)

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
