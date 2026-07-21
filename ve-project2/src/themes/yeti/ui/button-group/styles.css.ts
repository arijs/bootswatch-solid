import { globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../../scope.css'

import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'

globalStyle(`${yetiScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${yetiScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${yetiScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${yetiScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${yetiScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
