import fs from 'node:fs'
import path from 'node:path'

const roots = ['ve-project/src/components/contents', 've-project/src/components/ui']

function walk(dir, out = []) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name)
		if (entry.isDirectory()) walk(full, out)
		else if (entry.isFile() && full.endsWith('.tsx')) out.push(full)
	}
	return out
}

function normalizeTemplateContent(content) {
	const tokens = content.split(/\s+/).filter(Boolean)
	const kept = []
	for (const token of tokens) {
		if (/^\$\{[^}]+\}$/.test(token)) {
			kept.push(token)
			continue
		}
		if (token === 'bd-example') {
			kept.push(token)
		}
	}
	return kept.join(' ')
}

function transformFile(source) {
	let text = source

	text = text.replace(/\s+class(Name)?="([^"]*)"/g, (_m, nameSuffix, classTokens) => {
		const kept = classTokens
			.split(/\s+/)
			.filter((t) => t === 'bd-example')
			.join(' ')
		if (!kept) return ''
		return ` class${nameSuffix || ''}="${kept}"`
	})

	text = text.replace(/\s+class(Name)?=\{`([^`]*)`\}/g, (_m, nameSuffix, content) => {
		const kept = normalizeTemplateContent(content)
		if (!kept) return ''
		return ` class${nameSuffix || ''}={\`${kept}\`}`
	})

	text = text.replace(/<([A-Za-z][^\s/>]*)(\s{2,})/g, '<$1 ')
	return text
}

function countViolations(source) {
	let total = 0
	let match

	const quoted = /class(?:Name)?="([^"]*)"/g
	while ((match = quoted.exec(source)) !== null) {
		for (const token of match[1].split(/\s+/).filter(Boolean)) {
			if (token !== 'bd-example') total++
		}
	}

	const templated = /class(?:Name)?=\{`([^`]*)`\}/g
	while ((match = templated.exec(source)) !== null) {
		for (const token of match[1].split(/\s+/).filter(Boolean)) {
			if (/^\$\{[^}]+\}$/.test(token)) continue
			if (token !== 'bd-example') total++
		}
	}

	return total
}

const files = roots.flatMap((root) => walk(root))
let changedFiles = 0
let beforeViolations = 0
let afterViolations = 0

for (const file of files) {
	const original = fs.readFileSync(file, 'utf8')
	beforeViolations += countViolations(original)
	const transformed = transformFile(original)
	afterViolations += countViolations(transformed)
	if (transformed !== original) {
		fs.writeFileSync(file, transformed, 'utf8')
		changedFiles++
	}
}

console.log(
	JSON.stringify(
		{
			filesScanned: files.length,
			changedFiles,
			beforeViolations,
			afterViolations,
		},
		null,
		2,
	),
)
