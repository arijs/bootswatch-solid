import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../scope.css'

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
	sandstone,
} from '../../../theme-contract/literal/contract.css'
import { collapse } from '../../../theme-contract/ui/navbar/contract.css'
import { fade, show } from '../../../theme-contract/ui/navs/contract.css'

globalStyle(`${sandstoneScope}${vars}`, {
	vars: {
		[varBsBlue]: '#325d88',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#d9534f',
		[varBsOrange]: '#f47c3c',
		[varBsYellow]: '#ffc107',
		[varBsGreen]: '#93c54b',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#29abe0',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#8e8c84',
		[varBsGrayDark]: '#3e3f3a',
		[varBsGray100]: '#f8f9fa',
		[varBsGray200]: '#f8f5f0',
		[varBsGray300]: '#dfd7ca',
		[varBsGray400]: '#ced4da',
		[varBsGray500]: '#98978b',
		[varBsGray600]: '#8e8c84',
		[varBsGray700]: '#495057',
		[varBsGray800]: '#3e3f3a',
		[varBsGray900]: '#212529',
		[varBsPrimary]: '#325d88',
		[varBsSecondary]: '#8e8c84',
		[varBsSuccess]: '#93c54b',
		[varBsInfo]: '#29abe0',
		[varBsWarning]: '#f47c3c',
		[varBsDanger]: '#d9534f',
		[varBsLight]: '#f8f5f0',
		[varBsDark]: '#3e3f3a',
		[varBsPrimaryRgb]: '50, 93, 136',
		[varBsSecondaryRgb]: '142, 140, 132',
		[varBsSuccessRgb]: '147, 197, 75',
		[varBsInfoRgb]: '41, 171, 224',
		[varBsWarningRgb]: '244, 124, 60',
		[varBsDangerRgb]: '217, 83, 79',
		[varBsLightRgb]: '248, 245, 240',
		[varBsDarkRgb]: '62, 63, 58',
		[varBsPrimaryTextEmphasis]: '#142536',
		[varBsSecondaryTextEmphasis]: '#393835',
		[varBsSuccessTextEmphasis]: '#3b4f1e',
		[varBsInfoTextEmphasis]: '#10445a',
		[varBsWarningTextEmphasis]: '#623218',
		[varBsDangerTextEmphasis]: '#572120',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#d6dfe7',
		[varBsSecondaryBgSubtle]: '#e8e8e6',
		[varBsSuccessBgSubtle]: '#e9f3db',
		[varBsInfoBgSubtle]: '#d4eef9',
		[varBsWarningBgSubtle]: '#fde5d8',
		[varBsDangerBgSubtle]: '#f7dddc',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#adbecf',
		[varBsSecondaryBorderSubtle]: '#d2d1ce',
		[varBsSuccessBorderSubtle]: '#d4e8b7',
		[varBsInfoBorderSubtle]: '#a9ddf3',
		[varBsWarningBorderSubtle]: '#fbcbb1',
		[varBsDangerBorderSubtle]: '#f0bab9',
		[varBsLightBorderSubtle]: '#f8f5f0',
		[varBsDarkBorderSubtle]: '#98978b',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#3e3f3a',
		[varBsBodyColorRgb]: '62, 63, 58',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(62, 63, 58, 0.75)',
		[varBsSecondaryColorRgb]: '62, 63, 58',
		[varBsSecondaryBg]: '#f8f5f0',
		[varBsSecondaryBgRgb]: '248, 245, 240',
		[varBsTertiaryColor]: 'rgba(62, 63, 58, 0.5)',
		[varBsTertiaryColorRgb]: '62, 63, 58',
		[varBsTertiaryBg]: '#f8f9fa',
		[varBsTertiaryBgRgb]: '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#93c54b',
		[varBsLinkColorRgb]: '147, 197, 75',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#769e3c',
		[varBsLinkHoverColorRgb]: '118, 158, 60',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#3e3f3a',
		[varBsHighlightBg]: '#fff3cd',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#dfd7ca',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		[varBsBorderRadius]: '0.375rem',
		[varBsBorderRadiusSm]: '0.25rem',
		[varBsBorderRadiusLg]: '0.5rem',
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
		[varBsFocusRingColor]: 'rgba(50, 93, 136, 0.25)',
		[varBsFormValidColor]: '#93c54b',
		[varBsFormValidBorderColor]: '#93c54b',
		[varBsFormInvalidColor]: '#d9534f',
		[varBsFormInvalidBorderColor]: '#d9534f',
	},
})

