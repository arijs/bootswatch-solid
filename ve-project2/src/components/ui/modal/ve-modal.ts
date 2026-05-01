import * as bootstrap from 'bootstrap'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeModalRuntimeClasses {
fade: string
modalBackdrop: string
modalBody: string
modalDialog: string
modalOpenHook: string
modalShowHook: string
}

export function createVeModal(runtime: VeModalRuntimeClasses): typeof bootstrap.Modal {
return (
bootstrap.Modal as unknown as BootstrapWithDefaults<typeof bootstrap.Modal>
).extendDefaultConfig({
CLASS_NAME_BACKDROP: runtime.modalBackdrop,
CLASS_NAME_FADE: runtime.fade,
CLASS_NAME_OPEN: runtime.modalOpenHook,
CLASS_NAME_SHOW: runtime.modalShowHook,
OPEN_SELECTOR: `.pwhook-modal.${runtime.modalShowHook}`,
SELECTOR_DIALOG: `.${runtime.modalDialog}`,
SELECTOR_MODAL_BODY: `.${runtime.modalBody}`,
// @ts-expect-error bootstrap runtime exposes this but types do not
BackdropClass: (
bootstrap.Backdrop as unknown as BootstrapWithDefaults<typeof bootstrap.Backdrop>
).extendDefaultConfig({
CLASS_NAME_FADE: runtime.fade,
CLASS_NAME_SHOW: runtime.modalShowHook,
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
