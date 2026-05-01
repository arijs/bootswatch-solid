import { globalStyle } from '@vanilla-extract/css'
import {
	pageLink,
	pagination,
} from '../../../../theme-contract/ui/pagination/contract.css'
import {
	varBsPaginationActiveBg,
	varBsPaginationActiveBorderColor,
	varBsPaginationBorderColor,
	varBsPaginationDisabledBorderColor,
	varBsPaginationDisabledColor,
	varBsPaginationFocusBoxShadow,
	varBsPaginationHoverBg,
	varBsPaginationHoverBorderColor,
	varBsPaginationHoverColor,
} from '../../../../theme-contract/ui/pagination/_vars.css'
import { sketchyScope } from '../../scope.css'

// SOURCE CSS (screenshots/sketchy/bootstrap.css .pagination):
// --bs-pagination-border-color: #333;
// --bs-pagination-hover-color: #fff;
// --bs-pagination-hover-bg: #333;
// --bs-pagination-hover-border-color: #333;
// --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(51, 51, 51, 0.25);
// --bs-pagination-active-bg: #333;
// --bs-pagination-active-border-color: #333;
// --bs-pagination-disabled-color: #ccc;
// --bs-pagination-disabled-border-color: #333;
globalStyle(`${sketchyScope}${pagination}`, {
	vars: {
		[varBsPaginationBorderColor]: '#333',
		[varBsPaginationHoverColor]: '#fff',
		[varBsPaginationHoverBg]: '#333',
		[varBsPaginationHoverBorderColor]: '#333',
		[varBsPaginationFocusBoxShadow]: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
		[varBsPaginationActiveBg]: '#333',
		[varBsPaginationActiveBorderColor]: '#333',
		[varBsPaginationDisabledColor]: '#ccc',
		[varBsPaginationDisabledBorderColor]: '#333',
	},
})

// SOURCE SCSS (node_modules/bootswatch/dist/sketchy/_bootswatch.scss):
// .pagination .page-link { border-radius: 425px 255px 25px 25px/25px 25px 5px 25px; }
globalStyle(`${sketchyScope}${pagination} ${pageLink}`, {
	borderRadius: '425px 255px 25px 25px / 25px 25px 5px 25px',
})
