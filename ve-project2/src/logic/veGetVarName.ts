const reVarWrapper = /^var\((.*)\)$/
export function getVarName(variable: string): string {
	const matches = variable.match(reVarWrapper)

	if (matches) {
		return matches[1]
	}

	return variable
}
