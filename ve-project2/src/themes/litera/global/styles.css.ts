import { fallbackVar, globalKeyframes, globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../scope.css'

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
	elFooter,
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

globalStyle(`${literaScope}${vars}`, {
	vars: {
		[varBsBlue]: '#4582ec',
		[varBsIndigo]: '#6610f2',
		[varBsPurple]: '#6f42c1',
		[varBsPink]: '#e83e8c',
		[varBsRed]: '#d9534f',
		[varBsOrange]: '#fd7e14',
		[varBsYellow]: '#f0ad4e',
		[varBsGreen]: '#02b875',
		[varBsTeal]: '#20c997',
		[varBsCyan]: '#17a2b8',
		[varBsBlack]: '#000',
		[varBsWhite]: '#fff',
		[varBsGray]: '#868e96',
		[varBsGrayDark]: '#343a40',
		[varBsGray100]: '#f8f9fa',
		[varBsGray200]: '#e9ecef',
		[varBsGray300]: '#ddd',
		[varBsGray400]: '#ced4da',
		[varBsGray500]: '#adb5bd',
		[varBsGray600]: '#868e96',
		[varBsGray700]: '#495057',
		[varBsGray800]: '#343a40',
		[varBsGray900]: '#212529',
		[varBsPrimary]: '#4582ec',
		[varBsSecondary]: '#adb5bd',
		[varBsSuccess]: '#02b875',
		[varBsInfo]: '#17a2b8',
		[varBsWarning]: '#f0ad4e',
		[varBsDanger]: '#d9534f',
		[varBsLight]: '#f8f9fa',
		[varBsDark]: '#343a40',
		[varBsPrimaryRgb]: '69, 130, 236',
		[varBsSecondaryRgb]: '173, 181, 189',
		[varBsSuccessRgb]: '2, 184, 117',
		[varBsInfoRgb]: '23, 162, 184',
		[varBsWarningRgb]: '240, 173, 78',
		[varBsDangerRgb]: '217, 83, 79',
		[varBsLightRgb]: '248, 249, 250',
		[varBsDarkRgb]: '52, 58, 64',
		[varBsPrimaryTextEmphasis]: '#1c345e',
		[varBsSecondaryTextEmphasis]: '#45484c',
		[varBsSuccessTextEmphasis]: '#014a2f',
		[varBsInfoTextEmphasis]: '#09414a',
		[varBsWarningTextEmphasis]: '#60451f',
		[varBsDangerTextEmphasis]: '#572120',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		[varBsPrimaryBgSubtle]: '#dae6fb',
		[varBsSecondaryBgSubtle]: '#eff0f2',
		[varBsSuccessBgSubtle]: '#ccf1e3',
		[varBsInfoBgSubtle]: '#d1ecf1',
		[varBsWarningBgSubtle]: '#fcefdc',
		[varBsDangerBgSubtle]: '#f7dddc',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		[varBsPrimaryBorderSubtle]: '#b5cdf7',
		[varBsSecondaryBorderSubtle]: '#dee1e5',
		[varBsSuccessBorderSubtle]: '#9ae3c8',
		[varBsInfoBorderSubtle]: '#a2dae3',
		[varBsWarningBorderSubtle]: '#f9deb8',
		[varBsDangerBorderSubtle]: '#f0bab9',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#adb5bd',
		[varBsWhiteRgb]: '255, 255, 255',
		[varBsBlackRgb]: '0, 0, 0',
		[varBsFontSansSerif]: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		[varBsBodyFontSize]: '1.1rem',
		[varBsBodyFontWeight]: '400',
		[varBsBodyLineHeight]: '1.5',
		[varBsBodyColor]: '#343a40',
		[varBsBodyColorRgb]: '52, 58, 64',
		[varBsBodyBg]: '#fff',
		[varBsBodyBgRgb]: '255, 255, 255',
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(52, 58, 64, 0.75)',
		[varBsSecondaryColorRgb]: '52, 58, 64',
		[varBsSecondaryBg]: '#e9ecef',
		[varBsSecondaryBgRgb]: '233, 236, 239',
		[varBsTertiaryColor]: 'rgba(52, 58, 64, 0.5)',
		[varBsTertiaryColorRgb]: '52, 58, 64',
		[varBsTertiaryBg]: '#f8f9fa',
		[varBsTertiaryBgRgb]: '248, 249, 250',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#4582ec',
		[varBsLinkColorRgb]: '69, 130, 236',
		[varBsLinkDecoration]: 'underline',
		[varBsLinkHoverColor]: '#3768bd',
		[varBsLinkHoverColorRgb]: '55, 104, 189',
		[varBsCodeColor]: '#e83e8c',
		[varBsHighlightColor]: '#343a40',
		[varBsHighlightBg]: '#fcefdc',
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#ddd',
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
		[varBsFocusRingColor]: 'rgba(69, 130, 236, 0.25)',
		[varBsFormValidColor]: '#02b875',
		[varBsFormValidBorderColor]: '#02b875',
		[varBsFormInvalidColor]: '#d9534f',
		[varBsFormInvalidBorderColor]: '#d9534f',
	},
})

globalStyle(`${literaScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBodyColor]: '#ddd',
		[varBsBodyColorRgb]: '221, 221, 221',
		[varBsBodyBg]: '#212529',
		[varBsBodyBgRgb]: '33, 37, 41',
		[varBsEmphasisColor]: '#fff',
		[varBsEmphasisColorRgb]: '255, 255, 255',
		[varBsSecondaryColor]: 'rgba(221, 221, 221, 0.75)',
		[varBsSecondaryColorRgb]: '221, 221, 221',
		[varBsSecondaryBg]: '#343a40',
		[varBsSecondaryBgRgb]: '52, 58, 64',
		[varBsTertiaryColor]: 'rgba(221, 221, 221, 0.5)',
		[varBsTertiaryColorRgb]: '221, 221, 221',
		[varBsTertiaryBg]: '#2b3035',
		[varBsTertiaryBgRgb]: '43, 48, 53',
		[varBsPrimaryTextEmphasis]: '#8fb4f4',
		[varBsSecondaryTextEmphasis]: '#ced3d7',
		[varBsSuccessTextEmphasis]: '#67d4ac',
		[varBsInfoTextEmphasis]: '#74c7d4',
		[varBsWarningTextEmphasis]: '#f6ce95',
		[varBsDangerTextEmphasis]: '#e89895',
		[varBsLightTextEmphasis]: '#f8f9fa',
		[varBsDarkTextEmphasis]: '#ddd',
		[varBsPrimaryBgSubtle]: '#0e1a2f',
		[varBsSecondaryBgSubtle]: '#232426',
		[varBsSuccessBgSubtle]: '#002517',
		[varBsInfoBgSubtle]: '#052025',
		[varBsWarningBgSubtle]: '#302310',
		[varBsDangerBgSubtle]: '#2b1110',
		[varBsLightBgSubtle]: '#343a40',
		[varBsDarkBgSubtle]: '#1a1d20',
		[varBsPrimaryBorderSubtle]: '#294e8e',
		[varBsSecondaryBorderSubtle]: '#686d71',
		[varBsSuccessBorderSubtle]: '#016e46',
		[varBsInfoBorderSubtle]: '#0e616e',
		[varBsWarningBorderSubtle]: '#90682f',
		[varBsDangerBorderSubtle]: '#82322f',
		[varBsLightBorderSubtle]: '#495057',
		[varBsDarkBorderSubtle]: '#343a40',
		[varBsHeadingColor]: 'inherit',
		[varBsLinkColor]: '#8fb4f4',
		[varBsLinkHoverColor]: '#a5c3f6',
		[varBsLinkColorRgb]: '143, 180, 244',
		[varBsLinkHoverColorRgb]: '165, 195, 246',
		[varBsCodeColor]: '#f18bba',
		[varBsHighlightColor]: '#ddd',
		[varBsHighlightBg]: '#60451f',
		[varBsBorderColor]: '#495057',
		[varBsBorderColorTranslucent]: 'rgba(255, 255, 255, 0.15)',
		[varBsFormValidColor]: '#67d4ac',
		[varBsFormValidBorderColor]: '#67d4ac',
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

globalStyle(`${literaScope}${vars}`, {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle(`:where(${literaScope}${horizontalRule})`, {
	margin: '1rem 0',
	color: 'inherit',
	border: '0',
	borderTop: `${varBsBorderWidth} solid`,
	opacity: '0.25',
})

globalStyle(`:where(${literaScope}${h6})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${literaScope}${h5})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${literaScope}${h4})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${literaScope}${h3})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${literaScope}${h2})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${literaScope}${h1})`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${literaScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '700',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`:where(${literaScope}${h1})`, {
	fontSize: 'calc(1.4rem + 1.8vw)',
})

globalStyle(`${literaScope}${clsH1}`, {
	fontSize: 'calc(1.4rem + 1.8vw)',
})

globalStyle(`:where(${literaScope}${h1})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.75rem',
		},
	},
})

