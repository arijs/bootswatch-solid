import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../scope.css'

import {
	varBsBlackRgb,
	varBsBodyBgRgb,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusPill,
	varBsBorderRadiusSm,
	varBsBorderRadiusXl,
	varBsBorderRadiusXxl,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsBoxShadowLg,
	varBsBoxShadowSm,
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
	varBsDangerRgb,
	varBsDangerTextEmphasis,
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
	varBsGradient,
	varBsHighlightBg,
	varBsHighlightColor,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
	varBsInfoRgb,
	varBsInfoTextEmphasis,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
	varBsLightRgb,
	varBsLightTextEmphasis,
	varBsLinkColorRgb,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
	varBsPrimaryRgb,
	varBsPrimaryTextEmphasis,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
	varBsSecondaryColor,
	varBsSecondaryRgb,
	varBsSecondaryTextEmphasis,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
	varBsSuccessRgb,
	varBsSuccessTextEmphasis,
	varBsTertiaryColor,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
	varBsWarningRgb,
	varBsWarningTextEmphasis,
	varBsWhiteRgb,
} from '../../../theme-contract/_vars.css'
import { varBsGutterX, varBsGutterY } from '../../../theme-contract/layout/container.css'
import {
	varBsAspectRatio,
	varBsBgOpacity,
	varBsBorderOpacity,
	varBsLinkOpacity,
	varBsLinkUnderlineOpacity,
	varBsTextOpacity,
} from '../../../theme-contract/utilities/generated/_vars.css'

import { link } from '../../../theme-contract/contents/basic/contract.css'
import { elLabel } from '../../../theme-contract/global-elements/contract.css'

