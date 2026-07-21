import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { superheroScope } from '../scope.css'

import { varBsSecondaryBgRgb, varBsTertiaryBgRgb } from '../../../theme-contract/_public-vars.css'
import {
	varBsBlack,
	varBsBlackRgb,
	varBsBlue,
	varBsBodyBg,
	varBsBodyBgRgb,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBodyFontFamily,
	varBsBodyFontSize,
	varBsBodyFontWeight,
	varBsBodyLineHeight,
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderRadius2xl,
	varBsBorderRadiusLg,
	varBsBorderRadiusPill,
	varBsBorderRadiusSm,
	varBsBorderRadiusXl,
	varBsBorderRadiusXxl,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsBoxShadowInset,
	varBsBoxShadowLg,
	varBsBoxShadowSm,
	varBsBreakpointLg,
	varBsBreakpointMd,
	varBsBreakpointSm,
	varBsBreakpointXl,
	varBsBreakpointXs,
	varBsBreakpointXxl,
	varBsCodeColor,
	varBsCyan,
	varBsDanger,
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
	varBsDangerRgb,
	varBsDangerTextEmphasis,
	varBsDark,
	varBsDarkBgSubtle,
	varBsDarkBorderSubtle,
	varBsDarkRgb,
	varBsDarkTextEmphasis,
	varBsEmphasisColor,
	varBsEmphasisColorRgb,
	varBsFocusRingColor,
	varBsFocusRingOpacity,
	varBsFocusRingWidth,
	varBsFontMonospace,
	varBsFontSansSerif,
	varBsGradient,
	varBsGray,
	varBsGray100,
	varBsGray200,
	varBsGray300,
	varBsGray400,
	varBsGray500,
	varBsGray600,
	varBsGray700,
	varBsGray800,
	varBsGray900,
	varBsGrayDark,
	varBsGreen,
	varBsGutterX,
	varBsGutterY,
	varBsHeadingColor,
	varBsHighlightBg,
	varBsHighlightColor,
	varBsIndigo,
	varBsInfo,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
	varBsInfoRgb,
	varBsInfoTextEmphasis,
	varBsLight,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
	varBsLightRgb,
	varBsLightTextEmphasis,
	varBsLinkColor,
	varBsLinkColorRgb,
	varBsLinkDecoration,
	varBsLinkHoverColor,
	varBsLinkHoverColorRgb,
	varBsOrange,
	varBsPink,
	varBsPrimary,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
	varBsPrimaryRgb,
	varBsPrimaryTextEmphasis,
	varBsPurple,
	varBsRed,
	varBsSecondary,
	varBsSecondaryBg,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
	varBsSecondaryColor,
	varBsSecondaryColorRgb,
	varBsSecondaryRgb,
	varBsSecondaryTextEmphasis,
	varBsSuccess,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
	varBsSuccessRgb,
	varBsSuccessTextEmphasis,
	varBsTeal,
	varBsTertiaryBg,
	varBsTertiaryColor,
	varBsTertiaryColorRgb,
	varBsWarning,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
	varBsWarningRgb,
	varBsWarningTextEmphasis,
	varBsWhite,
	varBsWhiteRgb,
	varBsYellow,
} from '../../../theme-contract/_vars.css'
import {
	varBsFormInvalidBorderColor,
	varBsFormInvalidColor,
	varBsFormValidBorderColor,
	varBsFormValidColor,
} from '../../../theme-contract/forms/_vars.css'
import { varBsCarouselCaptionColor, varBsCarouselControlIconFilter, varBsCarouselIndicatorActiveBg } from '../../../theme-contract/ui/carousel/_vars.css'
import { varBsProgressHeight } from '../../../theme-contract/ui/progress/_vars.css'
import { varBsBtnCloseFilter, varBsLinkOpacity } from '../../../theme-contract/utilities/generated/_vars.css'

import {
	blockquote,
	horizontalRule,
	inlineCode,
	link,
	markText,
	paragraph,
	small,
} from '../../../theme-contract/contents/basic/contract.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../theme-contract/contents/heading/contract.css'
import {
	tableCell,
	tableElement,
	tableHead,
	tableHeaderCell,
	tableRow,
	tableSection,
} from '../../../theme-contract/contents/tables/contract.css'
import { fieldset } from '../../../theme-contract/forms/contract.css'
import {
	elAbbr,
	elAddress,
	elB,
	elButton,
	elCaption,
	elDd,
	elDl,
	elDt,
	elFigure,
	elIframe,
	elImg,
	elInput,
	elKbd,
	elLabel,
	elLegend,
	elOl,
	elOptgroup,
	elOutput,
	elPre,
	elProgress,
	elSamp,
	elSelect,
	elStrong,
	elSub,
	elSummary,
	elSup,
	elSvg,
	elTextarea,
	elUl,
} from '../../../theme-contract/global-elements/contract.css'

