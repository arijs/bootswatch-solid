import { globalStyle } from '@vanilla-extract/css'
import { varBsSecondaryColor } from '../../../theme-contract/_vars.css'
import {
	px3,
	textMuted,
	visuallyHidden,
} from '../../../theme-contract/utilities/contract.css'
import { bootstrapScope } from '../scope.css'

// Bootstrap utility parity:
// .text-muted { color: var(--bs-secondary-color) !important; }
globalStyle(`${bootstrapScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

// Bootstrap utility parity:
// .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
globalStyle(`${bootstrapScope}${px3}`, {
	paddingRight: '1rem !important',
	paddingLeft: '1rem !important',
})

// Bootstrap utility parity:
// .visually-hidden { position: absolute !important; width: 1px !important; ... }
globalStyle(`${bootstrapScope}${visuallyHidden}`, {
	position: 'absolute !important' as 'absolute',
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})
