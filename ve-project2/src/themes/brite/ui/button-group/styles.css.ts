import { globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

import { varBsBorderRadius } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'

globalStyle(`${briteScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${briteScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${briteScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${briteScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnGroup}:not(:first-child)`, {
	marginLeft: 'calc(-1 * 2px)',
})

globalStyle(`${briteScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btnGroup}:not(:first-child)`, {
	marginTop: 'calc(-1 * 2px)',
})
