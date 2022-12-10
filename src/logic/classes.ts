
type ClassRec = Record<string, boolean>
type ClassMono = string | ClassRec
type ClassList = ClassMono[]
export type ClassArg = ClassMono | ClassList

export function classes(...c: (ClassArg | undefined)[]) {
	const clist: string[] = []
	const handleString = (s: string) => clist.push(s)
	const handleRecord = (r: ClassRec) => Object.entries(r).filter(([k, v]) => v).map(([k]) => handleString(k))
	const handleMono = (m: ClassMono) => 'string' === typeof m
		? handleString(m)
		: handleRecord(m)
	const handleList = (l: ClassList) => l.forEach(x => handleMono(x))
	c.forEach(x => x instanceof Array ? handleList(x) : x && handleMono(x))
	return clist.join(' ')
}
