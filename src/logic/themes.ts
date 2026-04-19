// crossorigin="anonymous"

import { createSignal } from 'solid-js'

export interface ThemeItem {
	name: string
	href: string
	integrity: string
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
		integrity: 'sha256-PoYo9znbQR4P+tsM0v+2CAD2BBfYCIffNIBMn/l0t6Q=',
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

const themeCssSel = `html > head > link[rel=stylesheet][href^="https://cdn.jsdelivr.net/"]`
export function themeLinkMatch(el: Element, t: ThemeItem) {
	return el.matches(themeCssSel) && el.getAttribute(`href`) === t.href
}
export function themeBuildCssLink(t: ThemeItem) {
	const link = document.createElement(`link`)
	link.setAttribute(`rel`, `stylesheet`)
	link.setAttribute(`crossorigin`, `anonymous`)
	link.setAttribute(`integrity`, t.integrity)
	link.setAttribute(`href`, t.href)
	return link
}
export function themeGetCurrent(defaultTheme: ThemeItem) {
	const allLinkCss = [...document.querySelectorAll(themeCssSel)]
	const found = themeList.find((t) => allLinkCss.some((el) => themeLinkMatch(el, t)))
	console.log(`logic/themes: find current theme`, allLinkCss, found)
	if (!found) {
		document.head.appendChild(themeBuildCssLink(defaultTheme))
		return defaultTheme
	}
	return found
}
function getCssLink() {
	return document.querySelector(themeCssSel)
}
export function themeSetActive(t: ThemeItem) {
	const l = getCssLink()
	l?.setAttribute(`integrity`, t.integrity)
	l?.setAttribute(`href`, t.href)
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
