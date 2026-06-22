import { globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

import { varBsCardCapPaddingX, varBsCardCapPaddingY } from '../../../../theme-contract/ui/card/_vars.css'

import { cardHeaderTabs } from '../../../../theme-contract/ui/card-tabs/contract.css'

globalStyle(`${lumenScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})
