import * as bootstrap from 'bootstrap'
import { tooltipShow } from '../../../theme-contract/ui/tooltips/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeTooltipRuntimeClasses {
	tooltipArrow: string
	tooltipInner: string
}

export function createVeTooltip(runtime: VeTooltipRuntimeClasses): typeof bootstrap.Tooltip {
	return (
		bootstrap.Tooltip as unknown as BootstrapWithDefaults<typeof bootstrap.Tooltip>
	).extendDefaultConfig({
		SELECTOR_ARROW: `.${runtime.tooltipArrow}`,
		SELECTOR_TOOLTIP_INNER: `.${runtime.tooltipInner}`,
		CLASS_NAME_SHOW: tooltipShow,
	}) as typeof bootstrap.Tooltip
}