import { formFloating, formSwitch, wasValidated } from '../../../theme-contract/forms/contract.css'
import {
	alignBaseline,
	alignBottom,
	alignContentAround,
	alignContentBetween,
	alignContentCenter,
	alignContentEnd,
	alignContentLgAround,
	alignContentLgBetween,
	alignContentLgCenter,
	alignContentLgEnd,
	alignContentLgStart,
	alignContentLgStretch,
	alignContentMdAround,
	alignContentMdBetween,
	alignContentMdCenter,
	alignContentMdEnd,
	alignContentMdStart,
	alignContentMdStretch,
	alignContentSmAround,
	alignContentSmBetween,
	alignContentSmCenter,
	alignContentSmEnd,
	alignContentSmStart,
	alignContentSmStretch,
	alignContentStart,
	alignContentStretch,
	alignContentXlAround,
	alignContentXlBetween,
	alignContentXlCenter,
	alignContentXlEnd,
	alignContentXlStart,
	alignContentXlStretch,
	alignContentXxlAround,
	alignContentXxlBetween,
	alignContentXxlCenter,
	alignContentXxlEnd,
	alignContentXxlStart,
	alignContentXxlStretch,
	alignItemsBaseline,
	alignItemsEnd,
	alignItemsLgBaseline,
	alignItemsLgCenter,
	alignItemsLgEnd,
	alignItemsLgStart,
	alignItemsLgStretch,
	alignItemsMdBaseline,
	alignItemsMdCenter,
	alignItemsMdEnd,
	alignItemsMdStart,
	alignItemsMdStretch,
	alignItemsSmBaseline,
	alignItemsSmCenter,
	alignItemsSmEnd,
	alignItemsSmStart,
	alignItemsSmStretch,
	alignItemsStart,
	alignItemsXlBaseline,
	alignItemsXlCenter,
	alignItemsXlEnd,
	alignItemsXlStart,
	alignItemsXlStretch,
	alignItemsXxlBaseline,
	alignItemsXxlCenter,
	alignItemsXxlEnd,
	alignItemsXxlStart,
	alignItemsXxlStretch,
	alignMiddle,
	alignSelfAuto,
	alignSelfBaseline,
	alignSelfCenter,
	alignSelfEnd,
	alignSelfLgAuto,
	alignSelfLgBaseline,
	alignSelfLgCenter,
	alignSelfLgEnd,
	alignSelfLgStart,
	alignSelfLgStretch,
	alignSelfMdAuto,
	alignSelfMdBaseline,
	alignSelfMdCenter,
	alignSelfMdEnd,
	alignSelfMdStart,
	alignSelfMdStretch,
	alignSelfSmAuto,
	alignSelfSmBaseline,
	alignSelfSmCenter,
	alignSelfSmEnd,
	alignSelfSmStart,
	alignSelfSmStretch,
	alignSelfStretch,
	alignSelfXlAuto,
	alignSelfXlBaseline,
	alignSelfXlCenter,
	alignSelfXlEnd,
	alignSelfXlStart,
	alignSelfXlStretch,
	alignSelfXxlAuto,
	alignSelfXxlBaseline,
	alignSelfXxlCenter,
	alignSelfXxlEnd,
	alignSelfXxlStart,
	alignSelfXxlStretch,
	alignTextBottom,
	alignTextTop,
	bgBlack,
	bgBody,
	bgBodySecondary,
	bgBodyTertiary,
	bgDangerSubtle,
	bgDarkSubtle,
	bgGradient,
	bgInfoSubtle,
	bgLightSubtle,
	bgOpacity10,
	bgOpacity100,
	bgOpacity25,
	bgOpacity50,
	bgOpacity75,
	bgPrimarySubtle,
	bgSecondarySubtle,
	bgSuccessSubtle,
	bgTransparent,
	bgWarningSubtle,
	bgWhite,
	bi,
	border0,
	border1,
	border2,
	border3,
	border4,
	border5,
	borderBlack,
	borderBottom0,
	borderDanger,
	borderDangerSubtle,
	borderDarkSubtle,
	borderEnd,
	borderEnd0,
	borderInfo,
	borderInfoSubtle,
	borderLight,
	borderLightSubtle,
	borderOpacity10,
	borderOpacity100,
	borderOpacity25,
	borderOpacity50,
	borderOpacity75,
	borderPrimary,
	borderPrimarySubtle,
	borderSecondary,
	borderSecondarySubtle,
	borderStart,
	borderStart0,
	borderSuccess,
	borderSuccessSubtle,
	borderTop,
	borderTop0,
	borderWarning,
	borderWarningSubtle,
	borderWhite,
	bottom0,
	bottom100,
	bottom50,
	captionTop,
	clearfix,
	col1,
	col10,
	col11,
	col12,
	col2,
	col3,
	col4,
	col5,
	col6,
	col7,
	col8,
	col9,
	colAuto,
	colFormLabel,
	colFormLabelLg,
	colFormLabelSm,
	colLg,
	colLg1,
	colLg10,
	colLg11,
	colLg12,
	colLg2,
	colLg3,
	colLg4,
	colLg5,
	colLg6,
	colLg7,
	colLg8,
	colLg9,
	colLgAuto,
	colMd,
	colMd1,
	colMd10,
	colMd11,
	colMd12,
	colMd7,
	colMd9,
	colMdAuto,
	colSm,
	colSm1,
	colSm10,
	colSm11,
	colSm12,
	colSm2,
	colSm3,
	colSm4,
	colSm5,
	colSm7,
	colSm8,
	colSm9,
	colSmAuto,
	colXl,
	colXl1,
	colXl10,
	colXl11,
	colXl12,
	colXl2,
	colXl3,
	colXl4,
	colXl5,
	colXl6,
	colXl7,
	colXl8,
	colXl9,
	colXlAuto,
	colXxl,
	colXxl1,
	colXxl10,
	colXxl11,
	colXxl12,
	colXxl2,
	colXxl3,
	colXxl4,
	colXxl5,
	colXxl6,
	colXxl7,
	colXxl8,
	colXxl9,
	colXxlAuto,
	collapseHorizontal,
	collapsing,
	columnGap0,
	columnGap1,
	columnGap2,
	columnGap3,
	columnGap4,
	columnGap5,
	columnGapLg0,
	columnGapLg1,
	columnGapLg2,
	columnGapLg3,
	columnGapLg4,
	columnGapLg5,
	columnGapMd0,
	columnGapMd1,
	columnGapMd2,
	columnGapMd3,
	columnGapMd4,
	columnGapMd5,
	columnGapSm0,
	columnGapSm1,
	columnGapSm2,
	columnGapSm3,
	columnGapSm4,
	columnGapSm5,
	columnGapXl0,
	columnGapXl1,
	columnGapXl2,
	columnGapXl3,
	columnGapXl4,
	columnGapXl5,
	columnGapXxl0,
	columnGapXxl1,
	columnGapXxl2,
	columnGapXxl3,
	columnGapXxl4,
	columnGapXxl5,
	container,
	containerLg,
	containerMd,
	containerSm,
	containerXl,
	containerXxl,
	dGrid,
	dInline,
	dInlineGrid,
	dLgBlock,
	dLgFlex,
	dLgGrid,
	dLgInline,
	dLgInlineBlock,
	dLgInlineFlex,
	dLgInlineGrid,
	dLgTable,
	dLgTableCell,
	dLgTableRow,
	dMdFlex,
	dMdGrid,
	dMdInline,
	dMdInlineBlock,
	dMdInlineFlex,
	dMdInlineGrid,
	dMdNone,
	dMdTable,
	dMdTableCell,
	dMdTableRow,
	dPrintBlock,
	dPrintFlex,
	dPrintGrid,
	dPrintInline,
	dPrintInlineBlock,
	dPrintInlineFlex,
	dPrintInlineGrid,
	dPrintNone,
	dPrintTable,
	dPrintTableCell,
	dPrintTableRow,
	dSmBlock,
	dSmFlex,
	dSmGrid,
	dSmInline,
	dSmInlineBlock,
	dSmInlineFlex,
	dSmInlineGrid,
	dSmNone,
	dSmTable,
	dSmTableCell,
	dSmTableRow,
	dTable,
	dTableCell,
	dTableRow,
	dXlBlock,
	dXlFlex,
	dXlGrid,
	dXlInline,
	dXlInlineBlock,
	dXlInlineFlex,
	dXlInlineGrid,
	dXlNone,
	dXlTable,
	dXlTableCell,
	dXlTableRow,
	dXxlBlock,
	dXxlFlex,
	dXxlGrid,
	dXxlInline,
	dXxlInlineBlock,
	dXxlInlineFlex,
	dXxlInlineGrid,
	dXxlNone,
	dXxlTable,
	dXxlTableCell,
	dXxlTableRow,
	end100,
	end50,
	fixedBottom,
	fixedTop,
	flexColumnReverse,
	flexFill,
	flexGrow0,
	flexGrow1,
	flexLgColumn,
	flexLgColumnReverse,
	flexLgFill,
	flexLgGrow0,
	flexLgGrow1,
	flexLgNowrap,
	flexLgRow,
	flexLgRowReverse,
	flexLgShrink0,
	flexLgShrink1,
	flexLgWrap,
	flexLgWrapReverse,
	flexMdColumn,
	flexMdColumnReverse,
	flexMdFill,
	flexMdGrow0,
	flexMdGrow1,
	flexMdNowrap,
	flexMdRow,
	flexMdRowReverse,
	flexMdShrink0,
	flexMdShrink1,
	flexMdWrap,
	flexMdWrapReverse,
	flexNowrap,
	flexRowReverse,
	flexShrink0,
	flexShrink1,
	flexSmColumn,
	flexSmColumnReverse,
	flexSmFill,
	flexSmGrow0,
	flexSmGrow1,
	flexSmNowrap,
	flexSmRow,
	flexSmRowReverse,
	flexSmShrink0,
	flexSmShrink1,
	flexSmWrap,
	flexSmWrapReverse,
	flexWrapReverse,
	flexXlColumn,
	flexXlColumnReverse,
	flexXlFill,
	flexXlGrow0,
	flexXlGrow1,
	flexXlNowrap,
	flexXlRow,
	flexXlRowReverse,
	flexXlShrink0,
	flexXlShrink1,
	flexXlWrap,
	flexXlWrapReverse,
	flexXxlColumn,
	flexXxlColumnReverse,
	flexXxlFill,
	flexXxlGrow0,
	flexXxlGrow1,
	flexXxlNowrap,
	flexXxlRow,
	flexXxlRowReverse,
	flexXxlShrink0,
	flexXxlShrink1,
	flexXxlWrap,
	flexXxlWrapReverse,
	floatEnd,
	floatLgEnd,
	floatLgNone,
	floatLgStart,
	floatMdEnd,
	floatMdNone,
	floatMdStart,
	floatNone,
	floatSmEnd,
	floatSmNone,
	floatSmStart,
	floatStart,
	floatXlEnd,
	floatXlNone,
	floatXlStart,
	floatXxlEnd,
	floatXxlNone,
	floatXxlStart,
	focusRing,
	focusRingDanger,
	focusRingDark,
	focusRingInfo,
	focusRingLight,
	focusRingPrimary,
	focusRingSecondary,
	focusRingSuccess,
	focusRingWarning,
	fontMonospace,
	formCheckInline,
	formCheckReverse,
	formControlColor,
	formControlPlaintext,
	fs1,
	fs2,
	fs3,
	fs5,
	fs6,
	fstItalic,
	fstNormal,
	fwBolder,
	fwLight,
	fwLighter,
	fwMedium,
	fwNormal,
	fwSemibold,
	g1,
	g2,
	g5,
	gLg0,
	gLg1,
	gLg2,
	gLg3,
	gLg4,
	gLg5,
	gMd0,
	gMd1,
	gMd2,
	gMd3,
	gMd4,
	gMd5,
	gSm0,
	gSm1,
	gSm2,
	gSm3,
	gSm4,
	gSm5,
	gXl0,
	gXl1,
	gXl2,
	gXl3,
	gXl4,
	gXl5,
	gXxl0,
	gXxl1,
	gXxl2,
	gXxl3,
	gXxl4,
	gXxl5,
	gap0,
	gap1,
	gap2,
	gap3,
	gap4,
	gap5,
	gapLg0,
	gapLg1,
	gapLg2,
	gapLg3,
	gapLg4,
	gapLg5,
	gapMd0,
	gapMd1,
	gapMd2,
	gapMd3,
	gapMd4,
	gapMd5,
	gapSm0,
	gapSm1,
	gapSm2,
	gapSm3,
	gapSm4,
	gapSm5,
	gapXl0,
	gapXl1,
	gapXl2,
	gapXl3,
	gapXl4,
	gapXl5,
	gapXxl0,
	gapXxl1,
	gapXxl2,
	gapXxl3,
	gapXxl4,
	gapXxl5,
	gx0,
	gx1,
	gx2,
	gx3,
	gx4,
	gx5,
	gxLg0,
	gxLg1,
	gxLg2,
	gxLg3,
	gxLg4,
	gxLg5,
	gxMd0,
	gxMd1,
	gxMd2,
	gxMd3,
	gxMd4,
	gxMd5,
	gxSm0,
	gxSm1,
	gxSm2,
	gxSm3,
	gxSm4,
	gxSm5,
	gxXl0,
	gxXl1,
	gxXl2,
	gxXl3,
	gxXl4,
	gxXl5,
	gxXxl0,
	gxXxl1,
	gxXxl2,
	gxXxl3,
	gxXxl4,
	gxXxl5,
	gy0,
	gy1,
	gy2,
	gy3,
	gy4,
	gy5,
	gyLg0,
	gyLg1,
	gyLg2,
	gyLg3,
	gyLg4,
	gyLg5,
	gyMd0,
	gyMd1,
	gyMd2,
	gyMd3,
	gyMd4,
	gyMd5,
	gySm0,
	gySm1,
	gySm2,
	gySm3,
	gySm4,
	gySm5,
	gyXl0,
	gyXl1,
	gyXl2,
	gyXl3,
	gyXl4,
	gyXl5,
	gyXxl0,
	gyXxl1,
	gyXxl2,
	gyXxl3,
	gyXxl4,
	gyXxl5,
	h100,
	h25,
	h50,
	h75,
	hAuto,
	hstack,
	iconLink,
	iconLinkHover,
	initialism,
	invisible,
	justifyContentAround,
	justifyContentEvenly,
	justifyContentLgAround,
	justifyContentLgBetween,
	justifyContentLgCenter,
	justifyContentLgEnd,
	justifyContentLgEvenly,
	justifyContentLgStart,
	justifyContentMdAround,
	justifyContentMdBetween,
	justifyContentMdCenter,
	justifyContentMdEnd,
	justifyContentMdEvenly,
	justifyContentMdStart,
	justifyContentSmAround,
	justifyContentSmBetween,
	justifyContentSmCenter,
	justifyContentSmEnd,
	justifyContentSmEvenly,
	justifyContentSmStart,
	justifyContentXlAround,
	justifyContentXlBetween,
	justifyContentXlCenter,
	justifyContentXlEnd,
	justifyContentXlEvenly,
	justifyContentXlStart,
	justifyContentXxlAround,
	justifyContentXxlBetween,
	justifyContentXxlCenter,
	justifyContentXxlEnd,
	justifyContentXxlEvenly,
	justifyContentXxlStart,
	lh1,
	lhBase,
	lhLg,
	lhSm,
	linkBodyEmphasis,
	linkDanger,
	linkDark,
	linkInfo,
	linkLight,
	linkOffset1,
	linkOffset1Hover,
	linkOffset2,
	linkOffset2Hover,
	linkOffset3,
	linkOffset3Hover,
	linkOpacity10,
	linkOpacity100,
	linkOpacity100Hover,
	linkOpacity10Hover,
	linkOpacity25,
	linkOpacity25Hover,
	linkOpacity50,
	linkOpacity50Hover,
	linkOpacity75,
	linkOpacity75Hover,
	linkPrimary,
	linkSecondary,
	linkSuccess,
	linkUnderline,
	linkUnderlineDanger,
	linkUnderlineDark,
	linkUnderlineInfo,
	linkUnderlineLight,
	linkUnderlineOpacity0,
	linkUnderlineOpacity0Hover,
	linkUnderlineOpacity10,
	linkUnderlineOpacity100,
	linkUnderlineOpacity100Hover,
	linkUnderlineOpacity10Hover,
	linkUnderlineOpacity25,
	linkUnderlineOpacity25Hover,
	linkUnderlineOpacity50,
	linkUnderlineOpacity50Hover,
	linkUnderlineOpacity75,
	linkUnderlineOpacity75Hover,
	linkUnderlinePrimary,
	linkUnderlineSecondary,
	linkUnderlineSuccess,
	linkUnderlineWarning,
	linkWarning,
	m0,
	m1,
	m2,
	m3,
	m4,
	m5,
	mAuto,
	mLg0,
	mLg1,
	mLg2,
	mLg3,
	mLg4,
	mLg5,
	mLgAuto,
	mMd0,
	mMd1,
	mMd2,
	mMd3,
	mMd4,
	mMd5,
	mMdAuto,
	mSm0,
	mSm1,
	mSm2,
	mSm3,
	mSm4,
	mSm5,
	mSmAuto,
	mXl0,
	mXl1,
	mXl2,
	mXl3,
	mXl4,
	mXl5,
	mXlAuto,
	mXxl0,
	mXxl1,
	mXxl2,
	mXxl3,
	mXxl4,
	mXxl5,
	mXxlAuto,
	mark,
	mb1,
	mbAuto,
	mbLg1,
	mbLg2,
	mbLg3,
	mbLg4,
	mbLg5,
	mbLgAuto,
	mbMd0,
	mbMd1,
	mbMd2,
	mbMd3,
	mbMd4,
	mbMd5,
	mbMdAuto,
	mbSm0,
	mbSm1,
	mbSm2,
	mbSm3,
	mbSm4,
	mbSm5,
	mbSmAuto,
	mbXl0,
	mbXl1,
	mbXl3,
	mbXl4,
	mbXlAuto,
	mbXxl0,
	mbXxl1,
	mbXxl2,
	mbXxl3,
	mbXxl4,
	mbXxl5,
	mbXxlAuto,
	me0,
	me1,
	me3,
	me4,
	me5,
	meLg0,
	meLg1,
	meLg2,
	meLg3,
	meLg4,
	meLg5,
	meLgAuto,
	meMd0,
	meMd1,
	meMd2,
	meMd3,
	meMd4,
	meMd5,
	meMdAuto,
	meSm0,
	meSm1,
	meSm2,
	meSm3,
	meSm4,
	meSm5,
	meSmAuto,
	meXl0,
	meXl1,
	meXl2,
	meXl3,
	meXl4,
	meXl5,
	meXlAuto,
	meXxl0,
	meXxl1,
	meXxl2,
	meXxl3,
	meXxl4,
	meXxl5,
	meXxlAuto,
	mh100,
	minVh100,
	minVw100,
	ms0,
	ms1,
	ms2,
	ms4,
	ms5,
	msAuto,
	msLg0,
	msLg1,
	msLg2,
	msLg3,
	msLg4,
	msLg5,
	msLgAuto,
	msMd0,
	msMd1,
	msMd2,
	msMd3,
	msMd4,
	msMd5,
	msMdAuto,
	msSm0,
	msSm1,
	msSm2,
	msSm3,
	msSm4,
	msSm5,
	msSmAuto,
	msXl0,
	msXl1,
	msXl2,
	msXl3,
	msXl4,
	msXl5,
	msXlAuto,
	msXxl0,
	msXxl1,
	msXxl2,
	msXxl3,
	msXxl4,
	msXxl5,
	msXxlAuto,
	mt0,
	mt1,
	mt2,
	mt4,
	mtAuto,
	mtLg0,
	mtLg1,
	mtLg2,
	mtLg3,
	mtLg4,
	mtLg5,
	mtLgAuto,
	mtMd0,
	mtMd1,
	mtMd2,
	mtMd3,
	mtMd4,
	mtMd5,
	mtMdAuto,
	mtSm0,
	mtSm1,
	mtSm2,
	mtSm3,
	mtSm4,
	mtSm5,
	mtSmAuto,
	mtXl1,
	mtXl2,
	mtXl3,
	mtXl4,
	mtXl5,
	mtXlAuto,
	mtXxl0,
	mtXxl1,
	mtXxl2,
	mtXxl3,
	mtXxl4,
	mtXxl5,
	mtXxlAuto,
	mw100,
	mx0,
	mx1,
	mx2,
	mx3,
	mx4,
	mx5,
	mxAuto,
	mxLg0,
	mxLg1,
	mxLg2,
	mxLg3,
	mxLg4,
	mxLg5,
	mxLgAuto,
	mxMd0,
	mxMd1,
	mxMd2,
	mxMd3,
	mxMd4,
	mxMd5,
	mxMdAuto,
	mxSm0,
	mxSm1,
	mxSm2,
	mxSm3,
	mxSm4,
	mxSm5,
	mxSmAuto,
	mxXl0,
	mxXl1,
	mxXl2,
	mxXl3,
	mxXl4,
	mxXl5,
	mxXlAuto,
	mxXxl0,
	mxXxl1,
	mxXxl2,
	mxXxl3,
	mxXxl4,
	mxXxl5,
	mxXxlAuto,
	my0,
	my1,
	my4,
	my5,
	myAuto,
	myLg0,
	myLg1,
	myLg2,
	myLg3,
	myLg4,
	myLg5,
	myLgAuto,
	myMd0,
	myMd1,
	myMd2,
	myMd3,
	myMd4,
	myMd5,
	myMdAuto,
	mySm0,
	mySm1,
	mySm2,
	mySm3,
	mySm4,
	mySm5,
	mySmAuto,
	myXl0,
	myXl1,
	myXl2,
	myXl3,
	myXl4,
	myXl5,
	myXlAuto,
	myXxl0,
	myXxl1,
	myXxl2,
	myXxl3,
	myXxl4,
	myXxl5,
	myXxlAuto,
	objectFitContain,
	objectFitCover,
	objectFitFill,
	objectFitLgContain,
	objectFitLgCover,
	objectFitLgFill,
	objectFitLgNone,
	objectFitLgScale,
	objectFitMdContain,
	objectFitMdCover,
	objectFitMdFill,
	objectFitMdNone,
	objectFitMdScale,
	objectFitNone,
	objectFitScale,
	objectFitSmContain,
	objectFitSmCover,
	objectFitSmFill,
	objectFitSmNone,
	objectFitSmScale,
	objectFitXlContain,
	objectFitXlCover,
	objectFitXlFill,
	objectFitXlNone,
	objectFitXlScale,
	objectFitXxlContain,
	objectFitXxlCover,
	objectFitXxlFill,
	objectFitXxlNone,
	objectFitXxlScale,
	offset1,
	offset10,
	offset11,
	offset2,
	offset3,
	offset4,
	offset5,
	offset6,
	offset7,
	offset8,
	offset9,
	offsetLg0,
	offsetLg1,
	offsetLg10,
	offsetLg11,
	offsetLg2,
	offsetLg3,
	offsetLg4,
	offsetLg5,
	offsetLg6,
	offsetLg7,
	offsetLg8,
	offsetLg9,
	offsetMd0,
	offsetMd1,
	offsetMd10,
	offsetMd11,
	offsetMd2,
	offsetMd3,
	offsetMd4,
	offsetMd5,
	offsetMd6,
	offsetMd7,
	offsetMd8,
	offsetMd9,
	offsetSm0,
	offsetSm1,
	offsetSm10,
	offsetSm11,
	offsetSm2,
	offsetSm3,
	offsetSm4,
	offsetSm5,
	offsetSm6,
	offsetSm7,
	offsetSm8,
	offsetSm9,
	offsetXl0,
	offsetXl1,
	offsetXl10,
	offsetXl11,
	offsetXl2,
	offsetXl3,
	offsetXl4,
	offsetXl5,
	offsetXl6,
	offsetXl7,
	offsetXl8,
	offsetXl9,
	offsetXxl0,
	offsetXxl1,
	offsetXxl10,
	offsetXxl11,
	offsetXxl2,
	offsetXxl3,
	offsetXxl4,
	offsetXxl5,
	offsetXxl6,
	offsetXxl7,
	offsetXxl8,
	offsetXxl9,
	opacity0,
	opacity100,
	opacity25,
	opacity50,
	opacity75,
	order0,
	order1,
	order2,
	order3,
	order4,
	order5,
	orderFirst,
	orderLast,
	orderLg0,
	orderLg1,
	orderLg2,
	orderLg3,
	orderLg4,
	orderLg5,
	orderLgFirst,
	orderLgLast,
	orderMd0,
	orderMd1,
	orderMd2,
	orderMd3,
	orderMd4,
	orderMd5,
	orderMdFirst,
	orderMdLast,
	orderSm0,
	orderSm1,
	orderSm2,
	orderSm3,
	orderSm4,
	orderSm5,
	orderSmFirst,
	orderSmLast,
	orderXl0,
	orderXl1,
	orderXl2,
	orderXl3,
	orderXl4,
	orderXl5,
	orderXlFirst,
	orderXlLast,
	orderXxl0,
	orderXxl1,
	orderXxl2,
	orderXxl3,
	orderXxl4,
	orderXxl5,
	orderXxlFirst,
	orderXxlLast,
	overflowAuto,
	overflowHidden,
	overflowScroll,
	overflowVisible,
	overflowXAuto,
	overflowXScroll,
	overflowXVisible,
	overflowYAuto,
	overflowYHidden,
	overflowYScroll,
	overflowYVisible,
	p0,
	p1,
	p2,
	p3,
	p4,
	pLg0,
	pLg1,
	pLg2,
	pLg3,
	pLg4,
	pLg5,
	pMd0,
	pMd1,
	pMd2,
	pMd3,
	pMd4,
	pMd5,
	pSm0,
	pSm1,
	pSm2,
	pSm3,
	pSm4,
	pSm5,
	pXl0,
	pXl1,
	pXl2,
	pXl3,
	pXl4,
	pXl5,
	pXxl0,
	pXxl1,
	pXxl2,
	pXxl3,
	pXxl4,
	pXxl5,
	pb0,
	pb1,
	pb4,
	pbLg0,
	pbLg1,
	pbLg2,
	pbLg3,
	pbLg4,
	pbLg5,
	pbMd0,
	pbMd1,
	pbMd2,
	pbMd3,
	pbMd4,
	pbMd5,
	pbSm0,
	pbSm1,
	pbSm2,
	pbSm3,
	pbSm4,
	pbSm5,
	pbXl0,
	pbXl1,
	pbXl2,
	pbXl4,
	pbXl5,
	pbXxl0,
	pbXxl1,
	pbXxl2,
	pbXxl3,
	pbXxl4,
	pbXxl5,
	pe0,
	pe1,
	pe2,
	pe3,
	pe4,
	pe5,
	peAuto,
	peLg0,
	peLg1,
	peLg2,
	peLg3,
	peLg4,
	peLg5,
	peMd0,
	peMd1,
	peMd2,
	peMd3,
	peMd4,
	peMd5,
	peNone,
	peSm0,
	peSm1,
	peSm2,
	peSm3,
	peSm4,
	peSm5,
	peXl0,
	peXl1,
	peXl2,
	peXl3,
	peXl4,
	peXl5,
	peXxl0,
	peXxl1,
	peXxl2,
	peXxl3,
	peXxl4,
	peXxl5,
	placeholder,
	placeholderGlow,
	placeholderLg,
	placeholderSm,
	placeholderWave,
	placeholderXs,
	pointerEvent,
	positionFixed,
	positionStatic,
	positionSticky,
	ps0,
	ps1,
	ps2,
	ps4,
	ps5,
	psLg0,
	psLg1,
	psLg2,
	psLg3,
	psLg4,
	psLg5,
	psMd0,
	psMd1,
	psMd2,
	psMd3,
	psMd4,
	psMd5,
	psSm0,
	psSm1,
	psSm2,
	psSm3,
	psSm4,
	psSm5,
	psXl0,
	psXl1,
	psXl2,
	psXl3,
	psXl4,
	psXl5,
	psXxl0,
	psXxl1,
	psXxl2,
	psXxl3,
	psXxl4,
	psXxl5,
	pt0,
	pt1,
	pt2,
	pt5,
	ptLg0,
	ptLg1,
	ptLg2,
	ptLg3,
	ptLg4,
	ptLg5,
	ptMd0,
	ptMd1,
	ptMd2,
	ptMd3,
	ptMd4,
	ptMd5,
	ptSm0,
	ptSm1,
	ptSm2,
	ptSm3,
	ptSm4,
	ptSm5,
	ptXl0,
	ptXl1,
	ptXl2,
	ptXl3,
	ptXl4,
	ptXxl0,
	ptXxl1,
	ptXxl2,
	ptXxl3,
	ptXxl4,
	ptXxl5,
	px0,
	px1,
	px4,
	px5,
	pxLg0,
	pxLg1,
	pxLg2,
	pxLg3,
	pxLg4,
	pxLg5,
	pxMd0,
	pxMd1,
	pxMd2,
	pxMd3,
	pxMd4,
	pxMd5,
	pxSm0,
	pxSm1,
	pxSm2,
	pxSm3,
	pxSm4,
	pxSm5,
	pxXl0,
	pxXl1,
	pxXl2,
	pxXl3,
	pxXl4,
	pxXl5,
	pxXxl0,
	pxXxl1,
	pxXxl2,
	pxXxl3,
	pxXxl4,
	pxXxl5,
	py0,
	py1,
	py2,
	py4,
	py5,
	pyLg0,
	pyLg1,
	pyLg2,
	pyLg3,
	pyLg4,
	pyLg5,
	pyMd0,
	pyMd1,
	pyMd2,
	pyMd3,
	pyMd4,
	pyMd5,
	pySm0,
	pySm1,
	pySm2,
	pySm3,
	pySm4,
	pySm5,
	pyXl0,
	pyXl1,
	pyXl2,
	pyXl3,
	pyXl4,
	pyXl5,
	pyXxl0,
	pyXxl1,
	pyXxl2,
	pyXxl3,
	pyXxl4,
	pyXxl5,
	ratio,
	ratio16x9,
	ratio1x1,
	ratio21x9,
	ratio4x3,
	rounded0,
	rounded1,
	rounded2,
	rounded3,
	rounded4,
	rounded5,
	roundedBottom,
	roundedBottom0,
	roundedBottom1,
	roundedBottom2,
	roundedBottom3,
	roundedBottom4,
	roundedBottom5,
	roundedBottomCircle,
	roundedBottomPill,
	roundedCircle,
	roundedEnd,
	roundedEnd0,
	roundedEnd1,
	roundedEnd2,
	roundedEnd3,
	roundedEnd4,
	roundedEnd5,
	roundedEndCircle,
	roundedEndPill,
	roundedStart,
	roundedStart0,
	roundedStart1,
	roundedStart2,
	roundedStart3,
	roundedStart4,
	roundedStart5,
	roundedStartCircle,
	roundedStartPill,
	roundedTop,
	roundedTop0,
	roundedTop1,
	roundedTop2,
	roundedTop3,
	roundedTop4,
	roundedTop5,
	roundedTopCircle,
	roundedTopPill,
	rowCols2,
	rowCols3,
	rowCols4,
	rowCols5,
	rowCols6,
	rowColsAuto,
	rowColsLg1,
	rowColsLg2,
	rowColsLg3,
	rowColsLg4,
	rowColsLg5,
	rowColsLg6,
	rowColsLgAuto,
	rowColsMd1,
	rowColsMd3,
	rowColsMd4,
	rowColsMd5,
	rowColsMd6,
	rowColsMdAuto,
	rowColsSm1,
	rowColsSm2,
	rowColsSm3,
	rowColsSm4,
	rowColsSm5,
	rowColsSm6,
	rowColsSmAuto,
	rowColsXl1,
	rowColsXl2,
	rowColsXl3,
	rowColsXl4,
	rowColsXl5,
	rowColsXl6,
	rowColsXlAuto,
	rowColsXxl1,
	rowColsXxl2,
	rowColsXxl3,
	rowColsXxl4,
	rowColsXxl5,
	rowColsXxl6,
	rowColsXxlAuto,
	rowGap0,
	rowGap1,
	rowGap2,
	rowGap3,
	rowGap4,
	rowGap5,
	rowGapLg0,
	rowGapLg1,
	rowGapLg2,
	rowGapLg3,
	rowGapLg4,
	rowGapLg5,
	rowGapMd0,
	rowGapMd1,
	rowGapMd2,
	rowGapMd3,
	rowGapMd4,
	rowGapMd5,
	rowGapSm0,
	rowGapSm1,
	rowGapSm2,
	rowGapSm3,
	rowGapSm4,
	rowGapSm5,
	rowGapXl0,
	rowGapXl1,
	rowGapXl2,
	rowGapXl3,
	rowGapXl4,
	rowGapXl5,
	rowGapXxl0,
	rowGapXxl1,
	rowGapXxl2,
	rowGapXxl3,
	rowGapXxl4,
	rowGapXxl5,
	shadow,
	shadowLg,
	shadowNone,
	shadowSm,
	start0,
	start100,
	start50,
	stickyBottom,
	stickyLgBottom,
	stickyLgTop,
	stickyMdBottom,
	stickyMdTop,
	stickySmBottom,
	stickySmTop,
	stickyTop,
	stickyXlBottom,
	stickyXxlBottom,
	stickyXxlTop,
	stretchedLink,
	textBgDanger,
	textBgDark,
	textBgInfo,
	textBgLight,
	textBgPrimary,
	textBgSecondary,
	textBgSuccess,
	textBgWarning,
	textBlack,
	textBlack50,
	textBody,
	textBodyEmphasis,
	textBodySecondary,
	textBodyTertiary,
	textBreak,
	textCapitalize,
	textDangerEmphasis,
	textDarkEmphasis,
	textDecorationLineThrough,
	textDecorationNone,
	textDecorationUnderline,
	textEnd,
	textInfoEmphasis,
	textLgCenter,
	textLgEnd,
	textLgStart,
	textLightEmphasis,
	textLowercase,
	textMdCenter,
	textMdEnd,
	textMdStart,
	textNowrap,
	textOpacity100,
	textOpacity25,
	textOpacity50,
	textOpacity75,
	textPrimaryEmphasis,
	textReset,
	textSecondaryEmphasis,
	textSmCenter,
	textSmEnd,
	textSmStart,
	textStart,
	textSuccessEmphasis,
	textTruncate,
	textUppercase,
	textWarningEmphasis,
	textWhite50,
	textWrap,
	textXlCenter,
	textXlEnd,
	textXlStart,
	textXxlCenter,
	textXxlEnd,
	textXxlStart,
	top100,
	top50,
	translateMiddle,
	translateMiddleX,
	translateMiddleY,
	userSelectAll,
	userSelectAuto,
	userSelectNone,
	vh100,
	visible,
	visuallyHiddenFocusable,
	vr,
	vstack,
	vw100,
	wAuto,
	z0,
	z1,
	z2,
	z3,
	zN1,
} from '../../../theme-contract/literal/contract.css'
import { card } from '../../../theme-contract/ui/card/contract.css'
import { carousel } from '../../../theme-contract/ui/carousel/contract.css'
import { navbar } from '../../../theme-contract/ui/navbar/contract.css'
import { colMd2, colMd5 } from '../../../theme-contract/utilities/contract.css'

