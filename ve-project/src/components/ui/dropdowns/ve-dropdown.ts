import * as bootstrap from 'bootstrap'
import {
	dropdownItem,
	dropdownMenu,
	dropdownMenuShow,
	dropend,
	dropstart,
	dropup,
} from '../../../themes/bootstrap/ui/dropdowns/base.css'
import { btnShowHook } from '../../../themes/bootstrap/ui/buttons/base.css'
import { varBsDropdownPosition } from '../../../theme-contract/ui/dropdowns/_vars.css'
import { getVarName } from '../../../logic/veGetVarName'

const VeDropdown = (bootstrap.Dropdown as any).extendDefaultConfig({
	CLASS_NAME_SHOW_TRIGGER: btnShowHook,
	CLASS_NAME_SHOW_MENU: dropdownMenuShow,
	CLASS_NAME_DROPUP: dropup,
	CLASS_NAME_DROPEND: dropend,
	CLASS_NAME_DROPSTART: dropstart,
	CSS_VARIABLE_POSITION: getVarName(varBsDropdownPosition),
	SELECTOR_MENU: `.${dropdownMenu}`,
	SELECTOR_VISIBLE_ITEMS: `.${dropdownMenu} .${dropdownItem}:not(:disabled)`,
}) as typeof bootstrap.Dropdown

// Re-register data API handlers so dropdown toggles use VE class selectors.
// @ts-expect-error bootstrap exposes this in runtime but not in types
VeDropdown.destroy()
// @ts-expect-error bootstrap exposes this in runtime but not in types
VeDropdown.init()

export { VeDropdown }
