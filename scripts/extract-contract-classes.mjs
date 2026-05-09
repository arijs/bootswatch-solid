#!/usr/bin/env node
// Usage: node scripts/extract-contract-classes.mjs [optional file paths...]

import fs from 'fs/promises';
import path from 'path';
import ts from 'typescript';

const COMPONENTS_ROOT = path.resolve('ve-project2', 'src', 'components');
const SUBFOLDERS = ['contents', 'forms', 'ui'];
const CONTRACT_SEGMENT = '/theme-contract/';
const ALLOWED_SPECIAL_CONTRACT = 'theme';

function xmlEscape(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function xmlEscapeComment(value) {
  return value.replaceAll('--', '- -').trim();
}

function splitWhitespaceTokens(value) {
  return value
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean);
}

function getLocation(sourceFile, node) {
  const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
  return `${sourceFile.fileName}:${line + 1}:${character + 1}`;
}

function fail(sourceFile, node, message) {
  throw new Error(`${getLocation(sourceFile, node)} ${message}`);
}

async function findTSXFiles() {
  const files = [];
  for (const subfolder of SUBFOLDERS) {
    await walk(path.join(COMPONENTS_ROOT, subfolder), files);
  }
  return files;
}

async function walk(dirPath, files) {
  let entries = [];
  try {
    entries = await fs.readdir(dirPath, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, files);
      continue;
    }
    if (entry.isFile() && fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

function normalizeContractSource(importPath) {
  const normalized = importPath.replaceAll('\\', '/');
  const markerIndex = normalized.indexOf(CONTRACT_SEGMENT);
  if (markerIndex === -1) {
    return null;
  }
  return normalized.slice(markerIndex + CONTRACT_SEGMENT.length);
}

function parseContractImports(sourceFile) {
  const contractMap = new Map();
  const importToSource = new Map();

  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement) || !statement.importClause) {
      continue;
    }
    if (!ts.isStringLiteral(statement.moduleSpecifier)) {
      continue;
    }

    const source = normalizeContractSource(statement.moduleSpecifier.text);
    if (!source) {
      continue;
    }

    const namedBindings = statement.importClause.namedBindings;
    if (!namedBindings || !ts.isNamedImports(namedBindings)) {
      continue;
    }

    for (const element of namedBindings.elements) {
      const localName = element.name.text;
      if (!contractMap.has(source)) {
        contractMap.set(source, []);
      }
      contractMap.get(source).push(localName);
      importToSource.set(localName, source);
    }
  }

  return { contractMap, importToSource };
}

function isFunctionLike(node) {
  return ts.isFunctionDeclaration(node)
    || ts.isFunctionExpression(node)
    || ts.isArrowFunction(node)
    || ts.isMethodDeclaration(node)
    || ts.isGetAccessorDeclaration(node)
    || ts.isSetAccessorDeclaration(node);
}

function getFunctionName(node) {
  if (ts.isFunctionDeclaration(node) && node.name) {
    return node.name.text;
  }
  if (ts.isFunctionExpression(node) && node.name) {
    return node.name.text;
  }
  if (
    (ts.isArrowFunction(node) || ts.isFunctionExpression(node))
    && ts.isVariableDeclaration(node.parent)
    && ts.isIdentifier(node.parent.name)
  ) {
    return node.parent.name.text;
  }
  if (
    (ts.isArrowFunction(node) || ts.isFunctionExpression(node))
    && ts.isPropertyAssignment(node.parent)
  ) {
    const { name } = node.parent;
    if (ts.isIdentifier(name) || ts.isStringLiteral(name)) {
      return name.text;
    }
  }
  if (
    (ts.isMethodDeclaration(node) || ts.isGetAccessorDeclaration(node) || ts.isSetAccessorDeclaration(node))
    && (ts.isIdentifier(node.name) || ts.isStringLiteral(node.name))
  ) {
    return node.name.text;
  }
  return 'anonymous';
}

function isContractIdentifier(name, contractNames) {
  return name === ALLOWED_SPECIAL_CONTRACT || contractNames.has(name);
}

function collectTemplateClassTokens(sourceFile, node, templateExpression, contractNames) {
  const staticTokens = [];
  const contractTokens = [];
  let currentStatic = '';
  let previousWasExpression = false;

  const flushStatic = () => {
    if (!currentStatic) {
      return;
    }
    staticTokens.push(...splitWhitespaceTokens(currentStatic));
    currentStatic = '';
  };

  const consumeLiteral = (text) => {
    for (const character of text) {
      const isWhitespace = /\s/.test(character);
      if (previousWasExpression && !isWhitespace) {
        fail(
          sourceFile,
          node,
          'class template expressions must be separated from static class names by whitespace',
        );
      }
      if (isWhitespace) {
        flushStatic();
        previousWasExpression = false;
        continue;
      }
      currentStatic += character;
    }
  };

  consumeLiteral(templateExpression.head.text);
  for (const span of templateExpression.templateSpans) {
    if (!ts.isIdentifier(span.expression)) {
      fail(
        sourceFile,
        span.expression,
        `class template interpolations must be identifiers imported from theme-contract files or ${ALLOWED_SPECIAL_CONTRACT}`,
      );
    }
    const identifier = span.expression.text;
    if (!isContractIdentifier(identifier, contractNames)) {
      fail(
        sourceFile,
        span.expression,
        `class template interpolations must be identifiers imported from theme-contract files or ${ALLOWED_SPECIAL_CONTRACT}`,
      );
    }
    if (currentStatic) {
      fail(
        sourceFile,
        span.expression,
        'class template expressions must be separated from static class names by whitespace',
      );
    }
    contractTokens.push(identifier);
    previousWasExpression = true;
    consumeLiteral(span.literal.text);
  }
  flushStatic();
  return { staticTokens, contractTokens };
}

