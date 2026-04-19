import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import ContextualListGroup from './list-group/ContextualListGroup'
import DefaultListGroup from './list-group/DefaultListGroup'
import FlushListGroup from './list-group/FlushListGroup'

const ListGroup: Component = () => (
	<article class="my-3" id="list-group">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>List group</h3>
			<DocLink href="/ui/list-group" />
			<DocLink href="/ui/list-group/default-list-group">Default List Group</DocLink>
			<DocLink href="/ui/list-group/flush-list-group">Flush List Group</DocLink>
			<DocLink href="/ui/list-group/contextual-list-group">Contextual List Group</DocLink>
		</div>

		<div>
			<DefaultListGroup />
			<FlushListGroup />
			<ContextualListGroup />
		</div>
	</article>
)

export default ListGroup
