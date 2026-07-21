import { globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

import { varBsBorderWidth } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'

globalStyle(`${luxScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${luxScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${luxScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
