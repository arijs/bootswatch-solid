import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../scope.css'

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

globalStyle(`${morphScope}${vars}`, {
	vars: {
		[varBsBlue]: '#378dfc',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#5b62f4',
		[varBsPink]: '#d63384',
		[varBsRed]: '#e52527',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#ffc107',
		[varBsGreen]: '#43cc29',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#0dcaf0',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#7f8a99',
		[varBsGrayDark]: '#444b40',
		[varBsGray100]: '#f0f5fa',
		[varBsGray200]: '#d9e3f1',
		[varBsGray300]: '#dee2e6',
		[varBsGray400]: '#bed1e6',
		[varBsGray500]: '#adb5bd',
		[varBsGray600]: '#7f8a99',
		[varBsGray700]: '#7b8ab8',
		[varBsGray800]: '#444b40',
		[varBsGray900]: '#212529',
		[varBsPrimary]: '#378dfc',
		[varBsSecondary]: '#d9e3f1',
		[varBsSuccess]: '#43cc29',
		[varBsInfo]: '#5b62f4',
		[varBsWarning]: '#ffc107',
		[varBsDanger]: '#e52527',
		[varBsLight]: '#f0f5fa',
		[varBsDark]: '#212529',
		[varBsPrimaryRgb]: '55, 141, 252',
		[varBsSecondaryRgb]: '217, 227, 241',
		[varBsSuccessRgb]: '67, 204, 41',
		[varBsInfoRgb]: '91, 98, 244',
		[varBsWarningRgb]: '255, 193, 7',
		[varBsDangerRgb]: '229, 37, 39',
		[varBsLightRgb]: '240, 245, 250',
		[varBsDarkRgb]: '33, 37, 41',
		[varBsPrimaryTextEmphasis]: '#163865',
		[varBsSecondaryTextEmphasis]: '#575b60',
		[varBsSuccessTextEmphasis]: '#1b5210',
		[varBsInfoTextEmphasis]: '#242762',
		[varBsWarningTextEmphasis]: '#664d03',
		[varBsDangerTextEmphasis]: '#5c0f10',
		[varBsLightTextEmphasis]: '#7b8ab8',
		[varBsDarkTextEmphasis]: '#7b8ab8',
		[varBsPrimaryBgSubtle]: '#d7e8fe',
		[varBsSecondaryBgSubtle]: '#f7f9fc',
		[varBsSuccessBgSubtle]: '#d9f5d4',
		[varBsInfoBgSubtle]: '#dee0fd',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#fad3d4',
		[varBsLightBgSubtle]: '#f8fafd',
		[varBsDarkBgSubtle]: '#bed1e6',
		[varBsPrimaryBorderSubtle]: '#afd1fe',
		[varBsSecondaryBorderSubtle]: '#f0f4f9',
		[varBsSuccessBorderSubtle]: '#b4eba9',
		[varBsInfoBorderSubtle]: '#bdc0fb',
		[varBsWarningBorderSubtle]: '#ffe69c',
		[varBsDangerBorderSubtle]: '#f5a8a9',
		[varBsLightBorderSubtle]: '#d9e3f1',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#7b8ab8',
		[varBsBodyColorRgb]: '123, 138, 184',
		[varBsBodyBg]: '#d9e3f1',
		[varBsBodyBgRgb]: '217, 227, 241',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(123, 138, 184, 0.75)',
		[varBsSecondaryColorRgb]: '123, 138, 184',
		[varBsSecondaryBg]: '#d9e3f1',
		[varBsSecondaryBgRgb]: '217, 227, 241',
		[varBsTertiaryColor]: 'rgba(123, 138, 184, 0.5)',
		[varBsTertiaryColorRgb]: '123, 138, 184',
		[varBsTertiaryBg]: '#f0f5fa',
		[varBsTertiaryBgRgb]: '240, 245, 250',
		[varBsHeadingColor]: '#485785',
		[varBsLinkColor]: '#485785',
		[varBsLinkColorRgb]: '72, 87, 133',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#3a466a',
		[varBsLinkHoverColorRgb]: '58, 70, 106',
		[varBsCodeColor]: '#d63384',
		[varBsHighlightColor]: '#7b8ab8',
		[varBsHighlightBg]: '#fff3cd',
		[varBsBorderWidth]: '0',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: 'rgba(55, 94, 148, 0.1)',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '0.375rem',
		[varBsBorderRadiusSm]: '0.25rem',
		[varBsBorderRadiusLg]: '0.5rem',
		[varBsBorderRadiusXl]: '1rem',
		[varBsBorderRadiusXxl]: '2rem',
		[varBsBorderRadius2xl]: varBsBorderRadiusXxl,
		[varBsBorderRadiusPill]: '50rem',
		[varBsBoxShadow]: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
		[varBsBoxShadowSm]: '0 0.125rem 0.25rem rgba(55, 94, 148, 0.2)',
		[varBsBoxShadowLg]: '8px 8px 40px rgba(0, 0, 0, 0.15)',
		[varBsBoxShadowInset]: 'inset 2px 2px 8px rgba(55, 94, 148, 0.3), inset -3px -2px 5px rgba(255, 255, 255, 0.8)',
		[varBsFocusRingWidth]: '0.25rem',
		[varBsFocusRingOpacity]: '0.25',
		[varBsFocusRingColor]: 'rgba(55, 141, 252, 0.25)',
		[varBsFormValidColor]: '#43cc29',
		[varBsFormValidBorderColor]: '#43cc29',
		[varBsFormInvalidColor]: '#e52527',
		[varBsFormInvalidBorderColor]: '#e52527',
	},
})

