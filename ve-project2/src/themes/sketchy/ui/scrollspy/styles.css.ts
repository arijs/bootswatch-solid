import { globalStyle } from '@vanilla-extract/css'
import { scrollspyExample } from '../../../../theme-contract/ui/scrollspy/contract.css'
import { sketchyScope } from '../../scope.css'

globalStyle(`${sketchyScope}${scrollspyExample}`, {
	position: 'relative',
	height: '200px',
	marginTop: '0.5rem',
	overflow: 'auto',
})
