import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const SRC_INDEX = path.join(ROOT, 'src', 'index.tsx')
const VE_INDEX = path.join(ROOT, 've-project', 'src', 'index.tsx')
const SRC_CONTENTS_ROOT = path.join(ROOT, 'src', 'components', 'contents')
const VE_CONTENTS_ROOT = path.join(ROOT, 've-project', 'src', 'components', 'contents')
const VE_THEME_CONTENTS = path.join(
  ROOT,
  've-project',
  'src',
  'themes',
  'bootstrap',
  'contents',
  'generated.css.ts',
)

const importRegex = /^import\s+([A-Za-z_$][A-Za-z0-9_$]*)\s+from\s+['"]([^'"]+)['"]/gm
const routeRegex = /<Route\s+path="([^"]+)"\s+component=\{([^}]+)\}\s*\/>/g

function tokenToIdentifier(token) {
  return token
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map((part, index) =>
      index === 0
        ? part.charAt(0).toLowerCase() + part.slice(1)
        : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join('')
}

function ensureUniqueIdentifier(base, used) {
  if (!used.has(base)) {
    used.add(base)
    return base
  }
  let i = 2
  while (used.has(`${base}${i}`)) i += 1
  const next = `${base}${i}`
  used.add(next)
  return next
}

function toRelativeImport(fromFile, toFileNoExt) {
  let rel = path.relative(path.dirname(fromFile), toFileNoExt)
  rel = rel.split(path.sep).join('/')
  if (!rel.startsWith('.')) rel = `./${rel}`
  return rel
}

function parseThemeExportNames(themeSource) {
  const names = new Set()
  const exportRegex = /^export\s+const\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=/gm
  for (const match of themeSource.matchAll(exportRegex)) {
    names.add(match[1])
  }
  return names
}

function transformSourceComponent(source, targetFile, tokenToVeClass) {
  const usedTokens = new Set()
  let needsThemeImports = false
  let hasClassAttribute = false

  let transformed = source
    .replace(/^import\s+type\s+\{\s*Component\s*\}\s+from\s+'solid-js'\s*\n?/m, '')

  transformed = transformed.replace(/class="([^"]+)"/g, (_match, className) => {
    hasClassAttribute = true
    const tokens = className.trim().split(/\s+/).filter(Boolean)
    if (tokens.includes('bd-example') && tokens.includes('container-fluid')) {
      needsThemeImports = true
    }

    const parts = []
    for (const token of tokens) {
      parts.push(token)
      if (token === 'container-fluid') {
        parts.push('${containerFluid}')
      }
      if (tokenToVeClass.has(token)) {
        parts.push(`\${${tokenToVeClass.get(token)}}`)
        usedTokens.add(token)
      }
    }

    if (tokens.includes('bd-example') && tokens.includes('container-fluid')) {
      parts.push('${bsTheme}', '${body}')
    }

    const expr = parts.join(' ').replace(/\s+/g, ' ').trim()
    return `class={\`${expr}\`}`
  })

  const oldImportsMatch = transformed.match(/^(import[^\n]*\n)+/m)
  const oldImports = oldImportsMatch ? oldImportsMatch[0].trim().split('\n') : []
  const preservedImports = oldImports.filter(
    (line) => !line.includes("from 'solid-js'"),
  )

  const veImports = ["import type { Component } from 'solid-js'"]
  if (needsThemeImports) {
    const containerImport = toRelativeImport(
      targetFile,
      path.join(ROOT, 've-project', 'src', 'themes', 'bootstrap', 'container.css'),
    )
    const varsImport = toRelativeImport(
      targetFile,
      path.join(ROOT, 've-project', 'src', 'themes', 'bootstrap', '_vars.css'),
    )
    const bodyImport = toRelativeImport(
      targetFile,
      path.join(ROOT, 've-project', 'src', 'themes', 'bootstrap', 'body.css'),
    )
    veImports.push(`import { containerFluid } from '${containerImport}'`)
    veImports.push(`import { bsTheme } from '${varsImport}'`)
    veImports.push(`import { body } from '${bodyImport}'`)
  }

  if (usedTokens.size > 0) {
    const generatedImport = toRelativeImport(
      targetFile,
      path.join(
        ROOT,
        've-project',
        'src',
        'themes',
        'bootstrap',
        'contents',
        'generated.css',
      ),
    )
    const names = [...usedTokens]
      .map((token) => tokenToVeClass.get(token))
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b))
    veImports.push(`import { ${names.join(', ')} } from '${generatedImport}'`)
  }

  const importLines = [...veImports, ...preservedImports]
  const withoutOldImports = transformed.replace(/^(import[^\n]*\n)+/m, '')
  const withoutExtraLeading = withoutOldImports.replace(/^\s+/, '')

  if (!hasClassAttribute) {
    return `${importLines.join('\n')}\n\n${withoutExtraLeading}`
  }
  return `${importLines.join('\n')}\n\n${withoutExtraLeading}`
}

