import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const localesDir = path.resolve(__dirname, '../src/locales')
const outputFile = path.resolve(__dirname, '../src/i18n/i18n-ns.ts')

if (!fs.existsSync(localesDir)) {
  console.error('src/locales 目录不存在！')
  process.exit(1)
}

const resources = {}

const namespaces = fs
  .readdirSync(localesDir)
  .filter((dir) => fs.statSync(path.join(localesDir, dir)).isDirectory())

namespaces.forEach((ns) => {
  const nsDir = path.join(localesDir, ns)
  const langFiles = fs
    .readdirSync(nsDir)
    .filter((file) => file.endsWith('.json'))

  langFiles.forEach((file) => {
    const lng = path.basename(file, '.json')
    if (!resources[lng]) resources[lng] = {}
    const filePath = path.join(nsDir, file)
    const content = fs.readFileSync(filePath, 'utf8')
    resources[lng][ns] = JSON.parse(content)
  })
})

const jsContent = `export default ${JSON.stringify(resources, null, 2)};`
fs.writeFileSync(outputFile, jsContent)

console.log(`语言: ${Object.keys(resources).join(', ')}`)
console.log(`命名空间: ${namespaces.join(', ')}`)
