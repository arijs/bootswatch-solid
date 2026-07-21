import { globalStyle } from '@vanilla-extract/css'
import { simplexScope } from '../../scope.css'

import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'

globalStyle(`${simplexScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${simplexScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${simplexScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${simplexScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${simplexScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
