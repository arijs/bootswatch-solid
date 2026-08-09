import * as bootstrap from 'bootstrap'
import { fade, show } from '../../../theme-contract/literal/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeModalRuntimeClasses {
	name: string
	modalBackdrop: string
	modalBody: string
	modalDialog: string
	modalOpenHook: string
	show: string
}

export function createVeModal(runtime: VeModalRuntimeClasses): typeof bootstrap.Modal {
	return (
		bootstrap.Modal as unknown as BootstrapWithDefaults<typeof bootstrap.Modal>
	).extendDefaultConfig({
		NAME: runtime.name,
		CLASS_NAME_BACKDROP: runtime.modalBackdrop,
		CLASS_NAME_FADE: fade,
		CLASS_NAME_OPEN: runtime.modalOpenHook,
		CLASS_NAME_SHOW: show,
		OPEN_SELECTOR: `.pwhook-modal.${show}`,
		SELECTOR_DATA_TOGGLE: `[data-bs-toggle="${runtime.name}"]`,
		SELECTOR_DIALOG: `.${runtime.modalDialog}`,
		SELECTOR_MODAL_BODY: `.${runtime.modalBody}`,
		BackdropClass:
			// @ts-expect-error bootstrap runtime exposes this but types do not
			(
				bootstrap.Backdrop as unknown as BootstrapWithDefaults<typeof bootstrap.Backdrop>
			).extendDefaultConfig({
				CLASS_NAME_FADE: fade,
				CLASS_NAME_SHOW: show,
				className: runtime.modalBackdrop,
				// @ts-expect-error bootstrap runtime exposes this but types do not
			}) as typeof bootstrap.Backdrop,
	}) as typeof bootstrap.Modal
}

export function configureVeModal(runtime: VeModalRuntimeClasses): typeof bootstrap.Modal {
	const VeModal = createVeModal(runtime)
	// @ts-expect-error bootstrap runtime exposes this but types do not
	VeModal.destroy()
	// @ts-expect-error bootstrap runtime exposes this but types do not
	VeModal.init()
	return VeModal
}
