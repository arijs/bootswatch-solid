import { globalStyle } from '@vanilla-extract/css'
import {
	varBsGutterX,
	varBsGutterY,
} from '../../../../theme-contract/_vars.css'
import {
	col,
	g4,
	row,
} from '../../../../theme-contract/utilities/contract.css'
import { darklyScope } from '../../scope.css'

globalStyle(`${darklyScope}${row}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: 0,
	},
	display: 'flex',
	flexWrap: 'wrap',
	marginTop: `calc(-1 * ${varBsGutterY})`,
	marginRight: `calc(-0.5 * ${varBsGutterX})`,
	marginLeft: `calc(-0.5 * ${varBsGutterX})`,
})

globalStyle(`${darklyScope}${row} > *`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${darklyScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${darklyScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '1.5rem',
	},
})
