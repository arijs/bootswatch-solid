import * as bootstrap from 'bootstrap'
import { popoverShow } from '../../../theme-contract/ui/popovers/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VePopoverRuntimeClasses {
	popoverArrow: string
	popoverHeader: string
	popoverBody: string
}

export function createVePopover(runtime: VePopoverRuntimeClasses): typeof bootstrap.Popover {
	return (
		bootstrap.Popover as unknown as BootstrapWithDefaults<typeof bootstrap.Popover>
	).extendDefaultConfig({
		SELECTOR_ARROW: `.${runtime.popoverArrow}`,
		SELECTOR_TITLE: `.${runtime.popoverHeader}`,
		SELECTOR_CONTENT: `.${runtime.popoverBody}`,
		CLASS_NAME_SHOW: popoverShow,
	}) as typeof bootstrap.Popover
}
