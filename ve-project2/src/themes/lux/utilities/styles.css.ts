import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../scope.css'

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
import { carousel } from '../../../theme-contract/ui/carousel/contract.css'
import { navbar } from '../../../theme-contract/ui/navbar/contract.css'
import { colMd2, colMd5 } from '../../../theme-contract/utilities/contract.css'

globalStyle(`${luxScope}${mark}`, {
	padding: '0.1875em',
	color: varBsHighlightColor,
	backgroundColor: varBsHighlightBg,
})

globalStyle(`${luxScope}${initialism}`, {
	fontSize: '0.875em',
	textTransform: 'uppercase',
})

globalStyle(`${luxScope}${container}`, {
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

globalStyle(`${luxScope}${containerXxl}`, {
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

globalStyle(`${luxScope}${containerXl}`, {
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

globalStyle(`${luxScope}${containerLg}`, {
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

globalStyle(`${luxScope}${containerMd}`, {
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

globalStyle(`${luxScope}${containerSm}`, {
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

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 576px)': {
			maxWidth: '540px',
		},
	},
})

globalStyle(`${luxScope}${containerMd}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 768px)': {
			maxWidth: '720px',
		},
	},
})

globalStyle(`${luxScope}${containerLg}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${luxScope}${containerMd}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 992px)': {
			maxWidth: '960px',
		},
	},
})

globalStyle(`${luxScope}${containerXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${containerLg}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${containerMd}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 1200px)': {
			maxWidth: '1140px',
		},
	},
})

globalStyle(`${luxScope}${containerXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${containerXl}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${containerLg}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${containerMd}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${containerSm}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${container}`, {
	'@media': {
		'(min-width: 1400px)': {
			maxWidth: '1320px',
		},
	},
})

globalStyle(`${luxScope}${rowColsAuto} > *`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${luxScope}${rowCols2} > *`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${luxScope}${rowCols3} > *`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${luxScope}${rowCols4} > *`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${luxScope}${rowCols5} > *`, {
	flex: '0 0 auto',
	width: '20%',
})

globalStyle(`${luxScope}${rowCols6} > *`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${luxScope}${colAuto}`, {
	flex: '0 0 auto',
	width: 'auto',
})

globalStyle(`${luxScope}${col1}`, {
	flex: '0 0 auto',
	width: '8.33333333%',
})

globalStyle(`${luxScope}${col2}`, {
	flex: '0 0 auto',
	width: '16.66666667%',
})

globalStyle(`${luxScope}${col3}`, {
	flex: '0 0 auto',
	width: '25%',
})

globalStyle(`${luxScope}${col4}`, {
	flex: '0 0 auto',
	width: '33.33333333%',
})

globalStyle(`${luxScope}${col5}`, {
	flex: '0 0 auto',
	width: '41.66666667%',
})

globalStyle(`${luxScope}${col6}`, {
	flex: '0 0 auto',
	width: '50%',
})

globalStyle(`${luxScope}${col7}`, {
	flex: '0 0 auto',
	width: '58.33333333%',
})

globalStyle(`${luxScope}${col8}`, {
	flex: '0 0 auto',
	width: '66.66666667%',
})

globalStyle(`${luxScope}${col9}`, {
	flex: '0 0 auto',
	width: '75%',
})

globalStyle(`${luxScope}${col10}`, {
	flex: '0 0 auto',
	width: '83.33333333%',
})

globalStyle(`${luxScope}${col11}`, {
	flex: '0 0 auto',
	width: '91.66666667%',
})

globalStyle(`${luxScope}${col12}`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${luxScope}${offset1}`, {
	marginLeft: '8.33333333%',
})

globalStyle(`${luxScope}${offset2}`, {
	marginLeft: '16.66666667%',
})

globalStyle(`${luxScope}${offset3}`, {
	marginLeft: '25%',
})

globalStyle(`${luxScope}${offset4}`, {
	marginLeft: '33.33333333%',
})

globalStyle(`${luxScope}${offset5}`, {
	marginLeft: '41.66666667%',
})

globalStyle(`${luxScope}${offset6}`, {
	marginLeft: '50%',
})

globalStyle(`${luxScope}${offset7}`, {
	marginLeft: '58.33333333%',
})

globalStyle(`${luxScope}${offset8}`, {
	marginLeft: '66.66666667%',
})

globalStyle(`${luxScope}${offset9}`, {
	marginLeft: '75%',
})

globalStyle(`${luxScope}${offset10}`, {
	marginLeft: '83.33333333%',
})

globalStyle(`${luxScope}${offset11}`, {
	marginLeft: '91.66666667%',
})

globalStyle(`${luxScope}${gx0}`, {
	vars: {
		[varBsGutterX]: '0',
	},
})

globalStyle(`${luxScope}${gy0}`, {
	vars: {
		[varBsGutterY]: '0',
	},
})

globalStyle(`${luxScope}${g1}`, {
	vars: {
		[varBsGutterX]: '0.25rem',
	},
})

globalStyle(`${luxScope}${gx1}`, {
	vars: {
		[varBsGutterX]: '0.25rem',
	},
})

globalStyle(`${luxScope}${g1}`, {
	vars: {
		[varBsGutterY]: '0.25rem',
	},
})

globalStyle(`${luxScope}${gy1}`, {
	vars: {
		[varBsGutterY]: '0.25rem',
	},
})

globalStyle(`${luxScope}${g2}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${luxScope}${gx2}`, {
	vars: {
		[varBsGutterX]: '0.5rem',
	},
})

globalStyle(`${luxScope}${g2}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${luxScope}${gy2}`, {
	vars: {
		[varBsGutterY]: '0.5rem',
	},
})

globalStyle(`${luxScope}${gx3}`, {
	vars: {
		[varBsGutterX]: '1rem',
	},
})

globalStyle(`${luxScope}${gy3}`, {
	vars: {
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${luxScope}${gx4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
	},
})

globalStyle(`${luxScope}${gy4}`, {
	vars: {
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${luxScope}${g5}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${luxScope}${gx5}`, {
	vars: {
		[varBsGutterX]: '3rem',
	},
})

globalStyle(`${luxScope}${g5}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${luxScope}${gy5}`, {
	vars: {
		[varBsGutterY]: '3rem',
	},
})

globalStyle(`${luxScope}${colSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsSmAuto} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm1} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm2} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm3} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm4} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm5} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsSm6} > *`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colSm12}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm6}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm7}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm8}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm9}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm10}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetSm11}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${colMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsMdAuto} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd1} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd3} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd4} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd5} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsMd6} > *`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colMd12}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd7}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd8}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd9}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd10}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetMd11}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${colLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsLgAuto} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg1} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg2} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg3} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg4} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg5} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsLg6} > *`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colLg12}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg6}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg7}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg8}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg9}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg10}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetLg11}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${colXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsXlAuto} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl1} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl2} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl3} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl4} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl5} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXl6} > *`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXl12}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl6}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl7}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl8}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl9}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl10}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXl11}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${colXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 0 0',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxlAuto} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl1} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl2} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl3} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl4} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl5} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '20%',
		},
	},
})

globalStyle(`${luxScope}${rowColsXxl6} > *`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: 'auto',
		},
	},
})

globalStyle(`${luxScope}${colXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

globalStyle(`${luxScope}${colXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(`${luxScope}${colXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '75%',
		},
	},
})

globalStyle(`${luxScope}${colXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${colXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${colXxl12}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '0 0 auto',
			width: '100%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '8.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '16.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '25%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '33.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '41.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl6}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '50%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl7}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '58.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl8}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '66.66666667%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl9}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '75%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl10}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '83.33333333%',
		},
	},
})

globalStyle(`${luxScope}${offsetXxl11}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '91.66666667%',
		},
	},
})

