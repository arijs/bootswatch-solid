import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const SRC_INDEX = path.join(ROOT, 'src', 'index.tsx')
const VE_INDEX = path.join(ROOT, 've-project', 'src', 'index.tsx')
const SRC_FORMS_ROOT = path.join(ROOT, 'src', 'components', 'forms')
const VE_FORMS_ROOT = path.join(ROOT, 've-project', 'src', 'components', 'forms')
const FORMS_PAGE = path.join(VE_FORMS_ROOT, 'FormsPage.tsx')

const importRegex = /^import\s+([A-Za-z_$][A-Za-z0-9_$]*)\s+from\s+['"]([^'"]+)['"]/gm
const routeRegex = /<Route\s+path="([^"]+)"\s+component=\{([^}]+)\}\s*\/>/g

function toRelativeImport(fromFile, toFileNoExt) {
  let rel = path.relative(path.dirname(fromFile), toFileNoExt)
  rel = rel.split(path.sep).join('/')
  if (!rel.startsWith('.')) rel = `./${rel}`
  return rel
}

async function walkFiles(dir, predicate, out = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walkFiles(full, predicate, out)
    } else if (predicate(full)) {
      out.push(full)
    }
  }
  return out
}

async function pathExists(targetPath) {
  try {
    await stat(targetPath)
    return true
  } catch {
    return false
  }
}

async function parseFormsRouteEntries() {
  const srcIndexSource = await readFile(SRC_INDEX, 'utf8')

  const srcImportMap = new Map()
  for (const match of srcIndexSource.matchAll(importRegex)) {
    srcImportMap.set(match[1], match[2])
  }

  const entries = []
  for (const match of srcIndexSource.matchAll(routeRegex)) {
    const routePath = match[1]
    const componentSymbol = match[2].trim()
    if (!(routePath === '/forms' || routePath.startsWith('/forms/'))) continue

    if (routePath === '/forms') {
      entries.push({ routePath, componentSymbol: 'FormsPage', importPath: './components/forms/FormsPage' })
      continue
    }

    const importPath = srcImportMap.get(componentSymbol)
    if (!importPath || !importPath.startsWith('./components/forms/')) continue
    entries.push({ routePath, componentSymbol, importPath })
  }

  return entries
}

async function ensureFormsPage() {
  const content = `import type { Component } from 'solid-js'\nimport { body } from '../../themes/bootstrap/body.css'\nimport { containerFluid } from '../../themes/bootstrap/container.css'\nimport { bsTheme } from '../../themes/bootstrap/_vars.css'\nimport FormsSection from './FormsSection'\n\nconst FormsPage: Component = () => (\n\t<div class={\`\${bsTheme} \${body} \${containerFluid}\`}>\n\t\t<FormsSection />\n\t</div>\n)\n\nexport default FormsPage\n`
  await writeFile(FORMS_PAGE, content)
}