globalStyle(`${quartzScope}${mark}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${quartzScope}${initialism}`, {
	fontSize: '0.875em',
	textTransform: 'uppercase',
})

globalStyle(`${quartzScope}${container}`, {
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

globalStyle(`${quartzScope}${containerXxl}`, {
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

globalStyle(`${quartzScope}${containerXl}`, {
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

globalStyle(`${quartzScope}${containerLg}`, {
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

globalStyle(`${quartzScope}${containerMd}`, {
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

globalStyle(`${quartzScope}${containerSm}`, {
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

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${quartzScope}${containerMd}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${quartzScope}${containerLg}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${quartzScope}${containerMd}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${quartzScope}${containerXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${containerLg}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${containerMd}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${quartzScope}${containerXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${containerXl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${containerLg}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${containerMd}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${containerSm}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${container}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${quartzScope}${rowColsAuto} > *`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${quartzScope}${rowCols2} > *`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${quartzScope}${rowCols3} > *`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${quartzScope}${rowCols4} > *`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${quartzScope}${rowCols5} > *`, {
	flex: '0 0 auto',
	width: '20%',
})

globalStyle(`${quartzScope}${rowCols6} > *`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${quartzScope}${colAuto}`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${quartzScope}${col1}`, {
	flex: '0 0 auto',
	width: '8.33333333%',
})

globalStyle(`${quartzScope}${col2}`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${quartzScope}${col3}`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${quartzScope}${col4}`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${quartzScope}${col5}`, {
	flex: '0 0 auto',
	width: '41.66666667%',
})

globalStyle(`${quartzScope}${col6}`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${quartzScope}${col7}`, {
	flex: '0 0 auto',
	width: '58.33333333%',
})

globalStyle(`${quartzScope}${col8}`, {
	flex: '0 0 auto',
	width: '66.66666667%',
})

globalStyle(`${quartzScope}${col9}`, {
	flex: '0 0 auto',
	width: '75%',
})

globalStyle(`${quartzScope}${col10}`, {
	flex: '0 0 auto',
	width: '83.33333333%',
})

globalStyle(`${quartzScope}${col11}`, {
	flex: '0 0 auto',
	width: '91.66666667%',
})

globalStyle(`${quartzScope}${col12}`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${quartzScope}${offset1}`, {
	marginLeft: '8.33333333%',
})

globalStyle(`${quartzScope}${offset2}`, {
	marginLeft: '16.66666667%',
})

globalStyle(`${quartzScope}${offset3}`, {
	marginLeft: '25%',
})

globalStyle(`${quartzScope}${offset4}`, {
	marginLeft: '33.33333333%',
})

globalStyle(`${quartzScope}${offset5}`, {
	marginLeft: '41.66666667%',
})

globalStyle(`${quartzScope}${offset6}`, {
	marginLeft: '50%',
})

globalStyle(`${quartzScope}${offset7}`, {
	marginLeft: '58.33333333%',
})

globalStyle(`${quartzScope}${offset8}`, {
	marginLeft: '66.66666667%',
})

globalStyle(`${quartzScope}${offset9}`, {
	marginLeft: '75%',
})

globalStyle(`${quartzScope}${offset10}`, {
	marginLeft: '83.33333333%',
})

globalStyle(`${quartzScope}${offset11}`, {
	marginLeft: '91.66666667%',
})

globalStyle(`${quartzScope}${gx0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${quartzScope}${gy0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${quartzScope}${g1}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${quartzScope}${gx1}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${quartzScope}${g1}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${quartzScope}${gy1}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${quartzScope}${g2}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${quartzScope}${gx2}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${quartzScope}${g2}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${quartzScope}${gy2}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${quartzScope}${gx3}`, {
	vars: {
		[varBsGutterX]: '2rem',
	},
})

globalStyle(`${quartzScope}${gy3}`, {
	vars: {
		[varBsGutterY]: '2rem',
	},
})

globalStyle(`${quartzScope}${gx4}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${quartzScope}${gy4}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${quartzScope}${g5}`, {
	vars: {
		[varBsGutterX]: '6rem',
	},
})

globalStyle(`${quartzScope}${gx5}`, {
	vars: {
		[varBsGutterX]: '6rem',
	},
})

globalStyle(`${quartzScope}${g5}`, {
	vars: {
		[varBsGutterY]: '6rem',
	},
})

globalStyle(`${quartzScope}${gy5}`, {
	vars: {
		[varBsGutterY]: '6rem',
	},
})

globalStyle(`${quartzScope}${colSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSmAuto} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm1} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm2} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm3} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm4} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm5} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsSm6} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colSm12}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${colMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMdAuto} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd1} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd3} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd4} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd5} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsMd6} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colMd12}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${colLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLgAuto} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg1} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg2} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg3} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg4} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg5} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsLg6} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colLg12}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${colXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXlAuto} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl1} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl2} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl3} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl4} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl5} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXl6} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXl12}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${colXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxlAuto} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl1} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl2} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl3} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl4} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl5} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${quartzScope}${rowColsXxl6} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${quartzScope}${colXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${colXxl12}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${quartzScope}${offsetXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${quartzScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '2rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${gyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '6rem',
			},
		},
	},
})

globalStyle(`${quartzScope}${captionTop}`, {
	captionSide: 'top',
})

globalStyle(`${quartzScope}${colFormLabel}`, {
	paddingTop: 'calc(0.75rem + 1px)',
	paddingBottom: 'calc(0.75rem + 1px)',
	marginBottom: '0',
	fontSize: 'inherit',
	lineHeight: '1.5',
})

globalStyle(`${quartzScope}${colFormLabelLg}`, {
	paddingTop: 'calc(0.5rem + 1px)',
	paddingBottom: 'calc(0.5rem + 1px)',
	fontSize: '1.25rem',
})

globalStyle(`${quartzScope}${colFormLabelSm}`, {
	paddingTop: 'calc(0.25rem + 1px)',
	paddingBottom: 'calc(0.25rem + 1px)',
	fontSize: '0.875rem',
})

globalStyle(`${quartzScope}${formControlPlaintext}`, {
	display: 'block',
	width: '100%',
	padding: '0.75rem 0',
	marginBottom: '0',
	lineHeight: '1.5',
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	border: 'solid transparent',
	borderWidth: '1px 0',
})

globalStyle(`${quartzScope}${formControlPlaintext}:focus`, {
	outline: '0',
})

globalStyle(`${quartzScope}${formControlColor}`, {
	width: '3rem',
	height: 'calc(1.5em + 1.5rem + calc(1px * 2))',
	padding: '0.75rem',
})

globalStyle(`${quartzScope}${formControlColor}:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${quartzScope}${formControlColor}::-moz-color-swatch`, {
	border: '0 !important',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formControlColor}::-webkit-color-swatch`, {
	border: '0 !important',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formCheckReverse}`, {
	paddingRight: '1.5em',
	paddingLeft: '0',
	textAlign: 'right',
})

globalStyle(`${quartzScope}${formSwitch}${formCheckReverse}`, {
	paddingRight: '2.5em',
	paddingLeft: '0',
})

globalStyle(`${quartzScope}${formCheckInline}`, {
	display: 'inline-block',
	marginRight: '1rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}`, {
	height: 'calc(3.5rem + calc(1px * 2))',
	minHeight: 'calc(3.5rem + calc(1px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}`, {
	padding: '1rem 1.5rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext} ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControlPlaintext} ~ ${quartzScope}${elLabel}`, {
	borderWidth: '1px 0',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControlColor}:valid`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControlColor}:invalid`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${quartzScope}${collapsing}${collapseHorizontal}`, {
	width: '0',
	height: 'auto',
	transition: 'width 0.35s ease',
})

globalStyle(`${quartzScope}${collapsing}${collapseHorizontal}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${container}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerSm}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerMd}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerLg}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerXl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${navbar} > ${quartzScope}${containerXxl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${quartzScope}${carousel}${pointerEvent}`, {
	touchAction: 'pan-y',
})

globalStyle(`${quartzScope}${placeholder}`, {
	display: 'inline-block',
	minHeight: '1em',
	verticalAlign: 'middle',
	cursor: 'wait',
	backgroundColor: 'currentcolor',
	opacity: '0.5',
})

globalStyle(`${quartzScope}${placeholderXs}`, {
	minHeight: '0.6em',
})

globalStyle(`${quartzScope}${placeholderSm}`, {
	minHeight: '0.8em',
})

globalStyle(`${quartzScope}${placeholderLg}`, {
	minHeight: '1.2em',
})

globalStyle(`${quartzScope}${placeholderGlow} ${quartzScope}${placeholder}`, {
	animation: 'placeholder-glow 2s ease-in-out infinite',
})

globalStyle(`${quartzScope}${placeholderWave}`, {
	WebkitMaskImage: 'linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%)',
	maskImage: 'linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%)',
	WebkitMaskSize: '200% 100%',
	maskSize: '200% 100%',
	animation: 'placeholder-wave 2s linear infinite',
})

globalStyle(`${quartzScope}${clearfix}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${quartzScope}${textBgPrimary}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgSecondary}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgSuccess}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgInfo}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgWarning}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgDanger}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgLight}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${textBgDark}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkPrimary}`, {
	color: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkPrimary}:hover`, {
	color: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkPrimary}:focus`, {
	color: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(186, 40, 105, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSecondary}`, {
	color: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSecondary}:hover`, {
	color: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSecondary}:focus`, {
	color: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSuccess}`, {
	color: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSuccess}:hover`, {
	color: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkSuccess}:focus`, {
	color: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(52, 172, 134, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkInfo}`, {
	color: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkInfo}:hover`, {
	color: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkInfo}:focus`, {
	color: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(46, 162, 201, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkWarning}`, {
	color: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkWarning}:hover`, {
	color: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkWarning}:focus`, {
	color: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(204, 154, 6, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDanger}`, {
	color: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDanger}:hover`, {
	color: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDanger}:focus`, {
	color: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(202, 101, 16, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkLight}`, {
	color: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkLight}:hover`, {
	color: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkLight}:focus`, {
	color: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(237, 237, 237, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDark}`, {
	color: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDark}:hover`, {
	color: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkDark}:focus`, {
	color: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(26, 30, 33, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkBodyEmphasis}`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkBodyEmphasis}:hover`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.75')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
})

globalStyle(`${quartzScope}${linkBodyEmphasis}:focus`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.75')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
})

globalStyle(`${quartzScope}${focusRing}:focus`, {
	outline: '0',
	boxShadow: `var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) ${varBsFocusRingWidth} ${varBsFocusRingColor}`,
})

globalStyle(`${quartzScope}${iconLink}`, {
	display: 'inline-flex',
	gap: '0.375rem',
	alignItems: 'center',
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.5')})`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.5')})`,
	textUnderlineOffset: '0.25em',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
})

globalStyle(`${quartzScope}${iconLink} > ${quartzScope}${bi}`, {
	flexShrink: '0',
	width: '1em',
	height: '1em',
	fill: 'currentcolor',
	transition: '0.2s ease-in-out transform',
})

globalStyle(`${quartzScope}${iconLink} > ${quartzScope}${bi}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${iconLinkHover}:hover > ${quartzScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${quartzScope}${iconLinkHover}:focus-visible > ${quartzScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${quartzScope}${ratio}`, {
	position: 'relative',
	width: '100%',
})

globalStyle(`${quartzScope}${ratio}::before`, {
	display: 'block',
	paddingTop: varBsAspectRatio,
	content: '""',
})

globalStyle(`${quartzScope}${ratio} > *`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
})

globalStyle(`${quartzScope}${ratio1x1}`, {
	vars: {
		[varBsAspectRatio]: '100%',
	},
})

globalStyle(`${quartzScope}${ratio4x3}`, {
	vars: {
		[varBsAspectRatio]: '75%',
	},
})

globalStyle(`${quartzScope}${ratio16x9}`, {
	vars: {
		[varBsAspectRatio]: '56.25%',
	},
})

globalStyle(`${quartzScope}${ratio21x9}`, {
	vars: {
		[varBsAspectRatio]: '42.8571428571%',
	},
})

globalStyle(`${quartzScope}${fixedTop}`, {
	position: 'fixed',
	top: '0',
	right: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${quartzScope}${fixedBottom}`, {
	position: 'fixed',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${quartzScope}${stickyTop}`, {
	position: 'sticky',
	top: '0',
	zIndex: '1020',
})

globalStyle(`${quartzScope}${stickyBottom}`, {
	position: 'sticky',
	bottom: '0',
	zIndex: '1020',
})

globalStyle(`${quartzScope}${stickySmTop}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickySmBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyMdTop}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyMdBottom}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyLgTop}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyLgBottom}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyXlBottom}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyXxlTop}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${stickyXxlBottom}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${quartzScope}${hstack}`, {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	alignSelf: 'stretch',
})

globalStyle(`${quartzScope}${vstack}`, {
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	alignSelf: 'stretch',
})

globalStyle(`${quartzScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within)`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${quartzScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within):not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${quartzScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within) *`, {
	overflow: 'hidden !important',
})

globalStyle(`${quartzScope}${stretchedLink}::after`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1',
	content: '""',
})