function validateClassAttribute(sourceFile, attribute, contractNames) {
  if (!attribute.initializer) {
    fail(sourceFile, attribute, 'class attributes must have a value');
  }

  if (ts.isStringLiteral(attribute.initializer)) {
    return { staticTokens: splitWhitespaceTokens(attribute.initializer.text), contractTokens: [] };
  }

  if (!ts.isJsxExpression(attribute.initializer) || !attribute.initializer.expression) {
    fail(sourceFile, attribute, 'class attributes must be string literals or simple template literals');
  }

  const expression = attribute.initializer.expression;
  if (ts.isNoSubstitutionTemplateLiteral(expression)) {
    return { staticTokens: splitWhitespaceTokens(expression.text), contractTokens: [] };
  }
  if (ts.isTemplateExpression(expression)) {
    return collectTemplateClassTokens(sourceFile, attribute, expression, contractNames);
  }

  fail(sourceFile, attribute, 'class attributes must be string literals or simple template literals');
}

function renderExpressionValue(sourceFile, expression) {
  if (!expression) {
    return '';
  }
  if (ts.isStringLiteral(expression) || ts.isNoSubstitutionTemplateLiteral(expression)) {
    return expression.text;
  }
  if (ts.isTemplateExpression(expression)) {
    let rendered = expression.head.text;
    for (const span of expression.templateSpans) {
      rendered += `\${${span.expression.getText(sourceFile)}}${span.literal.text}`;
    }
    return rendered;
  }
  return expression.getText(sourceFile);
}

function renderAttributes(sourceFile, attributes, contractNames) {
  const rendered = [];

  for (const attribute of attributes.properties) {
    if (ts.isJsxSpreadAttribute(attribute)) {
      fail(sourceFile, attribute, 'spread attributes are not supported');
    }

    const attributeName = attribute.name.text;
    if (attributeName === 'class') {
      const { staticTokens, contractTokens } = validateClassAttribute(sourceFile, attribute, contractNames);
      if (staticTokens.length > 0) {
        rendered.push(`class="${xmlEscape(staticTokens.join(' '))}"`);
      }
      if (contractTokens.length > 0) {
        rendered.push(`class-contracts="${xmlEscape(contractTokens.join(' '))}"`);
      }
      continue;
    }

    if (!attribute.initializer) {
      rendered.push(`${attributeName}="true"`);
      continue;
    }

    if (ts.isStringLiteral(attribute.initializer)) {
      rendered.push(`${attributeName}="${xmlEscape(attribute.initializer.text)}"`);
      continue;
    }

    if (ts.isJsxExpression(attribute.initializer)) {
      rendered.push(`${attributeName}="${xmlEscape(renderExpressionValue(sourceFile, attribute.initializer.expression))}"`);
      continue;
    }

    rendered.push(`${attributeName}="${xmlEscape(attribute.initializer.getText(sourceFile))}"`);
  }

  return rendered;
}

function renderJsxComment(node, sourceFile) {
  const text = node.getText(sourceFile).trim();
  const match = text.match(/^\{\/\*([\s\S]*?)\*\/\}$/);
  return match ? match[1].trim() : '';
}

function renderJsxLiteralExpression(expression, indent) {
  if (!ts.isStringLiteral(expression) && !ts.isNoSubstitutionTemplateLiteral(expression)) {
    return null;
  }

  if (expression.text.trim() === '') {
    return '';
  }

  return `${indent}${xmlEscape(expression.text)}`;
}