async function patchLeafWrapperClasses(routeEntries) {
  const styleByFile = new Map()
  for (const entry of routeEntries) {
    if (entry.routePath === '/forms') continue
    const veFile = path.join(ROOT, 've-project', 'src', `${entry.importPath}.tsx`)
    const styleFile = path.join(
      ROOT,
      'screenshots',
      'bootstrap',
      entry.routePath.replace(/^\//, '').replace(/\//g, path.sep),
      'static',
      'style.css',
    )
    if (await pathExists(styleFile)) {
      styleByFile.set(veFile, styleFile)
    }
  }

  const files = await walkFiles(VE_FORMS_ROOT, (f) => f.endsWith('.tsx'))
  let changed = 0

  for (const file of files) {
    const source = await readFile(file, 'utf8')
    if (!source.includes('class="bd-example container-fluid"')) continue

    let next = source.replace(
      /class="bd-example container-fluid"/g,
      'class={`bd-example ${bsTheme} ${body} ${containerFluid}`}',
    )

    const importLines = [
      "import { body } from '__BODY__'",
      "import { containerFluid } from '__CONTAINER__'",
      "import { bsTheme } from '__VARS__'",
    ]

    const bodyImport = toRelativeImport(
      file,
      path.join(ROOT, 've-project', 'src', 'themes', 'bootstrap', 'body.css'),
    )
    const containerImport = toRelativeImport(
      file,
      path.join(ROOT, 've-project', 'src', 'themes', 'bootstrap', 'container.css'),
    )
    const varsImport = toRelativeImport(
      file,
      path.join(ROOT, 've-project', 'src', 'themes', 'bootstrap', '_vars.css'),
    )

    const resolvedImportLines = importLines
      .map((line) => line.replace('__BODY__', bodyImport))
      .map((line) => line.replace('__CONTAINER__', containerImport))
      .map((line) => line.replace('__VARS__', varsImport))

    for (const line of resolvedImportLines) {
      if (!next.includes(line)) {
        next = next.replace(
          /import type \{ Component \} from 'solid-js'\r?\n/,
          `import type { Component } from 'solid-js'\n${line}\n`,
        )
      }
    }

    const styleFile = styleByFile.get(file)
    if (styleFile) {
      const styleImport = toRelativeImport(file, styleFile)
      const styleImportLine = `import '${styleImport}'`
      if (!next.includes(styleImportLine)) {
        next = next.replace(
          /import type \{ Component \} from 'solid-js'\r?\n/,
          `import type { Component } from 'solid-js'\n${styleImportLine}\n`,
        )
      }
    }

    if (next !== source) {
      await writeFile(file, next)
      changed += 1
    }
  }

  return changed
}

async function updateVeIndexWithFormsRoutes() {
  const veIndexSource = await readFile(VE_INDEX, 'utf8')
  const parsed = await parseFormsRouteEntries()
  const formRoutes = []
  const componentSymbols = new Set()
  for (const entry of parsed) {
    if (componentSymbols.has(entry.componentSymbol)) continue
    componentSymbols.add(entry.componentSymbol)
    formRoutes.push(entry)
  }

  const existingImportLines = veIndexSource.match(/^import[^\n]*$/gm) ?? []
  const preservedImports = []
  const seenSymbols = new Set()

  for (const line of existingImportLines) {
    const symbolMatch = line.match(/^import\s+([A-Za-z_$][A-Za-z0-9_$]*)\s+from/)
    if (!symbolMatch) {
      if (line.includes("./themes/bootstrap/forms/extracted")) continue
      preservedImports.push(line)
      continue
    }

    const symbol = symbolMatch[1]
    if (componentSymbols.has(symbol)) continue
    if (seenSymbols.has(symbol)) continue
    seenSymbols.add(symbol)
    preservedImports.push(line)
  }

  for (const entry of formRoutes) {
    const srcImportNoExt = path.join(ROOT, 've-project', 'src', `${entry.importPath}`).replace(/\\/g, '/')
    const relImport = toRelativeImport(VE_INDEX, srcImportNoExt)
    preservedImports.push(`import ${entry.componentSymbol} from '${relImport}'`)
  }

  const routeLines = []
  for (const line of veIndexSource.match(/^\s*<Route[^\n]*$/gm) ?? []) {
    const routePath = line.match(/path="([^"]+)"/)?.[1]
    if (!routePath) continue
    if (routePath === '/forms' || routePath.startsWith('/forms/')) continue
    routeLines.push(`\t\t\t${line.trim()}`)
  }

  for (const entry of formRoutes) {
    routeLines.push(`\t\t\t<Route path="${entry.routePath}" component={${entry.componentSymbol}} />`)
  }

  const dedupedRouteLines = []
  const seenPaths = new Set()
  for (const line of routeLines) {
    const routePath = line.match(/path="([^"]+)"/)?.[1]
    if (!routePath || seenPaths.has(routePath)) continue
    seenPaths.add(routePath)
    dedupedRouteLines.push(line)
  }

  dedupedRouteLines.sort((a, b) => {
    const pa = a.match(/path="([^"]+)"/)?.[1] ?? ''
    const pb = b.match(/path="([^"]+)"/)?.[1] ?? ''
    if (pa === '/') return -1
    if (pb === '/') return 1
    return pa.localeCompare(pb)
  })

  const nextContent = `${preservedImports.join('\n')}\n\nrender(\n\t() => (\n\t\t<Router>\n${dedupedRouteLines.join('\n')}\n\t\t</Router>\n\t),\n\tdocument.getElementById('root') ??\n\t\t(() => {\n\t\t\tthrow new Error('Root element not found')\n\t\t})(),\n)\n`

  await writeFile(VE_INDEX, nextContent)
  return formRoutes.length
}

async function ensureCopiedForms() {
  await mkdir(VE_FORMS_ROOT, { recursive: true })
  const srcFiles = await walkFiles(SRC_FORMS_ROOT, (f) => f.endsWith('.tsx'))
  for (const srcFile of srcFiles) {
    const rel = path.relative(SRC_FORMS_ROOT, srcFile)
    const target = path.join(VE_FORMS_ROOT, rel)
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, await readFile(srcFile, 'utf8'))
  }
}

async function main() {
  const routeEntries = await parseFormsRouteEntries()
  await ensureCopiedForms()
  await ensureFormsPage()
  const wrapperFilesPatched = await patchLeafWrapperClasses(routeEntries)
  const routesAdded = await updateVeIndexWithFormsRoutes()

  console.log(
    JSON.stringify(
      {
        wrapperFilesPatched,
        routesAdded,
      },
      null,
      2,
    ),
  )
}

await main()
