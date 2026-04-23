import { style } from '@vanilla-extract/css'

export const dropdown = style({
	position: 'relative',
	display: 'inline-block',
})

export const dropup = style({
	position: 'relative',
	display: 'inline-block',
})

export const dropstart = style({
	position: 'relative',
	display: 'inline-block',
})

export const dropend = style({
	position: 'relative',
	display: 'inline-block',
})

export const btnGroup = style({
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

export const dropdownToggle = style({
	selectors: {
		'&::after': {
			display: 'inline-block',
			marginLeft: '0.255em',
			verticalAlign: '0.255em',
			content: "''",
			borderTop: '0.3em solid',
			borderRight: '0.3em solid transparent',
			borderBottom: 0,
			borderLeft: '0.3em solid transparent',
		},
		'&:empty::after': {
			marginLeft: 0,
		},
	},
})

export const dropdownToggleSplit = style({
	paddingRight: '0.5625em',
	paddingLeft: '0.5625em',
})

export const dropdownMenu = style({
	position: 'absolute',
	zIndex: 1000,
	display: 'none',
	minWidth: '10em',
	padding: '0.5em 0',
	margin: 0,
	marginTop: '0.125em',
	fontSize: '1em',
	color: '#212529',
	textAlign: 'left',
	listStyle: 'none',
	backgroundColor: '#fff',
	backgroundClip: 'padding-box',
	border: '1px solid rgba(0, 0, 0, 0.175)',
	borderRadius: '0.375em',
	left: 0,
	top: '100%',
})

export const dropdownMenuShow = style({
	display: 'block',
})

export const dropdownMenuEnd = style({
	left: 'auto',
	right: 0,
})

export const dropdownItem = style({
	display: 'block',
	width: '100%',
	padding: '0.25em 1em',
	clear: 'both',
	fontWeight: 400,
	color: '#212529',
	textAlign: 'inherit',
	textDecoration: 'none',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: 0,
	selectors: {
		'&:hover': {
			color: '#1e2125',
			backgroundColor: '#e9ecef',
		},
	},
})

export const dropdownHeader = style({
	display: 'block',
	padding: '0.5em 1em',
	marginBottom: 0,
	fontSize: '0.875em',
	color: '#6c757d',
	whiteSpace: 'nowrap',
})

export const dropdownDivider = style({
	height: 0,
	margin: '0.5em 0',
	overflow: 'hidden',
	borderTop: '1px solid rgba(0, 0, 0, 0.175)',
})

export const visuallyHidden = style({
	// vanilla-extract uses csstype which doesn't allow '!important' in values, so we have to cast it
	// https://github.com/vanilla-extract-css/vanilla-extract/issues/541
	// https://github.com/frenic/csstype/issues/114
	position: 'absolute !important' as 'absolute',
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

export const dropupToggle = style({
	selectors: {
		'&::after': {
			borderTop: 0,
			borderRight: '0.3em solid transparent',
			borderBottom: '0.3em solid',
			borderLeft: '0.3em solid transparent',
		},
	},
})

export const dropupMenu = style({
	top: 'auto',
	bottom: '100%',
	marginTop: 0,
	marginBottom: '0.125em',
})

export const dropendMenu = style({
	top: 0,
	left: '100%',
	right: 'auto',
	marginTop: 0,
	marginLeft: '0.125em',
})

export const dropendToggle = style({
	selectors: {
		'&::after': {
			verticalAlign: 0,
			borderTop: '0.3em solid transparent',
			borderRight: 0,
			borderBottom: '0.3em solid transparent',
			borderLeft: '0.3em solid',
		},
	},
})

export const dropstartMenu = style({
	top: 0,
	left: 'auto',
	right: '100%',
	marginTop: 0,
	marginRight: '0.125em',
})

export const dropstartToggle = style({
	selectors: {
		'&::before': {
			display: 'inline-block',
			marginRight: '0.255em',
			verticalAlign: '0.255em',
			content: "''",
			borderTop: '0.3em solid transparent',
			borderRight: '0.3em solid',
			borderBottom: '0.3em solid transparent',
		},
		'&::after': {
			display: 'none',
		},
	},
})