import { globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../../scope.css'

import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'

globalStyle(`${slateScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${slateScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${slateScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${slateScope}${btnGroup}`, {
	borderRadius: varBsBorderRadius,
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${slateScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
