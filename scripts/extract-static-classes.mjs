#!/usr/bin/env node
// Usage: node scripts/extract-static-classes.mjs [optional file paths...]

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

const COMPONENTS_ROOT = path.resolve('src', 'components')

function validateStaticClassAttribute(sourceFile, attribute) {
	if (!attribute.initializer) {
		fail(sourceFile, attribute, 'class attributes must have a value')
	}

	if (ts.isStringLiteral(attribute.initializer)) {
		return splitWhitespaceTokens(attribute.initializer.text)
	}

	if (!ts.isJsxExpression(attribute.initializer) || !attribute.initializer.expression) {
		fail(sourceFile, attribute, 'class attributes must be static string literals')
	}

	const expression = attribute.initializer.expression
	if (ts.isNoSubstitutionTemplateLiteral(expression)) {
		return splitWhitespaceTokens(expression.text)
	}

	fail(sourceFile, attribute, 'class attributes must be static string literals')
}

function renderClassAttribute(sourceFile, attribute) {
	const tokens = validateStaticClassAttribute(sourceFile, attribute)
	if (tokens.length === 0) {
		return []
	}
	return [`class="${xmlEscape(tokens.join(' '))}"`]
}

async function processFile(filePath) {
	const sourceFile = await readSourceFile(filePath)
	const jsxRoots = collectJsxRoots(sourceFile)
	if (jsxRoots.length === 0) {
		return null
	}

	const xml = buildXml(sourceFile, jsxRoots, renderClassAttribute)
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
