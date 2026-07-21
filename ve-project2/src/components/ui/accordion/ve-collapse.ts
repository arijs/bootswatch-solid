import * as bootstrap from 'bootstrap'
import { collapsed, collapsing } from '../../../theme-contract/literal/contract.css'
import { show } from '../../../theme-contract/ui/navs/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeCollapseRuntimeClasses {
	accordionCollapse: string
}

export function configureVeCollapse(runtime: VeCollapseRuntimeClasses): typeof bootstrap.Collapse {
	const VeCollapse = (
		bootstrap.Collapse as unknown as BootstrapWithDefaults<typeof bootstrap.Collapse>
	).extendDefaultConfig({
		CLASS_NAME_COLLAPSE: runtime.accordionCollapse,
		CLASS_NAME_COLLAPSED: collapsed,
		CLASS_NAME_COLLAPSING: collapsing,
		CLASS_NAME_SHOW: show,
		SELECTOR_DATA_TOGGLE: '[data-ve-toggle="collapse"]',
	}) as typeof bootstrap.Collapse

	// @ts-expect-error runtime API exists but is not in types
	VeCollapse.destroy()
	// @ts-expect-error runtime API exists but is not in types
	VeCollapse.init()

	return VeCollapse
}
