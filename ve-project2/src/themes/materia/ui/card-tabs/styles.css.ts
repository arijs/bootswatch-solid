import { globalStyle } from '@vanilla-extract/css'
import { cardHeaderTabs } from '../../../../theme-contract/ui/card-tabs/contract.css'
import { varBsCardBg, varBsCardCapPaddingX, varBsCardCapPaddingY } from '../../../../theme-contract/ui/card/_vars.css'
import { navItem, navLink, navLinkActive, navLinkDisabled, navTabs } from '../../../../theme-contract/ui/navs/contract.css'
import { materiaScope } from '../../scope.css'

globalStyle(`${materiaScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: 0,
})

globalStyle(`${materiaScope}${cardHeaderTabs} ${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${materiaScope}${navTabs} ${navItem} + ${navItem}`, {
	marginLeft: 0,
})

globalStyle(`${materiaScope}${navTabs} ${navLink}${navLinkDisabled}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
})