function renderJsxNode(sourceFile, node, contractNames, indentLevel) {
  const indent = '  '.repeat(indentLevel);
  const childIndentLevel = indentLevel + 1;

  if (ts.isJsxText(node)) {
    const lines = node.getText(sourceFile).split(/\r?\n/);
    return lines
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `${indent}${xmlEscape(line)}`)
      .join('\n');
  }

  if (ts.isJsxExpression(node)) {
    if (!node.expression) {
      const comment = renderJsxComment(node, sourceFile);
      return comment ? `${indent}<!-- ${xmlEscapeComment(comment)} -->` : '';
    }

    const literalExpression = renderJsxLiteralExpression(node.expression, indent);
    if (literalExpression !== null) {
      return literalExpression;
    }

    return `${indent}{${xmlEscape(renderExpressionValue(sourceFile, node.expression))}}`;
  }

  if (ts.isJsxSelfClosingElement(node)) {
    const attributes = renderAttributes(sourceFile, node.attributes, contractNames);
    return attributes.length > 0
      ? `${indent}<${node.tagName.getText(sourceFile)} ${attributes.join(' ')} />`
      : `${indent}<${node.tagName.getText(sourceFile)} />`;
  }

  if (ts.isJsxElement(node)) {
    const attributes = renderAttributes(sourceFile, node.openingElement.attributes, contractNames);
    const opening = attributes.length > 0
      ? `${indent}<${node.openingElement.tagName.getText(sourceFile)} ${attributes.join(' ')}>`
      : `${indent}<${node.openingElement.tagName.getText(sourceFile)}>`;
    const children = node.children
      .map((child) => renderJsxNode(sourceFile, child, contractNames, childIndentLevel))
      .filter(Boolean);
    const closing = `${indent}</${node.closingElement.tagName.getText(sourceFile)}>`;
    return [opening, ...children, closing].join('\n');
  }

  if (ts.isJsxFragment(node)) {
    const children = node.children
      .map((child) => renderJsxNode(sourceFile, child, contractNames, childIndentLevel))
      .filter(Boolean);
    return [`${indent}<fragment>`, ...children, `${indent}</fragment>`].join('\n');
  }

  fail(sourceFile, node, `unsupported JSX node type ${ts.SyntaxKind[node.kind]}`);
}

function isJsxNode(node) {
  return ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node);
}

function collectJsxRoots(sourceFile) {
  const entries = [];

  const visit = (node, currentFunction, jsxDepth) => {
    const nextFunction = isFunctionLike(node) ? node : currentFunction;

    if (isJsxNode(node)) {
      if (!currentFunction) {
        fail(sourceFile, node, 'found JSX outside of a function');
      }
      if (jsxDepth === 0) {
        entries.push({ functionNode: currentFunction, jsxNode: node });
      }
      ts.forEachChild(node, (child) => visit(child, currentFunction, jsxDepth + 1));
      return;
    }

    ts.forEachChild(node, (child) => visit(child, nextFunction, jsxDepth));
  };

  visit(sourceFile, null, 0);
  return entries;
}

function renderContractFamilies(contractMap) {
  const lines = ['<contract-classes>'];
  for (const [source, names] of contractMap.entries()) {
    if (names.length === 0) {
      continue;
    }
    lines.push(`  <family source="${xmlEscape(source)}">`);
    lines.push(`    ${xmlEscape(names.join(', '))}`);
    lines.push('  </family>');
  }
  lines.push('</contract-classes>');
  return lines.join('\n');
}

function renderComponents(sourceFile, jsxRoots, contractNames) {
  const byFunction = new Map();

  for (const entry of jsxRoots) {
    const functionName = getFunctionName(entry.functionNode);
    if (!byFunction.has(functionName)) {
      byFunction.set(functionName, []);
    }
    byFunction.get(functionName).push(entry.jsxNode);
  }

  const sections = [];
  for (const [functionName, roots] of byFunction.entries()) {
    sections.push(`<component name="${xmlEscape(functionName)}">`);
    for (const root of roots) {
      sections.push('  <jsx>');
      sections.push(renderJsxNode(sourceFile, root, contractNames, 2));
      sections.push('  </jsx>');
    }
    sections.push('</component>');
  }
  return sections.join('\n');
}

function buildXml(sourceFile, contractMap, jsxRoots, contractNames) {
  const parts = [];
  if ([...contractMap.values()].some((names) => names.length > 0)) {
    parts.push(renderContractFamilies(contractMap));
  }
  if (jsxRoots.length > 0) {
    parts.push(renderComponents(sourceFile, jsxRoots, contractNames));
  }
  return parts.join('\n');
}

function getRequestedFiles() {
  return process.argv
    .slice(2)
    .filter((filePath) => filePath !== '--')
    .map((filePath) => path.resolve(filePath));
}

async function processFile(filePath) {
  const sourceText = await fs.readFile(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const { contractMap, importToSource } = parseContractImports(sourceFile);
  const jsxRoots = collectJsxRoots(sourceFile);
  if (jsxRoots.length === 0) {
    return null;
  }

  const contractNames = new Set(importToSource.keys());
  const xml = buildXml(sourceFile, contractMap, jsxRoots, contractNames);
  const outputPath = filePath.replace(/\.tsx$/i, '.elements.xml');
  await fs.writeFile(outputPath, `${xml}\n`, 'utf8');
  return outputPath;
}

async function main() {
  const requestedFiles = getRequestedFiles();
  const files = await findTSXFiles();
  const outputs = [];

  for (const filePath of files) {
    if (requestedFiles.length > 0 && !requestedFiles.includes(filePath)) {
      continue;
    }
    try {
      const outputPath = await processFile(filePath);
      if (outputPath) {
        outputs.push(outputPath);
      }
    } catch (error) {
      console.error(`Error in ${filePath}: ${error.message}`);
      process.exitCode = 1;
    }
  }

  for (const outputPath of outputs) {
    console.log(`Wrote ${path.relative(process.cwd(), outputPath)}`);
  }
}

await main();