globalStyle(`${literaScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.75rem',
		},
	},
})

globalStyle(`:where(${literaScope}${h2})`, {
	fontSize: 'calc(1.345rem + 1.14vw)',
})

globalStyle(`${literaScope}${clsH2}`, {
	fontSize: 'calc(1.345rem + 1.14vw)',
})

globalStyle(`:where(${literaScope}${h2})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.2rem',
		},
	},
})

globalStyle(`${literaScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.2rem',
		},
	},
})

globalStyle(`:where(${literaScope}${h3})`, {
	fontSize: 'calc(1.3175rem + 0.81vw)',
})

globalStyle(`${literaScope}${clsH3}`, {
	fontSize: 'calc(1.3175rem + 0.81vw)',
})

globalStyle(`:where(${literaScope}${h3})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.925rem',
		},
	},
})

globalStyle(`${literaScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.925rem',
		},
	},
})

globalStyle(`:where(${literaScope}${h4})`, {
	fontSize: 'calc(1.29rem + 0.48vw)',
})

globalStyle(`${literaScope}${clsH4}`, {
	fontSize: 'calc(1.29rem + 0.48vw)',
})

globalStyle(`:where(${literaScope}${h4})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.65rem',
		},
	},
})

globalStyle(`${literaScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.65rem',
		},
	},
})

globalStyle(`:where(${literaScope}${h5})`, {
	fontSize: 'calc(1.2625rem + 0.15vw)',
})

globalStyle(`${literaScope}${clsH5}`, {
	fontSize: 'calc(1.2625rem + 0.15vw)',
})

globalStyle(`:where(${literaScope}${h5})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}${clsH5}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`:where(${literaScope}${h6})`, {
	fontSize: '1.1rem',
})

