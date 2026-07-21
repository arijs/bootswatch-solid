import { globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../../scope.css'

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

globalStyle(`${yetiScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${yetiScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${yetiScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${yetiScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: '1',
})

globalStyle(`${yetiScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})
