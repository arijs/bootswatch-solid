import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const SRC_INDEX = path.join(ROOT, 'src', 'index.tsx')
const VE_INDEX = path.join(ROOT, 've-project', 'src', 'index.tsx')
const SRC_BUTTONS_ROOT = path.join(ROOT, 'src', 'components', 'ui', 'buttons')
const VE_BUTTONS_ROOT = path.join(ROOT, 've-project', 'src', 'components', 'ui', 'buttons')
const VE_BUTTONS_TSX = path.join(ROOT, 've-project', 'src', 'components', 'ui', 'Buttons.tsx')
const VE_BUTTONS_PAGE_TSX = path.join(ROOT, 've-project', 'src', 'components', 'ui', 'ButtonsPage.tsx')
const VE_BUTTONS_LINKS_TS = path.join(ROOT, 've-project', 'src', 'components', 'ui', 'buttons', 'buttonLinks.ts')

const importRegex = /^import\s+([A-Za-z_$][A-Za-z0-9_$]*)\s+from\s+['"]([^'"]+)['"]/gm
const routeRegex = /<Route\s+path="([^"]+)"\s+component=\{([^}]+)\}\s*\/>/g

const tokenToVeClass = {
  btn: 'btn',
  'btn-check': 'btnCheck',
  'btn-lg': 'btnLg',
  'btn-sm': 'btnSm',
  'btn-base': 'btnBase',
  'btn-primary': 'btnPrimary',
  'btn-secondary': 'btnSecondary',
  'btn-success': 'btnSuccess',
  'btn-info': 'btnInfo',
  'btn-warning': 'btnWarning',
  'btn-danger': 'btnDanger',
  'btn-light': 'btnLight',
  'btn-dark': 'btnDark',
  'btn-link': 'btnLink',
  'btn-outline-primary': 'btnOutlinePrimary',
  'btn-outline-secondary': 'btnOutlineSecondary',
  'btn-outline-success': 'btnOutlineSuccess',
  'btn-outline-info': 'btnOutlineInfo',
  'btn-outline-warning': 'btnOutlineWarning',
  'btn-outline-danger': 'btnOutlineDanger',
  'btn-outline-light': 'btnOutlineLight',
  'btn-outline-dark': 'btnOutlineDark',
}

function routeToLabel(routePath) {
  return routePath
    .replace('/ui/buttons/', '')
    .split('/')
    .map((segment) => {
      const normalized = segment.replace(/-button$/, ' button')
      return normalized
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ')
    })
    .join(' ')
}

function toRelativeImport(fromFile, toFileNoExt) {
  let rel = path.relative(path.dirname(fromFile), toFileNoExt)
  rel = rel.split(path.sep).join('/')
  if (!rel.startsWith('.')) {
    rel = `./${rel}`
  }
  return rel
}

function upgradeClassExpression(className, usedClasses) {
  const tokens = className.trim().split(/\s+/).filter(Boolean)
  if (tokens.includes('bd-example') && tokens.includes('container-fluid')) {
    return '`bd-example ${bsTheme} ${body} ${containerFluid}`'
  }

  const parts = []
  for (const token of tokens) {
    parts.push(token)
    const mapped = tokenToVeClass[token]
    if (mapped) {
      usedClasses.add(mapped)
      parts.push(`\${${mapped}}`)
    }
  }

  const expr = parts.join(' ').replace(/\s+/g, ' ').trim()
  return `\`${expr}\``
}

function transformSourceComponent(source, targetFile) {
  const usedClasses = new Set()

  let transformed = source
    .replace(/^import\s+type\s+\{\s*Component\s*\}\s+from\s+'solid-js'\s*\n?/m, '')
    .replace(/^\s*const\s+[^\n]+\n?/m, (match) => match)

  transformed = transformed.replace(/class="([^"]+)"/g, (_match, className) => {
    const classExpr = upgradeClassExpression(className, usedClasses)
    return `class={${classExpr}}`
  })

  const veImports = []
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
  const generatedButtonsImport = toRelativeImport(
    targetFile,
    path.join(
      ROOT,
      've-project',
      'src',
      'themes',
      'bootstrap',
      'ui',
      'buttons',
      'generated.css',
    ),
  )

  veImports.push("import type { Component } from 'solid-js'")
  veImports.push(`import { containerFluid } from '${containerImport}'`)
  veImports.push(`import { bsTheme } from '${varsImport}'`)
  veImports.push(`import { body } from '${bodyImport}'`)

  const mapped = [...usedClasses].sort()
  if (mapped.length > 0) {
    veImports.push(
      `import { ${mapped.join(', ')} } from '${generatedButtonsImport}'`,
    )
  }

  const withoutOldImports = transformed.replace(/^(import[^\n]*\n)+/m, '')
  const withoutExtraLeading = withoutOldImports.replace(/^\s+/, '')

  return `${veImports.join('\n')}\n\n${withoutExtraLeading}`
}

