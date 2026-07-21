import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

import { scrollspyExample } from '../../../../theme-contract/ui/scrollspy/contract.css'

globalStyle(`${morphScope}${scrollspyExample}`, {
	height: '200px',
	overflowY: 'auto',
	marginTop: '0.5rem',
})
