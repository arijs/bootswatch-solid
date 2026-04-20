import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import ButtonGroupExample from './button-group/ButtonGroupExample'

const ButtonGroup: Component = () => (
	<article class="my-3" id="button-group">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Button group</h3>
			<DocLink href="/ui/button-group" />
			<DocLink href="/ui/button-group/button-group-example">Button Group</DocLink>
		</div>

		<div>
			<ButtonGroupExample />
		</div>
	</article>
)

export default ButtonGroup
