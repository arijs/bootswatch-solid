import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	active,
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'
import { alert } from '../../../../theme-contract/ui/alerts/contract.css'
import { carouselCaption } from '../../../../theme-contract/ui/carousel/contract.css'
import { listGroupItemAction } from '../../../../theme-contract/ui/list-group/contract.css'

globalStyle(`${materiaScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${materiaScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${materiaScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${materiaScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${materiaScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${materiaScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${materiaScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH1}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH2}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH3}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH4}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH5}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${carouselCaption} ${materiaScope}${clsH6}`, {
	color: 'inherit',
})
