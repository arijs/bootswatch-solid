import fs from 'node:fs/promises'
import path from 'node:path'
import ts from 'typescript'

export const DEFAULT_SUBFOLDERS = ['contents', 'forms', 'ui']

export function xmlEscape(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
}

function xmlEscapeComment(value) {
	return value.replaceAll('--', '- -').trim()
}

export function splitWhitespaceTokens(value) {
	return value
		.split(/\s+/)
		.map((token) => token.trim())
		.filter(Boolean)
}

export function getLocation(sourceFile, node) {
	const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile))
	return `${sourceFile.fileName}:${line + 1}:${character + 1}`
}

export function fail(sourceFile, node, message) {
	throw new Error(`${getLocation(sourceFile, node)} ${message}`)
}

export function getRequestedFiles(args = process.argv.slice(2)) {
	return args.filter((filePath) => filePath !== '--').map((filePath) => path.resolve(filePath))
}

export async function findTSXFiles(componentsRoot, subfolders = DEFAULT_SUBFOLDERS) {
	const files = []
	for (const subfolder of subfolders) {
		await walk(path.join(componentsRoot, subfolder), files)
	}
	return files
}

async function walk(dirPath, files) {
	let entries = []
	try {
		entries = await fs.readdir(dirPath, { withFileTypes: true })
	} catch {
		return
	}

	for (const entry of entries) {
		const fullPath = path.join(dirPath, entry.name)
		if (entry.isDirectory()) {
			await walk(fullPath, files)
			continue
		}
		if (entry.isFile() && fullPath.endsWith('.tsx')) {
			files.push(fullPath)
		}
	}
}

function isFunctionLike(node) {
	return (
		ts.isFunctionDeclaration(node) ||
		ts.isFunctionExpression(node) ||
		ts.isArrowFunction(node) ||
		ts.isMethodDeclaration(node) ||
		ts.isGetAccessorDeclaration(node) ||
		ts.isSetAccessorDeclaration(node)
	)
}

function getFunctionName(node) {
	if (ts.isFunctionDeclaration(node) && node.name) {
		return node.name.text
	}
	if (ts.isFunctionExpression(node) && node.name) {
		return node.name.text
	}
	if (
		(ts.isArrowFunction(node) || ts.isFunctionExpression(node)) &&
		ts.isVariableDeclaration(node.parent) &&
		ts.isIdentifier(node.parent.name)
	) {
		return node.parent.name.text
	}
	if (
		(ts.isArrowFunction(node) || ts.isFunctionExpression(node)) &&
		ts.isPropertyAssignment(node.parent)
	) {
		const { name } = node.parent
		if (ts.isIdentifier(name) || ts.isStringLiteral(name)) {
			return name.text
		}
	}
	if (
		(ts.isMethodDeclaration(node) ||
			ts.isGetAccessorDeclaration(node) ||
			ts.isSetAccessorDeclaration(node)) &&
		(ts.isIdentifier(node.name) || ts.isStringLiteral(node.name))
	) {
		return node.name.text
	}
	return 'anonymous'
}

function isJsxNode(node) {
	return ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node)
}

export function collectJsxRoots(sourceFile) {
	const entries = []

	const visit = (node, currentFunction, jsxDepth) => {
		const nextFunction = isFunctionLike(node) ? node : currentFunction

		if (isJsxNode(node)) {
			if (!currentFunction) {
				fail(sourceFile, node, 'found JSX outside of a function')
			}
			if (jsxDepth === 0) {
				entries.push({ functionNode: currentFunction, jsxNode: node })
			}
			ts.forEachChild(node, (child) => visit(child, currentFunction, jsxDepth + 1))
			return
		}

		ts.forEachChild(node, (child) => visit(child, nextFunction, jsxDepth))
	}

	visit(sourceFile, null, 0)
	return entries
}

export function renderExpressionValue(sourceFile, expression) {
	if (!expression) {
		return ''
	}
	if (ts.isStringLiteral(expression) || ts.isNoSubstitutionTemplateLiteral(expression)) {
		return expression.text
	}
	if (ts.isTemplateExpression(expression)) {
		let rendered = expression.head.text
		for (const span of expression.templateSpans) {
			rendered += `\${${span.expression.getText(sourceFile)}}${span.literal.text}`
		}
		return rendered
	}
	return expression.getText(sourceFile)
}

function renderJsxComment(node, sourceFile) {
	const text = node.getText(sourceFile).trim()
	const match = text.match(/^\{\/\*([\s\S]*?)\*\/\}$/)
	return match ? match[1].trim() : ''
}

function renderJsxLiteralExpression(expression, indent) {
	if (!ts.isStringLiteral(expression) && !ts.isNoSubstitutionTemplateLiteral(expression)) {
		return null
	}

	if (expression.text.trim() === '') {
		return ''
	}

	return `${indent}${xmlEscape(expression.text)}`
}

function renderAttributes(sourceFile, attributes, renderClassAttribute) {
	const rendered = []

	for (const attribute of attributes.properties) {
		if (ts.isJsxSpreadAttribute(attribute)) {
			fail(sourceFile, attribute, 'spread attributes are not supported')
		}

		const attributeName = attribute.name.text
		if (attributeName === 'class') {
			rendered.push(...renderClassAttribute(sourceFile, attribute))
			continue
		}

		if (!attribute.initializer) {
			rendered.push(`${attributeName}="true"`)
			continue
		}

		if (ts.isStringLiteral(attribute.initializer)) {
			rendered.push(`${attributeName}="${xmlEscape(attribute.initializer.text)}"`)
			continue
		}

		if (ts.isJsxExpression(attribute.initializer)) {
			rendered.push(
				`${attributeName}="${xmlEscape(renderExpressionValue(sourceFile, attribute.initializer.expression))}"`,
			)
			continue
		}

		rendered.push(`${attributeName}="${xmlEscape(attribute.initializer.getText(sourceFile))}"`)
	}

	return rendered
}

