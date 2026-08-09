import * as bootstrap from 'bootstrap'
import { getVarName } from '../../../logic/veGetVarName'
import { show } from '../../../theme-contract/literal/contract.css'
import { varBsPosition } from '../../../theme-contract/utilities/generated/_vars.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeDropdownRuntimeClasses {
	dropdownItem: string
	dropdownMenu: string
	dropend: string
	dropstart: string
	dropup: string
}

export function createVeDropdown(
	runtimeClasses: VeDropdownRuntimeClasses,
): typeof bootstrap.Dropdown {
	return (
		bootstrap.Dropdown as unknown as BootstrapWithDefaults<typeof bootstrap.Dropdown>
	).extendDefaultConfig({
		// Both the trigger button and the open menu carry Bootstrap's `.show`; the
		// source rules are `.btn.show` and `.dropdown-menu.show`, so one contract serves
		// both and the compound selectors keep them apart.
		CLASS_NAME_SHOW_TRIGGER: show,
		CLASS_NAME_SHOW_MENU: show,
		CLASS_NAME_DROPUP: runtimeClasses.dropup,
		CLASS_NAME_DROPEND: runtimeClasses.dropend,
		CLASS_NAME_DROPSTART: runtimeClasses.dropstart,
		CSS_VARIABLE_POSITION: getVarName(varBsPosition),
		SELECTOR_MENU: `.${runtimeClasses.dropdownMenu}`,
		SELECTOR_VISIBLE_ITEMS: `.${runtimeClasses.dropdownMenu} .${runtimeClasses.dropdownItem}:not(:disabled)`,
	}) as typeof bootstrap.Dropdown
}

export function configureVeDropdown(
	runtimeClasses: VeDropdownRuntimeClasses,
): typeof bootstrap.Dropdown {
	const VeDropdown = createVeDropdown(runtimeClasses)

	// Re-register data API handlers so dropdown toggles use VE class selectors.
	// @ts-expect-error bootstrap exposes this in runtime but not in types
	VeDropdown.destroy()
	// @ts-expect-error bootstrap exposes this in runtime but not in types
	VeDropdown.init()

	return VeDropdown
}