globalStyle(`${literaScope}${clsH6}`, {
	fontSize: '1.1rem',
})

globalStyle(`:where(${literaScope}${paragraph})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`${literaScope}${elAbbr}[title]`, {
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
	cursor: 'help',
	WebkitTextDecorationSkipInk: 'none',
	textDecorationSkipInk: 'none',
})

globalStyle(`:where(${literaScope}${elAddress})`, {
	marginBottom: '1rem',
	fontStyle: 'normal',
	lineHeight: 'inherit',
})

globalStyle(`:where(${literaScope}${elOl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${literaScope}${elUl})`, {
	paddingLeft: '2rem',
})

globalStyle(`:where(${literaScope}${elOl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${literaScope}${elUl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${literaScope}${elDl})`, {
	marginTop: '0',
	marginBottom: '1rem',
})

globalStyle(`:where(${literaScope}${elOl}) :where(${literaScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${literaScope}${elUl}) :where(${literaScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${literaScope}${elOl}) :where(${literaScope}${elUl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${literaScope}${elUl}) :where(${literaScope}${elOl})`, {
	marginBottom: '0',
})

globalStyle(`:where(${literaScope}${elDt})`, {
	fontWeight: '700',
})

globalStyle(`:where(${literaScope}${elDd})`, {
	marginBottom: '0.5rem',
	marginLeft: '0',
})

globalStyle(`:where(${literaScope}${blockquote})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${literaScope}${elB})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${literaScope}${elStrong})`, {
	fontWeight: 'bolder',
})

globalStyle(`:where(${literaScope}${small})`, {
	fontSize: '0.875em',
})

globalStyle(`:where(${literaScope}${markText})`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`:where(${literaScope}${elSub})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${literaScope}${elSup})`, {
	position: 'relative',
	fontSize: '0.75em',
	lineHeight: '0',
	verticalAlign: 'baseline',
})

globalStyle(`:where(${literaScope}${elSub})`, {
	bottom: '-0.25em',
})

globalStyle(`:where(${literaScope}${elSup})`, {
	top: '-0.5em',
})

globalStyle(`:where(${literaScope}${link})`, {
	color: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')})`,
	textDecoration: 'underline',
})

globalStyle(`${literaScope}${link}:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

globalStyle(`${literaScope}${link}:not([href]):not([class])`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`${literaScope}${link}:not([href]):not([class]):hover`, {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle(`:where(${literaScope}${elPre})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${literaScope}${inlineCode})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${literaScope}${elKbd})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${literaScope}${elSamp})`, {
	fontFamily: varBsFontMonospace,
	fontSize: '1em',
})

globalStyle(`:where(${literaScope}${elPre})`, {
	display: 'block',
	marginTop: '0',
	marginBottom: '1rem',
	overflow: 'auto',
	fontSize: '0.875em',
})

globalStyle(`:where(${literaScope}${elPre}) :where(${literaScope}${inlineCode})`, {
	fontSize: 'inherit',
	color: 'inherit',
	wordBreak: 'normal',
})

globalStyle(`:where(${literaScope}${inlineCode})`, {
	fontSize: '0.875em',
	color: varBsCodeColor,
	wordWrap: 'break-word',
})

globalStyle(`:where(${literaScope}${link}) > :where(${literaScope}${inlineCode})`, {
	color: 'inherit',
})

globalStyle(`:where(${literaScope}${elKbd})`, {
	padding: '0.1875rem 0.375rem',
	fontSize: '0.875em',
	color: varBsBodyBg,
	backgroundColor: varBsBodyColor,
	borderRadius: '0.25rem',
})

globalStyle(`:where(${literaScope}${elKbd}) :where(${literaScope}${elKbd})`, {
	padding: '0',
	fontSize: '1em',
})

globalStyle(`:where(${literaScope}${elFigure})`, {
	margin: '0 0 1rem',
})

globalStyle(`:where(${literaScope}${elImg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${literaScope}${elSvg})`, {
	verticalAlign: 'middle',
})

globalStyle(`:where(${literaScope}${tableElement})`, {
	captionSide: 'bottom',
	borderCollapse: 'collapse',
})

globalStyle(`:where(${literaScope}${elCaption})`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	color: varBsSecondaryColor,
	textAlign: 'left',
})

globalStyle(`:where(${literaScope}${tableHeaderCell})`, {
	textAlign: '-webkit-match-parent',
})

globalStyle(`:where(${literaScope}${tableHead})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${literaScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${literaScope}${tableSection})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${literaScope}${tableRow})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${literaScope}${tableCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${literaScope}${tableHeaderCell})`, {
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`:where(${literaScope}${elLabel})`, {
	display: 'inline-block',
})

globalStyle(`:where(${literaScope}${elButton})`, {
	borderRadius: '0',
})

globalStyle(`${literaScope}${elButton}:focus:not(:focus-visible)`, {
	outline: '0',
})

globalStyle(`:where(${literaScope}${elInput})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${literaScope}${elButton})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${literaScope}${elSelect})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${literaScope}${elOptgroup})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${literaScope}${elTextarea})`, {
	margin: '0',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`:where(${literaScope}${elButton})`, {
	textTransform: 'none',
})

globalStyle(`:where(${literaScope}${elSelect})`, {
	textTransform: 'none',
})

globalStyle(`${literaScope}[role=button]`, {
	cursor: 'pointer',
})

globalStyle(`:where(${literaScope}${elSelect})`, {
	wordWrap: 'normal',
})

globalStyle(`${literaScope}${elSelect}:disabled`, {
	opacity: '1',
})

globalStyle(`${literaScope}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator`, {
	display: 'none !important',
})

globalStyle(`:where(${literaScope}${elButton})`, {
	WebkitAppearance: 'button',
})

globalStyle(`${literaScope}[type=button]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${literaScope}[type=reset]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${literaScope}[type=submit]`, {
	WebkitAppearance: 'button',
})

globalStyle(`${literaScope}${elButton}:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${literaScope}[type=button]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${literaScope}[type=reset]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`${literaScope}[type=submit]:not(:disabled)`, {
	cursor: 'pointer',
})

