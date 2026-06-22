import { globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadowSm,
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

globalStyle(`${zephyrScope}${imgFluid}`, {
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${zephyrScope}${imgThumbnail}`, {
	padding: '0.25rem',
	backgroundColor: varBsBodyBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	boxShadow: varBsBoxShadowSm,
	maxWidth: '100%',
	height: 'auto',
})

globalStyle(`${zephyrScope}${figure}`, {
	display: 'inline-block',
})

globalStyle(`${zephyrScope}${figureImg}`, {
	marginBottom: '0.5rem',
	lineHeight: '1',
})

globalStyle(`${zephyrScope}${figureCaption}`, {
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${zephyrScope}${rounded}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})
