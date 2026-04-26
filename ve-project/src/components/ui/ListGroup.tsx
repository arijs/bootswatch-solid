import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import ContextualDangerListGroup from './list-group/ContextualDangerListGroup'
import ContextualDarkListGroup from './list-group/ContextualDarkListGroup'
import ContextualDefaultListGroup from './list-group/ContextualDefaultListGroup'
import ContextualInfoListGroup from './list-group/ContextualInfoListGroup'
import ContextualLightListGroup from './list-group/ContextualLightListGroup'
import ContextualListGroup from './list-group/ContextualListGroup'
import ContextualPrimaryListGroup from './list-group/ContextualPrimaryListGroup'
import ContextualSecondaryListGroup from './list-group/ContextualSecondaryListGroup'
import ContextualSuccessListGroup from './list-group/ContextualSuccessListGroup'
import ContextualWarningListGroup from './list-group/ContextualWarningListGroup'
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
			<DocLink href="/ui/list-group/contextual-default-list-group">
				Contextual Default List Group
			</DocLink>
			<DocLink href="/ui/list-group/contextual-primary-list-group">
				Contextual Primary List Group
			</DocLink>
			<DocLink href="/ui/list-group/contextual-secondary-list-group">
				Contextual Secondary List Group
			</DocLink>
			<DocLink href="/ui/list-group/contextual-success-list-group">
				Contextual Success List Group
			</DocLink>
			<DocLink href="/ui/list-group/contextual-danger-list-group">
				Contextual Danger List Group
			</DocLink>
			<DocLink href="/ui/list-group/contextual-warning-list-group">
				Contextual Warning List Group
			</DocLink>
			<DocLink href="/ui/list-group/contextual-info-list-group">
				Contextual Info List Group
			</DocLink>
			<DocLink href="/ui/list-group/contextual-light-list-group">
				Contextual Light List Group
			</DocLink>
			<DocLink href="/ui/list-group/contextual-dark-list-group">
				Contextual Dark List Group
			</DocLink>
		</div>

		<div>
			<DefaultListGroup />
			<FlushListGroup />
			<ContextualListGroup />
			<ContextualDefaultListGroup />
			<ContextualPrimaryListGroup />
			<ContextualSecondaryListGroup />
			<ContextualSuccessListGroup />
			<ContextualDangerListGroup />
			<ContextualWarningListGroup />
			<ContextualInfoListGroup />
			<ContextualLightListGroup />
			<ContextualDarkListGroup />
		</div>
	</article>
)

export default ListGroup
