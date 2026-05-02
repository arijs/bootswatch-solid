// crossorigin="anonymous"

import { createSignal } from 'solid-js'

export interface ThemeItem {
	name: string
	href: string
	integrity: string | undefined
}

export const themeList: ThemeItem[] = [
	{
		name: `Bootstrap`,
		href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.css',
		integrity: 'sha256-SlAge5VqSrlDZA7pkxGLVUo06WojJhz+WLmqGAenhJs=',
	},
	{
		name: `Brite`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/brite/bootstrap.css',
		integrity: 'sha256-6IcDJPqcF/l84bTC99wHd7HrIC+RGvyGd57tINx6Px0=',
	},
	{
		name: `Cerulean`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/cerulean/bootstrap.css',
		integrity: 'sha256-Smxq4Z4y+nJBQGfYf834+X7GA41QKFHyhOyHYm0soVU=',
	},
	{
		name: `Cosmo`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/cosmo/bootstrap.css',
		integrity: 'sha256-lO3nQyO8EYDYhUJQxYQG/NqELg7AlmoMxR7BMY19jGo=',
	},
	{
		name: `Cyborg`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/cyborg/bootstrap.css',
		integrity: 'sha256-b/a2A+XEGikx12PtD73EatxxBOZDvdy4HdT7pDnD1uE=',
	},
	{
		name: `Darkly`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/darkly/bootstrap.css',
		integrity: 'sha256-dcn7fleT63N5viz59vpz3tg64RuljK/OTG5B3v0tQ+s=',
	},
	{
		name: `Flatly`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/flatly/bootstrap.css',
		integrity: 'sha256-/n+mew/ya3NYxGXLZcKh+htsbhUolsR/Qnwn1CN5Ae4=',
	},
	{
		name: `Journal`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/journal/bootstrap.css',
		integrity: 'sha256-/E/3RvBwtrd85n3A6sqEvve4hGKc1Hd/inGOwceVzsg=',
	},
	{
		name: `Litera`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/litera/bootstrap.css',
		integrity: 'sha256-pQvEtIM89mCsIfTj3tlaIALU50nQCt7/RpKFT5zq78A=',
	},
	{
		name: `Lumen`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/lumen/bootstrap.css',
		integrity: 'sha256-ZnMIcRjmiz3wJsR1hDl+HcCvu+ixIYRg2DxdWZj/uqs=',
	},
	{
		name: `Lux`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/lux/bootstrap.css',
		integrity: 'sha256-7hxA4k68sT9qElr+Hd32oU3UXDBIFBSOUD/tq4EK3gk=',
	},
	{
		name: `Materia`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/materia/bootstrap.css',
		integrity: 'sha256-S0mQl4WupRSlItJ0Y9sO3BRc4lP/mYFnPSl7i8HK1Mc=',
	},
	{
		name: `Minty`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/minty/bootstrap.css',
		integrity: 'sha256-WSA+8CNeYzZcQO8H+FBwmF2eTZFayjiroUOsTPygPKE=',
	},
	{
		name: `Morph`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/morph/bootstrap.css',
		integrity: 'sha256-55hFxhc/ItQYE6ueE4ADGt2RJVu0sEh1CbkLaa2fpRY=',
	},
	{
		name: `Pulse`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/pulse/bootstrap.css',
		integrity: 'sha256-Ly+CGKera8tEM1Sy0m7eln/XgJxLv77nmzTcGccSokI=',
	},
	{
		name: `Quartz`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/quartz/bootstrap.css',
		integrity: 'sha256-fVvD9e+jH4I+0kjjyZ9HNNBjZ+KNkkQ11SczQJsVRQg=',
	},
	{
		name: `Sandstone`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/sandstone/bootstrap.css',
		integrity: 'sha256-WO5jquBOsBifQk0y7noGyh/flCbJt0g/V3LM+o6UOnI=',
	},
	{
		name: `Simplex`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/simplex/bootstrap.css',
		integrity: 'sha256-96e7r/vV3pLNg+cMhoejX2A4SxQelK2MwGkjj3wazL4=',
	},
	{
		name: `Sketchy`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/sketchy/bootstrap.css',
		integrity: 'sha256-V+7ThF4dZDzyz6f0ByMhB9HQJmbOJZDD8p2ENXaOOGM=',
	},
	{
		name: `Slate`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/slate/bootstrap.css',
		integrity: 'sha256-jBIWUDmoEQPxIpHopQM3JWxJPUlk5ycK+xlOT6lY6hk=',
	},
	{
		name: `Solar`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/solar/bootstrap.css',
		integrity: 'sha256-qO2/vxE5tZkoR9nIPJHHY/RyYOwlczqEyWufN/utmeI=',
	},
	{
		name: `Spacelab`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/spacelab/bootstrap.css',
		integrity: 'sha256-tdyezeAoGf8cVEru7OJeCY8jmTAqh312k83/8XlvkFE=',
	},
	{
		name: `Superhero`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/superhero/bootstrap.css',
		integrity: 'sha256-Zi1L8B8/FVineXT0/F/RaiRyctuykV3VXBpYwqfL6L4=',
	},
	{
		name: `United`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/united/bootstrap.css',
		integrity: 'sha256-TTMvxOQsmsao2kC8ixqT4sJesDeSzdWC0tQKYyPbsjQ=',
	},
	{
		name: `Vapor`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/vapor/bootstrap.css',
		integrity: 'sha256-/MlXJOt7rlF2nqoY/t6Tf7WrJDStkc5r4arRepm1wnc=',
	},
	{
		name: `Yeti`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/yeti/bootstrap.css',
		integrity: 'sha256-uAJqAWJ8++xwt6Q5nIRwbGCpKkLXDrc/W01N3oH3jRE=',
	},
	{
		name: `Zephyr`,
		href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.8/dist/zephyr/bootstrap.css',
		integrity: 'sha256-xjgjsiPfTVwAiqTOOGYyIzytmZjdw0xu3CvmT5IclAE=',
	},
]

