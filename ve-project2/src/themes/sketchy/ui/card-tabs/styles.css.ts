import { globalStyle } from '@vanilla-extract/css'
import {
	navLink,
	navTabs,
} from '../../../../theme-contract/ui/card-tabs/contract.css'
import { sketchyScope } from '../../scope.css'

// ── .nav-tabs .nav-link — Sketchy override ────────────────────────────────────

// SOURCE CSS (screenshots/sketchy/bootstrap.css — bootswatch block):
// .nav-tabs .nav-link {
//   border-radius: 45px 15px 225px 5px/25px 225px 25px 255px;
// }
//
// Also, from the multi-selector rule:
// .nav-link, .page-link, .list-group-item, .dropdown-item { text-decoration: none; }
// (text-decoration is already none in base, so no override needed)
globalStyle(`${sketchyScope}${navTabs} ${navLink}`, {
	borderRadius: '45px 15px 225px 5px/25px 225px 25px 255px',
})