import { vars } from '../../../theme-contract/theme-contract.css'

import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
	collapsing,
} from '../../../theme-contract/literal/contract.css'
import { collapse } from '../../../theme-contract/ui/navbar/contract.css'
import { fade, show } from '../../../theme-contract/ui/navs/contract.css'

globalStyle(`${superheroScope}${vars}`, {
	vars: {
		[varBsBlue]: '#4c9be8',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#d9534f',
		[varBsOrange]: '#df6919',
		[varBsYellow]: '#ffc107',
		[varBsGreen]: '#5cb85c',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#5bc0de',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#4e5d6c',
		[varBsGrayDark]: '#343a40',
		[varBsGray100]: '#ebebeb',
		[varBsGray200]: '#dee2e6',
		[varBsGray300]: '#ced4da',
		[varBsGray400]: '#adb5bd',
		[varBsGray500]: '#868e96',
		[varBsGray600]: '#4e5d6c',
		[varBsGray700]: '#495057',
		[varBsGray800]: '#343a40',
		[varBsGray900]: '#212529',
		[varBsPrimary]: '#df6919',
		[varBsSecondary]: '#4e5d6c',
		[varBsSuccess]: '#5cb85c',
		[varBsInfo]: '#5bc0de',
		[varBsWarning]: '#ffc107',
		[varBsDanger]: '#d9534f',
		[varBsLight]: '#abb6c2',
		[varBsDark]: '#20374c',
		[varBsPrimaryRgb]: '223, 105, 25',
		[varBsSecondaryRgb]: '78, 93, 108',
		[varBsSuccessRgb]: '92, 184, 92',
		[varBsInfoRgb]: '91, 192, 222',
		[varBsWarningRgb]: '255, 193, 7',
		[varBsDangerRgb]: '217, 83, 79',
		[varBsLightRgb]: '171, 182, 194',
		[varBsDarkRgb]: '32, 55, 76',
		[varBsPrimaryTextEmphasis]: '#592a0a',
		[varBsSecondaryTextEmphasis]: '#1f252b',
		[varBsSuccessTextEmphasis]: '#254a25',
		[varBsInfoTextEmphasis]: '#244d59',
		[varBsWarningTextEmphasis]: '#664d03',
		[varBsDangerTextEmphasis]: '#572120',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#f9e1d1',
		[varBsSecondaryBgSubtle]: '#dcdfe2',
		[varBsSuccessBgSubtle]: '#def1de',
		[varBsInfoBgSubtle]: '#def2f8',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#f7dddc',
		[varBsLightBgSubtle]: 'whitesmoke',
		[varBsDarkBgSubtle]: '#adb5bd',
		[varBsPrimaryBorderSubtle]: '#f2c3a3',
		[varBsSecondaryBorderSubtle]: '#b8bec4',
		[varBsSuccessBorderSubtle]: '#bee3be',
		[varBsInfoBorderSubtle]: '#bde6f2',
		[varBsWarningBorderSubtle]: '#ffe69c',
		[varBsDangerBorderSubtle]: '#f0bab9',
		[varBsLightBorderSubtle]: '#dee2e6',
		[varBsDarkBorderSubtle]: '#868e96',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#ebebeb',
		[varBsBodyColorRgb]: '235, 235, 235',
		[varBsBodyBg]: '#0f2537',
		[varBsBodyBgRgb]: '15, 37, 55',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(235, 235, 235, 0.75)',
		[varBsSecondaryColorRgb]: '235, 235, 235',
		[varBsSecondaryBg]: '#dee2e6',
		[varBsSecondaryBgRgb]: '222, 226, 230',
		[varBsTertiaryColor]: 'rgba(235, 235, 235, 0.5)',
		[varBsTertiaryColorRgb]: '235, 235, 235',
		[varBsTertiaryBg]: '#ebebeb',
		[varBsTertiaryBgRgb]: '235, 235, 235',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#df6919',
		[varBsLinkColorRgb]: '223, 105, 25',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#b25414',
		[varBsLinkHoverColorRgb]: '178, 84, 20',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#ebebeb',
		[varBsHighlightBg]: '#fff3cd',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#ced4da',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '0',
		[varBsBorderRadiusSm]: '0',
		[varBsBorderRadiusLg]: '0',
		[varBsBorderRadiusXl]: '1rem',
		[varBsBorderRadiusXxl]: '2rem',
		[varBsBorderRadius2xl]: varBsBorderRadiusXxl,
		[varBsBorderRadiusPill]: '50rem',
		[varBsBoxShadow]: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
		[varBsBoxShadowSm]: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
		[varBsBoxShadowLg]: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
		[varBsBoxShadowInset]: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
		[varBsFocusRingWidth]: '0.25rem',
		[varBsFocusRingOpacity]: '0.25',
		[varBsFocusRingColor]: 'rgba(223, 105, 25, 0.25)',
		[varBsFormValidColor]: '#5cb85c',
		[varBsFormValidBorderColor]: '#5cb85c',
		[varBsFormInvalidColor]: '#d9534f',
		[varBsFormInvalidBorderColor]: '#d9534f',
	},
})

