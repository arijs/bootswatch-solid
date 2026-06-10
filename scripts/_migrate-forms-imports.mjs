import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

const UTILITY_NAMES = new Set(['mb3', 'row', 'rowCol', 'g3', 'colMd2', 'colMd3', 'colMd4', 'colMd5', 'colMd6', 'colSm6'])

const files = [
  've-project2/src/components/forms/disabled/DisabledCheckbox.tsx',
  've-project2/src/components/forms/disabled/DisabledFieldset.tsx',
  've-project2/src/components/forms/disabled/DisabledFileRange.tsx',
  've-project2/src/components/forms/disabled/DisabledRadioButtons.tsx',
  've-project2/src/components/forms/disabled/DisabledSwitchCheckbox.tsx',
  've-project2/src/components/forms/floating-labels/FloatingLabelsExample.tsx',
  've-project2/src/components/forms/input-group/CurrencyAddon.tsx',
  've-project2/src/components/forms/input-group/PrefixAddon.tsx',
  've-project2/src/components/forms/input-group/SuffixAddon.tsx',
  've-project2/src/components/forms/input-group/TextareaAddon.tsx',
  've-project2/src/components/forms/input-group/UrlAddon.tsx',
  've-project2/src/components/forms/overview/BasicForm.tsx',
  've-project2/src/components/forms/overview/Checkbox.tsx',
  've-project2/src/components/forms/overview/FileInput.tsx',
  've-project2/src/components/forms/overview/RadioButtons.tsx',
  've-project2/src/components/forms/overview/RangeInput.tsx',
  've-project2/src/components/forms/overview/SwitchCheckbox.tsx',
  've-project2/src/components/forms/sizing/LargeControls.tsx',
  've-project2/src/components/forms/sizing/SmallControls.tsx',
  've-project2/src/components/forms/validation/InvalidCheckboxes.tsx',
  've-project2/src/components/forms/validation/InvalidRadios.tsx',
  've-project2/src/components/forms/validation/InvalidStateZip.tsx',
  've-project2/src/components/forms/validation/InvalidUsernameCity.tsx',
  've-project2/src/components/forms/validation/ValidCheckboxes.tsx',
  've-project2/src/components/forms/validation/ValidNames.tsx',
  've-project2/src/components/forms/validation/ValidRadios.tsx',
]

for (const file of files) {
  let content = readFileSync(file, 'utf8')

  const formsImportRe = /import\s*\{([^}]+)\}\s*from\s*'([^']*forms\/contract\.css)'/
  const match = content.match(formsImportRe)
  if (!match) continue

  const allNames = match[1].split(',').map(n => n.trim()).filter(Boolean)
  const utilNames = allNames.filter(n => UTILITY_NAMES.has(n))
  const formNames = allNames.filter(n => !UTILITY_NAMES.has(n))

  if (utilNames.length === 0) continue

  const newFormsImport = formNames.length > 0
    ? `import {\n\t${formNames.join(',\n\t')},\n} from '${match[2]}'`
    : ''

  const utilsImportRe = /import\s*\{([^}]+)\}\s*from\s*'([^']*utilities\/contract\.css)'/
  const utilsMatch = content.match(utilsImportRe)

  let newContent = content

  if (utilsMatch) {
    const existingUtilNames = utilsMatch[1].split(',').map(n => n.trim()).filter(Boolean)
    const mergedNames = [...new Set([...existingUtilNames, ...utilNames])]
    const newUtilsImport = `import {\n\t${mergedNames.join(',\n\t')},\n} from '${utilsMatch[2]}'`
    newContent = newContent.replace(utilsMatch[0], newUtilsImport)
    newContent = newContent.replace(match[0], newFormsImport)
  } else {
    const dir = path.dirname(file)
    const relToSrc = path.relative(dir, 've-project2/src').split(path.sep).join('/')
    const utilsPath = `${relToSrc}/theme-contract/utilities/contract.css`
    const newUtilsImport = `import {\n\t${utilNames.join(',\n\t')},\n} from '${utilsPath}'`
    const replacement = newFormsImport ? `${newFormsImport}\n${newUtilsImport}` : newUtilsImport
    newContent = newContent.replace(match[0], replacement)
  }

  writeFileSync(file, newContent)
  console.log(`Updated: ${file} — moved: ${utilNames.join(', ')}`)
}
console.log('Done.')
