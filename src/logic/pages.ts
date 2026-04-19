export function pages(n: number, steps: number[], offset = 0) {
	if (!Array.isArray(steps)) steps = [1, 2, 5, 10]
	const m = n * 0.5
	let mult = 1
	const d: number[] = []
	let si = 0
	let sc = steps.length
	let sl = 0
	while (si < sc) {
		const sp = steps[si]
		const p = sp * mult
		if (p > m) {
			sl = p
			break
		}
		d.push(p + offset)
		si += 1
		if (si === sc) {
			mult *= steps[si - 1]
			si = steps[0] > 1 ? 0 : 1
		}
	}
	const dr = []
	for (si = 0, sc = d.length; si < sc; si++) {
		dr.unshift(n + 1 - (d[si] - offset) + offset)
	}
	const dm = sl > 0 && sl < n + 1 && (!dr.length || sl + offset < dr[0]) ? [sl + offset] : []
	// console.log(`Pages`, { n, steps, offset, d, dm, dr })
	return d.concat(dm, dr)
}

export function pagesCurrent(current: number, total: number, steps: number[]) {
	return current < 1 || total < current
		? pages(total, steps, 0)
		: pages(current - 1, steps, 0)
				.concat([current])
				.concat(pages(total - current, steps, current))
}
