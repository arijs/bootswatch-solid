import { style } from '@vanilla-extract/css'
import { varBsGutterX, varBsGutterY } from '../../theme-contract/_vars.css'

export const containerBase = style({
	vars: {
		[varBsGutterX]: '1.5em',
		[varBsGutterY]: '0',
	},
	width: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginRight: 'auto',
	marginLeft: 'auto',
})

export const containerFluid = style([containerBase])

const containerMq1400 = {
	'(min-width: 1400px)': {
		maxWidth: '1320px',
	},
}
const containerMq1200 = {
	'(min-width: 1200px)': {
		maxWidth: '1140px',
	},
}
const containerMq992 = {
	'(min-width: 992px)': {
		maxWidth: '960px',
	},
}
const containerMq768 = {
	'(min-width: 768px)': {
		maxWidth: '720px',
	},
}
const containerMq576 = {
	'(min-width: 576px)': {
		maxWidth: '540px',
	},
}

export const containerXxl = style([
	containerBase,
	{
		'@media': { ...containerMq1400 },
	},
])

export const containerXl = style([
	containerBase,
	{
		'@media': {
			...containerMq1200,
			...containerMq1400,
		},
	},
])

export const containerLg = style([
	containerBase,
	{
		'@media': {
			...containerMq992,
			...containerMq1200,
			...containerMq1400,
		},
	},
])

export const containerMd = style([
	containerBase,
	{
		'@media': {
			...containerMq768,
			...containerMq992,
			...containerMq1200,
			...containerMq1400,
		},
	},
])

export const containerSm = style([
	containerBase,
	{
		'@media': {
			...containerMq576,
			...containerMq768,
			...containerMq992,
			...containerMq1200,
			...containerMq1400,
		},
	},
])

export const container = style([containerSm])

/*

.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm { --bs-gutter-x: 1.5rem; 
--bs-gutter-y: 0; 
width: 100%; 
padding-right: calc(var(--bs-gutter-x) * 0.5); 
padding-left: calc(var(--bs-gutter-x) * 0.5); 
margin-right: auto; 
margin-left: auto; 
}
@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}

*/