globalStyle(`${luxScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.25rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '0.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '1.5rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterX]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${gyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsGutterY]: '3rem',
			},
		},
	},
})

globalStyle(`${luxScope}${captionTop}`, {
	captionSide: 'top',
})

globalStyle(`${luxScope}${colFormLabel}`, {
	paddingTop: `calc(0.75rem + ${varBsBorderWidth})`,
	paddingBottom: `calc(0.75rem + ${varBsBorderWidth})`,
	marginBottom: '0',
	fontSize: 'inherit',
	lineHeight: '1.5',
})

globalStyle(`${luxScope}${colFormLabelLg}`, {
	paddingTop: `calc(2rem + ${varBsBorderWidth})`,
	paddingBottom: `calc(2rem + ${varBsBorderWidth})`,
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${colFormLabelSm}`, {
	paddingTop: `calc(0.5rem + ${varBsBorderWidth})`,
	paddingBottom: `calc(0.5rem + ${varBsBorderWidth})`,
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${formControlPlaintext}`, {
	display: 'block',
	width: '100%',
	padding: '0.75rem 0',
	marginBottom: '0',
	lineHeight: '1.5',
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	border: 'solid transparent',
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${luxScope}${formControlPlaintext}:focus`, {
	outline: '0',
})

globalStyle(`${luxScope}${formControlColor}`, {
	width: '3rem',
	height: `calc(1.5em + 1.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.75rem',
})

globalStyle(`${luxScope}${formControlColor}:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${luxScope}${formControlColor}::-moz-color-swatch`, {
	border: '0 !important',
})

globalStyle(`${luxScope}${formControlColor}::-webkit-color-swatch`, {
	border: '0 !important',
})

globalStyle(`${luxScope}${formCheckReverse}`, {
	paddingRight: '1.5em',
	paddingLeft: '0',
	textAlign: 'right',
})

globalStyle(`${luxScope}${formSwitch}${formCheckReverse}`, {
	paddingRight: '2.5em',
	paddingLeft: '0',
})

globalStyle(`${luxScope}${formCheckInline}`, {
	display: 'inline-block',
	marginRight: '1rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}`, {
	padding: '1rem 1.5rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext} ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControlPlaintext} ~ ${luxScope}${elLabel}`, {
	borderWidth: `${varBsBorderWidth} 0`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControlColor}:valid`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControlColor}:invalid`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${luxScope}${collapsing}${collapseHorizontal}`, {
	width: '0',
	height: 'auto',
	transition: 'width 0.35s ease',
})

globalStyle(`${luxScope}${collapsing}${collapseHorizontal}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${container}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerSm}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerMd}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerLg}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerXl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${navbar} > ${luxScope}${containerXxl}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

globalStyle(`${luxScope}${carousel}${pointerEvent}`, {
	touchAction: 'pan-y',
})

globalStyle(`${luxScope}${placeholder}`, {
	display: 'inline-block',
	minHeight: '1em',
	verticalAlign: 'middle',
	cursor: 'wait',
	backgroundColor: 'currentcolor',
	opacity: '0.5',
})

globalStyle(`${luxScope}${placeholderXs}`, {
	minHeight: '0.6em',
})

globalStyle(`${luxScope}${placeholderSm}`, {
	minHeight: '0.8em',
})

globalStyle(`${luxScope}${placeholderLg}`, {
	minHeight: '1.2em',
})

globalStyle(`${luxScope}${placeholderGlow} ${luxScope}${placeholder}`, {
	animation: 'placeholder-glow 2s ease-in-out infinite',
})

globalStyle(`${luxScope}${placeholderWave}`, {
	WebkitMaskImage: 'linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%)',
	maskImage: 'linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%)',
	WebkitMaskSize: '200% 100%',
	maskSize: '200% 100%',
	animation: 'placeholder-wave 2s linear infinite',
})

globalStyle(`${luxScope}${clearfix}::after`, {
	display: 'block',
	clear: 'both',
	content: '""',
})

