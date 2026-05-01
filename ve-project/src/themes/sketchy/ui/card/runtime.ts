import { bdPlaceholderImg, h5, paragraph, smallText } from '../../contents/generated.css'
import { cardHeaderTabs, col, rowG4, textCenter } from '../card-tabs/base.css'
import { listGroup, listGroupFlush, listGroupItem } from '../list-group/base.css'
import {
card,
cardBody,
cardExample,
cardFooter,
cardGridRow,
cardHeader,
cardImgTop,
cardLink,
cardRow,
cardText,
cardTitle,
textMuted,
} from './base.css'

export const sketchyCardRuntimeClasses = {
bdPlaceholderImg,
card,
cardBody,
cardExample,
cardFooter,
cardGridRow,
cardHeader,
cardHeaderTabs,
cardImgTop,
cardLink,
cardRow,
cardText,
cardTitle,
col,
h5,
listGroup,
listGroupFlush,
listGroupItem,
paragraph,
rowG4,
smallText,
textCenter,
textMuted,
} as const
