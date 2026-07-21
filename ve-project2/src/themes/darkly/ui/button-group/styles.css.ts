import { globalStyle } from '@vanilla-extract/css'
import { darklyScope } from '../../scope.css'

import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'

globalStyle(`${darklyScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${darklyScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${darklyScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${darklyScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${darklyScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
