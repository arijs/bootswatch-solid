import * as bootstrap from 'bootstrap'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'
import {
	toastFade,
	toastHide,
	toastShow,
	toastShowing,
} from '../../../themes/bootstrap/ui/toasts/base.css'

const VeToast = (bootstrap.Toast as unknown as BootstrapWithDefaults<typeof bootstrap.Toast>).extendDefaultConfig({
	CLASS_NAME_FADE: toastFade,
	CLASS_NAME_HIDE: toastHide,
	CLASS_NAME_SHOW: toastShow,
	CLASS_NAME_SHOWING: toastShowing,
}) as typeof bootstrap.Toast

export { VeToast }
