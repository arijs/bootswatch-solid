import * as bootstrap from 'bootstrap'
import { fade, show, showing } from '../../../theme-contract/literal/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

export function createVeToast(): typeof bootstrap.Toast {
	return (
		bootstrap.Toast as unknown as BootstrapWithDefaults<typeof bootstrap.Toast>
	).extendDefaultConfig({
		CLASS_NAME_FADE: fade,
		CLASS_NAME_SHOW: show,
		CLASS_NAME_SHOWING: showing,
		// CLASS_NAME_HIDE keeps Bootstrap's literal 'hide': `.hide` has no rule in any
		// theme's bootstrap.css, so there is no contract to map it to.
	}) as typeof bootstrap.Toast
}