async function main() {
  const srcIndexSource = await readFile(SRC_INDEX, 'utf8')
  const veIndexSource = await readFile(VE_INDEX, 'utf8')

  const importMap = new Map()
  for (const match of srcIndexSource.matchAll(importRegex)) {
    importMap.set(match[1], match[2])
  }

  const contentRoutes = []
  const componentSymbols = new Set()
  for (const match of srcIndexSource.matchAll(routeRegex)) {
    const routePath = match[1]
    const componentSymbol = match[2].trim()
    if (!(routePath === '/contents' || routePath.startsWith('/contents/'))) continue
    const importPath = importMap.get(componentSymbol)
    if (!importPath || !importPath.startsWith('./components/contents/')) continue
    if (componentSymbols.has(componentSymbol)) continue
    componentSymbols.add(componentSymbol)
    contentRoutes.push({ routePath, componentSymbol, importPath })
  }

  const allTokens = new Set()

  for (const entry of contentRoutes) {
    const srcFile = path.join(ROOT, 'src', `${entry.importPath}.tsx`)
    const source = await readFile(srcFile, 'utf8')
    for (const classMatch of source.matchAll(/class="([^"]+)"/g)) {
      const tokens = classMatch[1].trim().split(/\s+/).filter(Boolean)
      for (const token of tokens) {
        allTokens.add(token)
      }
    }
  }

  const themeSource = await readFile(VE_THEME_CONTENTS, 'utf8')
  const themeExportNames = parseThemeExportNames(themeSource)
  const tokenToVeClass = new Map()
  const missingThemeTokens = []

  for (const token of [...allTokens].sort((a, b) => a.localeCompare(b))) {
    if (token === 'container-fluid') continue
    const expectedClassName = tokenToIdentifier(token) || 'cls'
    if (!themeExportNames.has(expectedClassName)) {
      missingThemeTokens.push(token)
      continue
    }
    tokenToVeClass.set(token, expectedClassName)
  }

  if (missingThemeTokens.length > 0) {
    const suggested = missingThemeTokens
      .map((token) => {
        const ident = tokenToIdentifier(token) || 'cls'
        return `export const ${ident} = style({}) // .${token}`
      })
      .join('\n')

    throw new Error(
      `Missing VE theme class exports in ${VE_THEME_CONTENTS} for tokens:\n` +
        `${missingThemeTokens.map((t) => `- ${t}`).join('\n')}\n\n` +
        `Add exports like:\n${suggested}`,
    )
  }

  for (const entry of contentRoutes) {
    const srcFile = path.join(ROOT, 'src', `${entry.importPath}.tsx`)
    const relFromContents = path.relative(SRC_CONTENTS_ROOT, srcFile)
    const targetFile = path.join(VE_CONTENTS_ROOT, relFromContents)
    await mkdir(path.dirname(targetFile), { recursive: true })
    const sourceComponent = await readFile(srcFile, 'utf8')
    const veComponent = transformSourceComponent(sourceComponent, targetFile, tokenToVeClass)
    await writeFile(targetFile, veComponent)
  }

  const veIndexImports = []
  const seenImportSymbols = new Set()
  for (const line of veIndexSource.match(/^import[^\n]*$/gm) ?? []) {
    const symbolMatch = line.match(/^import\s+([A-Za-z_$][A-Za-z0-9_$]*)\s+from/)
    if (!symbolMatch) {
      veIndexImports.push(line)
      continue
    }
    const symbol = symbolMatch[1]
    if (componentSymbols.has(symbol)) continue
    if (seenImportSymbols.has(symbol)) continue
    seenImportSymbols.add(symbol)
    veIndexImports.push(line)
  }

  for (const entry of contentRoutes) {
    const srcFile = path.join(ROOT, 'src', `${entry.importPath}.tsx`)
    const relFromContents = path.relative(SRC_CONTENTS_ROOT, srcFile)
    const targetNoExt = path
      .join(VE_CONTENTS_ROOT, relFromContents)
      .replace(/\.tsx$/, '')
    const relImport = toRelativeImport(VE_INDEX, targetNoExt)
    veIndexImports.push(`import ${entry.componentSymbol} from '${relImport}'`)
  }

  const routeLines = [
    '\t\t\t<Route path="/" component={Home} />',
  ]

  for (const line of veIndexSource.match(/^\s*<Route[^\n]*$/gm) ?? []) {
    const pathMatch = line.match(/path="([^"]+)"/)
    const routePath = pathMatch?.[1]
    if (!routePath) continue
    if (routePath === '/') continue
    if (routePath.startsWith('/contents')) continue
    routeLines.push(`\t\t\t${line.trim()}`)
  }

  for (const entry of contentRoutes) {
    routeLines.push(
      `\t\t\t<Route path="${entry.routePath}" component={${entry.componentSymbol}} />`,
    )
  }

  const dedupedRouteLines = []
  const seenRoutePaths = new Set()
  for (const line of routeLines) {
    const routePath = line.match(/path="([^"]+)"/)?.[1]
    if (!routePath) continue
    if (seenRoutePaths.has(routePath)) continue
    seenRoutePaths.add(routePath)
    dedupedRouteLines.push(line)
  }

  dedupedRouteLines.sort((a, b) => {
    const pa = a.match(/path="([^"]+)"/)?.[1] ?? ''
    const pb = b.match(/path="([^"]+)"/)?.[1] ?? ''
    if (pa === '/') return -1
    if (pb === '/') return 1
    return pa.localeCompare(pb)
  })

  const veIndexContent = `${veIndexImports.join('\n')}\n\nrender(\n\t() => (\n\t\t<Router>\n${dedupedRouteLines.join('\n')}\n\t\t</Router>\n\t),\n\tdocument.getElementById('root') ??\n\t\t(() => {\n\t\t\tthrow new Error('Root element not found')\n\t\t})(),\n)\n`
  await writeFile(VE_INDEX, veIndexContent)

  console.log(`Generated ${contentRoutes.length} VE contents component files.`)
}

await main()
