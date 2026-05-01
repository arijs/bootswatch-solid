import * as bootstrap from 'bootstrap'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeToastRuntimeClasses {
	toastFade: string
	toastHide: string
	toastShow: string
	toastShowing: string
}

export function createVeToast(runtimeClasses: VeToastRuntimeClasses): typeof bootstrap.Toast {
	return (
		bootstrap.Toast as unknown as BootstrapWithDefaults<typeof bootstrap.Toast>
	).extendDefaultConfig({
		CLASS_NAME_FADE: runtimeClasses.toastFade,
		CLASS_NAME_HIDE: runtimeClasses.toastHide,
		CLASS_NAME_SHOW: runtimeClasses.toastShow,
		CLASS_NAME_SHOWING: runtimeClasses.toastShowing,
	}) as typeof bootstrap.Toast
}