globalStyle(`${sandstoneScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#dfd7ca',
		[varBsBodyColorRgb]: '223, 215, 202',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(223, 215, 202, 0.75)',
		[varBsSecondaryColorRgb]: '223, 215, 202',
		[varBsSecondaryBg]: '#3e3f3a',
		[varBsSecondaryBgRgb]: '62, 63, 58',
		[varBsTertiaryColor]: 'rgba(223, 215, 202, 0.5)',
		[varBsTertiaryColorRgb]: '223, 215, 202',
		[varBsTertiaryBg]: '#303232',
		[varBsTertiaryBgRgb]: '48, 50, 50',
		[varBsPrimaryTextEmphasis]: '#849eb8',
		[varBsSecondaryTextEmphasis]: '#bbbab5',
		[varBsSuccessTextEmphasis]: '#bedc93',
		[varBsInfoTextEmphasis]: '#7fcdec',
		[varBsWarningTextEmphasis]: '#f8b08a',
		[varBsDangerTextEmphasis]: '#e89895',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#dfd7ca',
		[varBsPrimaryBgSubtle]: '#0a131b',
		[varBsSecondaryBgSubtle]: '#1c1c1a',
		[varBsSuccessBgSubtle]: '#1d270f',
		[varBsInfoBgSubtle]: '#08222d',
		[varBsWarningBgSubtle]: '#31190c',
		[varBsDangerBgSubtle]: '#2b1110',
		[varBsLightBgSubtle]: '#3e3f3a',
		[varBsDarkBgSubtle]: '#1f201d',
		[varBsPrimaryBorderSubtle]: '#1e3852',
		[varBsSecondaryBorderSubtle]: '#55544f',
		[varBsSuccessBorderSubtle]: '#58762d',
		[varBsInfoBorderSubtle]: '#196786',
		[varBsWarningBorderSubtle]: '#924a24',
		[varBsDangerBorderSubtle]: '#82322f',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#3e3f3a',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#849eb8',
		[varBsLinkHoverColor]: '#9db1c6',
		[varBsLinkColorRgb]: '132, 158, 184',
		[varBsLinkHoverColorRgb]: '157, 177, 198',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#dfd7ca',
		[varBsHighlightBg]: '#664d03',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#bedc93',
		[varBsFormValidBorderColor]: '#bedc93',
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

globalStyle(`${sandstoneScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${sandstoneScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${sandstoneScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sandstoneScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sandstoneScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sandstoneScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sandstoneScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sandstoneScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${sandstoneScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '400',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${sandstoneScope}${h1})`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${sandstoneScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`:where(${sandstoneScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${sandstoneScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`:where(${sandstoneScope}${h2})`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${sandstoneScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`:where(${sandstoneScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${sandstoneScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`:where(${sandstoneScope}${h3})`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${sandstoneScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`:where(${sandstoneScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${sandstoneScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`:where(${sandstoneScope}${h4})`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${sandstoneScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${sandstoneScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${sandstoneScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${sandstoneScope}${h5})`, {
	fontSize: '1.25rem',
})

globalStyle(`${sandstoneScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`:where(${sandstoneScope}${h6})`, {
	fontSize: '1rem',
})

globalStyle(`${sandstoneScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`:where(${sandstoneScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${sandstoneScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${sandstoneScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sandstoneScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${sandstoneScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${sandstoneScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${sandstoneScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${sandstoneScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${sandstoneScope}${elOl}) :where(${sandstoneScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${sandstoneScope}${elUl}) :where(${sandstoneScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${sandstoneScope}${elOl}) :where(${sandstoneScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${sandstoneScope}${elUl}) :where(${sandstoneScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${sandstoneScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${sandstoneScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${sandstoneScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${sandstoneScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${sandstoneScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${sandstoneScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${sandstoneScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${sandstoneScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${sandstoneScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${sandstoneScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${sandstoneScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${sandstoneScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${sandstoneScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${sandstoneScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${sandstoneScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${sandstoneScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${sandstoneScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${sandstoneScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${sandstoneScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${sandstoneScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${sandstoneScope}${elPre}) :where(${sandstoneScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${sandstoneScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${sandstoneScope}${link}) > :where(${sandstoneScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${sandstoneScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${sandstoneScope}${elKbd}) :where(${sandstoneScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${sandstoneScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${sandstoneScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${sandstoneScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${sandstoneScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${sandstoneScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${sandstoneScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${sandstoneScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sandstoneScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sandstoneScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sandstoneScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sandstoneScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sandstoneScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${sandstoneScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${sandstoneScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${sandstoneScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${sandstoneScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sandstoneScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sandstoneScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sandstoneScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sandstoneScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${sandstoneScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${sandstoneScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${sandstoneScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${sandstoneScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${sandstoneScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${sandstoneScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${sandstoneScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${sandstoneScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${sandstoneScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${sandstoneScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${sandstoneScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${sandstoneScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${sandstoneScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${sandstoneScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${sandstoneScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${sandstoneScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${sandstoneScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${sandstoneScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${sandstoneScope}${elLegend}) + *`, {
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

globalStyle(`${sandstoneScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${sandstoneScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${sandstoneScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${sandstoneScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${sandstoneScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${sandstoneScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${sandstoneScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${sandstoneScope}${containerFluid}`, {
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

globalStyle(`${sandstoneScope}${vars}`, {
	vars: {
		[varBsBreakpointXs]: '0',
		[varBsBreakpointSm]: '576px',
		[varBsBreakpointMd]: '768px',
		[varBsBreakpointLg]: '992px',
		[varBsBreakpointXl]: '1200px',
		[varBsBreakpointXxl]: '1400px',
	},
})

globalStyle(`${sandstoneScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${sandstoneScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${sandstoneScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${sandstoneScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${sandstoneScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${sandstoneScope}${collapsing}`, {
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

globalStyle(`${sandstoneScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${sandstoneScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${sandstoneScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${sandstoneScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`${sandstoneScope}${sandstone}`, {
	fontSize: '13px',
	fontWeight: '500',
	lineHeight: '22px',
	textTransform: 'uppercase',
})
