import { style } from '@vanilla-extract/css'
import {
varBsListGroupBorderColor,
varBsListGroupBorderRadius,
varBsListGroupBorderWidth,
} from '../../../../theme-contract/ui/list-group/_vars.css'
import {
listGroup as bootstrapListGroup,
listGroupItem as bootstrapListGroupItem,
listGroupFlush,
listGroupItemAction,
listGroupItemActive,
listGroupItemDisabled,
listGroupItemPrimary,
listGroupItemSecondary,
listGroupItemSuccess,
listGroupItemInfo,
listGroupItemWarning,
listGroupItemDanger,
listGroupItemLight,
listGroupItemDark,
} from '../../../bootstrap/ui/list-group/base.css'

export {
listGroupFlush,
listGroupItemAction,
listGroupItemActive,
listGroupItemDisabled,
listGroupItemPrimary,
listGroupItemSecondary,
listGroupItemSuccess,
listGroupItemInfo,
listGroupItemWarning,
listGroupItemDanger,
listGroupItemLight,
listGroupItemDark,
}

export const listGroup = style([bootstrapListGroup, {
overflow: 'hidden',
backgroundColor: '#333',
border: '2px solid #333',
borderRadius: '45px 15px 35px 5px/15px 5px 15px 65px',
}])

export const listGroupItem = style([bootstrapListGroupItem, {
borderTop: '2px solid #333',
borderRight: 'none',
borderLeft: 'none',
borderRadius: '255px 5px 225px 5px/25px 225px 25px 255px',
selectors: {
'&:first-child': {
borderTop: 'none',
},
'&:last-child': {
borderBottom: 'none',
},
},
}])
