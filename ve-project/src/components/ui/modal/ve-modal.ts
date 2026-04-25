import * as bootstrap from 'bootstrap'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'
import {
	fade,
	modalBody,
	modalOpenHook,
	modalDialog,
	modalShowHook,
} from '../../../themes/bootstrap/ui/modal/base.css'

const VeModal = (bootstrap.Modal as unknown as BootstrapWithDefaults<typeof bootstrap.Modal>).extendDefaultConfig({
	CLASS_NAME_FADE: fade,
	CLASS_NAME_OPEN: modalOpenHook,
	CLASS_NAME_SHOW: modalShowHook,
	OPEN_SELECTOR: `.pwhook-modal.${modalShowHook}`,
	SELECTOR_DIALOG: `.${modalDialog}`,
	SELECTOR_MODAL_BODY: `.${modalBody}`,
}) as typeof bootstrap.Modal

// Re-register data API handlers so modal toggles work with VE class selectors.
// @ts-expect-error bootstrap exposes this in runtime but not in types
VeModal.destroy()
// @ts-expect-error bootstrap exposes this in runtime but not in types
VeModal.init()

export { VeModal }