globalStyle(`${superheroScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#ced4da',
		[varBsBodyColorRgb]: '206, 212, 218',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(206, 212, 218, 0.75)',
		[varBsSecondaryColorRgb]: '206, 212, 218',
		[varBsSecondaryBg]: '#343a40',
		[varBsSecondaryBgRgb]: '52, 58, 64',
		[varBsTertiaryColor]: 'rgba(206, 212, 218, 0.5)',
		[varBsTertiaryColorRgb]: '206, 212, 218',
		[varBsTertiaryBg]: '#2b3035',
		[varBsTertiaryBgRgb]: '43, 48, 53',
		[varBsPrimaryTextEmphasis]: '#eca575',
		[varBsSecondaryTextEmphasis]: '#959ea7',
		[varBsSuccessTextEmphasis]: '#9dd49d',
		[varBsInfoTextEmphasis]: '#9dd9eb',
		[varBsWarningTextEmphasis]: '#ffda6a',
		[varBsDangerTextEmphasis]: '#e89895',
		[varBsLightTextEmphasis]: '#ebebeb',
		[varBsDarkTextEmphasis]: '#ced4da',
		[varBsPrimaryBgSubtle]: '#2d1505',
		[varBsSecondaryBgSubtle]: '#101316',
		[varBsSuccessBgSubtle]: '#122512',
		[varBsInfoBgSubtle]: '#12262c',
		[varBsWarningBgSubtle]: '#332701',
		[varBsDangerBgSubtle]: '#2b1110',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#863f0f',
		[varBsSecondaryBorderSubtle]: '#2f3841',
		[varBsSuccessBorderSubtle]: '#376e37',
		[varBsInfoBorderSubtle]: '#377385',
		[varBsWarningBorderSubtle]: '#997404',
		[varBsDangerBorderSubtle]: '#82322f',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#eca575',
		[varBsLinkHoverColor]: '#f0b791',
		[varBsLinkColorRgb]: '236, 165, 117',
		[varBsLinkHoverColorRgb]: '240, 183, 145',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#ced4da',
		[varBsHighlightBg]: '#664d03',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#9dd49d',
		[varBsFormValidBorderColor]: '#9dd49d',
		[varBsFormInvalidColor]: '#e89895',
		[varBsFormInvalidBorderColor]: '#e89895',
	},
	colorScheme: 'dark',
})

globalStyle(`*`, {
	boxSizing: 'border-box',
})

globalStyle(`*::before`, {
	boxSizing: 'border-box',
})

globalStyle(`*::after`, {
	boxSizing: 'border-box',
})

globalStyle(`${superheroScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${superheroScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${superheroScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${superheroScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${superheroScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${superheroScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${superheroScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${superheroScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${superheroScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${superheroScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${superheroScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${superheroScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${superheroScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${superheroScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${superheroScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${superheroScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${superheroScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${superheroScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${superheroScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${superheroScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${superheroScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${superheroScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${superheroScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${superheroScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${superheroScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${superheroScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${superheroScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${superheroScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${superheroScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${superheroScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${superheroScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${superheroScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${superheroScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${superheroScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${superheroScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${superheroScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${superheroScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${superheroScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${superheroScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${superheroScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${superheroScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${superheroScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${superheroScope}${elOl}) :where(${superheroScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${superheroScope}${elUl}) :where(${superheroScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${superheroScope}${elOl}) :where(${superheroScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${superheroScope}${elUl}) :where(${superheroScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${superheroScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${superheroScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${superheroScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${superheroScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${superheroScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${superheroScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${superheroScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${superheroScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${superheroScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${superheroScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${superheroScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${superheroScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${superheroScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${superheroScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${superheroScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${superheroScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${superheroScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${superheroScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${superheroScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${superheroScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
	color: 'inherit',
})

globalStyle(`:where(${superheroScope}${elPre}) :where(${superheroScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${superheroScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${superheroScope}${link}) > :where(${superheroScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${superheroScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0',
})

globalStyle(`:where(${superheroScope}${elKbd}) :where(${superheroScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${superheroScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${superheroScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${superheroScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${superheroScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${superheroScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${superheroScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${superheroScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${superheroScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${superheroScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${superheroScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${superheroScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${superheroScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${superheroScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${superheroScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${superheroScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${superheroScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${superheroScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${superheroScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${superheroScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${superheroScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${superheroScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${superheroScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${superheroScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${superheroScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${superheroScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${superheroScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${superheroScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${superheroScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${superheroScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${superheroScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${superheroScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${superheroScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${superheroScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${superheroScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${superheroScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${superheroScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${superheroScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${superheroScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${superheroScope}${elLegend}) + *`, {
	clear: 'left',
})

globalStyle(`::-webkit-datetime-edit-fields-wrapper`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-text`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-minute`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-hour-field`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-day-field`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-month-field`, {
	padding: '0',
})

globalStyle(`::-webkit-datetime-edit-year-field`, {
	padding: '0',
})

globalStyle(`::-webkit-inner-spin-button`, {
	height: 'auto',
})

globalStyle(`${superheroScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${superheroScope}[type=search]::-webkit-search-cancel-button`, {
	cursor: 'pointer',
	filter: 'grayscale(1)',
})

globalStyle(`::-webkit-search-decoration`, {
	WebkitAppearance: 'none',
})

globalStyle(`::-webkit-color-swatch-wrapper`, {
	padding: '0',
})

globalStyle(`::-webkit-file-upload-button`, {
	font: 'inherit',
	WebkitAppearance: 'button',
})

globalStyle(`::file-selector-button`, {
	font: 'inherit',
	WebkitAppearance: 'button',
})

globalStyle(`:where(${superheroScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${superheroScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${superheroScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${superheroScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${superheroScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${superheroScope}${containerFluid}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '0',
	},
	width: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginRight: 'auto',
	marginLeft: 'auto',
})

globalStyle(`${superheroScope}${vars}`, {
	vars: {
		[varBsBreakpointXs]: '0',
		[varBsBreakpointSm]: '576px',
		[varBsBreakpointMd]: '768px',
		[varBsBreakpointLg]: '992px',
		[varBsBreakpointXl]: '1200px',
		[varBsBreakpointXxl]: '1400px',
	},
})

globalStyle(`${superheroScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${superheroScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${superheroScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${superheroScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${superheroScope}${collapsing}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalKeyframes('progress-bar-stripes', {
	'0%': {
		backgroundPositionX: varBsProgressHeight,
	},
})

globalStyle(`${superheroScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${superheroScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${superheroScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${superheroScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#000',
		[varBsCarouselCaptionColor]: '#000',
		[varBsCarouselControlIconFilter]: 'invert(1) grayscale(100)',
	},
})

globalKeyframes('spinner-border', {
	'to': {
		transform: 'rotate(360deg) ',
	},
})

globalKeyframes('spinner-grow', {
	'0%': {
		transform: 'scale(0)',
	},
	'50%': {
		opacity: '1',
		transform: 'none',
	},
})

globalKeyframes('placeholder-glow', {
	'50%': {
		opacity: '0.2',
	},
})

globalKeyframes('placeholder-wave', {
	'100%': {
		WebkitMaskPosition: '-200% 0%',
		maskPosition: '-200% 0%',
	},
})

globalStyle(`:where(${superheroScope}${elLabel})`, {
	fontSize: '0.875rem',
})