async function main() {
  const srcIndexSource = await readFile(SRC_INDEX, 'utf8')

  const importMap = new Map()
  for (const match of srcIndexSource.matchAll(importRegex)) {
    importMap.set(match[1], match[2])
  }

  const buttonRoutes = []
  for (const match of srcIndexSource.matchAll(routeRegex)) {
    const routePath = match[1]
    const componentSymbol = match[2].trim()
    if (!routePath.startsWith('/ui/buttons/')) continue
    const importPath = importMap.get(componentSymbol)
    if (!importPath) continue
    if (!importPath.startsWith('./components/ui/buttons/')) continue

    buttonRoutes.push({ routePath, componentSymbol, importPath })
  }

  const created = []
  for (const entry of buttonRoutes) {
    const srcFile = path.join(ROOT, 'src', `${entry.importPath}.tsx`)
    const relFromButtons = path.relative(SRC_BUTTONS_ROOT, srcFile)
    const targetFile = path.join(VE_BUTTONS_ROOT, relFromButtons)
    const targetDir = path.dirname(targetFile)

    await mkdir(targetDir, { recursive: true })

    const sourceComponent = await readFile(srcFile, 'utf8')
    const veComponent = transformSourceComponent(sourceComponent, targetFile)
    await writeFile(targetFile, veComponent)
    created.push(targetFile)
  }

  const veImports = [
    "/* @refresh reload */",
    '',
    "import { Route, Router } from '@solidjs/router'",
    "import { render } from '@solidjs/web'",
    "import Home from './components/HomePage'",
    "import ButtonsPage from './components/ui/ButtonsPage'",
  ]

  for (const entry of buttonRoutes) {
    const srcFile = path.join(ROOT, 'src', `${entry.importPath}.tsx`)
    const relFromButtons = path.relative(SRC_BUTTONS_ROOT, srcFile)
    const targetNoExt = path.join(VE_BUTTONS_ROOT, relFromButtons).replace(/\.tsx$/, '')
    const relImport = toRelativeImport(VE_INDEX, targetNoExt)
    veImports.push(`import ${entry.componentSymbol} from '${relImport}'`)
  }

  veImports.push("import './reset.css'")

  const routeLines = [
    '\t\t\t<Route path="/" component={Home} />',
    '\t\t\t<Route path="/ui/buttons" component={ButtonsPage} />',
  ]

  for (const entry of buttonRoutes) {
    routeLines.push(`\t\t\t<Route path="${entry.routePath}" component={${entry.componentSymbol}} />`)
  }

  const veIndexContent = `${veImports.join('\n')}\n\nrender(\n\t() => (\n\t\t<Router>\n${routeLines.join('\n')}\n\t\t</Router>\n\t),\n\tdocument.getElementById('root') ??\n\t\t(() => {\n\t\t\tthrow new Error('Root element not found')\n\t\t})(),\n)\n`

  await writeFile(VE_INDEX, veIndexContent)

  const buttonLinksContent = `export const buttonLinks = [\n${buttonRoutes
    .map((entry) => `\t{ href: '${entry.routePath}', label: '${routeToLabel(entry.routePath)}' },`)
    .join('\n')}\n] as const\n`

  await mkdir(path.dirname(VE_BUTTONS_LINKS_TS), { recursive: true })
  await writeFile(VE_BUTTONS_LINKS_TS, buttonLinksContent)

  const buttonsTsxContent = `import { For, type Component } from 'solid-js'\nimport DocLink from '../common/DocLink'\nimport { buttonLinks } from './buttons/buttonLinks'\n\nconst Buttons: Component = () => (\n\t<article class="my-3" id="buttons">\n\t\t<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">\n\t\t\t<h3>Buttons</h3>\n\t\t\t<DocLink href="/ui/buttons" />\n\t\t\t<For each={buttonLinks}>{(entry) => <DocLink href={entry.href}>{entry.label}</DocLink>}</For>\n\t\t</div>\n\t</article>\n)\n\nexport default Buttons\n`

  await writeFile(VE_BUTTONS_TSX, buttonsTsxContent)

  const buttonsPageTsxContent = `import type { Component } from 'solid-js'\nimport { body } from '../../themes/bootstrap/body.css'\nimport { containerFluid } from '../../themes/bootstrap/container.css'\nimport { bsTheme } from '../../themes/bootstrap/_vars.css'\nimport Buttons from './Buttons'\n\nconst ButtonsPage: Component = () => (\n\t<div class={\`\${bsTheme} \${body} \${containerFluid}\`}>\n\t\t<Buttons />\n\t</div>\n)\n\nexport default ButtonsPage\n`

  await writeFile(VE_BUTTONS_PAGE_TSX, buttonsPageTsxContent)

  console.log(`Generated ${created.length} VE button component files.`)
}

await main()
