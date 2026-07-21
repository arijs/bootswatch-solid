import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

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
} from '../../../../theme-contract/contents/images/contract.css'

globalStyle(`${materiaScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${materiaScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${materiaScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${materiaScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: '1',
})

globalStyle(`${materiaScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})
