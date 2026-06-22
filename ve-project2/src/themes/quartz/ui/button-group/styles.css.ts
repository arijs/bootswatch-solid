import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'

globalStyle(`${quartzScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${quartzScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${quartzScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${quartzScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${quartzScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnGroup}:not(:first-child)`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}:not(:first-child)`, {
	marginTop: '0',
})
