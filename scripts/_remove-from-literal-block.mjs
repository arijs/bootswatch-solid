import { readFileSync, writeFileSync } from 'fs'

const TO_REMOVE = new Set([
  // forms contract
  'formCheck', 'formSwitch', 'formCheckInput', 'formCheckLabel',
  'formLabel', 'formText', 'formRange', 'formControl', 'formSelect',
  'formControlSm', 'formControlLg', 'formSelectSm', 'formSelectLg',
  'inputGroup', 'inputGroupText', 'wasValidated', 'isValid', 'isInvalid',
  'validFeedback', 'invalidFeedback', 'formFloating', 'hasValidation',
  // utilities contract
  'mb3', 'row', 'rowCol', 'g3', 'colMd2', 'colMd3', 'colMd5', 'colMd6', 'colSm6',
])

const file = 've-project2/src/themes/bootstrap/literal/styles.css.ts'
const content = readFileSync(file, 'utf8')
const lines = content.split('\n')

let removed = 0
const newLines = lines.filter(line => {
  // Match lines like "	name," (tab-indented name with trailing comma in import block)
  const m = line.match(/^\t(\w+),$/)
  if (m && TO_REMOVE.has(m[1])) {
    removed++
    return false
  }
  return true
})

writeFileSync(file, newLines.join('\n'))
console.log(`Removed ${removed} lines from literal block.`)
