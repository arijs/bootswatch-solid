import { globalStyle } from '@vanilla-extract/css'
import { vaporScope } from '../../scope.css'

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

globalStyle(`${vaporScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${vaporScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${vaporScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${vaporScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: '1',
})

globalStyle(`${vaporScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${vaporScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})
