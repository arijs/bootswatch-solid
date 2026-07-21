#!/usr/bin/env node
// Usage: node scripts/extract-contract-classes.mjs [optional file paths...]

import path from 'node:path'
import ts from 'typescript'
import {
	buildXml,
	collectJsxRoots,
	fail,
	getRequestedFiles,
	readSourceFile,
	runExtraction,
	splitWhitespaceTokens,
	writeElementsXml,
	xmlEscape,
} from './extract-jsx/core.mjs'

const COMPONENTS_ROOT = path.resolve('ve-project2', 'src', 'components')
const CONTRACT_SEGMENT = '/theme-contract/'
const ALLOWED_SPECIAL_CONTRACT = 'theme'

function normalizeContractSource(importPath) {
	const normalized = importPath.replaceAll('\\', '/')
	const markerIndex = normalized.indexOf(CONTRACT_SEGMENT)
	if (markerIndex === -1) {
		return null
	}
	return normalized.slice(markerIndex + CONTRACT_SEGMENT.length)
}

function parseContractImports(sourceFile) {
	const contractMap = new Map()
	const importToSource = new Map()

	for (const statement of sourceFile.statements) {
		if (!ts.isImportDeclaration(statement) || !statement.importClause) {
			continue
		}
		if (!ts.isStringLiteral(statement.moduleSpecifier)) {
			continue
		}

		const source = normalizeContractSource(statement.moduleSpecifier.text)
		if (!source) {
			continue
		}

		const namedBindings = statement.importClause.namedBindings
		if (!namedBindings || !ts.isNamedImports(namedBindings)) {
			continue
		}

		for (const element of namedBindings.elements) {
			const localName = element.name.text
			if (!contractMap.has(source)) {
				contractMap.set(source, [])
			}
			contractMap.get(source).push(localName)
			importToSource.set(localName, source)
		}
	}

	return { contractMap, importToSource }
}

function isContractIdentifier(name, contractNames) {
	return name === ALLOWED_SPECIAL_CONTRACT || contractNames.has(name)
}

function collectTemplateClassTokens(sourceFile, node, templateExpression, contractNames) {
	const staticTokens = []
	const contractTokens = []
	let currentStatic = ''
	let previousWasExpression = false

	const flushStatic = () => {
		if (!currentStatic) {
			return
		}
		staticTokens.push(...splitWhitespaceTokens(currentStatic))
		currentStatic = ''
	}

	const consumeLiteral = (text) => {
		for (const character of text) {
			const isWhitespace = /\s/.test(character)
			if (previousWasExpression && !isWhitespace) {
				fail(
					sourceFile,
					node,
					'class template expressions must be separated from static class names by whitespace',
				)
			}
			if (isWhitespace) {
				flushStatic()
				previousWasExpression = false
				continue
			}
			currentStatic += character
		}
	}

	consumeLiteral(templateExpression.head.text)
	for (const span of templateExpression.templateSpans) {
		if (!ts.isIdentifier(span.expression)) {
			fail(
				sourceFile,
				span.expression,
				`class template interpolations must be identifiers imported from theme-contract files or ${ALLOWED_SPECIAL_CONTRACT}`,
			)
		}
		const identifier = span.expression.text
		if (!isContractIdentifier(identifier, contractNames)) {
			fail(
				sourceFile,
				span.expression,
				`class template interpolations must be identifiers imported from theme-contract files or ${ALLOWED_SPECIAL_CONTRACT}`,
			)
		}
		if (currentStatic) {
			fail(
				sourceFile,
				span.expression,
				'class template expressions must be separated from static class names by whitespace',
			)
		}
		contractTokens.push(identifier)
		previousWasExpression = true
		consumeLiteral(span.literal.text)
	}
	flushStatic()
	return { staticTokens, contractTokens }
}

function validateClassAttribute(sourceFile, attribute, contractNames) {
	if (!attribute.initializer) {
		fail(sourceFile, attribute, 'class attributes must have a value')
	}

	if (ts.isStringLiteral(attribute.initializer)) {
		return {
			staticTokens: splitWhitespaceTokens(attribute.initializer.text),
			contractTokens: [],
		}
	}

	if (!ts.isJsxExpression(attribute.initializer) || !attribute.initializer.expression) {
		fail(
			sourceFile,
			attribute,
			'class attributes must be string literals or simple template literals',
		)
	}

	const expression = attribute.initializer.expression
	if (ts.isNoSubstitutionTemplateLiteral(expression)) {
		return { staticTokens: splitWhitespaceTokens(expression.text), contractTokens: [] }
	}
	if (ts.isTemplateExpression(expression)) {
		return collectTemplateClassTokens(sourceFile, attribute, expression, contractNames)
	}

	fail(
		sourceFile,
		attribute,
		'class attributes must be string literals or simple template literals',
	)
}

function createRenderClassAttribute(contractNames) {
	return (sourceFile, attribute) => {
		const { staticTokens, contractTokens } = validateClassAttribute(
			sourceFile,
			attribute,
			contractNames,
		)
		const rendered = []
		if (staticTokens.length > 0) {
			rendered.push(`class="${xmlEscape(staticTokens.join(' '))}"`)
		}
		if (contractTokens.length > 0) {
			rendered.push(`class-contracts="${xmlEscape(contractTokens.join(' '))}"`)
		}
		return rendered
	}
}

function renderContractFamilies(contractMap) {
	const lines = ['<contract-classes>']
	for (const [source, names] of contractMap.entries()) {
		if (names.length === 0) {
			continue
		}
		lines.push(`  <family source="${xmlEscape(source)}">`)
		lines.push(`    ${xmlEscape(names.join(', '))}`)
		lines.push('  </family>')
	}
	lines.push('</contract-classes>')
	return lines.join('\n')
}

async function processFile(filePath) {
	const sourceFile = await readSourceFile(filePath)
	const { contractMap, importToSource } = parseContractImports(sourceFile)
	const jsxRoots = collectJsxRoots(sourceFile)
	if (jsxRoots.length === 0) {
		return null
	}

	const contractNames = new Set(importToSource.keys())
	const sections = []
	if ([...contractMap.values()].some((names) => names.length > 0)) {
		sections.push(renderContractFamilies(contractMap))
	}

	const xml = buildXml(sourceFile, jsxRoots, createRenderClassAttribute(contractNames), sections)
	return writeElementsXml(filePath, xml)
}

async function main() {
	await runExtraction({
		componentsRoot: COMPONENTS_ROOT,
		requestedFiles: getRequestedFiles(),
		processFile,
	})
}

await main()
