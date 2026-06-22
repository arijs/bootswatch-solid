import { globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../../scope.css'

import { varBsHeadingColor } from '../../../../theme-contract/_vars.css'

import {
	bgDanger,
	bgInfo,
	bgPrimary,
	bgSuccess,
	bgWarning,
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'
import { bgDark } from '../../../../theme-contract/utilities/contract.css'

globalStyle(`${ceruleanScope}${clsH6}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH5}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH4}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH3}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH2}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH1}`, {
	marginTop: '0',
	marginBottom: '0.5rem',
	fontWeight: '500',
	lineHeight: '1.2',
	color: varBsHeadingColor,
})

globalStyle(`${ceruleanScope}${clsH1}`, {
	fontSize: 'calc(1.375rem + 1.5vw)',
})

globalStyle(`${ceruleanScope}${clsH1}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2.5rem',
		},
	},
})

globalStyle(`${ceruleanScope}${clsH2}`, {
	fontSize: 'calc(1.325rem + 0.9vw)',
})

globalStyle(`${ceruleanScope}${clsH2}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '2rem',
		},
	},
})

globalStyle(`${ceruleanScope}${clsH3}`, {
	fontSize: 'calc(1.3rem + 0.6vw)',
})

globalStyle(`${ceruleanScope}${clsH3}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.75rem',
		},
	},
})

globalStyle(`${ceruleanScope}${clsH4}`, {
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${ceruleanScope}${clsH4}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${ceruleanScope}${clsH5}`, {
	fontSize: '1.25rem',
})

globalStyle(`${ceruleanScope}${clsH6}`, {
	fontSize: '1rem',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgPrimary} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgSuccess} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgInfo} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgWarning} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDanger} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${ceruleanScope}${bgDark} ${ceruleanScope}${clsH6}`, {
	color: '#fff',
})
