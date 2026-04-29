import { globalStyle } from '@vanilla-extract/css'
import {
	dropdownDivider,
	dropdownMenu,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { sketchyScope } from '../../scope.css'

// Sketchy overrides for the dropdown family.
//
// SOURCE CSS (Sketchy — differs from Bootstrap):
//   .dropdown-menu { overflow: hidden;
//     border-radius: 555px 25px 25px 25px/25px 25px 25px 555px; }
//   .dropdown-divider { border-top-width: 2px; }
//
// The menu vars that differ are already set by sketchyScope (border vars, colours)
// via --bs-dropdown-border-color and --bs-dropdown-link-hover-bg resolving to Sketchy values.
// We only need to override the visible structural styles here.

globalStyle(`${sketchyScope}${dropdownMenu}`, {
	overflow: 'hidden',
	borderRadius: '555px 25px 25px 25px/25px 25px 25px 555px',
})

// SOURCE CSS: .dropdown-divider { border-top-width: 2px; }
// (Sketchy uses 2px borders throughout)
globalStyle(`${sketchyScope}${dropdownDivider}`, {
	borderTopWidth: '2px',
})