globalStyle(`${quartzScope}${textTruncate}`, {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

globalStyle(`${quartzScope}${vr}`, {
	display: 'inline-block',
	alignSelf: 'stretch',
	width: varBsBorderWidth,
	minHeight: '1em',
	backgroundColor: 'currentcolor',
	opacity: '0.25',
})

globalStyle(`${quartzScope}${alignBaseline}`, {
	verticalAlign: 'baseline !important',
})

globalStyle(`${quartzScope}${alignMiddle}`, {
	verticalAlign: 'middle !important',
})

globalStyle(`${quartzScope}${alignBottom}`, {
	verticalAlign: 'bottom !important',
})

globalStyle(`${quartzScope}${alignTextBottom}`, {
	verticalAlign: 'text-bottom !important',
})

globalStyle(`${quartzScope}${alignTextTop}`, {
	verticalAlign: 'text-top !important',
})

globalStyle(`${quartzScope}${floatStart}`, {
	float: 'left !important',
})

globalStyle(`${quartzScope}${floatEnd}`, {
	float: 'right !important',
})

globalStyle(`${quartzScope}${floatNone}`, {
	float: 'none !important',
})

globalStyle(`${quartzScope}${objectFitContain}`, {
	OObjectFit: 'contain !important',
	objectFit: 'contain !important',
})

globalStyle(`${quartzScope}${objectFitCover}`, {
	OObjectFit: 'cover !important',
	objectFit: 'cover !important',
})

globalStyle(`${quartzScope}${objectFitFill}`, {
	OObjectFit: 'fill !important',
	objectFit: 'fill !important',
})

globalStyle(`${quartzScope}${objectFitScale}`, {
	OObjectFit: 'scale-down !important',
	objectFit: 'scale-down !important',
})

globalStyle(`${quartzScope}${objectFitNone}`, {
	OObjectFit: 'none !important',
	objectFit: 'none !important',
})

globalStyle(`${quartzScope}${opacity0}`, {
	opacity: '0 !important',
})

globalStyle(`${quartzScope}${opacity25}`, {
	opacity: '0.25 !important',
})

globalStyle(`${quartzScope}${opacity50}`, {
	opacity: '0.5 !important',
})

globalStyle(`${quartzScope}${opacity75}`, {
	opacity: '0.75 !important',
})

globalStyle(`${quartzScope}${opacity100}`, {
	opacity: '1 !important',
})

globalStyle(`${quartzScope}${overflowAuto}`, {
	overflow: 'auto !important',
})

globalStyle(`${quartzScope}${overflowHidden}`, {
	overflow: 'hidden !important',
})

globalStyle(`${quartzScope}${overflowVisible}`, {
	overflow: 'visible !important',
})

globalStyle(`${quartzScope}${overflowScroll}`, {
	overflow: 'scroll !important',
})

globalStyle(`${quartzScope}${overflowXAuto}`, {
	overflowX: 'auto !important',
})

globalStyle(`${quartzScope}${overflowXVisible}`, {
	overflowX: 'visible !important',
})

globalStyle(`${quartzScope}${overflowXScroll}`, {
	overflowX: 'scroll !important',
})

globalStyle(`${quartzScope}${overflowYAuto}`, {
	overflowY: 'auto !important',
})

globalStyle(`${quartzScope}${overflowYHidden}`, {
	overflowY: 'hidden !important',
})

globalStyle(`${quartzScope}${overflowYVisible}`, {
	overflowY: 'visible !important',
})

globalStyle(`${quartzScope}${overflowYScroll}`, {
	overflowY: 'scroll !important',
})

globalStyle(`${quartzScope}${dInline}`, {
	display: 'inline !important',
})

globalStyle(`${quartzScope}${dGrid}`, {
	display: 'grid !important',
})

globalStyle(`${quartzScope}${dInlineGrid}`, {
	display: 'inline-grid !important',
})

globalStyle(`${quartzScope}${dTable}`, {
	display: 'table !important',
})

globalStyle(`${quartzScope}${dTableRow}`, {
	display: 'table-row !important',
})

globalStyle(`${quartzScope}${dTableCell}`, {
	display: 'table-cell !important',
})

globalStyle(`${quartzScope}${shadow}`, {
	boxShadow: `${varBsBoxShadow} !important`,
})

globalStyle(`${quartzScope}${shadowSm}`, {
	boxShadow: `${varBsBoxShadowSm} !important`,
})

globalStyle(`${quartzScope}${shadowLg}`, {
	boxShadow: `${varBsBoxShadowLg} !important`,
})

globalStyle(`${quartzScope}${shadowNone}`, {
	boxShadow: 'none !important',
})

globalStyle(`${quartzScope}${focusRingPrimary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsPrimaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingSecondary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSecondaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingSuccess}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSuccessRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingInfo}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsInfoRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingWarning}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsWarningRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingDanger}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDangerRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingLight}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsLightRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${focusRingDark}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDarkRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${quartzScope}${positionStatic}`, {
	position: 'static !important',
})

globalStyle(`${quartzScope}${positionFixed}`, {
	position: 'fixed !important',
})

globalStyle(`${quartzScope}${positionSticky}`, {
	position: 'sticky !important',
})

globalStyle(`${quartzScope}${top50}`, {
	top: '50% !important',
})

globalStyle(`${quartzScope}${top100}`, {
	top: '100% !important',
})

globalStyle(`${quartzScope}${bottom0}`, {
	bottom: '0 !important',
})

globalStyle(`${quartzScope}${bottom50}`, {
	bottom: '50% !important',
})

globalStyle(`${quartzScope}${bottom100}`, {
	bottom: '100% !important',
})

globalStyle(`${quartzScope}${start0}`, {
	left: '0 !important',
})

globalStyle(`${quartzScope}${start50}`, {
	left: '50% !important',
})

globalStyle(`${quartzScope}${start100}`, {
	left: '100% !important',
})

globalStyle(`${quartzScope}${end50}`, {
	right: '50% !important',
})

globalStyle(`${quartzScope}${end100}`, {
	right: '100% !important',
})

globalStyle(`${quartzScope}${translateMiddle}`, {
	transform: 'translate(-50%, -50%) !important',
})

globalStyle(`${quartzScope}${translateMiddleX}`, {
	transform: 'translateX(-50%) !important',
})

globalStyle(`${quartzScope}${translateMiddleY}`, {
	transform: 'translateY(-50%) !important',
})

globalStyle(`${quartzScope}${border0}`, {
	border: '0 !important',
})

globalStyle(`${quartzScope}${borderTop}`, {
	borderTop: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${borderTop0}`, {
	borderTop: '0 !important',
})

globalStyle(`${quartzScope}${borderEnd}`, {
	borderRight: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${borderEnd0}`, {
	borderRight: '0 !important',
})

globalStyle(`${quartzScope}${borderBottom0}`, {
	borderBottom: '0 !important',
})

globalStyle(`${quartzScope}${borderStart}`, {
	borderLeft: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${quartzScope}${borderStart0}`, {
	borderLeft: '0 !important',
})

globalStyle(`${quartzScope}${borderPrimary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsPrimaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderSecondary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSecondaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderSuccess}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSuccessRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderInfo}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsInfoRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderWarning}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWarningRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderDanger}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDangerRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderLight}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsLightRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderBlack}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsBlackRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderWhite}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWhiteRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${quartzScope}${borderPrimarySubtle}`, {
	borderColor: `${varBsPrimaryBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderSecondarySubtle}`, {
	borderColor: `${varBsSecondaryBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderSuccessSubtle}`, {
	borderColor: `${varBsSuccessBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderInfoSubtle}`, {
	borderColor: `${varBsInfoBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderWarningSubtle}`, {
	borderColor: `${varBsWarningBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderDangerSubtle}`, {
	borderColor: `${varBsDangerBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderLightSubtle}`, {
	borderColor: `${varBsLightBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${borderDarkSubtle}`, {
	borderColor: `${varBsDarkBorderSubtle} !important`,
})

globalStyle(`${quartzScope}${border1}`, {
	borderWidth: '1px !important',
})

globalStyle(`${quartzScope}${border2}`, {
	borderWidth: '2px !important',
})

globalStyle(`${quartzScope}${border3}`, {
	borderWidth: '3px !important',
})

globalStyle(`${quartzScope}${border4}`, {
	borderWidth: '4px !important',
})

globalStyle(`${quartzScope}${border5}`, {
	borderWidth: '5px !important',
})

globalStyle(`${quartzScope}${borderOpacity10}`, {
	vars: {
		[varBsBorderOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${borderOpacity25}`, {
	vars: {
		[varBsBorderOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${borderOpacity50}`, {
	vars: {
		[varBsBorderOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${borderOpacity75}`, {
	vars: {
		[varBsBorderOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${borderOpacity100}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${wAuto}`, {
	width: 'auto !important',
})

globalStyle(`${quartzScope}${mw100}`, {
	maxWidth: '100% !important',
})

globalStyle(`${quartzScope}${vw100}`, {
	width: '100vw !important',
})

globalStyle(`${quartzScope}${minVw100}`, {
	minWidth: '100vw !important',
})

globalStyle(`${quartzScope}${h25}`, {
	height: '25% !important',
})

globalStyle(`${quartzScope}${h50}`, {
	height: '50% !important',
})

globalStyle(`${quartzScope}${h75}`, {
	height: '75% !important',
})

globalStyle(`${quartzScope}${h100}`, {
	height: '100% !important',
})

globalStyle(`${quartzScope}${hAuto}`, {
	height: 'auto !important',
})

globalStyle(`${quartzScope}${mh100}`, {
	maxHeight: '100% !important',
})

globalStyle(`${quartzScope}${vh100}`, {
	height: '100vh !important',
})

globalStyle(`${quartzScope}${minVh100}`, {
	minHeight: '100vh !important',
})

globalStyle(`${quartzScope}${flexFill}`, {
	flex: '1 1 auto !important',
})

globalStyle(`${quartzScope}${flexRowReverse}`, {
	flexDirection: 'row-reverse !important',
})

globalStyle(`${quartzScope}${flexColumnReverse}`, {
	flexDirection: 'column-reverse !important',
})

globalStyle(`${quartzScope}${flexGrow0}`, {
	flexGrow: '0 !important',
})

globalStyle(`${quartzScope}${flexGrow1}`, {
	flexGrow: '1 !important',
})

globalStyle(`${quartzScope}${flexShrink0}`, {
	flexShrink: '0 !important',
})

globalStyle(`${quartzScope}${flexShrink1}`, {
	flexShrink: '1 !important',
})

globalStyle(`${quartzScope}${flexNowrap}`, {
	flexWrap: 'nowrap !important',
})

globalStyle(`${quartzScope}${flexWrapReverse}`, {
	flexWrap: 'wrap-reverse !important',
})

globalStyle(`${quartzScope}${justifyContentAround}`, {
	justifyContent: 'space-around !important',
})

globalStyle(`${quartzScope}${justifyContentEvenly}`, {
	justifyContent: 'space-evenly !important',
})

globalStyle(`${quartzScope}${alignItemsStart}`, {
	alignItems: 'flex-start !important',
})

globalStyle(`${quartzScope}${alignItemsEnd}`, {
	alignItems: 'flex-end !important',
})

globalStyle(`${quartzScope}${alignItemsBaseline}`, {
	alignItems: 'baseline !important',
})

globalStyle(`${quartzScope}${alignContentStart}`, {
	alignContent: 'flex-start !important',
})

globalStyle(`${quartzScope}${alignContentEnd}`, {
	alignContent: 'flex-end !important',
})

globalStyle(`${quartzScope}${alignContentCenter}`, {
	alignContent: 'center !important',
})

globalStyle(`${quartzScope}${alignContentBetween}`, {
	alignContent: 'space-between !important',
})

globalStyle(`${quartzScope}${alignContentAround}`, {
	alignContent: 'space-around !important',
})

globalStyle(`${quartzScope}${alignContentStretch}`, {
	alignContent: 'stretch !important',
})

globalStyle(`${quartzScope}${alignSelfAuto}`, {
	alignSelf: 'auto !important',
})

globalStyle(`${quartzScope}${alignSelfEnd}`, {
	alignSelf: 'flex-end !important',
})

globalStyle(`${quartzScope}${alignSelfCenter}`, {
	alignSelf: 'center !important',
})

globalStyle(`${quartzScope}${alignSelfBaseline}`, {
	alignSelf: 'baseline !important',
})

globalStyle(`${quartzScope}${alignSelfStretch}`, {
	alignSelf: 'stretch !important',
})

globalStyle(`${quartzScope}${orderFirst}`, {
	order: '-1 !important',
})

globalStyle(`${quartzScope}${order0}`, {
	order: '0 !important',
})

globalStyle(`${quartzScope}${order1}`, {
	order: '1 !important',
})

globalStyle(`${quartzScope}${order2}`, {
	order: '2 !important',
})

globalStyle(`${quartzScope}${order3}`, {
	order: '3 !important',
})

globalStyle(`${quartzScope}${order4}`, {
	order: '4 !important',
})

globalStyle(`${quartzScope}${order5}`, {
	order: '5 !important',
})

globalStyle(`${quartzScope}${orderLast}`, {
	order: '6 !important',
})

globalStyle(`${quartzScope}${m0}`, {
	margin: '0 !important',
})

globalStyle(`${quartzScope}${m1}`, {
	margin: '0.5rem !important',
})

globalStyle(`${quartzScope}${m2}`, {
	margin: '1rem !important',
})

globalStyle(`${quartzScope}${m3}`, {
	margin: '2rem !important',
})

globalStyle(`${quartzScope}${m4}`, {
	margin: '3rem !important',
})

globalStyle(`${quartzScope}${m5}`, {
	margin: '6rem !important',
})

globalStyle(`${quartzScope}${mAuto}`, {
	margin: 'auto !important',
})

globalStyle(`${quartzScope}${mx0}`, {
	marginRight: '0 !important',
	marginLeft: '0 !important',
})

globalStyle(`${quartzScope}${mx1}`, {
	marginRight: '0.5rem !important',
	marginLeft: '0.5rem !important',
})

globalStyle(`${quartzScope}${mx2}`, {
	marginRight: '1rem !important',
	marginLeft: '1rem !important',
})

globalStyle(`${quartzScope}${mx3}`, {
	marginRight: '2rem !important',
	marginLeft: '2rem !important',
})

globalStyle(`${quartzScope}${mx4}`, {
	marginRight: '3rem !important',
	marginLeft: '3rem !important',
})

globalStyle(`${quartzScope}${mx5}`, {
	marginRight: '6rem !important',
	marginLeft: '6rem !important',
})

globalStyle(`${quartzScope}${mxAuto}`, {
	marginRight: 'auto !important',
	marginLeft: 'auto !important',
})

globalStyle(`${quartzScope}${my0}`, {
	marginTop: '0 !important',
	marginBottom: '0 !important',
})

globalStyle(`${quartzScope}${my1}`, {
	marginTop: '0.5rem !important',
	marginBottom: '0.5rem !important',
})

globalStyle(`${quartzScope}${my4}`, {
	marginTop: '3rem !important',
	marginBottom: '3rem !important',
})

globalStyle(`${quartzScope}${my5}`, {
	marginTop: '6rem !important',
	marginBottom: '6rem !important',
})

globalStyle(`${quartzScope}${myAuto}`, {
	marginTop: 'auto !important',
	marginBottom: 'auto !important',
})

globalStyle(`${quartzScope}${mt0}`, {
	marginTop: '0 !important',
})

globalStyle(`${quartzScope}${mt1}`, {
	marginTop: '0.5rem !important',
})

globalStyle(`${quartzScope}${mt2}`, {
	marginTop: '1rem !important',
})

globalStyle(`${quartzScope}${mt4}`, {
	marginTop: '3rem !important',
})

globalStyle(`${quartzScope}${mtAuto}`, {
	marginTop: 'auto !important',
})

globalStyle(`${quartzScope}${me0}`, {
	marginRight: '0 !important',
})

globalStyle(`${quartzScope}${me1}`, {
	marginRight: '0.5rem !important',
})

globalStyle(`${quartzScope}${me3}`, {
	marginRight: '2rem !important',
})

globalStyle(`${quartzScope}${me4}`, {
	marginRight: '3rem !important',
})

globalStyle(`${quartzScope}${me5}`, {
	marginRight: '6rem !important',
})

globalStyle(`${quartzScope}${mb1}`, {
	marginBottom: '0.5rem !important',
})

globalStyle(`${quartzScope}${mbAuto}`, {
	marginBottom: 'auto !important',
})

globalStyle(`${quartzScope}${ms0}`, {
	marginLeft: '0 !important',
})

globalStyle(`${quartzScope}${ms1}`, {
	marginLeft: '0.5rem !important',
})

globalStyle(`${quartzScope}${ms2}`, {
	marginLeft: '1rem !important',
})

globalStyle(`${quartzScope}${ms4}`, {
	marginLeft: '3rem !important',
})

globalStyle(`${quartzScope}${ms5}`, {
	marginLeft: '6rem !important',
})

globalStyle(`${quartzScope}${msAuto}`, {
	marginLeft: 'auto !important',
})

globalStyle(`${quartzScope}${p0}`, {
	padding: '0 !important',
})

globalStyle(`${quartzScope}${p1}`, {
	padding: '0.5rem !important',
})

globalStyle(`${quartzScope}${p2}`, {
	padding: '1rem !important',
})

globalStyle(`${quartzScope}${p3}`, {
	padding: '2rem !important',
})

globalStyle(`${quartzScope}${p4}`, {
	padding: '3rem !important',
})

globalStyle(`${quartzScope}${px0}`, {
	paddingRight: '0 !important',
	paddingLeft: '0 !important',
})

globalStyle(`${quartzScope}${px1}`, {
	paddingRight: '0.5rem !important',
	paddingLeft: '0.5rem !important',
})

globalStyle(`${quartzScope}${px4}`, {
	paddingRight: '3rem !important',
	paddingLeft: '3rem !important',
})

globalStyle(`${quartzScope}${px5}`, {
	paddingRight: '6rem !important',
	paddingLeft: '6rem !important',
})

globalStyle(`${quartzScope}${py0}`, {
	paddingTop: '0 !important',
	paddingBottom: '0 !important',
})

globalStyle(`${quartzScope}${py1}`, {
	paddingTop: '0.5rem !important',
	paddingBottom: '0.5rem !important',
})

globalStyle(`${quartzScope}${py2}`, {
	paddingTop: '1rem !important',
	paddingBottom: '1rem !important',
})

globalStyle(`${quartzScope}${py4}`, {
	paddingTop: '3rem !important',
	paddingBottom: '3rem !important',
})

globalStyle(`${quartzScope}${py5}`, {
	paddingTop: '6rem !important',
	paddingBottom: '6rem !important',
})

globalStyle(`${quartzScope}${pt0}`, {
	paddingTop: '0 !important',
})

globalStyle(`${quartzScope}${pt1}`, {
	paddingTop: '0.5rem !important',
})

globalStyle(`${quartzScope}${pt2}`, {
	paddingTop: '1rem !important',
})

globalStyle(`${quartzScope}${pt5}`, {
	paddingTop: '6rem !important',
})

globalStyle(`${quartzScope}${pe0}`, {
	paddingRight: '0 !important',
})

globalStyle(`${quartzScope}${pe1}`, {
	paddingRight: '0.5rem !important',
})

globalStyle(`${quartzScope}${pe2}`, {
	paddingRight: '1rem !important',
})

globalStyle(`${quartzScope}${pe3}`, {
	paddingRight: '2rem !important',
})

globalStyle(`${quartzScope}${pe4}`, {
	paddingRight: '3rem !important',
})

globalStyle(`${quartzScope}${pe5}`, {
	paddingRight: '6rem !important',
})

globalStyle(`${quartzScope}${pb0}`, {
	paddingBottom: '0 !important',
})

globalStyle(`${quartzScope}${pb1}`, {
	paddingBottom: '0.5rem !important',
})

globalStyle(`${quartzScope}${pb4}`, {
	paddingBottom: '3rem !important',
})

globalStyle(`${quartzScope}${ps0}`, {
	paddingLeft: '0 !important',
})

globalStyle(`${quartzScope}${ps1}`, {
	paddingLeft: '0.5rem !important',
})

globalStyle(`${quartzScope}${ps2}`, {
	paddingLeft: '1rem !important',
})

globalStyle(`${quartzScope}${ps4}`, {
	paddingLeft: '3rem !important',
})

globalStyle(`${quartzScope}${ps5}`, {
	paddingLeft: '6rem !important',
})

globalStyle(`${quartzScope}${gap0}`, {
	gap: '0 !important',
})

globalStyle(`${quartzScope}${gap1}`, {
	gap: '0.5rem !important',
})

globalStyle(`${quartzScope}${gap2}`, {
	gap: '1rem !important',
})

globalStyle(`${quartzScope}${gap3}`, {
	gap: '2rem !important',
})

globalStyle(`${quartzScope}${gap4}`, {
	gap: '3rem !important',
})

globalStyle(`${quartzScope}${gap5}`, {
	gap: '6rem !important',
})

globalStyle(`${quartzScope}${rowGap0}`, {
	rowGap: '0 !important',
})

globalStyle(`${quartzScope}${rowGap1}`, {
	rowGap: '0.5rem !important',
})

globalStyle(`${quartzScope}${rowGap2}`, {
	rowGap: '1rem !important',
})

globalStyle(`${quartzScope}${rowGap3}`, {
	rowGap: '2rem !important',
})

globalStyle(`${quartzScope}${rowGap4}`, {
	rowGap: '3rem !important',
})

globalStyle(`${quartzScope}${rowGap5}`, {
	rowGap: '6rem !important',
})

globalStyle(`${quartzScope}${columnGap0}`, {
	MozColumnGap: '0 !important',
	columnGap: '0 !important',
})

globalStyle(`${quartzScope}${columnGap1}`, {
	MozColumnGap: '0.5rem !important',
	columnGap: '0.5rem !important',
})

globalStyle(`${quartzScope}${columnGap2}`, {
	MozColumnGap: '1rem !important',
	columnGap: '1rem !important',
})

globalStyle(`${quartzScope}${columnGap3}`, {
	MozColumnGap: '2rem !important',
	columnGap: '2rem !important',
})

globalStyle(`${quartzScope}${columnGap4}`, {
	MozColumnGap: '3rem !important',
	columnGap: '3rem !important',
})

globalStyle(`${quartzScope}${columnGap5}`, {
	MozColumnGap: '6rem !important',
	columnGap: '6rem !important',
})

globalStyle(`${quartzScope}${fontMonospace}`, {
	fontFamily: `${varBsFontMonospace} !important`,
})

globalStyle(`${quartzScope}${fs1}`, {
	fontSize: 'calc(1.375rem + 1.5vw) !important',
})

globalStyle(`${quartzScope}${fs2}`, {
	fontSize: 'calc(1.325rem + 0.9vw) !important',
})

globalStyle(`${quartzScope}${fs3}`, {
	fontSize: 'calc(1.3rem + 0.6vw) !important',
})

globalStyle(`${quartzScope}${fs5}`, {
	fontSize: '1.25rem !important',
})

globalStyle(`${quartzScope}${fs6}`, {
	fontSize: '1rem !important',
})

globalStyle(`${quartzScope}${fstItalic}`, {
	fontStyle: 'italic !important',
})

globalStyle(`${quartzScope}${fstNormal}`, {
	fontStyle: 'normal !important',
})

globalStyle(`${quartzScope}${fwLighter}`, {
	fontWeight: 'lighter !important',
})

globalStyle(`${quartzScope}${fwLight}`, {
	fontWeight: '300 !important',
})

globalStyle(`${quartzScope}${fwNormal}`, {
	fontWeight: '400 !important',
})

globalStyle(`${quartzScope}${fwMedium}`, {
	fontWeight: '500 !important',
})

globalStyle(`${quartzScope}${fwSemibold}`, {
	fontWeight: '600 !important',
})

globalStyle(`${quartzScope}${fwBolder}`, {
	fontWeight: 'bolder !important',
})

globalStyle(`${quartzScope}${lh1}`, {
	lineHeight: '1 !important',
})

globalStyle(`${quartzScope}${lhSm}`, {
	lineHeight: '1.25 !important',
})

globalStyle(`${quartzScope}${lhBase}`, {
	lineHeight: '1.5 !important',
})

globalStyle(`${quartzScope}${lhLg}`, {
	lineHeight: '2 !important',
})

globalStyle(`${quartzScope}${textStart}`, {
	textAlign: 'left !important',
})

globalStyle(`${quartzScope}${textEnd}`, {
	textAlign: 'right !important',
})

globalStyle(`${quartzScope}${textDecorationNone}`, {
	textDecoration: 'none !important',
})

globalStyle(`${quartzScope}${textDecorationUnderline}`, {
	textDecoration: 'underline !important',
})

globalStyle(`${quartzScope}${textDecorationLineThrough}`, {
	textDecoration: 'line-through !important',
})

globalStyle(`${quartzScope}${textLowercase}`, {
	textTransform: 'lowercase !important',
})

globalStyle(`${quartzScope}${textUppercase}`, {
	textTransform: 'uppercase !important',
})

globalStyle(`${quartzScope}${textCapitalize}`, {
	textTransform: 'capitalize !important',
})

globalStyle(`${quartzScope}${textWrap}`, {
	whiteSpace: 'normal !important',
})

globalStyle(`${quartzScope}${textNowrap}`, {
	whiteSpace: 'nowrap !important',
})

globalStyle(`${quartzScope}${textBreak}`, {
	wordWrap: 'break-word !important',
	wordBreak: 'break-word !important',
})

globalStyle(`${quartzScope}${textBlack}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBlackRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textBody}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBodyColorRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${quartzScope}${textBlack50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(0, 0, 0, 0.5) !important',
})

globalStyle(`${quartzScope}${textWhite50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(255, 255, 255, 0.5) !important',
})

globalStyle(`${quartzScope}${textBodySecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${quartzScope}${textBodyTertiary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsTertiaryColor} !important`,
})

globalStyle(`${quartzScope}${textBodyEmphasis}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsEmphasisColor} !important`,
})

globalStyle(`${quartzScope}${textReset}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'inherit !important',
})

globalStyle(`${quartzScope}${textOpacity25}`, {
	vars: {
		[varBsTextOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${textOpacity50}`, {
	vars: {
		[varBsTextOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${textOpacity75}`, {
	vars: {
		[varBsTextOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${textOpacity100}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${textPrimaryEmphasis}`, {
	color: `${varBsPrimaryTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textSecondaryEmphasis}`, {
	color: `${varBsSecondaryTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textSuccessEmphasis}`, {
	color: `${varBsSuccessTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textInfoEmphasis}`, {
	color: `${varBsInfoTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textWarningEmphasis}`, {
	color: `${varBsWarningTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textDangerEmphasis}`, {
	color: `${varBsDangerTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textLightEmphasis}`, {
	color: `${varBsLightTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${textDarkEmphasis}`, {
	color: `${varBsDarkTextEmphasis} !important`,
})

globalStyle(`${quartzScope}${linkOpacity10}`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${linkOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${linkOpacity25}`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${linkOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${linkOpacity50}`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${linkOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${linkOpacity75}`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${linkOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${linkOpacity100}`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${linkOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${linkOffset1}`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${quartzScope}${linkOffset1Hover}:hover`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${quartzScope}${linkOffset2}`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${quartzScope}${linkOffset2Hover}:hover`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${quartzScope}${linkOffset3}`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${quartzScope}${linkOffset3Hover}:hover`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${quartzScope}${linkUnderlinePrimary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineSecondary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineSuccess}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineInfo}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineWarning}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineDanger}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineLight}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineDark}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${quartzScope}${linkUnderline}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${quartzScope}${linkUnderlineOpacity0}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity0Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity10}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity25}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity50}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity75}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity100}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${linkUnderlineOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${bgBlack}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBlackRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgWhite}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWhiteRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgBody}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBodyBgRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgTransparent}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: 'transparent !important',
})

globalStyle(`${quartzScope}${bgBodySecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-secondary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgBodyTertiary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-tertiary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${quartzScope}${bgOpacity10}`, {
	vars: {
		[varBsBgOpacity]: '0.1',
	},
})

globalStyle(`${quartzScope}${bgOpacity25}`, {
	vars: {
		[varBsBgOpacity]: '0.25',
	},
})

globalStyle(`${quartzScope}${bgOpacity50}`, {
	vars: {
		[varBsBgOpacity]: '0.5',
	},
})

globalStyle(`${quartzScope}${bgOpacity75}`, {
	vars: {
		[varBsBgOpacity]: '0.75',
	},
})

globalStyle(`${quartzScope}${bgOpacity100}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
})

globalStyle(`${quartzScope}${bgPrimarySubtle}`, {
	backgroundColor: `${varBsPrimaryBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgSecondarySubtle}`, {
	backgroundColor: `${varBsSecondaryBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgSuccessSubtle}`, {
	backgroundColor: `${varBsSuccessBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgInfoSubtle}`, {
	backgroundColor: `${varBsInfoBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgWarningSubtle}`, {
	backgroundColor: `${varBsWarningBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgDangerSubtle}`, {
	backgroundColor: `${varBsDangerBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgLightSubtle}`, {
	backgroundColor: `${varBsLightBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgDarkSubtle}`, {
	backgroundColor: `${varBsDarkBgSubtle} !important`,
})

globalStyle(`${quartzScope}${bgGradient}`, {
	backgroundImage: `${varBsGradient} !important`,
})

globalStyle(`${quartzScope}${userSelectAll}`, {
	WebkitUserSelect: 'all !important',
	MozUserSelect: 'all !important',
	userSelect: 'all !important',
})

globalStyle(`${quartzScope}${userSelectAuto}`, {
	WebkitUserSelect: 'auto !important',
	MozUserSelect: 'auto !important',
	userSelect: 'auto !important',
})

globalStyle(`${quartzScope}${userSelectNone}`, {
	WebkitUserSelect: 'none !important',
	MozUserSelect: 'none !important',
	userSelect: 'none !important',
})

globalStyle(`${quartzScope}${peNone}`, {
	pointerEvents: 'none !important',
})

globalStyle(`${quartzScope}${peAuto}`, {
	pointerEvents: 'auto !important',
})

globalStyle(`${quartzScope}${rounded0}`, {
	borderRadius: '0 !important',
})

globalStyle(`${quartzScope}${rounded1}`, {
	borderRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${rounded2}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${rounded3}`, {
	borderRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${rounded4}`, {
	borderRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${rounded5}`, {
	borderRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedCircle}`, {
	borderRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedTop}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedTop0}`, {
	borderTopLeftRadius: '0 !important',
	borderTopRightRadius: '0 !important',
})

globalStyle(`${quartzScope}${roundedTop1}`, {
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${roundedTop2}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedTop3}`, {
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${roundedTop4}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${roundedTop5}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedTopCircle}`, {
	borderTopLeftRadius: '50% !important',
	borderTopRightRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedTopPill}`, {
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${roundedEnd}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedEnd0}`, {
	borderTopRightRadius: '0 !important',
	borderBottomRightRadius: '0 !important',
})

globalStyle(`${quartzScope}${roundedEnd1}`, {
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${roundedEnd2}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedEnd3}`, {
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${roundedEnd4}`, {
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${roundedEnd5}`, {
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedEndCircle}`, {
	borderTopRightRadius: '50% !important',
	borderBottomRightRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedEndPill}`, {
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${roundedBottom}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedBottom0}`, {
	borderBottomRightRadius: '0 !important',
	borderBottomLeftRadius: '0 !important',
})

globalStyle(`${quartzScope}${roundedBottom1}`, {
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${roundedBottom2}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedBottom3}`, {
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${roundedBottom4}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${roundedBottom5}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedBottomCircle}`, {
	borderBottomRightRadius: '50% !important',
	borderBottomLeftRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedBottomPill}`, {
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${roundedStart}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedStart0}`, {
	borderBottomLeftRadius: '0 !important',
	borderTopLeftRadius: '0 !important',
})

globalStyle(`${quartzScope}${roundedStart1}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${quartzScope}${roundedStart2}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${quartzScope}${roundedStart3}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${quartzScope}${roundedStart4}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${quartzScope}${roundedStart5}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${quartzScope}${roundedStartCircle}`, {
	borderBottomLeftRadius: '50% !important',
	borderTopLeftRadius: '50% !important',
})

globalStyle(`${quartzScope}${roundedStartPill}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${quartzScope}${visible}`, {
	visibility: 'visible !important',
})

globalStyle(`${quartzScope}${invisible}`, {
	visibility: 'hidden !important',
})

globalStyle(`${quartzScope}${zN1}`, {
	zIndex: '-1 !important',
})

globalStyle(`${quartzScope}${z0}`, {
	zIndex: '0 !important',
})

globalStyle(`${quartzScope}${z1}`, {
	zIndex: '1 !important',
})

globalStyle(`${quartzScope}${z2}`, {
	zIndex: '2 !important',
})

globalStyle(`${quartzScope}${z3}`, {
	zIndex: '3 !important',
})

globalStyle(`${quartzScope}${floatSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmContain}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmCover}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmScale}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmInline}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmInlineBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmInlineGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmTable}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmTableRow}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmTableCell}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmInlineFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmRow}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmColumn}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmRowReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmColumnReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmGrow0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmGrow1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmShrink0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmShrink1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmWrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmNowrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexSmWrapReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentSmEvenly}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSmFirst}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderSmLast}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mySmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${floatMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdContain}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdCover}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdScale}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdInline}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdInlineBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdInlineGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdTable}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdTableRow}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdTableCell}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdInlineFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdRow}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdColumn}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdRowReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdColumnReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdGrow0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdGrow1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdShrink0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdShrink1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdWrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdNowrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexMdWrapReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentMdEvenly}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMdFirst}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderMdLast}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${floatLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgContain}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgCover}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgScale}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgInline}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgInlineBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgInlineGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgTable}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgTableRow}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgTableCell}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dLgInlineFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgRow}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgColumn}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgRowReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgColumnReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgGrow0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgGrow1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgShrink0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgShrink1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgWrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgNowrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexLgWrapReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentLgEvenly}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLgFirst}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderLgLast}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlContain}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlCover}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlScale}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlInline}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlInlineBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlInlineGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlTable}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlTableRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlTableCell}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlInlineFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlColumn}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlRowReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlColumnReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlGrow0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlGrow1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlShrink0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlShrink1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlWrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlNowrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXlWrapReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXlEvenly}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXlFirst}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXlLast}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${floatXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlContain}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlCover}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlScale}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${quartzScope}${objectFitXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlInline}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlInlineBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlInlineGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlTable}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlTableRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlTableCell}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlInlineFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlColumn}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlRowReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlColumnReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlGrow0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlGrow1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlShrink0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlShrink1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlWrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlNowrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${quartzScope}${flexXxlWrapReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${justifyContentXxlEvenly}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignItemsXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${quartzScope}${alignContentXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${quartzScope}${alignSelfXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxlFirst}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${quartzScope}${orderXxlLast}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '2rem !important',
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '6rem !important',
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mxXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '2rem !important',
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '6rem !important',
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${myXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mtXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${meXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${mbXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${msXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '2rem !important',
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '6rem !important',
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '2rem !important',
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '6rem !important',
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${ptXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${peXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${pbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${psXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${gapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${rowGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '2rem !important',
			columnGap: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${quartzScope}${columnGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '6rem !important',
			columnGap: '6rem !important',
		},
	},
})

globalStyle(`${quartzScope}${textXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${quartzScope}${textXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${quartzScope}${textXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${quartzScope}${fs1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem !important',
		},
	},
})

globalStyle(`${quartzScope}${fs2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem !important',
		},
	},
})

globalStyle(`${quartzScope}${fs3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintInline}`, {
	'@media': {
		'print': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintInlineBlock}`, {
	'@media': {
		'print': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintBlock}`, {
	'@media': {
		'print': {
			display: 'block !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintGrid}`, {
	'@media': {
		'print': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintInlineGrid}`, {
	'@media': {
		'print': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintTable}`, {
	'@media': {
		'print': {
			display: 'table !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintTableRow}`, {
	'@media': {
		'print': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintTableCell}`, {
	'@media': {
		'print': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintFlex}`, {
	'@media': {
		'print': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintInlineFlex}`, {
	'@media': {
		'print': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${quartzScope}${dPrintNone}`, {
	'@media': {
		'print': {
			display: 'none !important',
		},
	},
})

globalStyle(`${quartzScope}${card}${borderPrimary}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderPrimary} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderSecondary}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderSecondary} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderSuccess}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderSuccess} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderInfo}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderInfo} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderWarning}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderWarning} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderDanger}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderDanger} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${borderLight}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card}${borderLight} ${quartzScope}${link}`, {
	color: '#fff',
})
