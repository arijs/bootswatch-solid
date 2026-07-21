import { globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
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

globalStyle(`${luxScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${luxScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${luxScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${luxScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: '1',
})

globalStyle(`${luxScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})