type CssMode = 'cdn' | 'local'

const globalThemeCssSel = `html > head > link[data-theme-css="global"]`
const componentThemeCssSel = `html > head > link[data-theme-css="component"]`

function slugifyThemeName(name: string) {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
}

function getCssMode(): CssMode {
	const css = new URLSearchParams(window.location.search).get('css')
	return css === 'local' ? 'local' : 'cdn'
}

function getLocalStateParam() {
	const state = new URLSearchParams(window.location.search).get('state')?.trim()
	return state || 'static'
}

function getLocalRoutePath() {
	const raw = window.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '')
	return raw
}

function resolveThemeHref(theme: ThemeItem, mode: CssMode) {
	if (mode === 'cdn') {
		// if (theme.name === 'Bootstrap') {}
		return `/theme/${slugifyThemeName(theme.name)}/bootstrap.css`
		// return theme.href
	}
	return `/theme/${slugifyThemeName(theme.name)}/theme.css`
}

function resolveComponentHref(theme: ThemeItem) {
	const routePath = getLocalRoutePath()
	if (!routePath) return null
	return `/theme/${slugifyThemeName(theme.name)}/${routePath}/${getLocalStateParam()}/style.css`
}

function removeComponentCssLink() {
	const existing = document.querySelector(componentThemeCssSel)
	existing?.parentElement?.removeChild(existing)
}

function ensureThemeCssLink(kind: 'global' | 'component') {
	const selector = kind === 'global' ? globalThemeCssSel : componentThemeCssSel
	const existing = document.querySelector(selector)
	if (existing) return existing as HTMLLinkElement
	const link = document.createElement('link')
	link.setAttribute('rel', 'stylesheet')
	link.setAttribute('data-theme-css', kind)
	document.head.appendChild(link)
	return link
}

export function themeLinkMatch(el: Element, t: ThemeItem) {
	const mode = getCssMode()
	return el.matches(globalThemeCssSel) && el.getAttribute('href') === resolveThemeHref(t, mode)
}

export function themeBuildCssLink(t: ThemeItem) {
	const link = document.createElement(`link`)
	link.setAttribute('rel', 'stylesheet')
	link.setAttribute('data-theme-css', 'global')
	themeApplyGlobalLink(link, t)
	return link
}

function themeApplyGlobalLink(link: HTMLLinkElement, theme: ThemeItem) {
	const mode = getCssMode()
	if (mode === 'cdn') {
		link.setAttribute('crossorigin', 'anonymous')
		if (theme.integrity) {
			link.setAttribute('integrity', theme.integrity)
		} else {
			link.removeAttribute('integrity')
		}
	} else {
		link.removeAttribute('crossorigin')
		link.removeAttribute('integrity')
	}
	link.setAttribute('href', resolveThemeHref(theme, mode))
}

export function themeGetCurrent(defaultTheme: ThemeItem) {
	themeSetActive(defaultTheme)
	return defaultTheme
}

function getGlobalCssLink() {
	return document.querySelector(globalThemeCssSel) as HTMLLinkElement | null
}

export function themeSetActive(t: ThemeItem) {
	const globalLink = getGlobalCssLink() ?? ensureThemeCssLink('global')
	themeApplyGlobalLink(globalLink, t)

	if (getCssMode() === 'local') {
		const componentHref = resolveComponentHref(t)
		if (!componentHref) {
			removeComponentCssLink()
			return
		}
		const componentLink = ensureThemeCssLink('component')
		componentLink.removeAttribute('crossorigin')
		componentLink.removeAttribute('integrity')
		componentLink.setAttribute('href', componentHref)
		return
	}

	removeComponentCssLink()
}
function getDefaultTheme() {
	const name = new URLSearchParams(window.location.search).get(`theme`)
	const found = name
		? themeList.find((t) => t.name.toLowerCase() === name.toLowerCase())
		: undefined
	return found ?? themeList[0]
}
export const [signalTheme, setSignalTheme] = createSignal<ThemeItem>(
	themeGetCurrent(getDefaultTheme()),
)
