import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

import { varBsBorderWidth } from '../../../../theme-contract/_vars.css'

import { btnGroupVertical } from '../../../../theme-contract/literal/contract.css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'

globalStyle(`${morphScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${morphScope}${btnGroupVertical}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
})

globalStyle(`${morphScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${morphScope}${btnGroup}`, {
	borderRadius: '50rem',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnGroup}:not(:first-child)`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${morphScope}${btnGroupVertical}`, {
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}`, {
	width: '100%',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${morphScope}${btnGroup}`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	borderRadius: '50rem',
})

globalStyle(`${morphScope}${btnGroupVertical}`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	borderRadius: '50rem',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btnGroup}`, {
	margin: '0',
	border: 'none',
	boxShadow: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btnGroup}`, {
	margin: '0',
	border: 'none',
	boxShadow: 'none',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btnGroup}:hover`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btnGroup}:active`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btnGroup}:focus`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btnGroup}:active:focus`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btnGroup}:hover`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btnGroup}:active`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btnGroup}:focus`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btnGroup}:active:focus`, {
	border: 'none',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${btnGroup}`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.05)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	color: 'rgba(255, 255, 255, 0.75)',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${btnGroupVertical}`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.05)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	color: 'rgba(255, 255, 255, 0.75)',
})

globalStyle(`${morphScope}${btnGroupVertical}`, {
	borderRadius: '1rem',
})