function renderJsxNode(sourceFile, node, renderClassAttribute, indentLevel) {
	const indent = '  '.repeat(indentLevel)
	const childIndentLevel = indentLevel + 1

	if (ts.isJsxText(node)) {
		const lines = node.getText(sourceFile).split(/\r?\n/)
		return lines
			.map((line) => line.trim())
			.filter(Boolean)
			.map((line) => `${indent}${xmlEscape(line)}`)
			.join('\n')
	}

	if (ts.isJsxExpression(node)) {
		if (!node.expression) {
			const comment = renderJsxComment(node, sourceFile)
			return comment ? `${indent}<!-- ${xmlEscapeComment(comment)} -->` : ''
		}

		const literalExpression = renderJsxLiteralExpression(node.expression, indent)
		if (literalExpression !== null) {
			return literalExpression
		}

		return `${indent}{${xmlEscape(renderExpressionValue(sourceFile, node.expression))}}`
	}

	if (ts.isJsxSelfClosingElement(node)) {
		const attributes = renderAttributes(sourceFile, node.attributes, renderClassAttribute)
		return attributes.length > 0
			? `${indent}<${node.tagName.getText(sourceFile)} ${attributes.join(' ')} />`
			: `${indent}<${node.tagName.getText(sourceFile)} />`
	}

	if (ts.isJsxElement(node)) {
		const attributes = renderAttributes(
			sourceFile,
			node.openingElement.attributes,
			renderClassAttribute,
		)
		const opening =
			attributes.length > 0
				? `${indent}<${node.openingElement.tagName.getText(sourceFile)} ${attributes.join(' ')}>`
				: `${indent}<${node.openingElement.tagName.getText(sourceFile)}>`
		const children = node.children
			.map((child) =>
				renderJsxNode(sourceFile, child, renderClassAttribute, childIndentLevel),
			)
			.filter(Boolean)
		const closing = `${indent}</${node.closingElement.tagName.getText(sourceFile)}>`
		return [opening, ...children, closing].join('\n')
	}

	if (ts.isJsxFragment(node)) {
		const children = node.children
			.map((child) =>
				renderJsxNode(sourceFile, child, renderClassAttribute, childIndentLevel),
			)
			.filter(Boolean)
		return [`${indent}<fragment>`, ...children, `${indent}</fragment>`].join('\n')
	}

	fail(sourceFile, node, `unsupported JSX node type ${ts.SyntaxKind[node.kind]}`)
}

function renderComponents(sourceFile, jsxRoots, renderClassAttribute) {
	const byFunction = new Map()

	for (const entry of jsxRoots) {
		const functionName = getFunctionName(entry.functionNode)
		if (!byFunction.has(functionName)) {
			byFunction.set(functionName, [])
		}
		byFunction.get(functionName).push(entry.jsxNode)
	}

	const sections = []
	for (const [functionName, roots] of byFunction.entries()) {
		sections.push(`<component name="${xmlEscape(functionName)}">`)
		for (const root of roots) {
			sections.push('  <jsx>')
			sections.push(renderJsxNode(sourceFile, root, renderClassAttribute, 2))
			sections.push('  </jsx>')
		}
		sections.push('</component>')
	}
	return sections.join('\n')
}

export function buildXml(sourceFile, jsxRoots, renderClassAttribute, sections = []) {
	const parts = [...sections.filter(Boolean)]
	if (jsxRoots.length > 0) {
		parts.push(renderComponents(sourceFile, jsxRoots, renderClassAttribute))
	}
	return parts.join('\n')
}

export function parseSourceFile(filePath, sourceText) {
	return ts.createSourceFile(
		filePath,
		sourceText,
		ts.ScriptTarget.Latest,
		true,
		ts.ScriptKind.TSX,
	)
}

export async function readSourceFile(filePath) {
	const sourceText = await fs.readFile(filePath, 'utf8')
	return parseSourceFile(filePath, sourceText)
}

export async function writeElementsXml(filePath, xml) {
	const outputPath = filePath.replace(/\.tsx$/i, '.elements.xml')
	await fs.writeFile(outputPath, `${xml}\n`, 'utf8')
	return outputPath
}

export async function runExtraction({
	componentsRoot,
	requestedFiles,
	processFile,
	subfolders = DEFAULT_SUBFOLDERS,
}) {
	const files = await findTSXFiles(componentsRoot, subfolders)
	const outputs = []

	for (const filePath of files) {
		if (requestedFiles.length > 0 && !requestedFiles.includes(filePath)) {
			continue
		}
		try {
			const outputPath = await processFile(filePath)
			if (outputPath) {
				outputs.push(outputPath)
			}
		} catch (error) {
			console.error(`Error in ${filePath}: ${error.message}`)
			process.exitCode = 1
		}
	}

	for (const outputPath of outputs) {
		console.log(`Wrote ${path.relative(process.cwd(), outputPath)}`)
	}
}
