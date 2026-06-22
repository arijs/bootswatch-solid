import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'

globalStyle(`${materiaScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${materiaScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${materiaScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${materiaScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${materiaScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btn} + ${materiaScope}${btnGroup}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btnGroup} + ${materiaScope}${btnGroup}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn} + ${materiaScope}${btnGroup}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup} + ${materiaScope}${btnGroup}`, {
	marginTop: '0',
})
