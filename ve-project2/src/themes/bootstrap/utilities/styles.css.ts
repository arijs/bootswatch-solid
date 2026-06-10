import { globalStyle } from '@vanilla-extract/css'
import { textCenter } from '../../../theme-contract/utilities/generated/contract.css'
import { bootstrapScope } from '../scope.css'

// AUTO-GENERATED family styles for bootstrap/utilities
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .text-center { text-align: center !important; }
globalStyle(`${bootstrapScope}${textCenter}`, {
	textAlign: 'center !important',
})