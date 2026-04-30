import * as bootstrap from 'bootstrap'
import { getVarName } from '../../../logic/veGetVarName'
import { varBsDropdownPosition } from '../../../theme-contract/ui/dropdowns/_vars.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeDropdownRuntimeClasses {
	btnShowHook: string
	dropdownItem: string
	dropdownMenu: string
	dropdownMenuShow: string
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
		CLASS_NAME_SHOW_TRIGGER: runtimeClasses.btnShowHook,
		CLASS_NAME_SHOW_MENU: runtimeClasses.dropdownMenuShow,
		CLASS_NAME_DROPUP: runtimeClasses.dropup,
		CLASS_NAME_DROPEND: runtimeClasses.dropend,
		CLASS_NAME_DROPSTART: runtimeClasses.dropstart,
		CSS_VARIABLE_POSITION: getVarName(varBsDropdownPosition),
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
