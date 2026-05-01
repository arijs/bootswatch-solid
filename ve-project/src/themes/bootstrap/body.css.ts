import { style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyFontFamily,
	varBsBodyFontSize,
	varBsBodyFontWeight,
	varBsBodyLineHeight,
	varBsBodyTextAlign,
} from '../../theme-contract/_vars.css'

export const bodyText = style({
	fontFamily: varBsBodyFontFamily,
	fontSize: varBsBodyFontSize,
	fontWeight: varBsBodyFontWeight,
	lineHeight: varBsBodyLineHeight,
	WebkitTextSizeAdjust: '100%',
	WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
})

export const body = style([
	bodyText,
	{
		margin: 0,
		color: varBsBodyColor,
		textAlign: varBsBodyTextAlign,
		backgroundColor: varBsBodyBg,
	},
])

/*

body {
margin: 0; 
font-family: var(--bs-body-font-family); 
font-size: var(--bs-body-font-size); 
font-weight: var(--bs-body-font-weight); 
line-height: var(--bs-body-line-height); 
color: var(--bs-body-color); 
text-align: var(--bs-body-text-align); 
background-color: var(--bs-body-bg); 
-webkit-text-size-adjust: 100%; 
-webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
}

*/
