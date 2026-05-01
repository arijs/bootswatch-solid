import * as bootstrap from 'bootstrap'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeCollapseRuntimeClasses {
	accordionCollapse: string
	accordionButtonCollapsed: string
	accordionCollapsing: string
	accordionCollapseShow: string
}

export function configureVeCollapse(runtime: VeCollapseRuntimeClasses): typeof bootstrap.Collapse {
	const VeCollapse = (
		bootstrap.Collapse as unknown as BootstrapWithDefaults<typeof bootstrap.Collapse>
	).extendDefaultConfig({
		CLASS_NAME_COLLAPSE: runtime.accordionCollapse,
		CLASS_NAME_COLLAPSED: runtime.accordionButtonCollapsed,
		CLASS_NAME_COLLAPSING: runtime.accordionCollapsing,
		CLASS_NAME_SHOW: runtime.accordionCollapseShow,
		SELECTOR_DATA_TOGGLE: '[data-ve-toggle="collapse"]',
	}) as typeof bootstrap.Collapse

	// @ts-expect-error runtime API exists but is not in types
	VeCollapse.destroy()
	// @ts-expect-error runtime API exists but is not in types
	VeCollapse.init()

	return VeCollapse
}
