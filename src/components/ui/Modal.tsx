import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import CenteredScrollableModal from './modal/CenteredScrollableModal'
import DefaultModal from './modal/DefaultModal'
import FullscreenModal from './modal/FullscreenModal'
import StaticBackdropModal from './modal/StaticBackdropModal'

const Modal: Component = () => (
	<article class="my-3" id="modal">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Modal</h3>
			<DocLink href="/ui/modal" />
			<DocLink href="/ui/modal/default-modal">Default Modal</DocLink>
			<DocLink href="/ui/modal/static-backdrop-modal">Static Backdrop Modal</DocLink>
			<DocLink href="/ui/modal/centered-scrollable-modal">Centered Scrollable Modal</DocLink>
			<DocLink href="/ui/modal/fullscreen-modal">Fullscreen Modal</DocLink>
		</div>

		<div>
			<DefaultModal />
			<StaticBackdropModal />
			<CenteredScrollableModal />
			<FullscreenModal />
		</div>
	</article>
)

export default Modal
