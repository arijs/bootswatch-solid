// Núcleo PURO da montagem de classes de utility (sem Solid) — testável direto.
// Prefixa cada token de utility; aceita strings multi-classe e/ou arrays,
// ignora vazios. Com prefixo '' devolve intacto.

export function prefixClasses(prefix, classes) {
	return classes
		.filter(Boolean)
		.join(' ')
		.split(/\s+/)
		.filter(Boolean)
		.map((c) => prefix + c)
		.join(' ')
}
