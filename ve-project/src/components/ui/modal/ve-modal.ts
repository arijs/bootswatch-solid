import * as bootstrap from 'bootstrap'
import type { VeModalThemeContract } from '../../../themes/runtime/contracts'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeModalRuntimeClasses
	extends Pick<
		VeModalThemeContract,
		'fade' | 'modalBackdrop' | 'modalBody' | 'modalDialog' | 'modalOpenHook' | 'modalShowHook'
	> {}

export function createVeModal(runtimeClasses: VeModalRuntimeClasses): typeof bootstrap.Modal {
	return (
		bootstrap.Modal as unknown as BootstrapWithDefaults<typeof bootstrap.Modal>
	).extendDefaultConfig({
		CLASS_NAME_BACKDROP: runtimeClasses.modalBackdrop,
		CLASS_NAME_FADE: runtimeClasses.fade,
		CLASS_NAME_OPEN: runtimeClasses.modalOpenHook,
		CLASS_NAME_SHOW: runtimeClasses.modalShowHook,
		OPEN_SELECTOR: `.pwhook-modal.${runtimeClasses.modalShowHook}`,
		SELECTOR_DIALOG: `.${runtimeClasses.modalDialog}`,
		SELECTOR_MODAL_BODY: `.${runtimeClasses.modalBody}`,
		// @ts-expect-error bootstrap exposes this in runtime but not in types
		BackdropClass: (
			bootstrap.Backdrop as unknown as BootstrapWithDefaults<typeof bootstrap.Backdrop>
		).extendDefaultConfig({
			CLASS_NAME_FADE: runtimeClasses.fade,
			CLASS_NAME_SHOW: runtimeClasses.modalShowHook,
			className: runtimeClasses.modalBackdrop,
			// @ts-expect-error bootstrap exposes this in runtime but not in types
		}) as typeof bootstrap.Backdrop,
	}) as typeof bootstrap.Modal
}

export function configureVeModal(runtimeClasses: VeModalRuntimeClasses): typeof bootstrap.Modal {
	const VeModal = createVeModal(runtimeClasses)

	// Re-register data API handlers so modal toggles work with VE class selectors.
	// @ts-expect-error bootstrap exposes this in runtime but not in types
	VeModal.destroy()
	// @ts-expect-error bootstrap exposes this in runtime but not in types
	VeModal.init()

	return VeModal
}
