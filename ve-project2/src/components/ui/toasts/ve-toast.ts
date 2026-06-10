import * as bootstrap from 'bootstrap'
import {
	toastFade,
	toastHide,
	toastShow,
	toastShowing,
} from '../../../theme-contract/ui/toasts/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

export function createVeToast(): typeof bootstrap.Toast {
	return (
		bootstrap.Toast as unknown as BootstrapWithDefaults<typeof bootstrap.Toast>
	).extendDefaultConfig({
		CLASS_NAME_FADE: toastFade,
		CLASS_NAME_HIDE: toastHide,
		CLASS_NAME_SHOW: toastShow,
		CLASS_NAME_SHOWING: toastShowing,
	}) as typeof bootstrap.Toast
}