globalStyle(`::-moz-focus-inner`, {
	padding: '0',
	borderStyle: 'none',
})

globalStyle(`:where(${literaScope}${elTextarea})`, {
	resize: 'vertical',
})

globalStyle(`:where(${literaScope}${fieldset})`, {
	minWidth: '0',
	padding: '0',
	margin: '0',
	border: '0',
})

globalStyle(`:where(${literaScope}${elLegend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${literaScope}${elLegend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`:where(${literaScope}${elLegend}) + *`, {
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

globalStyle(`${literaScope}[type=search]`, {
	WebkitAppearance: 'textfield',
	outlineOffset: '-2px',
})

globalStyle(`${literaScope}[type=search]::-webkit-search-cancel-button`, {
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

globalStyle(`:where(${literaScope}${elOutput})`, {
	display: 'inline-block',
})

globalStyle(`:where(${literaScope}${elIframe})`, {
	border: '0',
})

globalStyle(`:where(${literaScope}${elSummary})`, {
	display: 'list-item',
	cursor: 'pointer',
})

globalStyle(`:where(${literaScope}${elProgress})`, {
	verticalAlign: 'baseline',
})

globalStyle(`${literaScope}[hidden]`, {
	display: 'none !important',
})

globalStyle(`${literaScope}${containerFluid}`, {
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

globalStyle(`${literaScope}${vars}`, {
	vars: {
		[varBsBreakpointXs]: '0',
		[varBsBreakpointSm]: '576px',
		[varBsBreakpointMd]: '768px',
		[varBsBreakpointLg]: '992px',
		[varBsBreakpointXl]: '1200px',
		[varBsBreakpointXxl]: '1400px',
	},
})

globalStyle(`${literaScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${literaScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${literaScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${literaScope}${collapsing}`, {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.35s ease',
})

globalStyle(`${literaScope}${collapsing}`, {
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

globalStyle(`${literaScope}${vars}`, {
	vars: {
		[varBsBtnCloseFilter]: '',
	},
})

globalStyle(`${literaScope}${vars}[data-bs-theme=dark]`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${literaScope}${vars}`, {
	vars: {
		[varBsCarouselIndicatorActiveBg]: '#fff',
		[varBsCarouselCaptionColor]: '#fff',
		[varBsCarouselControlIconFilter]: '',
	},
})

globalStyle(`${literaScope}${vars}[data-bs-theme=dark]`, {
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

globalStyle(`:where(${literaScope}${paragraph})`, {
	fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
})

globalStyle(`:where(${literaScope}${blockquote})`, {
	fontStyle: 'italic',
})

globalStyle(`:where(${literaScope}${elFooter})`, {
	fontSize: '0.9625rem',
})

globalStyle(`:where(${literaScope}${tableElement})`, {
	fontSize: '0.9625rem',
})