globalStyle(`${morphScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dee2e6',
		[varBsBodyColorRgb]: '222, 226, 230',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(222, 226, 230, 0.75)',
		[varBsSecondaryColorRgb]: '222, 226, 230',
		[varBsSecondaryBg]: '#444b40',
		[varBsSecondaryBgRgb]: '68, 75, 64',
		[varBsTertiaryColor]: 'rgba(222, 226, 230, 0.5)',
		[varBsTertiaryColorRgb]: '222, 226, 230',
		[varBsTertiaryBg]: '#333835',
		[varBsTertiaryBgRgb]: '51, 56, 53',
		[varBsPrimaryTextEmphasis]: '#87bbfd',
		[varBsSecondaryTextEmphasis]: '#e8eef7',
		[varBsSuccessTextEmphasis]: '#8ee07f',
		[varBsInfoTextEmphasis]: '#9da1f8',
		[varBsWarningTextEmphasis]: '#ffda6a',
		[varBsDangerTextEmphasis]: '#ef7c7d',
		[varBsLightTextEmphasis]: '#f0f5fa',
		[varBsDarkTextEmphasis]: '#dee2e6',
		[varBsPrimaryBgSubtle]: '#0b1c32',
		[varBsSecondaryBgSubtle]: '#2b2d30',
		[varBsSuccessBgSubtle]: '#0d2908',
		[varBsInfoBgSubtle]: '#121431',
		[varBsWarningBgSubtle]: '#332701',
		[varBsDangerBgSubtle]: '#2e0708',
		[varBsLightBgSubtle]: '#444b40',
		[varBsDarkBgSubtle]: '#222620',
		[varBsPrimaryBorderSubtle]: '#215597',
		[varBsSecondaryBorderSubtle]: '#828891',
		[varBsSuccessBorderSubtle]: '#287a19',
		[varBsInfoBorderSubtle]: '#373b92',
		[varBsWarningBorderSubtle]: '#997404',
		[varBsDangerBorderSubtle]: '#891617',
		[varBsLightBorderSubtle]: '#7b8ab8',
		[varBsDarkBorderSubtle]: '#444b40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#87bbfd',
		[varBsLinkHoverColor]: '#9fc9fd',
		[varBsLinkColorRgb]: '135, 187, 253',
		[varBsLinkHoverColorRgb]: '159, 201, 253',
		[varBsCodeColor]: '#e685b5',
		[varBsHighlightColor]: '#dee2e6',
		[varBsHighlightBg]: '#664d03',
		[varBsBorderColor]: '#7b8ab8',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#8ee07f',
		[varBsFormValidBorderColor]: '#8ee07f',
		[varBsFormInvalidColor]: '#ef7c7d',
		[varBsFormInvalidBorderColor]: '#ef7c7d',
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

globalStyle(`${morphScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${morphScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${morphScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${morphScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${morphScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${morphScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${morphScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${morphScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${morphScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${morphScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${morphScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${morphScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${morphScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${morphScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${morphScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${morphScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${morphScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${morphScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${morphScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${morphScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${morphScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${morphScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${morphScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${morphScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${morphScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${morphScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${morphScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${morphScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${morphScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${morphScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${morphScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${morphScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${morphScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${morphScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${morphScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${morphScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${morphScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${morphScope}${elOl}) :where(${morphScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${morphScope}${elUl}) :where(${morphScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${morphScope}${elOl}) :where(${morphScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${morphScope}${elUl}) :where(${morphScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${morphScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${morphScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${morphScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${morphScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${morphScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${morphScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${morphScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${morphScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${morphScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${morphScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${morphScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${morphScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${morphScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${morphScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${morphScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${morphScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${morphScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${morphScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${morphScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${morphScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${morphScope}${elPre}) :where(${morphScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${morphScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${morphScope}${link}) > :where(${morphScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${morphScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${morphScope}${elKbd}) :where(${morphScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${morphScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${morphScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${morphScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${morphScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${morphScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${morphScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${morphScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${morphScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${morphScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${morphScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${morphScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${morphScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${morphScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${morphScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${morphScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${morphScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${morphScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${morphScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${morphScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${morphScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${morphScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${morphScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${morphScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${morphScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${morphScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${morphScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${morphScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${morphScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${morphScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${morphScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${morphScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${morphScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${morphScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${morphScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${morphScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${morphScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${morphScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${morphScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${morphScope}${elLegend}) + *`, {
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

globalStyle(`${morphScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${morphScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${morphScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${morphScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${morphScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${morphScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${morphScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${morphScope}${containerFluid}`, {
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

globalStyle(`${morphScope}${vars}`, {
	vars: {
		[varBsBreakpointXs]: '0',
		[varBsBreakpointSm]: '576px',
		[varBsBreakpointMd]: '768px',
		[varBsBreakpointLg]: '992px',
		[varBsBreakpointXl]: '1200px',
		[varBsBreakpointXxl]: '1400px',
	},
})

globalStyle(`${morphScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${morphScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${morphScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${morphScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${morphScope}${collapsing}`, {
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

globalStyle(`${morphScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${morphScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${morphScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${morphScope}${vars}[data-bs-theme=dark]`, {
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