globalStyle(`${luxScope}${textBgPrimary}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${textBgSecondary}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${textBgSuccess}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${textBgInfo}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${textBgWarning}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${textBgDanger}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${textBgLight}`, {
	color: '#000 !important',
	backgroundColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${textBgDark}`, {
	color: '#fff !important',
	backgroundColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsBgOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkPrimary}`, {
	color: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsPrimaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkPrimary}:hover`, {
	color: `RGBA(21, 21, 21, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(21, 21, 21, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(21, 21, 21, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkPrimary}:focus`, {
	color: `RGBA(21, 21, 21, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(21, 21, 21, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(21, 21, 21, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkSecondary}`, {
	color: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsSecondaryRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkSecondary}:hover`, {
	color: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkSecondary}:focus`, {
	color: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(255, 255, 255, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkSuccess}`, {
	color: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsSuccessRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkSuccess}:hover`, {
	color: `RGBA(60, 153, 92, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(60, 153, 92, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(60, 153, 92, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkSuccess}:focus`, {
	color: `RGBA(60, 153, 92, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(60, 153, 92, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(60, 153, 92, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkInfo}`, {
	color: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsInfoRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkInfo}:hover`, {
	color: `RGBA(25, 124, 166, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(25, 124, 166, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(25, 124, 166, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkInfo}:focus`, {
	color: `RGBA(25, 124, 166, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(25, 124, 166, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(25, 124, 166, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkWarning}`, {
	color: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsWarningRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkWarning}:hover`, {
	color: `RGBA(192, 138, 62, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(192, 138, 62, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(192, 138, 62, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkWarning}:focus`, {
	color: `RGBA(192, 138, 62, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(192, 138, 62, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(192, 138, 62, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkDanger}`, {
	color: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsDangerRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkDanger}:hover`, {
	color: `RGBA(174, 66, 63, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(174, 66, 63, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(174, 66, 63, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkDanger}:focus`, {
	color: `RGBA(174, 66, 63, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(174, 66, 63, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(174, 66, 63, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkLight}`, {
	color: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsLightRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkLight}:hover`, {
	color: `RGBA(243, 244, 245, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(243, 244, 245, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(243, 244, 245, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkLight}:focus`, {
	color: `RGBA(243, 244, 245, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(243, 244, 245, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(243, 244, 245, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkDark}`, {
	color: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsDarkRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkDark}:hover`, {
	color: `RGBA(42, 46, 51, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(42, 46, 51, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(42, 46, 51, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkDark}:focus`, {
	color: `RGBA(42, 46, 51, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(42, 46, 51, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(42, 46, 51, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkBodyEmphasis}`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '1')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkBodyEmphasis}:hover`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.75')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
})

globalStyle(`${luxScope}${linkBodyEmphasis}:focus`, {
	color: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.75')}) !important`,
	WebkitTextDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
	textDecorationColor: `RGBA(${varBsEmphasisColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '0.75')}) !important`,
})

globalStyle(`${luxScope}${focusRing}:focus`, {
	outline: '0',
	boxShadow: `var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) ${varBsFocusRingWidth} ${varBsFocusRingColor}`,
})

globalStyle(`${luxScope}${iconLink}`, {
	display: 'inline-flex',
	gap: '0.375rem',
	alignItems: 'center',
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.5')})`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkOpacity, '0.5')})`,
	textUnderlineOffset: '0.25em',
	WebkitBackfaceVisibility: 'hidden',
	backfaceVisibility: 'hidden',
})

globalStyle(`${luxScope}${iconLink} > ${luxScope}${bi}`, {
	flexShrink: '0',
	width: '1em',
	height: '1em',
	fill: 'currentcolor',
	transition: '0.2s ease-in-out transform',
})

globalStyle(`${luxScope}${iconLink} > ${luxScope}${bi}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${iconLinkHover}:hover > ${luxScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${luxScope}${iconLinkHover}:focus-visible > ${luxScope}${bi}`, {
	transform: 'var(--bs-icon-link-transform, translate3d(0.25em, 0, 0))',
})

globalStyle(`${luxScope}${ratio}`, {
	position: 'relative',
	width: '100%',
})

globalStyle(`${luxScope}${ratio}::before`, {
	display: 'block',
	paddingTop: varBsAspectRatio,
	content: '""',
})

globalStyle(`${luxScope}${ratio} > *`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
})

globalStyle(`${luxScope}${ratio1x1}`, {
	vars: {
		[varBsAspectRatio]: '100%',
	},
})

globalStyle(`${luxScope}${ratio4x3}`, {
	vars: {
		[varBsAspectRatio]: '75%',
	},
})

globalStyle(`${luxScope}${ratio16x9}`, {
	vars: {
		[varBsAspectRatio]: '56.25%',
	},
})

globalStyle(`${luxScope}${ratio21x9}`, {
	vars: {
		[varBsAspectRatio]: '42.8571428571%',
	},
})

globalStyle(`${luxScope}${fixedTop}`, {
	position: 'fixed',
	top: '0',
	right: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${luxScope}${fixedBottom}`, {
	position: 'fixed',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1030',
})

globalStyle(`${luxScope}${stickyTop}`, {
	position: 'sticky',
	top: '0',
	zIndex: '1020',
})

globalStyle(`${luxScope}${stickyBottom}`, {
	position: 'sticky',
	bottom: '0',
	zIndex: '1020',
})

globalStyle(`${luxScope}${stickySmTop}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickySmBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyMdTop}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyMdBottom}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyLgTop}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyLgBottom}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyXlBottom}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyXxlTop}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			top: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${stickyXxlBottom}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'sticky',
			bottom: '0',
			zIndex: '1020',
		},
	},
})

globalStyle(`${luxScope}${hstack}`, {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	alignSelf: 'stretch',
})

globalStyle(`${luxScope}${vstack}`, {
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	alignSelf: 'stretch',
})

globalStyle(`${luxScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within)`, {
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${luxScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within):not(caption)`, {
	position: 'absolute !important',
})

globalStyle(`${luxScope}${visuallyHiddenFocusable}:not(:focus):not(:focus-within) *`, {
	overflow: 'hidden !important',
})

globalStyle(`${luxScope}${stretchedLink}::after`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '1',
	content: '""',
})

globalStyle(`${luxScope}${textTruncate}`, {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

globalStyle(`${luxScope}${vr}`, {
	display: 'inline-block',
	alignSelf: 'stretch',
	width: varBsBorderWidth,
	minHeight: '1em',
	backgroundColor: 'currentcolor',
	opacity: '0.25',
})

globalStyle(`${luxScope}${alignBaseline}`, {
	verticalAlign: 'baseline !important',
})

globalStyle(`${luxScope}${alignMiddle}`, {
	verticalAlign: 'middle !important',
})

globalStyle(`${luxScope}${alignBottom}`, {
	verticalAlign: 'bottom !important',
})

globalStyle(`${luxScope}${alignTextBottom}`, {
	verticalAlign: 'text-bottom !important',
})

globalStyle(`${luxScope}${alignTextTop}`, {
	verticalAlign: 'text-top !important',
})

globalStyle(`${luxScope}${floatStart}`, {
	float: 'left !important',
})

globalStyle(`${luxScope}${floatEnd}`, {
	float: 'right !important',
})

globalStyle(`${luxScope}${floatNone}`, {
	float: 'none !important',
})

globalStyle(`${luxScope}${objectFitContain}`, {
	OObjectFit: 'contain !important',
	objectFit: 'contain !important',
})

globalStyle(`${luxScope}${objectFitCover}`, {
	OObjectFit: 'cover !important',
	objectFit: 'cover !important',
})

globalStyle(`${luxScope}${objectFitFill}`, {
	OObjectFit: 'fill !important',
	objectFit: 'fill !important',
})

globalStyle(`${luxScope}${objectFitScale}`, {
	OObjectFit: 'scale-down !important',
	objectFit: 'scale-down !important',
})

globalStyle(`${luxScope}${objectFitNone}`, {
	OObjectFit: 'none !important',
	objectFit: 'none !important',
})

globalStyle(`${luxScope}${opacity0}`, {
	opacity: '0 !important',
})

globalStyle(`${luxScope}${opacity25}`, {
	opacity: '0.25 !important',
})

globalStyle(`${luxScope}${opacity50}`, {
	opacity: '0.5 !important',
})

globalStyle(`${luxScope}${opacity75}`, {
	opacity: '0.75 !important',
})

globalStyle(`${luxScope}${opacity100}`, {
	opacity: '1 !important',
})

globalStyle(`${luxScope}${overflowAuto}`, {
	overflow: 'auto !important',
})

globalStyle(`${luxScope}${overflowHidden}`, {
	overflow: 'hidden !important',
})

globalStyle(`${luxScope}${overflowVisible}`, {
	overflow: 'visible !important',
})

globalStyle(`${luxScope}${overflowScroll}`, {
	overflow: 'scroll !important',
})

globalStyle(`${luxScope}${overflowXAuto}`, {
	overflowX: 'auto !important',
})

globalStyle(`${luxScope}${overflowXVisible}`, {
	overflowX: 'visible !important',
})

globalStyle(`${luxScope}${overflowXScroll}`, {
	overflowX: 'scroll !important',
})

globalStyle(`${luxScope}${overflowYAuto}`, {
	overflowY: 'auto !important',
})

globalStyle(`${luxScope}${overflowYHidden}`, {
	overflowY: 'hidden !important',
})

globalStyle(`${luxScope}${overflowYVisible}`, {
	overflowY: 'visible !important',
})

globalStyle(`${luxScope}${overflowYScroll}`, {
	overflowY: 'scroll !important',
})

globalStyle(`${luxScope}${dInline}`, {
	display: 'inline !important',
})

globalStyle(`${luxScope}${dGrid}`, {
	display: 'grid !important',
})

globalStyle(`${luxScope}${dInlineGrid}`, {
	display: 'inline-grid !important',
})

globalStyle(`${luxScope}${dTable}`, {
	display: 'table !important',
})

globalStyle(`${luxScope}${dTableRow}`, {
	display: 'table-row !important',
})

globalStyle(`${luxScope}${dTableCell}`, {
	display: 'table-cell !important',
})

globalStyle(`${luxScope}${shadow}`, {
	boxShadow: `${varBsBoxShadow} !important`,
})

globalStyle(`${luxScope}${shadowSm}`, {
	boxShadow: `${varBsBoxShadowSm} !important`,
})

globalStyle(`${luxScope}${shadowLg}`, {
	boxShadow: `${varBsBoxShadowLg} !important`,
})

globalStyle(`${luxScope}${shadowNone}`, {
	boxShadow: 'none !important',
})

globalStyle(`${luxScope}${focusRingPrimary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsPrimaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingSecondary}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSecondaryRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingSuccess}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsSuccessRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingInfo}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsInfoRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingWarning}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsWarningRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingDanger}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDangerRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingLight}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsLightRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${focusRingDark}`, {
	vars: {
		[varBsFocusRingColor]: `rgba(${varBsDarkRgb}, ${varBsFocusRingOpacity})`,
	},
})

globalStyle(`${luxScope}${positionStatic}`, {
	position: 'static !important',
})

globalStyle(`${luxScope}${positionFixed}`, {
	position: 'fixed !important',
})

globalStyle(`${luxScope}${positionSticky}`, {
	position: 'sticky !important',
})

globalStyle(`${luxScope}${top50}`, {
	top: '50% !important',
})

globalStyle(`${luxScope}${top100}`, {
	top: '100% !important',
})

globalStyle(`${luxScope}${bottom0}`, {
	bottom: '0 !important',
})

globalStyle(`${luxScope}${bottom50}`, {
	bottom: '50% !important',
})

globalStyle(`${luxScope}${bottom100}`, {
	bottom: '100% !important',
})

globalStyle(`${luxScope}${start0}`, {
	left: '0 !important',
})

globalStyle(`${luxScope}${start50}`, {
	left: '50% !important',
})

globalStyle(`${luxScope}${start100}`, {
	left: '100% !important',
})

globalStyle(`${luxScope}${end50}`, {
	right: '50% !important',
})

globalStyle(`${luxScope}${end100}`, {
	right: '100% !important',
})

globalStyle(`${luxScope}${translateMiddle}`, {
	transform: 'translate(-50%, -50%) !important',
})

globalStyle(`${luxScope}${translateMiddleX}`, {
	transform: 'translateX(-50%) !important',
})

globalStyle(`${luxScope}${translateMiddleY}`, {
	transform: 'translateY(-50%) !important',
})

globalStyle(`${luxScope}${border0}`, {
	border: '0 !important',
})

globalStyle(`${luxScope}${borderTop}`, {
	borderTop: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${borderTop0}`, {
	borderTop: '0 !important',
})

globalStyle(`${luxScope}${borderEnd}`, {
	borderRight: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${borderEnd0}`, {
	borderRight: '0 !important',
})

globalStyle(`${luxScope}${borderBottom0}`, {
	borderBottom: '0 !important',
})

globalStyle(`${luxScope}${borderStart}`, {
	borderLeft: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor} !important`,
})

globalStyle(`${luxScope}${borderStart0}`, {
	borderLeft: '0 !important',
})

globalStyle(`${luxScope}${borderPrimary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsPrimaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderSecondary}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSecondaryRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderSuccess}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsSuccessRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderInfo}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsInfoRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderWarning}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWarningRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderDanger}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsDangerRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderLight}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsLightRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderBlack}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsBlackRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderWhite}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
	borderColor: `rgba(${varBsWhiteRgb}, ${varBsBorderOpacity}) !important`,
})

globalStyle(`${luxScope}${borderPrimarySubtle}`, {
	borderColor: `${varBsPrimaryBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderSecondarySubtle}`, {
	borderColor: `${varBsSecondaryBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderSuccessSubtle}`, {
	borderColor: `${varBsSuccessBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderInfoSubtle}`, {
	borderColor: `${varBsInfoBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderWarningSubtle}`, {
	borderColor: `${varBsWarningBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderDangerSubtle}`, {
	borderColor: `${varBsDangerBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderLightSubtle}`, {
	borderColor: `${varBsLightBorderSubtle} !important`,
})

globalStyle(`${luxScope}${borderDarkSubtle}`, {
	borderColor: `${varBsDarkBorderSubtle} !important`,
})

globalStyle(`${luxScope}${border1}`, {
	borderWidth: '1px !important',
})

globalStyle(`${luxScope}${border2}`, {
	borderWidth: '2px !important',
})

globalStyle(`${luxScope}${border3}`, {
	borderWidth: '3px !important',
})

globalStyle(`${luxScope}${border4}`, {
	borderWidth: '4px !important',
})

globalStyle(`${luxScope}${border5}`, {
	borderWidth: '5px !important',
})

globalStyle(`${luxScope}${borderOpacity10}`, {
	vars: {
		[varBsBorderOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${borderOpacity25}`, {
	vars: {
		[varBsBorderOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${borderOpacity50}`, {
	vars: {
		[varBsBorderOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${borderOpacity75}`, {
	vars: {
		[varBsBorderOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${borderOpacity100}`, {
	vars: {
		[varBsBorderOpacity]: '1',
	},
})

globalStyle(`${luxScope}${wAuto}`, {
	width: 'auto !important',
})

globalStyle(`${luxScope}${mw100}`, {
	maxWidth: '100% !important',
})

globalStyle(`${luxScope}${vw100}`, {
	width: '100vw !important',
})

globalStyle(`${luxScope}${minVw100}`, {
	minWidth: '100vw !important',
})

globalStyle(`${luxScope}${h25}`, {
	height: '25% !important',
})

globalStyle(`${luxScope}${h50}`, {
	height: '50% !important',
})

globalStyle(`${luxScope}${h75}`, {
	height: '75% !important',
})

globalStyle(`${luxScope}${h100}`, {
	height: '100% !important',
})

globalStyle(`${luxScope}${hAuto}`, {
	height: 'auto !important',
})

globalStyle(`${luxScope}${mh100}`, {
	maxHeight: '100% !important',
})

globalStyle(`${luxScope}${vh100}`, {
	height: '100vh !important',
})

globalStyle(`${luxScope}${minVh100}`, {
	minHeight: '100vh !important',
})

globalStyle(`${luxScope}${flexFill}`, {
	flex: '1 1 auto !important',
})

globalStyle(`${luxScope}${flexRowReverse}`, {
	flexDirection: 'row-reverse !important',
})

globalStyle(`${luxScope}${flexColumnReverse}`, {
	flexDirection: 'column-reverse !important',
})

globalStyle(`${luxScope}${flexGrow0}`, {
	flexGrow: '0 !important',
})

globalStyle(`${luxScope}${flexGrow1}`, {
	flexGrow: '1 !important',
})

globalStyle(`${luxScope}${flexShrink0}`, {
	flexShrink: '0 !important',
})

globalStyle(`${luxScope}${flexShrink1}`, {
	flexShrink: '1 !important',
})

globalStyle(`${luxScope}${flexNowrap}`, {
	flexWrap: 'nowrap !important',
})

globalStyle(`${luxScope}${flexWrapReverse}`, {
	flexWrap: 'wrap-reverse !important',
})

globalStyle(`${luxScope}${justifyContentAround}`, {
	justifyContent: 'space-around !important',
})

globalStyle(`${luxScope}${justifyContentEvenly}`, {
	justifyContent: 'space-evenly !important',
})

globalStyle(`${luxScope}${alignItemsStart}`, {
	alignItems: 'flex-start !important',
})

globalStyle(`${luxScope}${alignItemsEnd}`, {
	alignItems: 'flex-end !important',
})

globalStyle(`${luxScope}${alignItemsBaseline}`, {
	alignItems: 'baseline !important',
})

globalStyle(`${luxScope}${alignContentStart}`, {
	alignContent: 'flex-start !important',
})

globalStyle(`${luxScope}${alignContentEnd}`, {
	alignContent: 'flex-end !important',
})

globalStyle(`${luxScope}${alignContentCenter}`, {
	alignContent: 'center !important',
})

globalStyle(`${luxScope}${alignContentBetween}`, {
	alignContent: 'space-between !important',
})

globalStyle(`${luxScope}${alignContentAround}`, {
	alignContent: 'space-around !important',
})

globalStyle(`${luxScope}${alignContentStretch}`, {
	alignContent: 'stretch !important',
})

globalStyle(`${luxScope}${alignSelfAuto}`, {
	alignSelf: 'auto !important',
})

globalStyle(`${luxScope}${alignSelfEnd}`, {
	alignSelf: 'flex-end !important',
})

globalStyle(`${luxScope}${alignSelfCenter}`, {
	alignSelf: 'center !important',
})

globalStyle(`${luxScope}${alignSelfBaseline}`, {
	alignSelf: 'baseline !important',
})

globalStyle(`${luxScope}${alignSelfStretch}`, {
	alignSelf: 'stretch !important',
})

globalStyle(`${luxScope}${orderFirst}`, {
	order: '-1 !important',
})

globalStyle(`${luxScope}${order0}`, {
	order: '0 !important',
})

globalStyle(`${luxScope}${order1}`, {
	order: '1 !important',
})

globalStyle(`${luxScope}${order2}`, {
	order: '2 !important',
})

globalStyle(`${luxScope}${order3}`, {
	order: '3 !important',
})

globalStyle(`${luxScope}${order4}`, {
	order: '4 !important',
})

globalStyle(`${luxScope}${order5}`, {
	order: '5 !important',
})

globalStyle(`${luxScope}${orderLast}`, {
	order: '6 !important',
})

globalStyle(`${luxScope}${m0}`, {
	margin: '0 !important',
})

globalStyle(`${luxScope}${m1}`, {
	margin: '0.25rem !important',
})

globalStyle(`${luxScope}${m2}`, {
	margin: '0.5rem !important',
})

globalStyle(`${luxScope}${m3}`, {
	margin: '1rem !important',
})

globalStyle(`${luxScope}${m4}`, {
	margin: '1.5rem !important',
})

globalStyle(`${luxScope}${m5}`, {
	margin: '3rem !important',
})

globalStyle(`${luxScope}${mAuto}`, {
	margin: 'auto !important',
})

globalStyle(`${luxScope}${mx0}`, {
	marginRight: '0 !important',
	marginLeft: '0 !important',
})

globalStyle(`${luxScope}${mx1}`, {
	marginRight: '0.25rem !important',
	marginLeft: '0.25rem !important',
})

globalStyle(`${luxScope}${mx2}`, {
	marginRight: '0.5rem !important',
	marginLeft: '0.5rem !important',
})

globalStyle(`${luxScope}${mx3}`, {
	marginRight: '1rem !important',
	marginLeft: '1rem !important',
})

globalStyle(`${luxScope}${mx4}`, {
	marginRight: '1.5rem !important',
	marginLeft: '1.5rem !important',
})

globalStyle(`${luxScope}${mx5}`, {
	marginRight: '3rem !important',
	marginLeft: '3rem !important',
})

globalStyle(`${luxScope}${mxAuto}`, {
	marginRight: 'auto !important',
	marginLeft: 'auto !important',
})

globalStyle(`${luxScope}${my0}`, {
	marginTop: '0 !important',
	marginBottom: '0 !important',
})

globalStyle(`${luxScope}${my1}`, {
	marginTop: '0.25rem !important',
	marginBottom: '0.25rem !important',
})

globalStyle(`${luxScope}${my4}`, {
	marginTop: '1.5rem !important',
	marginBottom: '1.5rem !important',
})

globalStyle(`${luxScope}${my5}`, {
	marginTop: '3rem !important',
	marginBottom: '3rem !important',
})

globalStyle(`${luxScope}${myAuto}`, {
	marginTop: 'auto !important',
	marginBottom: 'auto !important',
})

globalStyle(`${luxScope}${mt0}`, {
	marginTop: '0 !important',
})

globalStyle(`${luxScope}${mt1}`, {
	marginTop: '0.25rem !important',
})

globalStyle(`${luxScope}${mt2}`, {
	marginTop: '0.5rem !important',
})

globalStyle(`${luxScope}${mt4}`, {
	marginTop: '1.5rem !important',
})

globalStyle(`${luxScope}${mtAuto}`, {
	marginTop: 'auto !important',
})

globalStyle(`${luxScope}${me0}`, {
	marginRight: '0 !important',
})

globalStyle(`${luxScope}${me1}`, {
	marginRight: '0.25rem !important',
})

globalStyle(`${luxScope}${me3}`, {
	marginRight: '1rem !important',
})

globalStyle(`${luxScope}${me4}`, {
	marginRight: '1.5rem !important',
})

globalStyle(`${luxScope}${me5}`, {
	marginRight: '3rem !important',
})

globalStyle(`${luxScope}${mb1}`, {
	marginBottom: '0.25rem !important',
})

globalStyle(`${luxScope}${mbAuto}`, {
	marginBottom: 'auto !important',
})

globalStyle(`${luxScope}${ms0}`, {
	marginLeft: '0 !important',
})

globalStyle(`${luxScope}${ms1}`, {
	marginLeft: '0.25rem !important',
})

globalStyle(`${luxScope}${ms2}`, {
	marginLeft: '0.5rem !important',
})

globalStyle(`${luxScope}${ms4}`, {
	marginLeft: '1.5rem !important',
})

globalStyle(`${luxScope}${ms5}`, {
	marginLeft: '3rem !important',
})

globalStyle(`${luxScope}${msAuto}`, {
	marginLeft: 'auto !important',
})

globalStyle(`${luxScope}${p0}`, {
	padding: '0 !important',
})

globalStyle(`${luxScope}${p1}`, {
	padding: '0.25rem !important',
})

globalStyle(`${luxScope}${p2}`, {
	padding: '0.5rem !important',
})

globalStyle(`${luxScope}${p3}`, {
	padding: '1rem !important',
})

globalStyle(`${luxScope}${p4}`, {
	padding: '1.5rem !important',
})

globalStyle(`${luxScope}${px0}`, {
	paddingRight: '0 !important',
	paddingLeft: '0 !important',
})

globalStyle(`${luxScope}${px1}`, {
	paddingRight: '0.25rem !important',
	paddingLeft: '0.25rem !important',
})

globalStyle(`${luxScope}${px4}`, {
	paddingRight: '1.5rem !important',
	paddingLeft: '1.5rem !important',
})

globalStyle(`${luxScope}${px5}`, {
	paddingRight: '3rem !important',
	paddingLeft: '3rem !important',
})

globalStyle(`${luxScope}${py0}`, {
	paddingTop: '0 !important',
	paddingBottom: '0 !important',
})

globalStyle(`${luxScope}${py1}`, {
	paddingTop: '0.25rem !important',
	paddingBottom: '0.25rem !important',
})

globalStyle(`${luxScope}${py2}`, {
	paddingTop: '0.5rem !important',
	paddingBottom: '0.5rem !important',
})

globalStyle(`${luxScope}${py4}`, {
	paddingTop: '1.5rem !important',
	paddingBottom: '1.5rem !important',
})

globalStyle(`${luxScope}${py5}`, {
	paddingTop: '3rem !important',
	paddingBottom: '3rem !important',
})

globalStyle(`${luxScope}${pt0}`, {
	paddingTop: '0 !important',
})

globalStyle(`${luxScope}${pt1}`, {
	paddingTop: '0.25rem !important',
})

globalStyle(`${luxScope}${pt2}`, {
	paddingTop: '0.5rem !important',
})

globalStyle(`${luxScope}${pt5}`, {
	paddingTop: '3rem !important',
})

globalStyle(`${luxScope}${pe0}`, {
	paddingRight: '0 !important',
})

globalStyle(`${luxScope}${pe1}`, {
	paddingRight: '0.25rem !important',
})

globalStyle(`${luxScope}${pe2}`, {
	paddingRight: '0.5rem !important',
})

globalStyle(`${luxScope}${pe3}`, {
	paddingRight: '1rem !important',
})

globalStyle(`${luxScope}${pe4}`, {
	paddingRight: '1.5rem !important',
})

globalStyle(`${luxScope}${pe5}`, {
	paddingRight: '3rem !important',
})

globalStyle(`${luxScope}${pb0}`, {
	paddingBottom: '0 !important',
})

globalStyle(`${luxScope}${pb1}`, {
	paddingBottom: '0.25rem !important',
})

globalStyle(`${luxScope}${pb4}`, {
	paddingBottom: '1.5rem !important',
})

globalStyle(`${luxScope}${ps0}`, {
	paddingLeft: '0 !important',
})

globalStyle(`${luxScope}${ps1}`, {
	paddingLeft: '0.25rem !important',
})

globalStyle(`${luxScope}${ps2}`, {
	paddingLeft: '0.5rem !important',
})

globalStyle(`${luxScope}${ps4}`, {
	paddingLeft: '1.5rem !important',
})

globalStyle(`${luxScope}${ps5}`, {
	paddingLeft: '3rem !important',
})

globalStyle(`${luxScope}${gap0}`, {
	gap: '0 !important',
})

globalStyle(`${luxScope}${gap1}`, {
	gap: '0.25rem !important',
})

globalStyle(`${luxScope}${gap2}`, {
	gap: '0.5rem !important',
})

globalStyle(`${luxScope}${gap3}`, {
	gap: '1rem !important',
})

globalStyle(`${luxScope}${gap4}`, {
	gap: '1.5rem !important',
})

globalStyle(`${luxScope}${gap5}`, {
	gap: '3rem !important',
})

globalStyle(`${luxScope}${rowGap0}`, {
	rowGap: '0 !important',
})

globalStyle(`${luxScope}${rowGap1}`, {
	rowGap: '0.25rem !important',
})

globalStyle(`${luxScope}${rowGap2}`, {
	rowGap: '0.5rem !important',
})

globalStyle(`${luxScope}${rowGap3}`, {
	rowGap: '1rem !important',
})

globalStyle(`${luxScope}${rowGap4}`, {
	rowGap: '1.5rem !important',
})

globalStyle(`${luxScope}${rowGap5}`, {
	rowGap: '3rem !important',
})

globalStyle(`${luxScope}${columnGap0}`, {
	MozColumnGap: '0 !important',
	columnGap: '0 !important',
})

globalStyle(`${luxScope}${columnGap1}`, {
	MozColumnGap: '0.25rem !important',
	columnGap: '0.25rem !important',
})

globalStyle(`${luxScope}${columnGap2}`, {
	MozColumnGap: '0.5rem !important',
	columnGap: '0.5rem !important',
})

globalStyle(`${luxScope}${columnGap3}`, {
	MozColumnGap: '1rem !important',
	columnGap: '1rem !important',
})

globalStyle(`${luxScope}${columnGap4}`, {
	MozColumnGap: '1.5rem !important',
	columnGap: '1.5rem !important',
})

globalStyle(`${luxScope}${columnGap5}`, {
	MozColumnGap: '3rem !important',
	columnGap: '3rem !important',
})

globalStyle(`${luxScope}${fontMonospace}`, {
	fontFamily: `${varBsFontMonospace} !important`,
})

globalStyle(`${luxScope}${fs1}`, {
	fontSize: 'calc(1.325rem + 0.9vw) !important',
})

globalStyle(`${luxScope}${fs2}`, {
	fontSize: 'calc(1.3rem + 0.6vw) !important',
})

globalStyle(`${luxScope}${fs3}`, {
	fontSize: 'calc(1.275rem + 0.3vw) !important',
})

globalStyle(`${luxScope}${fs5}`, {
	fontSize: '1rem !important',
})

globalStyle(`${luxScope}${fs6}`, {
	fontSize: '0.75rem !important',
})

globalStyle(`${luxScope}${fstItalic}`, {
	fontStyle: 'italic !important',
})

globalStyle(`${luxScope}${fstNormal}`, {
	fontStyle: 'normal !important',
})

globalStyle(`${luxScope}${fwLighter}`, {
	fontWeight: 'lighter !important',
})

globalStyle(`${luxScope}${fwLight}`, {
	fontWeight: '200 !important',
})

globalStyle(`${luxScope}${fwNormal}`, {
	fontWeight: '300 !important',
})

globalStyle(`${luxScope}${fwMedium}`, {
	fontWeight: '400 !important',
})

globalStyle(`${luxScope}${fwSemibold}`, {
	fontWeight: '500 !important',
})

globalStyle(`${luxScope}${fwBolder}`, {
	fontWeight: 'bolder !important',
})

globalStyle(`${luxScope}${lh1}`, {
	lineHeight: '1 !important',
})

globalStyle(`${luxScope}${lhSm}`, {
	lineHeight: '1.25 !important',
})

globalStyle(`${luxScope}${lhBase}`, {
	lineHeight: '1.5 !important',
})

globalStyle(`${luxScope}${lhLg}`, {
	lineHeight: '2 !important',
})

globalStyle(`${luxScope}${textStart}`, {
	textAlign: 'left !important',
})

globalStyle(`${luxScope}${textEnd}`, {
	textAlign: 'right !important',
})

globalStyle(`${luxScope}${textDecorationNone}`, {
	textDecoration: 'none !important',
})

globalStyle(`${luxScope}${textDecorationUnderline}`, {
	textDecoration: 'underline !important',
})

globalStyle(`${luxScope}${textDecorationLineThrough}`, {
	textDecoration: 'line-through !important',
})

globalStyle(`${luxScope}${textLowercase}`, {
	textTransform: 'lowercase !important',
})

globalStyle(`${luxScope}${textUppercase}`, {
	textTransform: 'uppercase !important',
})

globalStyle(`${luxScope}${textCapitalize}`, {
	textTransform: 'capitalize !important',
})

globalStyle(`${luxScope}${textWrap}`, {
	whiteSpace: 'normal !important',
})

globalStyle(`${luxScope}${textNowrap}`, {
	whiteSpace: 'nowrap !important',
})

globalStyle(`${luxScope}${textBreak}`, {
	wordWrap: 'break-word !important',
	wordBreak: 'break-word !important',
})

globalStyle(`${luxScope}${textBlack}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBlackRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textBody}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `rgba(${varBsBodyColorRgb}, ${varBsTextOpacity}) !important`,
})

globalStyle(`${luxScope}${textBlack50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(0, 0, 0, 0.5) !important',
})

globalStyle(`${luxScope}${textWhite50}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'rgba(255, 255, 255, 0.5) !important',
})

globalStyle(`${luxScope}${textBodySecondary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${luxScope}${textBodyTertiary}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsTertiaryColor} !important`,
})

globalStyle(`${luxScope}${textBodyEmphasis}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: `${varBsEmphasisColor} !important`,
})

globalStyle(`${luxScope}${textReset}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
	color: 'inherit !important',
})

globalStyle(`${luxScope}${textOpacity25}`, {
	vars: {
		[varBsTextOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${textOpacity50}`, {
	vars: {
		[varBsTextOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${textOpacity75}`, {
	vars: {
		[varBsTextOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${textOpacity100}`, {
	vars: {
		[varBsTextOpacity]: '1',
	},
})

globalStyle(`${luxScope}${textPrimaryEmphasis}`, {
	color: `${varBsPrimaryTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textSecondaryEmphasis}`, {
	color: `${varBsSecondaryTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textSuccessEmphasis}`, {
	color: `${varBsSuccessTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textInfoEmphasis}`, {
	color: `${varBsInfoTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textWarningEmphasis}`, {
	color: `${varBsWarningTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textDangerEmphasis}`, {
	color: `${varBsDangerTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textLightEmphasis}`, {
	color: `${varBsLightTextEmphasis} !important`,
})

globalStyle(`${luxScope}${textDarkEmphasis}`, {
	color: `${varBsDarkTextEmphasis} !important`,
})

globalStyle(`${luxScope}${linkOpacity10}`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${linkOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${linkOpacity25}`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${linkOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${linkOpacity50}`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${linkOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${linkOpacity75}`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${linkOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${linkOpacity100}`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${luxScope}${linkOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkOpacity]: '1',
	},
})

globalStyle(`${luxScope}${linkOffset1}`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${luxScope}${linkOffset1Hover}:hover`, {
	textUnderlineOffset: '0.125em !important',
})

globalStyle(`${luxScope}${linkOffset2}`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${luxScope}${linkOffset2Hover}:hover`, {
	textUnderlineOffset: '0.25em !important',
})

globalStyle(`${luxScope}${linkOffset3}`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${luxScope}${linkOffset3Hover}:hover`, {
	textUnderlineOffset: '0.375em !important',
})

globalStyle(`${luxScope}${linkUnderlinePrimary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsPrimaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineSecondary}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSecondaryRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineSuccess}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsSuccessRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineInfo}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsInfoRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineWarning}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsWarningRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineDanger}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDangerRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineLight}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsLightRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineDark}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
	textDecorationColor: `rgba(${varBsDarkRgb}, ${varBsLinkUnderlineOpacity}) !important`,
})

globalStyle(`${luxScope}${linkUnderline}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
	WebkitTextDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
	textDecorationColor: `rgba(${varBsLinkColorRgb}, ${fallbackVar(varBsLinkUnderlineOpacity, '1')}) !important`,
})

globalStyle(`${luxScope}${linkUnderlineOpacity0}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity0Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity10}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity10Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity25}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity25Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity50}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity50Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity75}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity75Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity100}`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${luxScope}${linkUnderlineOpacity100Hover}:hover`, {
	vars: {
		[varBsLinkUnderlineOpacity]: '1',
	},
})

globalStyle(`${luxScope}${bgBlack}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBlackRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgWhite}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsWhiteRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgBody}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(${varBsBodyBgRgb}, ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgTransparent}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: 'transparent !important',
})

globalStyle(`${luxScope}${bgBodySecondary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-secondary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgBodyTertiary}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
	backgroundColor: `rgba(var(--bs-tertiary-bg-rgb), ${varBsBgOpacity}) !important`,
})

globalStyle(`${luxScope}${bgOpacity10}`, {
	vars: {
		[varBsBgOpacity]: '0.1',
	},
})

globalStyle(`${luxScope}${bgOpacity25}`, {
	vars: {
		[varBsBgOpacity]: '0.25',
	},
})

globalStyle(`${luxScope}${bgOpacity50}`, {
	vars: {
		[varBsBgOpacity]: '0.5',
	},
})

globalStyle(`${luxScope}${bgOpacity75}`, {
	vars: {
		[varBsBgOpacity]: '0.75',
	},
})

globalStyle(`${luxScope}${bgOpacity100}`, {
	vars: {
		[varBsBgOpacity]: '1',
	},
})

globalStyle(`${luxScope}${bgPrimarySubtle}`, {
	backgroundColor: `${varBsPrimaryBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgSecondarySubtle}`, {
	backgroundColor: `${varBsSecondaryBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgSuccessSubtle}`, {
	backgroundColor: `${varBsSuccessBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgInfoSubtle}`, {
	backgroundColor: `${varBsInfoBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgWarningSubtle}`, {
	backgroundColor: `${varBsWarningBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgDangerSubtle}`, {
	backgroundColor: `${varBsDangerBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgLightSubtle}`, {
	backgroundColor: `${varBsLightBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgDarkSubtle}`, {
	backgroundColor: `${varBsDarkBgSubtle} !important`,
})

globalStyle(`${luxScope}${bgGradient}`, {
	backgroundImage: `${varBsGradient} !important`,
})

globalStyle(`${luxScope}${userSelectAll}`, {
	WebkitUserSelect: 'all !important',
	MozUserSelect: 'all !important',
	userSelect: 'all !important',
})

globalStyle(`${luxScope}${userSelectAuto}`, {
	WebkitUserSelect: 'auto !important',
	MozUserSelect: 'auto !important',
	userSelect: 'auto !important',
})

globalStyle(`${luxScope}${userSelectNone}`, {
	WebkitUserSelect: 'none !important',
	MozUserSelect: 'none !important',
	userSelect: 'none !important',
})

globalStyle(`${luxScope}${peNone}`, {
	pointerEvents: 'none !important',
})

globalStyle(`${luxScope}${peAuto}`, {
	pointerEvents: 'auto !important',
})

globalStyle(`${luxScope}${rounded0}`, {
	borderRadius: '0 !important',
})

globalStyle(`${luxScope}${rounded1}`, {
	borderRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${rounded2}`, {
	borderRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${rounded3}`, {
	borderRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${rounded4}`, {
	borderRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${rounded5}`, {
	borderRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedCircle}`, {
	borderRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedTop}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedTop0}`, {
	borderTopLeftRadius: '0 !important',
	borderTopRightRadius: '0 !important',
})

globalStyle(`${luxScope}${roundedTop1}`, {
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${roundedTop2}`, {
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
	borderTopRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedTop3}`, {
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${roundedTop4}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${roundedTop5}`, {
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedTopCircle}`, {
	borderTopLeftRadius: '50% !important',
	borderTopRightRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedTopPill}`, {
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${roundedEnd}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedEnd0}`, {
	borderTopRightRadius: '0 !important',
	borderBottomRightRadius: '0 !important',
})

globalStyle(`${luxScope}${roundedEnd1}`, {
	borderTopRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${roundedEnd2}`, {
	borderTopRightRadius: `${varBsBorderRadius} !important`,
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedEnd3}`, {
	borderTopRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${roundedEnd4}`, {
	borderTopRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${roundedEnd5}`, {
	borderTopRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedEndCircle}`, {
	borderTopRightRadius: '50% !important',
	borderBottomRightRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedEndPill}`, {
	borderTopRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${roundedBottom}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedBottom0}`, {
	borderBottomRightRadius: '0 !important',
	borderBottomLeftRadius: '0 !important',
})

globalStyle(`${luxScope}${roundedBottom1}`, {
	borderBottomRightRadius: `${varBsBorderRadiusSm} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${roundedBottom2}`, {
	borderBottomRightRadius: `${varBsBorderRadius} !important`,
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedBottom3}`, {
	borderBottomRightRadius: `${varBsBorderRadiusLg} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${roundedBottom4}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${roundedBottom5}`, {
	borderBottomRightRadius: `${varBsBorderRadiusXxl} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedBottomCircle}`, {
	borderBottomRightRadius: '50% !important',
	borderBottomLeftRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedBottomPill}`, {
	borderBottomRightRadius: `${varBsBorderRadiusPill} !important`,
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${roundedStart}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedStart0}`, {
	borderBottomLeftRadius: '0 !important',
	borderTopLeftRadius: '0 !important',
})

globalStyle(`${luxScope}${roundedStart1}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusSm} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusSm} !important`,
})

globalStyle(`${luxScope}${roundedStart2}`, {
	borderBottomLeftRadius: `${varBsBorderRadius} !important`,
	borderTopLeftRadius: `${varBsBorderRadius} !important`,
})

globalStyle(`${luxScope}${roundedStart3}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusLg} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusLg} !important`,
})

globalStyle(`${luxScope}${roundedStart4}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXl} !important`,
})

globalStyle(`${luxScope}${roundedStart5}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusXxl} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusXxl} !important`,
})

globalStyle(`${luxScope}${roundedStartCircle}`, {
	borderBottomLeftRadius: '50% !important',
	borderTopLeftRadius: '50% !important',
})

globalStyle(`${luxScope}${roundedStartPill}`, {
	borderBottomLeftRadius: `${varBsBorderRadiusPill} !important`,
	borderTopLeftRadius: `${varBsBorderRadiusPill} !important`,
})

globalStyle(`${luxScope}${visible}`, {
	visibility: 'visible !important',
})

globalStyle(`${luxScope}${invisible}`, {
	visibility: 'hidden !important',
})

globalStyle(`${luxScope}${zN1}`, {
	zIndex: '-1 !important',
})

globalStyle(`${luxScope}${z0}`, {
	zIndex: '0 !important',
})

globalStyle(`${luxScope}${z1}`, {
	zIndex: '1 !important',
})

globalStyle(`${luxScope}${z2}`, {
	zIndex: '2 !important',
})

globalStyle(`${luxScope}${z3}`, {
	zIndex: '3 !important',
})

globalStyle(`${luxScope}${floatSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmContain}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmCover}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmScale}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dSmInline}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dSmInlineBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dSmBlock}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dSmGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dSmInlineGrid}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dSmTable}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dSmTableRow}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dSmTableCell}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dSmFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dSmInlineFlex}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dSmNone}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmFill}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmRow}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmColumn}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmRowReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmColumnReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmGrow0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmGrow1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmShrink0}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmShrink1}`, {
	'@media': {
		'(min-width: 576px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmWrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmNowrap}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexSmWrapReverse}`, {
	'@media': {
		'(min-width: 576px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentSmEvenly}`, {
	'@media': {
		'(min-width: 576px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmBetween}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmAround}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmBaseline}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfSmStretch}`, {
	'@media': {
		'(min-width: 576px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderSmFirst}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderSmLast}`, {
	'@media': {
		'(min-width: 576px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mySmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msSmAuto}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pySm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pySm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm0}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm1}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm2}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm3}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm4}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapSm5}`, {
	'@media': {
		'(min-width: 576px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textSmCenter}`, {
	'@media': {
		'(min-width: 576px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${floatMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdContain}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdCover}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdScale}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dMdInline}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dMdInlineBlock}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dMdGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dMdInlineGrid}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dMdTable}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dMdTableRow}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dMdTableCell}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dMdFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dMdInlineFlex}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dMdNone}`, {
	'@media': {
		'(min-width: 768px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdFill}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdRow}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdColumn}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdRowReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdColumnReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdGrow0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdGrow1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdShrink0}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdShrink1}`, {
	'@media': {
		'(min-width: 768px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdWrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdNowrap}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexMdWrapReverse}`, {
	'@media': {
		'(min-width: 768px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentMdEvenly}`, {
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdBetween}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdAround}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdBaseline}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfMdStretch}`, {
	'@media': {
		'(min-width: 768px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderMdFirst}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderMdLast}`, {
	'@media': {
		'(min-width: 768px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${myMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${myMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${myMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msMdAuto}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd0}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd1}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd2}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd3}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd4}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapMd5}`, {
	'@media': {
		'(min-width: 768px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textMdCenter}`, {
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${floatLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgContain}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgCover}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgScale}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitLgNone}`, {
	'@media': {
		'(min-width: 992px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dLgInline}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dLgInlineBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dLgBlock}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dLgGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dLgInlineGrid}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dLgTable}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dLgTableRow}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dLgTableCell}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dLgFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dLgInlineFlex}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgFill}`, {
	'@media': {
		'(min-width: 992px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgRow}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgColumn}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgRowReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgColumnReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgGrow0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgGrow1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgShrink0}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgShrink1}`, {
	'@media': {
		'(min-width: 992px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgWrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgNowrap}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexLgWrapReverse}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentLgEvenly}`, {
	'@media': {
		'(min-width: 992px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgBetween}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgAround}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgBaseline}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfLgStretch}`, {
	'@media': {
		'(min-width: 992px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderLgFirst}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderLgLast}`, {
	'@media': {
		'(min-width: 992px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${myLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${myLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${myLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msLgAuto}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg0}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg1}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg2}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg3}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg4}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapLg5}`, {
	'@media': {
		'(min-width: 992px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textLgCenter}`, {
	'@media': {
		'(min-width: 992px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${floatXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlContain}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlCover}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlScale}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dXlInline}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dXlInlineBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dXlBlock}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dXlGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dXlInlineGrid}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dXlTable}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dXlTableRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dXlTableCell}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dXlFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dXlInlineFlex}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dXlNone}`, {
	'@media': {
		'(min-width: 1200px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlFill}`, {
	'@media': {
		'(min-width: 1200px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlRow}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlColumn}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlRowReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlColumnReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlGrow0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlGrow1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlShrink0}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlShrink1}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlWrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlNowrap}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexXlWrapReverse}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXlEvenly}`, {
	'@media': {
		'(min-width: 1200px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlBetween}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlAround}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlBaseline}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXlStretch}`, {
	'@media': {
		'(min-width: 1200px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderXlFirst}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXlLast}`, {
	'@media': {
		'(min-width: 1200px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${myXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${myXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXlAuto}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl0}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl1}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl2}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl3}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl4}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXl5}`, {
	'@media': {
		'(min-width: 1200px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textXlCenter}`, {
	'@media': {
		'(min-width: 1200px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${floatXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${floatXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${floatXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			float: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlContain}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'contain !important',
			objectFit: 'contain !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlCover}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'cover !important',
			objectFit: 'cover !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'fill !important',
			objectFit: 'fill !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlScale}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'scale-down !important',
			objectFit: 'scale-down !important',
		},
	},
})

globalStyle(`${luxScope}${objectFitXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			OObjectFit: 'none !important',
			objectFit: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlInline}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlInlineBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlBlock}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlInlineGrid}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlTable}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlTableRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlTableCell}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlInlineFlex}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dXxlNone}`, {
	'@media': {
		'(min-width: 1400px)': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlFill}`, {
	'@media': {
		'(min-width: 1400px)': {
			flex: '1 1 auto !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlRow}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlColumn}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlRowReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlColumnReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'column-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlGrow0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlGrow1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexGrow: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlShrink0}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlShrink1}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexShrink: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlWrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlNowrap}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'nowrap !important',
		},
	},
})

globalStyle(`${luxScope}${flexXxlWrapReverse}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexWrap: 'wrap-reverse !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${justifyContentXxlEvenly}`, {
	'@media': {
		'(min-width: 1400px)': {
			justifyContent: 'space-evenly !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignItemsXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignItems: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlBetween}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-between !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlAround}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'space-around !important',
		},
	},
})

globalStyle(`${luxScope}${alignContentXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignContent: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-start !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'flex-end !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlBaseline}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'baseline !important',
		},
	},
})

globalStyle(`${luxScope}${alignSelfXxlStretch}`, {
	'@media': {
		'(min-width: 1400px)': {
			alignSelf: 'stretch !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxlFirst}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '-1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '1 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '2 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '3 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '4 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '5 !important',
		},
	},
})

globalStyle(`${luxScope}${orderXxlLast}`, {
	'@media': {
		'(min-width: 1400px)': {
			order: '6 !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			margin: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.25rem !important',
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1.5rem !important',
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mxXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.25rem !important',
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1.5rem !important',
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${myXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mtXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${meXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginRight: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${mbXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginBottom: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${msXxlAuto}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: 'auto !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			padding: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.25rem !important',
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1.5rem !important',
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pxXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.25rem !important',
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1.5rem !important',
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pyXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${ptXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingTop: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${peXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${pbXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingBottom: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${psXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingLeft: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${gapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			gap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${rowGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			rowGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl0}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0 !important',
			columnGap: '0 !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl1}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.25rem !important',
			columnGap: '0.25rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl2}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '0.5rem !important',
			columnGap: '0.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl3}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1rem !important',
			columnGap: '1rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl4}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '1.5rem !important',
			columnGap: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${columnGapXxl5}`, {
	'@media': {
		'(min-width: 1400px)': {
			MozColumnGap: '3rem !important',
			columnGap: '3rem !important',
		},
	},
})

globalStyle(`${luxScope}${textXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'left !important',
		},
	},
})

globalStyle(`${luxScope}${textXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'right !important',
		},
	},
})

globalStyle(`${luxScope}${textXxlCenter}`, {
	'@media': {
		'(min-width: 1400px)': {
			textAlign: 'center !important',
		},
	},
})

globalStyle(`${luxScope}${fs1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem !important',
		},
	},
})

globalStyle(`${luxScope}${fs2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem !important',
		},
	},
})

globalStyle(`${luxScope}${fs3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintInline}`, {
	'@media': {
		'print': {
			display: 'inline !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintInlineBlock}`, {
	'@media': {
		'print': {
			display: 'inline-block !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintBlock}`, {
	'@media': {
		'print': {
			display: 'block !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintGrid}`, {
	'@media': {
		'print': {
			display: 'grid !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintInlineGrid}`, {
	'@media': {
		'print': {
			display: 'inline-grid !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintTable}`, {
	'@media': {
		'print': {
			display: 'table !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintTableRow}`, {
	'@media': {
		'print': {
			display: 'table-row !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintTableCell}`, {
	'@media': {
		'print': {
			display: 'table-cell !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintFlex}`, {
	'@media': {
		'print': {
			display: 'flex !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintInlineFlex}`, {
	'@media': {
		'print': {
			display: 'inline-flex !important',
		},
	},
})

globalStyle(`${luxScope}${dPrintNone}`, {
	'@media': {
		'print': {
			display: 'none !important',
		},
	},
})

globalStyle(`${luxScope}${borderSecondary}`, {
	border: '1px solid #cdcecf !important',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControlPlaintext} ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControlPlaintext}::placeholder`, {
	color: 'transparent',
})
