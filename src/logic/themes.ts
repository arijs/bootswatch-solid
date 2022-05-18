// crossorigin="anonymous"

export interface ThemeItem {
	name: string,
	href: string,
	integrity: string,
}

export const themeList: ThemeItem[] = [
	{ name: `Bootstrap`, href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.css", integrity: "sha256-o+AsfCHj7A1M5Xgm1kJmZiGEIvMQEzQqrXz2072Gkkg=" },
	{ name: `Cerulean`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/cerulean/bootstrap.css", integrity: "sha256-9Ci/bTcLoqDai8cKGICDQhBD8MJUicGIjKv8NbmPTTg=" },
	{ name: `Cosmo`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/cosmo/bootstrap.css", integrity: "sha256-KaCoLbwsFR/dFQSuOrToyI+kcmNbb4zBHYpNPiZ8Gco=" },
	{ name: `Cyborg`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/cyborg/bootstrap.css", integrity: "sha256-+iGROJm/iBVga3IRfTKJCoG3m9MCKNj/EtYDu2K179M=" },
	{ name: `Darkly`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/darkly/bootstrap.css", integrity: "sha256-7C3Rf8s+M1gwnFt5Y/qNDYf7SVJLyNvS4x8lxb2BSVI=" },
	{ name: `Flatly`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/flatly/bootstrap.css", integrity: "sha256-ZMColkLaMHOtjTIduPRy2wxmTFU4JXKtB3cbLiI+Y6I=" },
	{ name: `Journal`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/journal/bootstrap.css", integrity: "sha256-r6gSCxAJ2CS0zdUZBEsqDNycpkKJK0pYPeViCi8tiJ0=" },
	{ name: `Litera`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/litera/bootstrap.css", integrity: "sha256-CID83h9kyOy4kLQZAfDArNWg71faKFcawG+PHELzweY=" },
	{ name: `Lumen`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/lumen/bootstrap.css", integrity: "sha256-mYtsejkiXZxQVGLjdbWV7ZkTBXkTRB2/ik4W0qC5xUM=" },
	{ name: `Lux`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/lux/bootstrap.css", integrity: "sha256-J+KZ/BTRlKV7yuf44aId3DLC8x+yuVZsh50Lf3yQmQc=" },
	{ name: `Materia`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/materia/bootstrap.css", integrity: "sha256-SxMJMwBzwF/Qu6NHZsLj0/dGthZqdUE09UuRf7WIqRo=" },
	{ name: `Minty`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/minty/bootstrap.css", integrity: "sha256-oZyJEA0xdNqqSgL/aMoPAAJluSatWmKXYYxnxuLspeg=" },
	{ name: `Morph`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/morph/bootstrap.css", integrity: "sha256-D/4ufkOismvjU9BlcB+0GPx2jhY4O5SF3qG9NUHMODU=" },
	{ name: `Pulse`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/pulse/bootstrap.css", integrity: "sha256-1NxuO+mIoTMYzhDG/VBLHTpzeZCFeE9n5aURtqFdvFQ=" },
	{ name: `Quartz`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/quartz/bootstrap.css", integrity: "sha256-TxG31rgdJnPkfhcxZ2V0L8LVurP9pIHq94QjVrXx1bs=" },
	{ name: `Sandstone`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/sandstone/bootstrap.css", integrity: "sha256-VwEw2Etv40ZfUJZbtiCvQF1XCNB9D4t+gT+U8sffxAs=" },
	{ name: `Simplex`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/simplex/bootstrap.css", integrity: "sha256-D+lP5ONuztYjX3EgaZ5YzDngDZ68PYs5Ech7O0MGuxA=" },
	{ name: `Sketchy`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/sketchy/bootstrap.css", integrity: "sha256-VWZOku2D9QoSaPAUH5CpXtvXLKkASil8wPMjw5xuL+s=" },
	{ name: `Slate`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/slate/bootstrap.css", integrity: "sha256-NQ08LfRGH2KHlNkNv1YCz8TGoW5et9FWHvCbmv39Tbs=" },
	{ name: `Solar`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/solar/bootstrap.css", integrity: "sha256-H7Cmwo7Mta6SG+Mu8oJ2NfTaIh7EYlE8jZqp77O65hI=" },
	{ name: `Spacelab`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/spacelab/bootstrap.css", integrity: "sha256-4mL8WbsCDoO7o5eWG0K5WUOOzuYk0wAA/gbxrP/sYBU=" },
	{ name: `Superhero`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/superhero/bootstrap.css", integrity: "sha256-Hm8kUc3J1BOBmOqN0zh5avEF0KRvLj1sucyPnF72ctU=" },
	{ name: `United`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/united/bootstrap.css", integrity: "sha256-C+HA4+HUcMm3druig/qcy3Z3Ltw028ziw/kINKLboNE=" },
	{ name: `Vapor`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/vapor/bootstrap.css", integrity: "sha256-bTo36IR5h/Ww7PAd93HYL0DdoW64Q8wyYM1sE96RQi0=" },
	{ name: `Yeti`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/yeti/bootstrap.css", integrity: "sha256-FdaJQZWkR5XccHvcs59ABu6jozHVKC9tFAgBC07Zt98=" },
	{ name: `Zephyr`, href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/zephyr/bootstrap.css", integrity: "sha256-3sN9G4oO+DxxzY/NZU8PTkOXStMl9GnFT5dvZfT3nuE=" },
]

const themeCssSel = `html > head > link[rel=stylesheet][href^="https://cdn.jsdelivr.net/"]`
export function themeLinkMatch(el: Element, t: ThemeItem) {
	return el.matches(themeCssSel) && el.getAttribute(`href`) === t.href
}
export function themeGetCurrent() {
	const allLinkCss = [...document.querySelectorAll(themeCssSel)]
	return themeList.find(t => allLinkCss.some(el => themeLinkMatch(el, t)))
}
function getCssLink() {
	return document.querySelector(themeCssSel)
}
export function themeSetActive(t: ThemeItem) {
	const l = getCssLink()
	l.setAttribute(`integrity`, t.integrity)
	l.setAttribute(`href`, t.href)
}
