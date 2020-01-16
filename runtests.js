import { spawnSync } from 'child_process'
import { statSync } from 'fs'

if (false
  || !directoryExists('node_modules')
  || !directoryExists('node_modules/pkg-exports')
  || !directoryExists('node_modules/pkg-mjs')
  || !directoryExists('node_modules/pkg-type-module')
) {
  console.log('One or more of the sub packages for the test are missing!')
  console.log('Please install them first. Just do npm run symlink-pkgs.')
  process.exit(1)
}

const results = { }

console.log('Running tests now:\n')

console.log('1. Package with "type": "module" in package.json\n')
runTest('test-type-module-withext.js')
runTest('test-type-module-extless.js')
runTest('test-type-module-iip-withext.js')
runTest('test-type-module-iip-extless.js')

console.log('2. Package with mjs files\n')
runTest('test-mjs-withext.js')
runTest('test-mjs-iip-extless.js')
runTest('test-mjs-iip-withext.js')
runTest('test-mjs-extless.js')

console.log('3. Package with "exports" field in package.json\n')
runTest('test-exports-withext.js')
runTest('test-exports-iip-extless.js')
runTest('test-exports-iip-withext.js')
runTest('test-exports-extless.js')

const testCount = Object.keys(results).length
const faileds = Object.entries(results)
  .filter(([ _, test ]) => test === 'fail')
  .map(([ file, _ ]) => file)
const killeds = Object.entries(results)
  .filter(([ _, test ]) => test === 'killed')
  .map(([ file, _ ]) => file)

console.log(testCount, 'test(s) ran,',
  testCount - faileds.length - killeds.length, 'test(s) successful')
if (faileds.length) console.log('Failed:', ...faileds)
if (killeds.length) console.log('Killed:', ...killeds)

function runTest(file) {
  const args = [
    "--no-warnings",
    "--experimental-specifier-resolution=node", 
    "tests/" + file,
  ]
  console.log('$', 'node', ...args)
  console.log('---')
  const result = spawnSync('node', args, { stdio: 'inherit' })
  console.log('---\n')
  const test = result.status !== 0 ? result.signal ? 'killed' : 'fail' : 'ok'

  results[file] = test
}

function directoryExists(path) {
  try { 
    return statSync(path).isDirectory()
  }
  catch (err) {
    if (err.code === 'ENOENT') return false
    throw err
  }
}
