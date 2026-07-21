import { globalStyle } from '@vanilla-extract/css'
import { cosmoScope } from '../../scope.css'

import { varBsBorderWidth } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'

globalStyle(`${cosmoScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${cosmoScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${cosmoScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${cosmoScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})
