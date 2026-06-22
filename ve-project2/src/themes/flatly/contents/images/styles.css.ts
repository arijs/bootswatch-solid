import { globalStyle } from '@vanilla-extract/css'
import { flatlyScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'

import {
	figure,
	figureCaption,
	figureImg,
	imgFluid,
	imgThumbnail,
	rounded,
} from '../../../../theme-contract/contents/images/contract.css'

globalStyle(`${flatlyScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${flatlyScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${flatlyScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${flatlyScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: '1',
})

globalStyle(`${flatlyScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${flatlyScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})
